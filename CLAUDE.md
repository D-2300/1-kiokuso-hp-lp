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

## 現状（2026-04-01時点）
- 2026-03-31に初の実コンバージョン達成（沼田さん、LINE登録+虎ノ巻DL）
- 過去7日: 678表示 / 59クリック / CTR 8.7% / CPC ¥327
- KPI目標: 4月は2,100表示→210CL→LINE登録5件、CPC ¥350以内

## 作業ルール
- 変更を行ったら必ず CHANGELOG.md に記録すること
- [Code] または [Cowork] のタグで、どちらのツールで作業したか明記
- コミットメッセージは日本語OK
- 不明点があれば確認してから作業する（勝手に大きな構造変更をしない）
