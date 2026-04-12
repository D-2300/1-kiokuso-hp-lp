import { useEffect } from "react";
import { C } from "./tokens";
import MHero from "./components/MHero";
import MBridge from "./components/MBridge";
import MProblem from "./components/MProblem";
import MAgitate from "./components/MAgitate";
import MSolve from "./components/MSolve";
import MBeforeAfter from "./components/MBeforeAfter";
import MPrice from "./components/MPrice";
import MFlow from "./components/MFlow";
import MFAQ from "./components/MFAQ";
import MCTA from "./components/MCTA";
import MProfile from "./components/MProfile";
import MFooter from "./components/MFooter";
import MFloatingCTA from "./components/MFloatingCTA";
import MExitPopup from "./components/MExitPopup";
// 削除: MOneStop (Solveと重複), MLastPush (CTAで代替),
//       MContactForm (LINEに一本化)

export default function ManshitsuPage() {
  useEffect(() => {
    document.title = "アパート経営｜ボロ物件を儲かる物件に変える｜満室デザインLABO";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "宮城でアパート経営を始める方へ。みんなが狙わないボロ物件でも、内装次第で全然勝負できます。改修費と利回り改善を無料診断。物件探し×リフォーム×バーチャルステージングの一気通貫サポート。"
      );
    }
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Noto Sans JP', sans-serif",
        backgroundColor: C.warmWhite,
        maxWidth: "720px",
        margin: "0 auto",
        paddingBottom: "64px",
      }}
    >
      {/* 1. Hero: 非公開物件+利回り改善で即答 */}
      <MHero />
      {/* 2. Problem: 儲かる物件がない */}
      <MBridge text="──こんなこと、思っていませんか。" />
      <MProblem />
      {/* 3. Reframe: ボロ物件=チャンス（コスト構造の可視化） */}
      <MBridge text="でも、考え方を変えてみてください。" />
      <MAgitate />
      {/* 4. Solution: 内装のプロだから出せる改修診断 */}
      <MBridge text="内装のプロだから、分かることがあります。" />
      <MSolve />
      {/* 5. Before/After: 改修事例 */}
      <MBridge text="実際に、こうなりました。" />
      <MBeforeAfter />
      {/* 6. Price: 改修費の目安 */}
      <MBridge text="料金は、すべて明記します。" />
      <MPrice />
      {/* 7. Flow: LINE→物件情報→診断 */}
      <MBridge text="ご相談は、これだけです。" />
      <MFlow />
      {/* 8. FAQ */}
      <MBridge text="不安、ありますよね。" />
      <MFAQ />
      {/* 9. Team + CTA */}
      <MProfile />
      <MCTA />
      <MFooter />
      <MFloatingCTA />
      <MExitPopup />
    </div>
  );
}
