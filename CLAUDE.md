# 記憶荘（Kiokuso）LP/HP プロジェクト

## 概要
仙台市の店舗内装工事会社「記憶荘」のLP（ランディングページ）とHP（ホームページ）。
リポジトリ: kiokuso-hp-lp（GitHub）
本番: https://kiokuso.jp（Netlify自動デプロイ）

## 事業コンセプト
- キャッチコピー:「内装工事の相場、まず知ってください。営業は、しません。」
- ターゲット: 初めて店舗を持つオーナー（飲食店・美容室・サロンなど）、予算に不安がある人
- 強み: 居抜き活用・DIY対応・施主支給OK、コスパ重視、価格の透明性
- CTAはLINE友だち追加のみ（他のCTAは使わない）
- LINE公式: lin.ee/HVV0QJO

## 技術スタック
- React + TypeScript + Vite + Tailwind CSS + React Router

## デプロイ
- mainブランチにpushでNetlify自動デプロイ
- 本番URL: https://kiokuso.jp

## 画像ルール（重要）
- ヒーロー画像以外は全て `-sm.webp`（480px幅）を直接参照する。srcSetは使わない
- 新しい画像追加時: `node scripts/resize-images.mjs 新画像.webp` で-sm版を生成
- コンポーネントで参照: `src="/images/filename-sm.webp"`
- ヒーロー画像（lp-hero.webp, group-hero-sakura.webp）のみオリジナル維持
- 一括生成: `node scripts/resize-images.mjs`（sharp依存、480px幅、WebP quality 80）
- ロゴ・アイコン（480px以下）はそのまま原本を参照

## テナントLP 物件セクション方針（重要・2026-04-10確立）
`src/lp/tenant/TenantHero.tsx` 内の「現在ご紹介可能な物件」セクションについて：
- **絶対に物件カードに個別のクリック/ホバー/アコーディオン等のインタラクションを追加しない**。過去にClarityで「詳細を見る」ボタンが全タップの47%を占めて全てデッドクリックだった問題の根本原因だった
- 物件は8件を1つの枠（.property-bundle）で囲い「束」として見せる。枠の下に矢印ブリッジ → LINE CTA（「物件資料をLINEで受け取る」）を**1つだけ**配置する構造
- 物件行は `cursor: default`、`role="listitem"`、タップしても何も起きないのが正しい挙動
- 家賃は `filter: blur(5px)` でぼかしたまま（LINE登録誘因）
- 「他にも X 件あります」の X は `Math.floor(Math.random() * 21) + 30`（30〜50 のランダム値）。`allProperties.length - selected.length` を使うと毎回きっかり99や100になり嘘くさくなる
- セクションのカラーテーマは **白基調**：背景 `linear-gradient(180deg, #f5f2ec 0%, #faf7f2 50%, #fff 100%)`、枠は `#fff` + `#e0d8cc` ボーダー、パルスドットはゴールド `#d4a85c`、強調テキストは緑 `#5a7a4a`、CTA は LINE グリーン `#06C755`
- ヒーロー下部のプレビューヒント pill（「現在 8件〜」）は 2026-04-10 に削除済み。再追加しない
- 関連: `src/lp/tenant/TenantAvailableNow.tsx` は dead code（どこからも import されていない旧スタンドアロン版）

## デザイン方針
- 温かさ・希望・未来方向のエネルギーを表現する（「奇妙」「恐ろしい」は NG）
- 写真主役。Before→After写真、値段、こだわりポイントを先に見せる
- 気軽さ・敷居の低さを重視（高級感は出さない）
- 参考: エムトラスト（mtrust-obr.com）のLP構造、きなり（kinari.life）の温かさ
- 反面教師: 過度に西洋的・舶来イメージに寄せない

## 運用チャネル
- Google広告（検索広告、アカウント: 183-797-5158）
- LINE公式アカウント（メインCV）
- GTM / GA4 / Microsoft Clarity でアクセス解析

## 現状（2026-04-10時点）
- 2026-03-31に初の実コンバージョン達成（沼田さん、LINE登録+虎ノ巻DL）
- 4月初旬時点: 過去7日 678表示 / 59クリック / CTR 8.7% / CPC ¥327
- KPI目標: 4月は2,100表示→210CL→LINE登録5件、CPC ¥350以内
- 2026-04-10: テナントLP物件セクションのデッドクリック率37%問題を根本解消（個別クリック全廃 → 束表示化 + 1つの統合CTA）。数日後にClarityで効果測定予定
- 2026-04-10: 同セクションを白基調に色反転、更新日パルスドットをゴールド化、「他にも X 件」を30〜50ランダム固定化（本番反映後のフィードバック対応）

## 作業ルール
- 変更を行ったら必ず CHANGELOG.md に記録すること
- [Code] または [Cowork] のタグで、どちらのツールで作業したか明記
- コミットメッセージは日本語OK
- 不明点があれば確認してから作業する（勝手に大きな構造変更をしない）
