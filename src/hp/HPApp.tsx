import { Routes, Route } from "react-router-dom";
import GroupTop from "./pages/GroupTop";
import GroupAbout from "./pages/GroupAbout";
import StudioTop from "./pages/StudioTop";
import StudioAbout from "./pages/StudioAbout";
import StudioWorks from "./pages/StudioWorks";
import StudioPricing from "./pages/StudioPricing";
import ComingSoon from "./pages/ComingSoon";
import { colors } from "../shared/design-tokens";

export default function HPApp() {
  return (
    <Routes>
      <Route path="/" element={<GroupTop />} />
      <Route path="/about" element={<GroupAbout />} />
      <Route path="/studio" element={<StudioTop />} />
      <Route path="/studio/about" element={<StudioAbout />} />
      <Route path="/studio/works" element={<StudioWorks />} />
      <Route path="/studio/pricing" element={<StudioPricing />} />
      <Route
        path="/koumuten"
        element={
          <ComingSoon
            name="KOUMUTEN"
            nameJa="記憶荘 工務店"
            subtitle="大規模リノベーション・再生"
            tagline={"場所の記憶を引き継ぎ、\n新しい物語として再生する。"}
            taglineSub="使われなくなった建物を、もう一度人が集まる場所に。準備中です。"
            themeColor={colors.urushicha.main}
            themeLight={colors.urushicha.light}
            themeMid={colors.urushicha.mid}
            themeBg={colors.urushicha.bg}
            themeDark={colors.urushicha.dark}
            heroBg="#D5CEC6"
            photoBg1="#D5CEC6"
            photoBg2="#CFC7BD"
            photoCaption="忘れられた場所に、もう一度光を入れる。"
            heroImg="/images/koumuten-hero.webp"
            photo1="/images/koumuten-hands.webp"
            photo2="/images/hp-hallway-light.webp"
          />
        }
      />
      <Route
        path="/reform"
        element={
          <ComingSoon
            name="REFORM LABO"
            nameJa="記憶荘 住宅リフォームLABO"
            subtitle="住宅の部分リフォーム"
            tagline={"暮らしの中の「ここだけ変えたい」に、\nちょうどいい手を入れる。"}
            taglineSub="住まいの「ここだけ変えたい」に応える、小さなリフォーム。準備中です。"
            themeColor={colors.seiji.main}
            themeLight={colors.seiji.light}
            themeMid={colors.seiji.mid}
            themeBg={colors.seiji.bg}
            themeDark={colors.seiji.dark}
            heroBg="#CDD6DA"
            photoBg1="#C5CED2"
            photoBg2="#BDC7CC"
            photoCaption="思い出のある家を、これからも住み続ける家に。"
            heroImg="/images/reform-hero.webp"
            photo1="/images/reform-keys.webp"
            photo2="/images/hp-wood-warm.webp"
          />
        }
      />
      <Route
        path="/fudousan"
        element={
          <ComingSoon
            name="FUDOUSAN"
            nameJa="記憶荘 不動産"
            subtitle="不動産仲介"
            tagline={"想いを受け継ぐ場所を、\nつなぐ。"}
            taglineSub="場所と人をつなぐ、不動産仲介。準備中です。"
            themeColor={colors.tetsukon.main}
            themeLight={colors.tetsukon.light}
            themeMid={colors.tetsukon.mid}
            themeBg={colors.tetsukon.bg}
            themeDark={colors.tetsukon.dark}
            heroBg="#C8CAD0"
            photoBg1="#C0C3CA"
            photoBg2="#B8BBC2"
            photoCaption="場所と人を、つなぐ仕事。"
            heroImg="/images/fudousan-hero.webp"
            photo1="/images/fudousan-keys.webp"
            photo2="/images/hp-hallway-garden.webp"
          />
        }
      />
    </Routes>
  );
}
