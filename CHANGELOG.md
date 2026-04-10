# CHANGELOG - 記憶荘プロジェクト

Claude Code / Claude Cowork間の作業同期用ログ。
変更を行ったら必ずここに追記してください。
タグ: [Code] = Claude Code、[Cowork] = Claude Cowork

---

## 2026-04-10（CLAUDE.md 更新）
### テナントLP 物件セクション方針を CLAUDE.md に明文化
- [Code] **CLAUDE.md に「テナントLP 物件セクション方針（重要・2026-04-10確立）」セクションを追加**：将来のセッションがデッドクリックを再導入しないよう、以下の方針を明文化
  - 物件カードに個別インタラクションを絶対に追加しない（過去のデッドクリック原因）
  - 束表示（.property-bundle）+ 統合CTA1つの構造を維持
  - 「他にも X 件」は 30〜50 ランダム固定
  - 白基調カラーテーマ（背景・枠・パルスドットゴールド・CTAグリーン）
  - ヒーロー下プレビューヒントは削除済み・再追加しない
  - TenantAvailableNow.tsx は dead code と明記
- [Code] **現状セクションを 2026-04-01 → 2026-04-10 に更新**：デッドクリック解消と微調整対応の2件を追記

---

## 2026-04-10（追加修正・本番反映後のフィードバック対応）
### テナントLP 物件セクション微調整 — 色反転・ゴールドドット・件数ランダム化
- [Code] **ヒーローのプレビューヒント削除**：「現在 8件 の非公開物件をご紹介可能です」pillを廃止し、サブコピー直下に詰めて表示。ヒーローがスッキリ
- [Code] **更新日のパルスドットをゴールドに変更**：`#7a9b6a`（緑）→ `#d4a85c`（ゴールド）。ヒーロー緑の反復を避け、上品なアクセントに
- [Code] **物件セクション全体を白基調に色反転**：
  - section 背景 `#111` ダーク → `linear-gradient(180deg, #f5f2ec 0%, #faf7f2 50%, #fff 100%)` ウォーム白
  - arrow-down 背景 `#111` → `#f5f2ec`、▼ 色 `#333` → `#b8a890`
  - .property-bundle 背景 `#191b1c` → `#fff`、border `#333` → `#e0d8cc`、subtle shadow追加
  - bundle-header 背景 `#1e2022` → `#faf7f2`、ラベル色 `#888` → `#8a7a6a`、件数 `#7a9b6a` → `#5a7a4a`
  - prop-row border-bottom `#222` → `#ece6dc`、エリア `#e8e0d6` → `#2a2a2a`、タグ bg `rgba(255,255,255,.04)` → `#f4efe6`、家賃 `#ccc` → `#555`
  - タイプバッジ: 居抜き `#5c4a2e` → `#8a6a3e`、スケルトン `#2e4a5c` → `#3e6a8a`（明るめに調整）
  - bundle-footer 背景 `#1a1c1d` → `#faf7f2`、鍵アイコン+テキスト `#555` → `#8a7a6a`、件数強調 `#a0c090` → `#5a7a4a`
  - flow-arrow-line グラデ上端 `#333` → `#d8d0c4`、フローラベル `#a0b090` → `#5a7a4a`、サブ `#777` → `#8a7a6a`、注記 `#555` → `#a09080`
  - CTAグリーン `#06C755` は変更なし（ブランドカラー）
- [Code] **「他にも X 件あります」の X をランダム 30〜50 に変更**：`allProperties.length - selected.length` 使用時は毎回きっかり99や100になり嘘くさかったため、`Math.floor(Math.random() * 21) + 30` で state に固定
- 本番（kiokuso.jp）ユーザーフィードバック: ヒーロー緑ドットが多い / 物件リストが暗い / 残り件数が不自然 の3点を解消

---

