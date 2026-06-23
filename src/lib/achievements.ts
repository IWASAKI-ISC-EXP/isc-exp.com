export interface Achievement {
  /** 6桁ID: 年度4桁 + 連番2桁（例: 202501） */
  id: number
  date: string
  title: string
  material: string
  description: string
  imageSrc?: string
}

export interface YearGroup {
  year: string
  achievements: Achievement[]
}

/** 年度 + 連番から6桁IDを生成（例: formatAchievementId("2025", 1) → 202501） */
export function formatAchievementId(year: string, sequence: number): number {
  return Number(`${year}${String(sequence).padStart(2, "0")}`)
}

export const achievementsByYear: YearGroup[] = [
  {
    year: "2025",
    achievements: [
      {
        id: 202501,
        date: "2025年8月1日",
        title: "チャレンジスクール",
        material: "KOOV",
        description:
          "情報科学専門学校を会場にし、学生が1対1で一緒に進めるプログラミング教室を開催しました！",
        imageSrc: "/images/achievements/2025/20250801.jpg",
      },
      {
        id: 202502,
        date: "2025年8月5日",
        title: "アドベンチャーカレッジKOOV Day1",
        material: "KOOV",
        description:
          "情報科学専門学校を会場にし、夏休みの小学生を対象に夏休みの自由研究に使えるプログラミング教室を開催しました！",
        imageSrc: "/images/achievements/2025/20250805.jpg",
      },
      {
        id: 202503,
        date: "2025年8月6日",
        title: "アドベンチャーカレッジKOOV Day2",
        material: "KOOV",
        description:
          "情報科学専門学校を会場にし、夏休みの小学生を対象に夏休みの自由研究に使えるプログラミング教室を開催しました！",
        imageSrc: "/images/achievements/2025/20250806.JPG",
      },
      {
        id: 202504,
        date: "2025年8月7日",
        title: "アドベンチャーカレッジMESH Day1",
        material: "MESH",
        description:
          "情報科学専門学校を会場にし、夏休みの小学生を対象に夏休みの自由研究に使えるプログラミング教室を開催しました！",
        imageSrc: "/images/achievements/2025/20250807.jpg",
      },
      {
        id: 202505,
        date: "2025年8月8日",
        title: "アドベンチャーカレッジMESH Day2",
        material: "MESH",
        description:
          "情報科学専門学校を会場にし、夏休みの小学生を対象に夏休みの自由研究に使えるプログラミング教室を開催しました！",
        imageSrc: "/images/achievements/2025/20250808.JPG",
      },
      {
        id: 202506,
        date: "2025年9月1日",
        title: "平沼小学校 月6スタディ",
        material: "Blockly Games",
        description:
          "平沼小学校でタブレットのみでビジュアルプログラミングが可能なBlockly Gamesを使用してプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/20250901.jpg",
      },
      {
        id: 202507,
        date: "2025年11月3日",
        title: "中山まつり",
        material: "embot",
        description:
          "ダンボールで出来たロボットを使用してプログラミング教室を実施しました！",
        imageSrc: "/images/achievements/2025/20251103.PNG",
      },
      {
        id: 202508,
        date: "2025年11月4日",
        title: "別所小学校 5年",
        material: "mBot2",
        description:
          "mBot2と言うロボットとパソコンを使用してライントレースのプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 202509,
        date: "2025年11月5日",
        title: "別所小学校 5年",
        material: "mBot2",
        description:
          "mBot2と言うロボットとパソコンを使用してライントレースのプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 202510,
        date: "2025年11月7日",
        title: "別所小学校 5年",
        material: "mBot2",
        description:
          "mBot2と言うロボットとパソコンを使用してライントレースのプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 202511,
        date: "2025年11月10日",
        title: "平沼小学校 月6スタディ",
        material: "mBot2",
        description:
          "mBot2と言うロボットとパソコンを使用してライントレースのプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/20251110.jpg",
      },
      {
        id: 202512,
        date: "2025年11月21日",
        title: "別所小学校 3年",
        material: "mBot",
        description:
          "mBotとタブレットを使用してロボットのプログラミングをする授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 202513,
        date: "2025年11月26日",
        title: "別所小学校 3年",
        material: "mBot",
        description:
          "mBotとタブレットを使用してロボットのプログラミングをする授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 202514,
        date: "2025年11月27日",
        title: "別所小学校 4年",
        material: "mBot",
        description:
          "mBotとタブレットを使用してロボットのプログラミングをする授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 202515,
        date: "2025年12月4日",
        title: "別所小学校 4年",
        material: "mBot",
        description:
          "mBotとタブレットを使用してロボットのプログラミングをする授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 202516,
        date: "2025年12月6日",
        title: "平沼フェスティバル",
        material: "Blockly Games",
        description:
          "タブレットのみでビジュアルプログラミングが可能なBlockly Gamesを使用してプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/20251206.jpg",
      },
      {
        id: 202517,
        date: "2025年12月18日",
        title: "子安小学校 5年",
        material: "mBot2",
        description:
          "mBot2と言うロボットとパソコンを使用してライントレースのプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 202518,
        date: "2026年1月13日",
        title: "子安小学校 5年",
        material: "mBot2",
        description:
          "mBot2と言うロボットとパソコンを使用してライントレースのプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 202519,
        date: "2026年1月14日",
        title: "子安小学校 5年",
        material: "mBot2",
        description:
          "mBot2と言うロボットとパソコンを使用してライントレースのプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 202520,
        date: "2026年1月15日",
        title: "子安小学校 5年",
        material: "mBot2",
        description:
          "mBot2と言うロボットとパソコンを使用してライントレースのプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 202521,
        date: "2026年1月16日",
        title: "子安小学校 5年",
        material: "mBot2",
        description:
          "mBot2と言うロボットとパソコンを使用してライントレースのプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 202522,
        date: "2026年1月17日",
        title: "コメット はまみらいみんなフォーラム",
        material: "mBot",
        description:
          "mBotとタブレットを使用してロボットのプログラミングをする授業を行いました！",
        imageSrc: "/images/achievements/2025/20260117.jpg",
      },
      {
        id: 202523,
        date: "2026年1月19日",
        title: "平沼小学校 月6スタディ",
        material: "Tello",
        description:
          "平沼小学校で、タブレットを使用してドローンをプログラミングで飛ばす授業を行いました！",
        imageSrc: "/images/achievements/2025/20260119.JPG",
      },
      {
        id: 202524,
        date: "2026年1月26日",
        title: "子安小学校 5年",
        material: "mBot2",
        description:
          "mBot2と言うロボットとパソコンを使用してライントレースのプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 202525,
        date: "2026年1月31日",
        title: "YOXOフェスティバル",
        material: "embot",
        description:
          "ダンボールで出来たロボットを使用してプログラミング教室を実施しました！",
        imageSrc: "/images/achievements/2025/20260131.jpg",
      },
      {
        id: 202526,
        date: "2026年2月2日",
        title: "子安小学校 4年",
        material: "mBot",
        description:
          "mBotとタブレットを使用してロボットのプログラミングをする授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 202527,
        date: "2026年2月3日",
        title: "子安小学校 4年",
        material: "mBot",
        description:
          "mBotとタブレットを使用してロボットのプログラミングをする授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 202528,
        date: "2026年2月4日",
        title: "子安小学校 4年",
        material: "mBot",
        description:
          "mBotとタブレットを使用してロボットのプログラミングをする授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 202529,
        date: "2026年2月5日",
        title: "子安小学校 3年",
        material: "mBot",
        description:
          "mBotとタブレットを使用してロボットのプログラミングをする授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 202530,
        date: "2026年2月6日",
        title: "子安小学校 3年",
        material: "mBot",
        description:
          "mBotとタブレットを使用してロボットのプログラミングをする授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 202531,
        date: "2026年2月10日",
        title: "子安小学校 3年",
        material: "mBot",
        description:
          "mBotとタブレットを使用してロボットのプログラミングをする授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 202532,
        date: "2026年2月13日",
        title: "子安小学校 3年",
        material: "mBot",
        description:
          "mBotとタブレットを使用してロボットのプログラミングをする授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 202533,
        date: "2026年2月17日",
        title: "子安小学校 6年",
        material: "mBot2",
        description:
          "mBot2と言うロボットとパソコンを使用してライントレースのプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 202534,
        date: "2026年2月20日",
        title: "子安小学校 6年",
        material: "mBot2",
        description:
          "mBot2と言うロボットとパソコンを使用してライントレースのプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 202535,
        date: "2026年2月24日",
        title: "子安小学校 6年",
        material: "mBot2",
        description:
          "mBot2と言うロボットとパソコンを使用してライントレースのプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 202536,
        date: "2026年2月25日",
        title: "子安小学校 6年",
        material: "mBot2",
        description:
          "mBot2と言うロボットとパソコンを使用してライントレースのプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 202537,
        date: "2026年2月26日",
        title: "子安小学校 6年",
        material: "mBot2",
        description:
          "mBot2と言うロボットとパソコンを使用してライントレースのプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 202538,
        date: "2026年3月23日",
        title: "川上小学校 5年",
        material: "mBot",
        description:
          "mBotとタブレットを使用してロボットのプログラミングをする授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
      {
        id: 202539,
        date: "2026年3月24日",
        title: "川上小学校 5年",
        material: "mBot",
        description:
          "mBotとタブレットを使用してロボットのプログラミングをする授業を行いました！",
        imageSrc: "/images/achievements/2025/comet2025.jpg",
      },
    ],
  },
  {
    year: "2024",
    achievements: [
      {
        id: 202401,
        date: "2024年4月23日",
        title: "岩崎学園 キッズプログラミング",
        material: "フォロ",
        description:
          "放課後児童クラブにて、子どもたちと一緒に楽しくプログラミングに取り組みました！",
        imageSrc: "/images/achievements/2024/20240423.png",
      },
      {
        id: 202402,
        date: "2024年5月31日",
        title: "高田中学校 プログラミング教室",
        material: "フォロ",
        description:
          "高田中学校のパソコン部のみなさんにフォロを使ったプログラミング授業を実施しました！",
        imageSrc: "/images/achievements/2024/20240531.JPG",
      },
      {
        id: 202403,
        date: "2024年6月3日",
        title: "平沼小学校 月6スタディ",
        material: "フォロ",
        description:
          "平沼小学校でフォロを使用したプログラミング授業を実施しました！",
        imageSrc: "/images/achievements/2024/20240603.png",
      },
      {
        id: 202404,
        date: "2024年6月10日",
        title: "高田中学校 パソコン部支援",
        material: "なし",
        description:
          "高田中学校のパソコン部のみなさんと、Scratchや寿司打を使いながら、楽しくパソコンに触れる機会づくりを実施しました！",
        imageSrc: "/images/achievements/2024/20240610.jpg",
      },
      {
        id: 202405,
        date: "2024年7月1日",
        title: "平沼小学校 月6スタディ",
        material: "フォロ",
        description:
          "平沼小学校でフォロを使用したプログラミング授業を実施しました！",
        imageSrc: "/images/achievements/2024/20240701.jpg",
      },
      {
        id: 202406,
        date: "2024年8月8日",
        title: "チャレンジスクール",
        material: "KOOV",
        description:
          "情報科学専門学校を会場に、学生が1対1でサポートしながら進めるプログラミング教室を開催しました！",
        imageSrc: "/images/achievements/2024/20240808.JPG",
      },
      {
        id: 202407,
        date: "2024年9月3日",
        title: "緑園学園 表現未来デザイン科",
        material: "スクラッチ",
        description:
          "緑園学園でScratchを使用したプログラミング授業を実施しました！",
        imageSrc: "/images/achievements/2024/20240903.JPG",
      },
      {
        id: 202408,
        date: "2024年9月10日",
        title: "緑園学園 表現未来デザイン科",
        material: "CodePen",
        description:
          "緑園学園でWeb上のJavaScriptを書けるアプリを使ったプログラミング授業を実施しました！",
        imageSrc: "/images/achievements/2024/20240910.JPG",
      },
      {
        id: 202409,
        date: "2024年9月22日",
        title: "ロボフェスタ",
        material: "KOOV",
        description:
          "青少年センターで、KOOVを使用したプログラミングワークショップを開催しました！",
        imageSrc: "/images/achievements/2024/20240922.JPG",
      },
      {
        id: 202410,
        date: "2024年9月30日",
        title: "高田中学校 プログラミング教室",
        material: "mBot2",
        description:
          "高田中学校のパソコン部のみなさんにmBot2を使用したライントレースに挑戦するプログラミング授業を実施しました！",
        imageSrc: "/images/achievements/2024/20240930.jpg",
      },
      {
        id: 202411,
        date: "2024年10月21日",
        title: "平沼小学校 月6スタディ",
        material: "mBot2",
        description:
          "平沼小学校でmBot2を使用したライントレースに挑戦するプログラミング授業を実施しました！",
        imageSrc: "/images/achievements/2024/20241021.jpg",
      },
      {
        id: 202412,
        date: "2024年11月11日",
        title: "平沼小学校 月6スタディ",
        material: "mBot2",
        description:
          "平沼小学校でmBot2を使用したライントレースに挑戦するプログラミング授業を実施しました！",
        imageSrc: "/images/achievements/2024/20241111.jpg",
      },
      {
        id: 202413,
        date: "2024年12月2日",
        title: "平沼小学校 月6スタディ ドローン",
        material: "Tello",
        description:
          "平沼小学校でドローンを使用したプログラミング授業を実施しました！",
        imageSrc: "/images/achievements/2024/20241202.jpg",
      },
      {
        id: 202414,
        date: "2024年12月14日",
        title: "平沼フェスティバル",
        material: "プロゼミ",
        description:
          "平沼小学校でタブレットのみでビジュアルプログラミングが可能なプロゼミを使用したプログラミング授業を実施しました！",
        imageSrc: "/images/achievements/2024/20241214.JPG",
      },
      {
        id: 202415,
        date: "2025年1月18日",
        title: "三菱鉛筆 o-i STUDIOワークショップ",
        material: "embot",
        description:
          "大井町にあるo-i STUDIOで、embotを使用したプログラミングワークショップを開催しました！",
        imageSrc: "/images/achievements/2024/20250118.JPG",
      },
      {
        id: 202416,
        date: "2025年1月25日",
        title: "YOXOフェスティバル",
        material: "embot",
        description:
          "みなとみらいで行われたYOXOフェスティバルにて、embotを使用したプログラミングワークショップを開催しました！",
        imageSrc: "/images/achievements/2024/20250125.JPG",
      },
      {
        id: 202417,
        date: "2025年2月3日",
        title: "平沼小学校 月6スタディ",
        material: "Tello",
        description:
          "平沼小学校でドローンを使用したプログラミング授業を実施しました！",
        imageSrc: "/images/achievements/2024/20250203.JPG",
      },
    ],
  },
  {
    year: "2023",
    achievements: [
      {
        id: 202301,
        date: "2023年5月2日",
        title: "高田中学校 パソコン部支援",
        material: "なし",
        description:
          "高田中学校パソコン部の皆さんと、Scratchや寿司打を使いながら、楽しくパソコンに触れる機会づくりを行いました！",
        imageSrc: "/images/achievements/2023/20230502.jpg",
      },
      {
        id: 202302,
        date: "2023年6月17日",
        title: "東芝未来科学館 ifLink プログラミング教室",
        material: "embot",
        description:
          "ifLinkと共同で、IoTデバイスを使ったプログラミング教室を開催しました！",
        imageSrc: "/images/achievements/2023/20230617.png",
      },
      {
        id: 202303,
        date: "2023年7月3日",
        title: "平沼小学校 月6スタディ",
        material: "Blockly Games",
        description:
          "タブレットで操作できる「Blockly Games」を使い、楽しくビジュアルプログラミングに挑戦しました！",
        imageSrc: "/images/achievements/2023/20230703.png",
      },
      {
        id: 202304,
        date: "2023年7月24日",
        title: "高田中学校 プログラミング教室",
        material: "mBot2",
        description:
          "mBot2とパソコンを使い、ライントレースに挑戦するプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2023/20230724.jpg",
      },
      {
        id: 202305,
        date: "2023年8月15日",
        title: "チャレンジスクール",
        material: "mBot2",
        description:
          "情報科学専門学校を会場に、学生が1対1でサポートしながら進めるプログラミング教室を開催しました！",
        imageSrc: "/images/achievements/2023/20230815.png",
      },
      {
        id: 202306,
        date: "2023年8月24日",
        title: "高田中学校 ドローンプログラミング教室",
        material: "ドローン",
        description:
          "高田中学校パソコン部にて、ドローンを使ったプログラミング教室を行いました！",
        imageSrc: "/images/achievements/2023/20230824.png",
      },
      {
        id: 202307,
        date: "2023年8月26日",
        title: "親子プログラミング教室",
        material: "mBot2",
        description:
          "本校にて、ロボットを使った親子向けプログラミング教室を開催しました！",
        imageSrc: "/images/achievements/2023/20230826.png",
      },
      {
        id: 202308,
        date: "2023年9月14日",
        title: "岩崎学園 キッズプログラミング",
        material: "embot",
        description:
          "放課後児童クラブにて、子どもたちと一緒に楽しくプログラミングに取り組みました！",
        imageSrc: "/images/achievements/2023/20230914.png",
      },
      {
        id: 202309,
        date: "2023年9月15日",
        title: "別所小学校 プログラミング授業",
        material: "mBot",
        description:
          "別所小学校にて、ロボットを使ったプログラミング授業を行いました！",
        imageSrc: "/images/achievements/2023/20230915.png",
      },
      {
        id: 202310,
        date: "2023年10月2日",
        title: "平沼小学校 月6スタディ",
        material: "フォロ",
        description:
          "平沼小学校にて、ロボットを使ったプログラミング教室を行いました！",
        imageSrc: "/images/achievements/2023/20231002.png",
      },
      {
        id: 202311,
        date: "2023年10月7日",
        title: "鶴屋町 ワークショップ",
        material: "embot",
        description:
          "鶴屋町のイベントにて、ダンボールロボット「embot」を使ったワークショップを開催しました！",
        imageSrc: "/images/achievements/2023/20231007.jpg",
      },
      {
        id: 202312,
        date: "2023年11月6日",
        title: "平沼小学校 月6スタディ",
        material: "フォロ",
        description:
          "平沼小学校にて、ロボットを使ったプログラミング教室を行いました！",
        imageSrc: "/images/achievements/2023/20231106.png",
      },
    ],
  },
]
