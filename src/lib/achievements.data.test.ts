import { describe, it, expect } from "vitest"
import { existsSync } from "node:fs"
import { join } from "node:path"
import { achievementsByYear } from "./achievements"

function getAllAchievements() {
    return achievementsByYear.flatMap((yearGroup) => yearGroup.achievements)
}

describe("achievements データの整合制", () => {
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

        for (const achivement of achievements) {
            expect(achivement.date.trim(), `id = ${achivement.id} dateが空`).not.toBe("")
            expect(achivement.title.trim(), `id = ${achivement.id} titleが空`).not.toBe("")
            expect(achivement.description.trim(),
                `id = ${achivement.id} descriptionが空`
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