## 2026-04-10
### テナントLP 物件セクション改修 — 1カラム束表示 + 「詳細を見る」廃止
- [Code] **TenantHero.tsx 物件セクション全面再設計（v7b プロトタイプ準拠）**：物件カード個別のクリック/ホバーインタラクションを全廃し、8件の物件を1つの枠（.property-bundle）で囲んだ「非公開 物件リスト」として束表示。枠下に矢印ブリッジ+LINE CTA（「物件資料をLINEで受け取る」）を1つだけ配置。前回のアコーディオン案（2026-04-09）を上書き
- [Code] **廃止した要素**：行の `cursor: pointer` / hover時の scale / 「詳細を見る」オーバーレイ / 行個別クリックイベント / アコーディオンパネル / `colorMap` / 照合中フリッカー演出 / `property_detail_click` / `line_cta_click(property_accordion)` イベント
- [Code] **ヒーロー下部にプレビューヒント追加**：丸型pill「現在 8件 の非公開物件をご紹介可能です」（ドット pulse 2s、件数は selected.length から動的注入）
- [Code] **新構造**：枠ヘッダー（ラベル+件数）→ prop-row × 8（タイプバッジ/エリア/タグ/家賃blur(5px)のコンパクト1行、role="listitem"）→ 枠フッター（🔒 非公開ラベル+「他にも X 件あります」フェードイン）→ 縦線+矢印頭→「この情報が欲しい方は」→ LINE CTA → 「無料・匿名OK・営業なし」→ 「※ 物件情報は随時入れ替わります」
- [Code] **アニメーション**：`tenantHeroPulse`（ドット）と `tenantHeroArrowBounce`（▼）のみ。行は opacity+translateY(8px) フェードインを 80ms ずつスタッガー、完了後「他にも X 件」の数字をフェード表示。旧 `rowSlideIn` / `availablePulse` keyframe は廃止
- [Code] GTMイベント `line_cta_click(tenant_hero_bundle)` に変更。既存の `line_cta_click(hero)` は廃止

---

## 2026-04-09
### テナントLP デッドクリック修正 — 物件カード「詳細を見る」アコーディオン化
- [Code] **TenantHero.tsx / TenantAvailableNow.tsx**: 物件行タップ/クリックでLINE登録パネルをインラインスライドダウン展開するアコーディオン機能を追加。デッドクリック率37%（「詳細を見る」が全タップ47%を占め全てデッドクリック）の直接原因を解消。パネルは1つだけ同時展開、グリーン系グラデ背景、LINE CTAボタン付き。GTMイベント `property_detail_click` / `line_cta_click(property_accordion)` 追加。TenantHero（実際にページで使用中）とTenantAvailableNow（スタンドアロン版）の両方に実装

---

## 2026-04-08
### テナントLP 案A+C — Hero統合 & セクション構成大幅見直し
- [Code] **TenantHero.tsx 全面リライト**：H1を「お店の成功は、物件選びから始まっている。」に変更（伴走・パートナーシップ訴求）。サブコピー「内装をつくる側だから、この物件で成功できるかから一緒に考えられます。物件探しから、伴走します。」。物件チラ見せ（AVAILABLE NOW）をHero内に統合 — 14件プールから6件ランダム表示、ルーレット演出、blur家賃、カラーライン7色、ページロード時にアニメーション自動発火。CTAもHero内に配置
- [Code] **TenantYourSide.tsx 新規作成（YOUR SIDE）**：Hero直後の2段目。3つの問いかけカード（集客・第一印象・交渉）をインラインSVGイラスト付きで表示。結論ブリッジ「物件をつくる側だから」のAha!メッセージ、無料相談バッジ
- [Code] **TenantLPPage.tsx 構成変更**：Hero(物件リスト統合) → YourSide → Steps → Guide → BA → FairEval → Profiles → FAQ → CTA。HeroBand・NetworkInfo・旧AvailableNow(独立版)を削除
- [Code] **TenantSteps.tsx**：id="tenant-steps" 追加（YOUR SIDEからのアンカーリンク用）
- 背景: Clarity録画分析で「興味はあるがLINE登録せず離脱」するユーザー層の取り込みを狙う施策。CVR 7.9% → 10%+ 目標

---

## 2026-04-06
### テナントLP大幅改修 & サイト全体フォントサイズ拡大
- [Code] **テナントLPヒーローにインフォグラフィック追加**：LINE追加→希望を伝える→物件情報GETの3ステップをAI生成イラスト付きで表示。ユーザーが瞬間的にサービスの流れを理解できるように
- [Code] **CTA整理**：MidCTAセクション削除、Stepsセクション内CTA削除（計2箇所削減）。残りのCTA文言を各セクションの文脈に合わせて調整（BottomCTA→「LINEで気軽に相談してみる」）
- [Code] **ヒーローCTA文言変更**：「LINEで物件情報を受け取る」→「無料で物件情報を受け取る」、サブバッジを目立つピル型に変更（匿名OK / 営業なし / LINE追加するだけ）
- [Code] **ガイドセクションレイアウト改善**：横並び→縦積みに変更、書籍画像を大幅拡大（130px→220px max）
- [Code] **ネットワークセクション拡大**：KAI/KENアバター48→60px、ロゴハブ80→96px、情報ソースカード全体拡大
- [Code] **フローティングバー文言変更**：LPFloatingLineにlabel propを追加、テナントLPでは「無料で物件情報を受け取る」を表示
- [Code] **サイト全体フォントサイズ拡大**：テナントLP全コンポーネント、koji LP（9ファイル）、manshitsu（18ファイル）、HP（18ファイル）のフォントサイズを業界標準に合わせて引き上げ。見出し+2〜4px、本文+1〜2px、小テキスト最低11px以上に統一

