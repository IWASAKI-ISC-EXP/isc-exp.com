import { describe, it, expect } from "vitest"
import { existsSync } from "node:fs"
import { join } from "node:path"
import { achievementsByYear, formatAchievementId } from "./achievements"

function getAllAchievements() {
    return achievementsByYear.flatMap((yearGroup) => yearGroup.achievements)
}

describe("achievements データの整合性", () => {
    it("id が6桁で年度グループと連番ルールに一致している", () => {
        for (const yearGroup of achievementsByYear) {
            yearGroup.achievements.forEach((achievement, index) => {
                const expectedId = formatAchievementId(yearGroup.year, index + 1)

                expect(String(achievement.id), `id=${achievement.id}`).toHaveLength(6)
                expect(achievement.id, `id=${achievement.id}`).toBe(expectedId)
                expect(
                    String(achievement.id).startsWith(yearGroup.year),
                    `id=${achievement.id} が year=${yearGroup.year} と一致しない`
                ).toBe(true)
            })
        }
    })

    it("imageSrcがpublic配下の実ファイルを指している", () => {
        const achievements = getAllAchievements()
        for (const achievement of achievements) {
            if (!achievement.imageSrc) continue

            const relativePath = achievement.imageSrc.replace(/^\//, "")
            const absolutePath = join(process.cwd(), "public", relativePath)
            expect(
                existsSync(absolutePath),
                `画像が見つかりません： id = ${achievement.id}, path = ${achievement.imageSrc}`,
            ).toBe(true)
        }
    })

    it("必須項目（日付・タイトル・説明）が空ではない", () => {
        const achievements = getAllAchievements()

        for (const achievement of achievements) {
            expect(achievement.date.trim(), `id = ${achievement.id} dateが空`).not.toBe("")
            expect(achievement.title.trim(), `id = ${achievement.id} titleが空`).not.toBe("")
            expect(
                achievement.description.trim(),
                `id = ${achievement.id} descriptionが空`
            ).not.toBe("")
        }
    })

    it("idが重複していない", () => {
        const achievements = getAllAchievements()
        const ids = achievements.map((a) => a.id)
        const uniqueIds = new Set(ids)

        expect(uniqueIds.size, `重複 id あり： ${ids.length - uniqueIds.size}件`).toBe(ids.length)
    })
})
