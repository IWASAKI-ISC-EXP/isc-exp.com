import { describe, it, expect } from "vitest"

/**
 * 外部URL一覧（コードベースと揃える）
 * Hero / Footer / Join から拾ったもの
 */

const externalLinks = [
    {
        label: "参加フォーム(Hero)",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSfbu8boYAmLhtGPb_Vl5UfaFyK0NLAfGgzICisvck9sDwVGiQ/viewform?usp=sharing&ouid=102421748208923207087",
    },
    {
        label: "Instagram(Footer)",
        href: "https://www.instagram.com/isc_exp.circle",
    },
    {
        label: "GitHub(Footer)",
        href: "https://github.com/IWASAKI-ISC-EXP",
    },
    {
        label: "Instagram(Join)",
        href: "https://www.instagram.com/isc_exp.circle",
    }
] as const

function isReachableStatus(status: number) {
    return (status >= 200 && status < 400) || [401, 403, 405, 429].includes(status)
}

describe("外部リンク (形式)", () => {
    it("URL形式が正しい", () => {
        for (const link of externalLinks) {
            expect(() => new URL(link.href)).not.toThrow()
            expect(link.href.startsWith("https://")).toBe(true)
        }
    })
})

describe.skipIf(!process.env.RUN_LIVE_LINK_TESTS)("外部リンク（到達確認）", () => {
    it("URL に到達できる（HEAD失敗時はGETで再試行）", async () => {
        for (const link of externalLinks) {
            const headResponse = await fetch(link.href, {
                method: "HEAD",
                redirect: "follow",
                signal: AbortSignal.timeout(10_000),
            })

            if (isReachableStatus(headResponse.status)) continue

            // Some services reject HEAD (401/403/405). Fall back to GET reachability.
            const getResponse = await fetch(link.href, {
                method: "GET",
                redirect: "follow",
                signal: AbortSignal.timeout(10_000),
            })

            expect(
                isReachableStatus(getResponse.status),
                `${link.label} が到達不可: ${link.href} (HEAD=${headResponse.status}, GET=${getResponse.status})`
            ).toBe(true)
        }
    }, 30_000)
})
