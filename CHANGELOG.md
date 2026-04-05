# CHANGELOG - 記憶荘プロジェクト

Claude Code / Claude Cowork間の作業同期用ログ。
変更を行ったら必ずここに追記してください。
タグ: [Code] = Claude Code、[Cowork] = Claude Cowork

---

## 2026-04-05
### テナントLP 情報設計リニューアル＆タイポ統一
- [Code] 情報設計を WHY（集まる理由）と MERIT（公平評価）に分離
  - TenantNetworkInfo 新設: 6つの情報源（酒屋・不動産・工事業者・商業施設・過去客・地域）をハブ型インフォグラフィックで可視化、KAI+KEN＋記憶荘ロゴをハブ中心に配置
  - TenantFairEval 新設: 一般仲介 vs 記憶荘のVSカード（ダーク×ゴールド）＋収益モデル1行フロー。旧 TenantReasons / TenantComparison を置き換え
  - TenantSteps 新設: LINEまでの3ステップ、Step1を緑反転で強調、匿名OK・無料バッジで不安除去
- [Code] TenantHero: KAI/KEN Duoを撤去してコンパクト化、HeroBand と自然につなげる
- [Code] TenantGuideSection: 本＋見出しを横並び化、損失リストをシンプル箇条書きに圧縮
- [Code] セクション背景を暗↔白↔ベージュで交互配色、境界を視覚的に明確化
- [Code] 全セクションの eyebrow(10px/0.28em/#C9A84C) と h2(clamp(17px,3.4vw,22px)/#1a1f14) を統一
- [Code] TenantBeforeAfterCTA: rem→px統一、事例カードの padding/文字を圧縮
- [Code] TenantProfiles: カードpadding・アバター・gap を詰めて縦方向を短縮
- [Code] FairEval 内の KAI プロフィールカードを削除し、TenantProfiles に一本化（KAI 重複紹介の解消）

## 2026-04-04（午後）
### 内装LP 虎の巻中心構成にリニューアル
- [Code] LPHero: ダーク背景(#1a1f14)の損失回避型に全面書き換え
  - ヘッドライン「知らないだけで内装費の15〜30%、余計に払っています。」
  - サブコピー: 中間マージン・不要解体・追加料金の構造
  - KEN & KAI Duoプロフィール配置（テナントHeroと同構成）
  - CTA「LINEで無料ガイドを受け取る」
- [Code] LPGuideSection（新規）: 内装見積もりの虎の巻を主役にしたセクション
  - 虎の巻カバー画像(toranomaki-cover-sm.webp)配置
  - 「知らないとこうなります」損失5項目（赤✕+金額）:
    - 中間マージン15〜25% / 不要な解体費 数十万円 / 什器新品 30万円〜 / 保健所追加工事 20万円〜 / 追加料金 数十万円
  - ダークCTAボックス「工事してから知らなかったでは、もう取り戻せません」
- [Code] LPMidCTA（書き換え）: 「無料ガイド+個別アドバイス」LINE CTA
- [Code] LPBottomCTA（新規）: KAI&KEN写真+「知らないまま工事して、損してからでは遅い」
- [Code] LPPage構成変更:
  - 新構成: Hero → GuideSection → BeforeAfterSlider → WhyPrice → SolutionPoints → MidCTA → Flow → FAQ → BottomCTA → ContactForm → Footer
  - 撤去: PainPoints, CommonIssues, Support, PriceGuide, LastPush, FinalCTA, CaseDetail, Profile
  - 事例はBeforeAfterSliderのチラ見せ+LINE CTAに統一（詳細はLINEワークスへ誘導）
- [Code] ページタイトル変更:「仙台の店舗内装工事｜内装費で損しないための無料ガイド」
- デプロイ済み: commit f24ee68

---

## 2026-04-04（午前）
### PDF リードマグネット v4（損失回避リニューアル）
- [Code] PDF A（内装見積もりの虎の巻）v4: テイザー構造に全面改修
  - P3に損失回避フックページ追加（「15〜30%余計に払っている」）
  - Ch1-3はフル内容（信頼構築）、Ch4-8はテイザー化（consult_hook/teaser_box で相談誘導）
  - P13「相談で知れること」7項目（金額ベース）新設、P14 CTA損失回避フレーミング
  - 全14ページ（旧13ページから増）
- [Code] PDF B（不動産屋攻略ガイド）: 損失回避フレーミング強化
  - 表紙・P3・P12・P13 CTA全て「知らないと損する」表現に変更
  - P12項目を金額ベースに（フリーレント40万円、敷金80万円削減 等）
- PDF URL: https://kiokuso.jp/images/toranomaki-naiso-cost.pdf / toranomaki-fudousan-guide.pdf

### テナントLP 損失回避リニューアル
- [Code] TenantHero: ヘッドライン「知らないだけで数十万〜数百万円、損してます。」に変更
- [Code] TenantGuideSection（新規）: 不動産攻略ガイドPDFを主役にしたセクション
  - 本の透明背景画像配置、「知らないとこうなります」損失5項目（太字+赤金額表示）
  - ダークCTAボックス「契約してから知らなかったでは、もう取り戻せません」
- [Code] TenantBeforeAfterCTA: スライダー+事例のみに簡素化（ガイドCTAは新セクションに移動）
- [Code] TenantMidCTA / TenantBottomCTA: 「無料ガイド」「損してからでは遅い」表現に統一
- [Code] ページタイトル変更:「物件契約で損しないための無料ガイド」

### LINEリッチメニュー
- [Code] リッチメニュー画像生成（2500x1686px、6パネル）: richmenu.png
  - 構成: チャットで相談 / 内装の虎の巻(緑) / 不動産攻略ガイド(ワイン赤) / 施工事例 / HPを見る / 物件を探す
  - アクション: B→内装PDF / C→不動産PDF / D→works / E→studio / F→/lp/tenant/
- リッチメニュー画像URL: https://kiokuso.jp/images/richmenu.png

### その他
- [Code] 不動産攻略ガイド本の透明背景画像追加（guide-fudousan-book-sm.webp）
- [Code] PDF生成スクリプト更新: create_pdf_a_v2.py / create_pdf_b.py（kiokusoルート）
- [Code] リッチメニュー画像生成スクリプト: create_richmenu.py（kiokusoルート）
- デプロイ済み: commit 8ad8bc2

## 2026-04-02
- [Code] 記事システム構築: データ層(src/data/articles.ts)、一覧ページ(/studio/articles)、詳細ページ(/studio/articles/:slug)
- [Code] ギャラリーカルーセル(GalleryCarousel)・記事カード(ArticleCard)コンポーネント追加
- [Code] CROSSOVER施工事例を記事データとして移植（初期サンプル）
- [Code] StudioNavに「Articles」リンク追加（PC・モバイル両対応）
- [Code] prerender.mjsに記事ルート追加
- [Code] 記事5本追加: 坪単価全公開(seo)、DIY×プロ分業(column)、カフェ開業費用(seo)、スケルトンvs居抜き(column)、内装工事の失敗例(column)

## 2026-04-01
- [Code] CLAUDE.md / CHANGELOG.md を作成（プロジェクト初期設定）
- [Code] CROSSOVER事例ページの英語見出し・タイムラインのfont-weightをmedium(500)に統一

## 2026-03-31
- [Cowork] CROSSOVER事例ページ作成・ピックアップ記事セクション追加
- [Cowork] レスポンシブ対応修正・文章修正
- [Cowork] 除外KW分析・リフォームKW2つ追加・検索語句レポート分析
- 初の実コンバージョン達成（沼田さん、LINE登録+虎ノ巻DL）
