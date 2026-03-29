import { Routes, Route } from "react-router-dom";
import GroupTop from "./pages/GroupTop";
import GroupAbout from "./pages/GroupAbout";
import StudioTop from "./pages/StudioTop";
import StudioAbout from "./pages/StudioAbout";
import StudioWorks from "./pages/StudioWorks";
import StudioPricing from "./pages/StudioPricing";
import ComingSoon from "./pages/ComingSoon";
import Privacy from "./pages/Privacy";
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
      <Route path="/privacy" element={<Privacy />} />
      <Route
        path="/koumuten"
        element={
          <ComingSoon
            name="KIOKUSO"
            nameLine2="BUILD"
            nameJa="記憶荘工務店"
            subtitle="大規模リノベーション・再生"
            tagline="場所の記憶を引き継ぎ、新しい物語として再生する。"
            taglineSub="使われなくなった建物を、もう一度人が集まる場所に。準備中です。"
            concept={`使われなくなった建物には、誰かがそこで過ごした時間が残っています。\n壊して更地にするのではなく、その記憶ごと引き受けて、\n新しい役割を与える。それが記憶荘工務店の仕事です。\n\n廃墟や空き家の大規模リノベーション。\n構造から見直し、もう一度人が集まる場所に仕立て直す。`}
            vision={{
              text: `使われなくなった建物には、まだ物語の続きがある。\n\n廃墟や空き家をただ壊すのではなく、\n構造を活かし、記憶を残しながら、\n新しい役割を与える大規模リノベーション。\n\n前の持ち主が大切にしていた時間を引き継ぎ、\n次の使い手に届ける。\nそれが記憶荘工務店の仕事です。`,
              image: "/assets/textures/old-new-timber-junction.webp",
              caption: "古い建物の記憶を、次の物語へ。",
            }}
            themeColor={colors.urushicha.main}
            themeLight={colors.urushicha.light}
            themeMid={colors.urushicha.mid}
            themeBg={colors.urushicha.bg}
            themeDark={colors.urushicha.dark}
            heroBg="#D5CEC6"
            heroImg="/assets/textures/koumuten-hero.webp"
            textureBand1="/assets/textures/rusted-steel-cracked.webp"
            carouselImages={[
              "/assets/textures/rusted-steel-cracked.webp",
              "/assets/textures/mortar-wall-cracks.webp",
              "/assets/textures/peeling-paint-layers.webp",
              "/assets/textures/reclaimed-wood-section.webp",
              "/assets/textures/rusted-steel-plates.webp",
              "/assets/textures/yakisugi-charred-wood.webp",
              "/assets/textures/earthen-wall-layers.webp",
            ]}
            carouselCaption="素材の記憶を、読み解く。"
            logoEntity="koumuten"
            logoTo="/koumuten"
          />
        }
      />
      <Route
        path="/reform"
        element={
          <ComingSoon
            name="KIOKUSO"
            nameLine2="REFORM"
            nameJa="記憶荘リフォーム"
            subtitle="住宅の部分リフォーム"
            tagline="暮らしの中の「ここだけ変えたい」に、ちょうどいい手を入れる。"
            taglineSub="住まいの「ここだけ変えたい」に応える、小さなリフォーム。準備中です。"
            concept={`大規模なリフォームではなく、\nキッチン、洗面台、壁紙、床。\n暮らしの中で気になっている「ここだけ」に手を入れる。\n\n毎日使う場所だからこそ、小さな変化が大きな違いになる。\n記憶荘リフォーム工房は、住まいの部分改修を手がけます。`}
            vision={{
              text: `家全体を変える必要はない。\n\nキッチンだけ。洗面台だけ。壁紙だけ。\n暮らしの中の「ここだけ気になる」に、\nちょうどいい手を入れる。\n\n大きな工事ではないからこそ、\n丁寧に、オーナーの暮らしに寄り添いながら。`,
              image: "/assets/textures/shikkui-plaster-wide.webp",
              caption: "暮らしに、ちょうどいい手を。",
            }}
            themeColor={colors.seiji.main}
            themeLight={colors.seiji.light}
            themeMid={colors.seiji.mid}
            themeBg={colors.seiji.bg}
            themeDark={colors.seiji.dark}
            heroBg="#CDD6DA"
            heroImg="/assets/textures/reform-hero.webp"
            textureBand1="/assets/textures/shoji-light-shadow.webp"
            carouselImages={[
              "/assets/textures/shoji-light-shadow.webp",
              "/assets/textures/tatami-weave-side.webp",
              "/assets/textures/shikkui-plaster-wide.webp",
              "/assets/textures/oak-hardwood-floor.webp",
              "/assets/textures/shikkui-plaster-closeup.webp",
              "/assets/textures/tatami-weave-front.webp",
              "/assets/textures/tile-water-droplets-warm.webp",
            ]}
            carouselCaption="毎日触れる素材を、丁寧に選ぶ。"
            logoEntity="reform"
            logoTo="/reform"
          />
        }
      />
      <Route
        path="/fudousan"
        element={
          <ComingSoon
            name="KIOKUSO"
            nameLine2="ESTATE"
            nameJa="記憶荘不動産"
            subtitle="不動産仲介"
            tagline="継ぐべき場所を、見つけ出す。"
            taglineSub="場所と人をつなぐ、不動産の仲介。準備中です。"
            concept={`場所には、それぞれの物語があります。\nその物語を次の人につなぐのが、記憶荘不動産の役割です。\n\n物件を「スペック」ではなく「可能性」として見る。\n工務店やスタジオと連携し、\n「この場所で何ができるか」まで一緒に考える不動産仲介。`}
            vision={{
              text: `いい場所は、待っているだけでは見つからない。\n\n記憶荘が内装工事を通じて出会ってきた\n空き物件、居抜き物件、使われなくなった建物。\nその中から、次の使い手にふさわしい場所を見つけ出す。\n\n不動産仲介という形で、\n場所と人をつなぐ。`,
              image: "/assets/textures/brass-patina.webp",
              caption: "場所と人を、つなぐ。",
            }}
            themeColor={colors.tetsukon.main}
            themeLight={colors.tetsukon.light}
            themeMid={colors.tetsukon.mid}
            themeBg={colors.tetsukon.bg}
            themeDark={colors.tetsukon.dark}
            heroBg="#C8CAD0"
            heroImg="/assets/textures/fudousan-hero.webp"
            textureBand1="/assets/textures/mortar-wall-cracks.webp"
            carouselImages={[
              "/assets/textures/brass-patina.webp",
              "/assets/textures/ceramic-tile-blue-glaze.webp",
              "/assets/textures/ceramic-tile-pair.webp",
              "/assets/textures/tile-water-droplets-golden.webp",
              "/assets/textures/old-new-timber-junction.webp",
              "/assets/textures/mortar-wall-cracks.webp",
            ]}
            carouselCaption="場所の可能性を、見つけ出す。"
            logoEntity="fudousan"
            logoTo="/fudousan"
          />
        }
      />
    </Routes>
  );
}