---

## 2026-04-05（深夜・追加4）
### /lp/koji/ Flow 削除 & FAQ に「詳細見積もり有料」Q 追加
**背景**：Flow セクションは Step 0（LINE相談）以外が全て LINE 登録後の情報で、LP の CV ポイント（LINE登録）には貢献していなかった。さらに Diagnosis に既に STEP1→2→3 のフロー図があるため、「登録後の流れ」のアウトラインは可視化済み。唯一 Flow にしかなかった重要情報（詳細見積もり 3〜6万円の有料性）を FAQ に移植。

- [Code] KojiFlow セクションを KojiLPPage から削除、KojiFlow.tsx ファイルも削除
- [Code] KojiFAQ に「詳細見積もりは有料ですか？」Q を新規追加（3番目に配置）。回答で「LINE相談と概算は無料、詳細見積もりは3〜6万円、相見積もり・融資審査にも使える品質、見てから断ってもOK、作成済みの見積書はお手元に残る」を明記
- セクション数 11→10、総高 9093px→**8266px**（約 -830px 追加削減）
- 背景リズム：暗→ベージュ→白→ベージュ→白→ベージュ→暗→白→暗（連続なし、クリーンに接続）

## 2026-04-05（深夜・追加3）
### /lp/koji/ 個人名→職能化 & PriceTable 削除
- [Code] **KojiDiagnosis の個人名を職能ベースに変更**：「KENが査定」→「職人が査定」、ヘッダー「大工歴20年の KEN が、こう判定します」→「大工歴20年の職人が、こう判定します」。Phase 2 層（業者選定中の店舗オーナー）に対して「一人親方の小規模業者」感を回避し、スタジオとしての信頼感を出す方向。KEN/KAI のデュオプロフィールは Hero 下部で顔出しとして残す
- [Code] **KojiPriceTable セクションを完全削除**：PriceSamples と役割重複（業態×坪数の比較表）、Phase 2 層は汎用データより個別回答を求める、Phase 3 層は月 25-30 クリックと薄く 1 セクション用意する合理性が低い、という判断。セクション数 12→11、総高 9405px→9093px（約 -300px）
- [Code] KojiPriceTable.tsx ファイルも削除（孤立ファイル化）
- 新背景リズム：暗→ベージュ→白→ベージュ→白→ベージュ→暗→ベージュ→白→暗（連続なし）

## 2026-04-05（深夜・追加2）
### /lp/koji/ Hero 金額強調 + COMMON WORRIES に"OUR ANSWER"数字ブロック追加 + 全体縦圧縮
**背景**：ヒーロー直下の COMMON WORRIES は LP で最も見られる位置なのに「不安を並べただけで答えがない」構造だった。テナントLP のセンターピンが「数字が通っている」ことに倣い、ここで先に衝撃数字の答えを投下する。

- [Code] **KojiHero 金額強調**：カフェ10坪/居酒屋15坪/美容室12坪 の3行を縦並び→3列gridに変更。金額フォントを clamp(12-14px)→clamp(20-28px)/fontWeight 800 に拡大してヒーローの主役に
- [Code] **KojiHero 縦圧縮**：minHeight 80vh→72vh、padding 52/36→44/28、各要素 margin を詰めて 1 画面内収まりを改善
- [Code] **KojiPainPoints 構造刷新 — "不安→答え" 2段構成**：
  - 上段：4つの不安を 2×2 コンパクトカード化（テキストも簡潔に）
  - 下段：**OUR ANSWER** ダーク背景ブロックに衝撃の 4 数字カード
    - **-60%** 一般相場からの平均削減率（実例3件の平均）
    - **256万** 一件あたり平均削減額
    - **32項目** 見積もりを一行ずつ公開
    - **2営業日** LINE で写真から明細までお返し
  - これにより「COMMON WORRIES に答えがない」問題を解消
