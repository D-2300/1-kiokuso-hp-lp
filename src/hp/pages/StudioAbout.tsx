import StudioNav from "../components/StudioNav";
import StudioFooter from "../components/StudioFooter";
import ScrollFadeIn from "../../shared/ScrollFadeIn";
import TextureBand from "../../shared/TextureBand";
import { colors } from "../../shared/design-tokens";

export default function StudioAbout() {
  return (
    <div style={{ backgroundColor: '#2E4229' }}>
    <div style={{ paddingTop: 0, backgroundColor: colors.beige }}>
      <StudioNav />

      {/* SmallHero */}
      <section style={{ position: "relative", height: "50vh", minHeight: "320px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, height: "100%", backgroundColor: "#D8D3CE" }}>
          <img
            src="/assets/textures/shikkui-plaster-wide.webp"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
        </div>
        <div
          style={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <p style={{ color: "#fff", fontFamily: "'Anton', sans-serif", fontSize: "48px", fontWeight: 400, letterSpacing: "0.05em", textTransform: "uppercase" }}>About</p>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>スタジオについて</p>
        </div>
      </section>

      {/* OUR APPROACH — Essay */}
      <ScrollFadeIn>
        <section style={{ padding: "80px 24px 0", maxWidth: "640px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "3px", color: "#C9A84C", fontWeight: 500, margin: "0 0 40px", textTransform: "uppercase" }}>
            Our Approach
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 500, color: colors.text, fontFamily: "'Noto Serif JP', serif", margin: "0 0 24px", lineHeight: 1.6 }}>
            ── なぜ、一社でやるのか。
          </h3>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", margin: "0 0 20px" }}>
            内装工事の業界では、営業と施工が別の会社であることが珍しくありません。
            間に入る会社が増えるたびに、費用は上がり、伝言ゲームで意図がズレていきます。
          </p>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", margin: 0 }}>
            記憶荘では、最初の相談から設計・施工・届出まで、すべて一社で対応しています。
            間に誰も入らないから、話が早い。費用も透明。仕上がりもブレない。
          </p>
        </section>
      </ScrollFadeIn>

      <TextureBand src="/assets/textures/oak-hardwood-floor.webp" height={160} />

      <ScrollFadeIn>
        <section style={{ padding: "0 24px", maxWidth: "640px", margin: "0 auto" }}>
          <h3 style={{ fontSize: "20px", fontWeight: 500, color: colors.text, fontFamily: "'Noto Serif JP', serif", margin: "0 0 24px", lineHeight: 1.6 }}>
            ── なぜ、見積もりを全部見せるのか。
          </h3>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", margin: "0 0 20px" }}>
            「一式○○万円」という見積もりは、何にいくらかかっているのかわかりません。
            わからないまま契約すると、あとから追加費用が発生するリスクがあります。
          </p>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", margin: 0 }}>
            記憶荘の見積もりは、材料費・人件費・諸経費のすべてを項目ごとに公開しています。
            オーナーが自分の目で確認し、納得した上で進められる。それが当然だと考えています。
          </p>
        </section>
      </ScrollFadeIn>

      <TextureBand src="/assets/textures/rusted-steel-plates.webp" height={160} />

      <ScrollFadeIn>
        <section style={{ padding: "0 24px 80px", maxWidth: "640px", margin: "0 auto" }}>
          <h3 style={{ fontSize: "20px", fontWeight: 500, color: colors.text, fontFamily: "'Noto Serif JP', serif", margin: "0 0 24px", lineHeight: 1.6 }}>
            ── なぜ、安くできるのか。
          </h3>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", margin: "0 0 20px" }}>
            「安い＝手を抜いている」ではありません。
          </p>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", margin: "0 0 20px" }}>
            居抜き物件の既存設備を活かすこと。<br />
            メルカリやヤフオクで中古の厨房機器や建材を調達すること。<br />
            塗装や簡単な組み立てはオーナー自身がDIYで参加すること。
          </p>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", margin: 0 }}>
            こうした工夫を一つひとつ積み重ねることで、品質を落とさずにコストを抑えています。
          </p>
        </section>
      </ScrollFadeIn>

      {/* ABOUT KEN */}
      <ScrollFadeIn>
        <section style={{ padding: "80px 24px", backgroundColor: "rgba(46,66,41,0.03)" }}>
          <div style={{ maxWidth: "560px", margin: "0 auto" }}>
            <p style={{ fontSize: "11px", letterSpacing: "3px", color: "#C9A84C", fontWeight: 500, margin: "0 0 40px", textTransform: "uppercase" }}>
              About Ken
            </p>
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <img
                src="/images/about-dai.webp"
                alt="KEN"
                style={{ maxWidth: "320px", width: "100%", borderRadius: "8px", objectFit: "cover", display: "inline-block" }}
              />
            </div>
            <p style={{ fontSize: "22px", fontWeight: 500, color: colors.text, fontFamily: "'Noto Serif JP', serif", margin: "0 0 4px" }}>
              KEN
            </p>
            <p style={{ fontSize: "13px", color: "#888", margin: "0 0 28px" }}>記憶荘 CSO</p>
            <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", margin: "0 0 20px" }}>
              前職では店舗内装の現場監督として、飲食店・美容室・ジム・物販店など
              さまざまな業態の内装を手がけてきました。
            </p>
            <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", margin: "0 0 20px" }}>
              独立のきっかけは、業界の不透明さに対する違和感でした。
              見積もりの中身がわからない。追加費用が次々と発生する。
              オーナーが納得しないまま工事が進む。
            </p>
            <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", margin: "0 0 20px" }}>
              「これを変えたい」と思って始めたのが、記憶荘です。
            </p>
            <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", margin: 0 }}>
              仙台・宮城県で、飲食店・美容室・テイクアウト店・ジムなど
              さまざまな業態の店舗内装を手がけています。
            </p>
          </div>
        </section>
      </ScrollFadeIn>

      {/* SERVICE AREA */}
      <ScrollFadeIn>
        <section style={{ padding: "80px 24px", maxWidth: "560px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "3px", color: "#C9A84C", fontWeight: 500, margin: "0 0 32px", textTransform: "uppercase" }}>
            Service Area
          </p>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", margin: "0 0 20px" }}>
            仙台市・宮城県を中心に対応しています。<br />
            ご希望があれば東北全域も対応可能です。
          </p>
          <p style={{ fontSize: "14px", lineHeight: 2.0, color: "#777", margin: 0 }}>
            <span style={{ fontSize: "12px", color: "#aaa", marginRight: "8px" }}>対応業態</span>
            飲食店・カフェ・テイクアウト・居酒屋/バー・美容室・ネイルサロン・パーソナルジム・物販店 など
          </p>
        </section>
      </ScrollFadeIn>

    </div>
    <StudioFooter />
    </div>
  );
}
