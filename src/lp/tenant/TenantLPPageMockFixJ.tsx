import TenantHeroPropertyFirstJ from "./TenantHeroPropertyFirstJ";
import TenantBeforeAfterCTA from "./TenantBeforeAfterCTA";
import TenantMailForm from "./TenantMailForm";
import TenantProfilesMini from "./TenantProfilesMini";
import TenantBottomCTA from "./TenantBottomCTA";
import TenantFooter from "./TenantFooter";
import LPFloatingLine from "../components/LPFloatingLine";

/**
 * /mock/tenant-fix-j — 物件カード・タップ→LINE誘導モーダル版
 *
 * I からの差分（4/29 ヒートマップ分析を受けて）:
 *   - 物件カード/「他にも●件あります」が <button> 化、タップで LINEモーダル起動
 *   - I版で 88タップ中87タップが「LP内のデッドクリック相当要素」へ流れていた問題への対処
 *   - ピル要素は span のまま（cursor: default + pointer-events: none で誤クリック誘発を抑制）
 *
 * 期待効果: アウトバウンドクリック率 1.23% → 5%以上（最低ライン）
 *           理想は V2前水準 12.18% への復帰
 */
export default function TenantLPPageMockFixJ() {
  return (
    <div style={{ fontFamily: "'Noto Sans JP', sans-serif", color: "#333", background: "#fff" }}>
      <TenantHeroPropertyFirstJ />
      <TenantBeforeAfterCTA />
      <TenantMailForm />
      <TenantProfilesMini />
      <TenantBottomCTA />
      <TenantFooter />
      <LPFloatingLine label="非公開テナントをチェック" />
    </div>
  );
}