- [Code] **全体縦圧縮**：EstimateCompare/PriceSamples/Diagnosis/WhyPrice/PriceTable/Flow/FAQ/BottomCTA の各セクション padding を 44-48px → 36px に統一、内部 gap/margin も詰めた

## 2026-04-05（深夜・追加）
### /lp/koji/ に 4 つのインフォグラフィックを追加 — テナントLPの強みを横展開
テナントLP成功要因（情報の構造を図解で一目瞭然にする）を Koji LP にも導入。テキスト密度を下げ、視覚的理解密度を上げる方向。

- [Code] **① マージン構造図（KojiWhyPrice 内）**：左「一般ルート 300万 → -45万(ポータル) → -30万(設計事務所) → -60万(元請け) → -30万(解体) → 135万」vs 右「記憶荘ルート 80万 → 直接契約 → 一社完結 → 居抜き最大活用 → 施主支給・DIY → 80万」を並列表示。「同じ300万払っても手元に残る工事品質が違う」を可視化
- [Code] **② 一式 vs 明細 比較図（KojiEstimateCompare 新設セクション）**：左に一般業者の"一式"4行見積もり(350万)＋❓3つ、右に記憶荘の32項目明細のうち5行(220万)＋✓3つを対比。PainPoints→PriceSamples の橋渡し役
- [Code] **③ 積み上げバー（KojiPriceSamples 内）**：CASE 01 の 220万削減内訳 5 レバーを横棒比率で可視化（20% / 27% / 25% / 14% / 14%）。居抜き活用が最大レバーであることを視覚的に提示。各内訳行にカラーチップでバーと対応
- [Code] **④ 写真→査定→返信フロー図（KojiDiagnosis 先頭）**：📱Step1 写真を送る(2分) → 🔍Step2 KEN が査定(大工歴20年) → 📝Step3 明細が届く(2営業日) の 3 ステップパイプラインを可視化
- [Code] KojiLPPage に KojiEstimateCompare を組み込み、背景色リズムを再調整：Hero(暗)→PainPoints(ベージュ)→EstimateCompare(白)→PriceSamples(ベージュ)→Diagnosis(白)→BeforeAfter(ベージュ)→WhyPrice(暗)→PriceTable(白)→Flow(ベージュ)→FAQ(白)→BottomCTA(暗)
- [Code] セクション数 11 → 12、型チェック通過、全図解をモバイルスクショで動作検証済み

## 2026-04-05（深夜）
### /lp/koji/ 新設 — Phase 2（工事業者探し層）特化LP
**背景**：旧 /lp/ は全キーワードで CVR 0%（唯一の CV 6件は身内クリックのノイズで参照不可）。テナントLP が 4/2 以降に急伸した成功要因（非公開物件という情報非対称性＋明確な交換レート）を Phase 2 層（物件が見えてきて業者選定中）向けに転用。

**新LPの構成（11セクション・暗↔白↔ベージュ）**：
1. KojiHero（暗）— h1「店舗内装の"本当の金額"を、一行ずつの明細でお渡しします」。ヒーロー内に実費例3行（カフェ10坪80万/居酒屋15坪250万/美容室12坪150万）
2. KojiPainPoints（白）— Phase 2 の4つの不安（"一式"問題・ネット坪単価の曖昧さ・追加請求リスク・居抜き判定）
3. KojiPriceSamples（ベージュ）★**センターピン** — 実費明細3例。CASE 01（カフェ10坪）のみ内訳完全公開、CASE 02/03 は LINE 登録で取得する設計
4. KojiDiagnosis（白）— 居抜き/スケルトン写真診断（◆残せる / ×壊すべき / ▲追加注意）
5. LPBeforeAfterSlider（ベージュ・既存再利用）
6. KojiWhyPrice（暗）— 3つの理由（中間マージンゼロ / 居抜き活用 / 一社完結）
7. KojiPriceTable（白）— 業態別実例×一般相場の比較8行
8. KojiFlow（ベージュ）— Step 0「LINE相談・写真を送る」を明示
9. KojiFAQ（白）— Phase 2 向けに並び替え（写真で見積れるか / 相見積もりOKか を先頭2問に）
10. KojiBottomCTA（暗）— 安心バッジ群＋虎の巻おまけ言及
11. LPContactForm（既存再利用）

