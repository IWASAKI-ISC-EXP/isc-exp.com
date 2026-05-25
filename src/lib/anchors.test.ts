import { describe, it, expect } from "vitest"

/**
 * ページ内セクションの id（各 Section コンポーネントの id="..." と一致させる）
 */
const pageSectionIds = ["about", "activities", "achievements", "join"] as const

/**
 * Header / Footer の href（実装と同じ内容に保つ）
 * ※ Header.tsx / Footer.tsx を変えたら、ここも直す
 */
const internalNavHrefs = [
    "#about",
    "#activities",
    "#achievements",
    "#join",
] as const

describe("ページ内アンカー", () => {
    it("ナビの href が 存在する section id を指している", () => {
        for (const href of internalNavHrefs) {
            const targetId = href.replace("#", "")
            expect(
                pageSectionIds,
                `存在しない id へリンク： ${href}`
            ).toContain(targetId)
            
        }
    })

    it("主要セクション id が全てナビから辿れる", () => {
        //逆方向チェック: セクションがあるのにナビにない、も検出
        for (const id of pageSectionIds) {
            expect(
                internalNavHrefs,
                `ナビから辿れないセクション： ${id}`
            ).toContain(`#${id}`)
        }
    })
})