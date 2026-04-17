import { Routes, Route, Navigate } from "react-router-dom";
import GroupTop from "./pages/GroupTop";
import GroupAbout from "./pages/GroupAbout";
import GroupConcept from "./pages/GroupConcept";
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
      <Route path="/concept" element={<GroupConcept />} />
      <Route path="/studio" element={<StudioTop />} />
      <Route path="/studio/about" element={<StudioAbout />} />
      <Route path="/studio/works" element={<StudioWorks />} />
      <Route path="/studio/pricing" element={<StudioPricing />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route
        path="/invest"
        element={
          <ComingSoon
            name="KIOKUSO"
            nameLine2="INVEST"
            nameJa="満室デザインLABO"
            subtitle="収益物件リノベーション"
            tagline="眠っている物件を、収益に変える。"
            taglineSub="築古アパート・戸建て投資・ゾンビハウス再生。準備中です。"
            concept={`使われていない物件には、まだ可能性が眠っている。\n\n築古のアパート、空き家になった戸建て、\n長く放置された「ゾンビハウス」。\n\n内装の工夫と市場の読みで、\n収益を生む物件に仕立て直す。\nそれが満室デザインLABOの仕事です。`}
            vision={{
              text: `物件は、数字でもあり、器でもある。\n\n投資家の収支計算に応え、\n入居者が「ここに住みたい」と思える空間に。\n\n物件探しの段階から並走し、\nリノベーション、運用まで一気通貫で。\n\n眠っていた建物に、\n次の使い手と次の収益を、もう一度灯す。`,
              image: "/assets/textures/reclaimed-wood-section-sm.webp",
              caption: "眠る物件に、次の収益を。",
            }}
            themeColor={colors.seiji.main}
            themeLight={colors.seiji.light}
            themeMid={colors.seiji.mid}
            themeBg={colors.seiji.bg}
            themeDark={colors.seiji.dark}
            heroBg="#A99BC4"
            heroImg="/assets/textures/reform-hero.webp"
            textureBand1="/assets/textures/shoji-light-shadow-sm.webp"
            carouselImages={[
              "/assets/textures/reclaimed-wood-section-sm.webp",
              "/assets/textures/oak-hardwood-floor-sm.webp",
              "/assets/textures/tile-water-droplets-golden-sm.webp",
              "/assets/textures/brass-patina-sm.webp",
              "/assets/textures/shikkui-plaster-wide-sm.webp",
              "/assets/textures/ceramic-tile-pair-sm.webp",
            ]}
            carouselCaption="素材の選びで、収益をつくる。"
            logoEntity="invest"
            logoTo="/invest"
          />
        }
      />
      <Route path="/reform" element={<Navigate to="/invest" replace />} />
      <Route
        path="/koumuten"
        element={
          <ComingSoon
            name="KIOKUSO"
            nameLine2="BUILD"
            nameJa="記憶荘工務店"
            subtitle="施工の実行部隊"
            tagline="古い骨組みに、次の灯りを入れる。"
            taglineSub="STUDIO・INVESTから流れる施工を、一つずつ丁寧に。準備中です。"
            concept={`記憶荘工務店は、施工の実行部隊です。\n\n店舗内装スタジオ、満室デザインLABOから\n流れてくる工事を、一つずつ丁寧に仕上げる。\n\n古い骨組みを活かしながら、\n次の使い手が安心して商売を始められる場所に。\nそれが工務店としての役割です。`}
            vision={{
              text: `建物には、前の使い手が積み重ねた時間がある。\n\nその骨組みを読み解き、\n必要な部分は残し、\n要らない部分はきれいに畳む。\n\n壊して更地にするのではなく、\n次の物語が始められる形に整える。\nそれが記憶荘工務店の現場です。`,
              image: "/assets/textures/old-new-timber-junction-sm.webp",
              caption: "古い骨組みに、次の灯りを。",
            }}
            themeColor={colors.urushicha.main}
            themeLight={colors.urushicha.light}
            themeMid={colors.urushicha.mid}
            themeBg={colors.urushicha.bg}
            themeDark={colors.urushicha.dark}
            heroBg="#D5CEC6"
            heroImg="/assets/textures/koumuten-hero.webp"
            textureBand1="/assets/textures/reclaimed-wood-section-sm.webp"
            carouselImages={[
              "/assets/textures/reclaimed-wood-section-sm.webp",
              "/assets/textures/old-new-timber-junction-sm.webp",
              "/assets/textures/oak-hardwood-floor-sm.webp",
              "/assets/textures/shikkui-plaster-wide-sm.webp",
              "/assets/textures/tile-water-droplets-warm-sm.webp",
              "/assets/textures/brass-patina-sm.webp",
            ]}
            carouselCaption="古い骨組みに、次の素材を重ねる。"
            logoEntity="koumuten"
            logoTo="/koumuten"
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
            subtitle="物件探しの入口"
            tagline="物件探しから始まる、記憶荘の入口。"
            taglineSub="STUDIOとINVESTの上流を、物件情報網で支える。準備中です。"
            concept={`記憶荘不動産は、店舗内装スタジオと\n満室デザインLABOの上流にある入口です。\n\n表には出ない空き物件、居抜き物件、\n使われなくなった建物。\n\nその中から、\n次に店を始める人、次に運用する投資家に\nふさわしい場所を見つけ出します。`}
            vision={{
              text: `いい物件は、ネットには載らない。\n\n記憶荘が内装工事を通じて築いてきた\n宮城の物件情報網を、次の使い手につなぐ。\n\n「この場所で何ができるか」まで、\n工務店・スタジオ・LABOと一緒に考える。\nそれが不動産としての働き方です。`,
              image: "/assets/textures/brass-patina-sm.webp",
              caption: "物件の可能性を、見つけ出す。",
            }}
            themeColor={colors.tetsukon.main}
            themeLight={colors.tetsukon.light}
            themeMid={colors.tetsukon.mid}
            themeBg={colors.tetsukon.bg}
            themeDark={colors.tetsukon.dark}
            heroBg="#C8CAD0"
            heroImg="/assets/textures/fudousan-hero.webp"
            textureBand1="/assets/textures/old-new-timber-junction-sm.webp"
            carouselImages={[
              "/assets/textures/brass-patina-sm.webp",
              "/assets/textures/ceramic-tile-blue-glaze-sm.webp",
              "/assets/textures/ceramic-tile-pair-sm.webp",
              "/assets/textures/tile-water-droplets-golden-sm.webp",
              "/assets/textures/old-new-timber-junction-sm.webp",
              "/assets/textures/reclaimed-wood-section-sm.webp",
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