**URL・ルーティング変更**：
- [Code] `/lp/koji/` を新設（KojiLPPage.tsx）
- [Code] `/lp` → `/lp/koji/` の 301 リダイレクトを `public/_redirects` と `AppRoutes.tsx` 両方で設定
- [Code] `prerender.mjs` から `/lp` を削除し `/lp/koji` を追加
- [Code] 旧 LPPage.tsx + LPHero/LPGuideSection/LPWhyPrice/LPSolutionPoints/LPMidCTA/LPFlow/LPFAQ/LPBottomCTA の 9 ファイルを削除（Koji側で置き換え済み）
- [Code] 再利用：LPNav / LPBeforeAfterSlider / LPContactForm / LPFooter / LPFloatingLine（そのまま流用）

**Phase戦略の整理**：
- Phase 1（物件探し層）→ /lp/tenant/（稼働中・成功）
- Phase 2+3（工事業者探し + 費用調査層）→ /lp/koji/（新設）
- 広告グループは 2 本構造に集約（詳細は別メモ）

## 2026-04-05（夜・追加2）
### 店舗内装LP 全体の縦方向圧縮
- [Code] LPBeforeAfterSlider: padding 48→40、section内 margin 28→20 / 40→28、teaser CTA の padding 28→22 に
- [Code] LPWhyPrice: padding 48→40、card padding 18/20→14/18、gap 12→10、末尾 marginTop 28→20
- [Code] LPSolutionPoints: padding 48/52→40/40、gap 36→28、table セル padding 12→10、カルーセル画像高 180→150、カード内 padding 18→14
- [Code] LPMidCTA: padding 44→32、ボタン padding 16/36→14/32
- [Code] LPFlow: padding 48/52→40/40、番号円 40→32、step 内 padding 16→12、アイコン間 marginTop 14→12
- [Code] LPFAQ: padding 48/52→40/40、h2 marginBottom 28→20、各項目 padding 18→14
- [Code] LPBottomCTA: padding 64→44/48、画像 maxHeight 280→220、margin 32→22、バッジ group margin 24→18、CTA button padding 16/36→14/32
- 総高 ≈ 8700px → ≈ 8318px（約 -380px、-4%）。Point 01 / FAQ / BottomCTA の各セクションが 1 画面に収まりやすくなった

## 2026-04-05（夜・追加）
### LPGuideSection 縦方向圧縮 — テナントLP の GuideSection パターンに統一
- [Code] 虎の巻本画像＋見出しを横並びレイアウトに変更（本画像を中央の大型表示から 90-130px サイドに）
- [Code] 損失リストを 5 枚の大きな白カードから、ベージュボックス内の詰めた1行×5 箇条書きに圧縮（金額列は情報整理のため省略）
- [Code] CTA ボックスの padding/文字サイズを縮小、「工事してから知らなかったでは〜」の長い見出しを「これだけでも、受け取ってください。」に置換
- [Code] セクション padding を 48/44 → 44/36 に圧縮

## 2026-04-05（夜）
### 店舗内装LP（/lp/）リニューアル — テナントLP方針を横展開
- [Code] セクション背景を暗↔白↔ベージュの交互配色に矯正（BeforeAfter/MidCTA/FAQ をベージュに、WhyPrice をダーク反転）、白連続を完全に解消
- [Code] 全セクションの eyebrow を 10px/600/0.28em/#C9A84C、h2 を clamp(17px,3.4vw,22px)/700/#1a1f14/line-height 1.55 に統一（rem→px 統一も含む）
- [Code] LPGuideSection: 赤 #cc3333 を撤去し、損失リストをダーク×ゴールド基調に置換。Guide カード背景もブランドベージュ+細ボーダーに
- [Code] LPWhyPrice をダーク反転、番号バッジをゴールド化、カードは rgba(255,255,255,0.04)+ゴールドボーダー。末尾の「でも、不安はありますよね。」重複文言を削除
- [Code] LPSolutionPoints 冒頭h2「だから、この価格でつくれます」を「業態別の実例と相場の比較」に変更し、LPWhyPrice との主張重複を解消。Point 01/02/03 の eyebrow もラベル統一
- [Code] LPHero: minHeight 100vh→80vh、maxHeight 900→820px に圧縮
- [Code] LPBottomCTA に安心バッジ群（🔒匿名OK / 💰無料 / 🚫営業なし / ⏰あなたのペース）と「"なんとなく聞いてみようかな" で大丈夫です。」語りかけコピーを追加
- [Code] LPFlow / LPFAQ / LPMidCTA / LPBeforeAfterSlider / LPContactForm のタイポ・色・padding をブランド基準に統一

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
