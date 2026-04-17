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
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.35) 100%)" }} />
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
          <p style={{ color: "#fff", fontFamily: "'Noto Sans JP', sans-serif", fontSize: "clamp(32px, 9vw, 48px)", fontWeight: 900, letterSpacing: "clamp(0.06em, 1.5vw, 0.12em)", textTransform: "uppercase" }}>About</p>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>スタジオについて</p>
        </div>
      </section>

      {/* OUR APPROACH — Essay */}
      <ScrollFadeIn>
        <section style={{ padding: "80px 24px 0", maxWidth: "640px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", letterSpacing: "3px", color: "#C9A84C", fontWeight: 500, margin: "0 0 40px", textTransform: "uppercase" }}>
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

      <TextureBand src="/assets/textures/oak-hardwood-floor-sm.webp" height={160} />

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

      <TextureBand src="/assets/textures/tile-water-droplets-warm-sm.webp" height={160} />

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

      {/* Business Types */}
      <ScrollFadeIn>
        <section style={{ padding: "80px 24px 40px", maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", letterSpacing: "3px", color: "#C9A84C", fontWeight: 500, margin: "0 0 16px", textTransform: "uppercase" }}>
            Business Types
          </p>
          <h3 style={{ fontSize: "20px", fontWeight: 500, color: colors.text, fontFamily: "'Noto Serif JP', serif", margin: "0 0 32px", lineHeight: 1.6 }}>
            ── こんなお店を、つくれます。
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "16px",
          }}>
            {[
              { src: "/images/showcase-cafe-sm.webp", label: "カフェ" },
              { src: "/images/showcase-izakaya-sm.webp", label: "居酒屋・バー" },
              { src: "/images/showcase-salon-sm.webp", label: "美容室" },
              { src: "/images/showcase-gym-sm.webp", label: "ジム" },
              { src: "/images/showcase-takeout-sm.webp", label: "テイクアウト" },
              { src: "/images/showcase-shop-sm.webp", label: "物販" },
              { src: "/images/showcase-nail-sm.webp", label: "ネイルサロン" },
              { src: "/images/showcase-ramen-sm.webp", label: "ラーメン店" },
              { src: "/images/showcase-clinic-sm.webp", label: "整体・治療院" },
              { src: "/images/showcase-office-sm.webp", label: "事務所" },
              { src: "/images/showcase-bakery-sm.webp", label: "ベーカリー" },
              { src: "/images/showcase-flower-sm.webp", label: "花屋" },
            ].map((item) => (
              <div key={item.label} style={{ textAlign: "center" }}>
                <div style={{ borderRadius: "8px", overflow: "hidden", marginBottom: "8px" }}>
                  <img src={item.src} alt={item.label} style={{ width: "100%", height: "120px", objectFit: "cover", display: "block" }} />
                </div>
                <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>{item.label}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      {/* Voice */}
      <ScrollFadeIn>
        <section style={{ padding: "40px 24px 80px", maxWidth: "640px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", letterSpacing: "3px", color: "#C9A84C", fontWeight: 500, margin: "0 0 16px", textTransform: "uppercase" }}>
            Voice
          </p>
          <h3 style={{ fontSize: "20px", fontWeight: 500, color: colors.text, fontFamily: "'Noto Serif JP', serif", margin: "0 0 32px", lineHeight: 1.6 }}>
            ── ご利用いただいた方の声。
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              { text: "見積もりの内訳がここまで細かいのは初めてでした。何にいくらかかるか全部わかるので安心です。", author: "カフェオーナー", detail: "仙台市青葉区・12坪" },
              { text: "物件が決まる前から相談できたのが大きかったです。おかげで融資の準備もスムーズに進みました。", author: "居酒屋オーナー", detail: "仙台市宮城野区・18坪" },
              { text: "3社比較した中で、見積もりの内訳が一番細かかったです。融資の書類にもそのまま使えて助かりました。", author: "カフェオーナー", detail: "仙台市青葉区・12坪" },
              { text: "居抜きを活かすことで、思っていたよりずっと抑えられました。最初の概算と最終金額がほとんど変わらなかったのも安心でした。", author: "ラーメン店オーナー", detail: "仙台市太白区・15坪" },
              { text: "Step 0で概算を出してもらった時点で、予算的に厳しいとわかったんです。でも「今は見送りましょう」と正直に言ってくれて、無理に進めなかった。半年後に改めて相談して、今の店ができました。", author: "焼鳥店オーナー", detail: "仙台市泉区・14坪" },
            ].map((v, i) => (
              <div key={i} style={{ borderLeft: "3px solid #C9A84C", paddingLeft: "20px" }}>
                <p style={{ margin: "0 0 8px", fontSize: "15px", color: "#444", lineHeight: 1.8 }}>
                  「{v.text}」
                </p>
                <p style={{ margin: 0, fontSize: "14px", color: "#999" }}>
                  {v.author}・{v.detail}
                </p>
              </div>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      {/* ABOUT KAI & KEN */}
      <ScrollFadeIn>
        <section style={{ padding: "80px 24px", backgroundColor: "rgba(46,66,41,0.03)" }}>
          <div style={{ maxWidth: "560px", margin: "0 auto" }}>
            <p style={{ fontSize: "12px", letterSpacing: "3px", color: "#C9A84C", fontWeight: 500, margin: "0 0 40px", textTransform: "uppercase" }}>
              About KAI &amp; KEN
            </p>

            {/* KAI */}
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <img
                src="/images/about-kai-sm.webp"
                alt="KAI（海）- プランニング・物件サポート"
                style={{ maxWidth: "320px", width: "100%", borderRadius: "8px", objectFit: "cover", display: "inline-block" }}
              />
            </div>
            <p style={{ fontSize: "22px", fontWeight: 500, color: colors.text, fontFamily: "'Noto Serif JP', serif", margin: "0 0 4px" }}>
              KAI
            </p>
            <p style={{ fontSize: "14px", color: "#888", margin: "0 0 28px" }}>プランニング・物件サポート</p>
            <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", margin: "0 0 20px" }}>
              元不動産業の経験を活かし、物件探しから内装プランニングまでを担当。
              不動産会社との人脈が今もあり、ネットに出回る前の物件情報をキャッチできます。
            </p>
            <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", margin: "0 0 20px" }}>
              お客様の「こうしたい」を形にする窓口役として、
              物件の交渉や出店計画の相談にも対応しています。
            </p>

            {/* Divider */}
            <div style={{ width: "40px", height: "1px", background: "rgba(201,168,76,0.3)", margin: "48px auto" }} />

            {/* KEN */}
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <img
                src="/images/about-ken-sm.webp"
                alt="KEN（謙）- 大工・施工責任者"
                style={{ maxWidth: "320px", width: "100%", borderRadius: "8px", objectFit: "cover", display: "inline-block" }}
              />
            </div>
            <p style={{ fontSize: "22px", fontWeight: 500, color: colors.text, fontFamily: "'Noto Serif JP', serif", margin: "0 0 4px" }}>
              KEN
            </p>
            <p style={{ fontSize: "14px", color: "#888", margin: "0 0 28px" }}>大工・施工責任者</p>
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
          <p style={{ fontSize: "12px", letterSpacing: "3px", color: "#C9A84C", fontWeight: 500, margin: "0 0 32px", textTransform: "uppercase" }}>
            Service Area
          </p>
          <p style={{ fontSize: "15px", lineHeight: 2.0, color: "#555", margin: "0 0 20px" }}>
            仙台市・宮城県を中心に対応しています。<br />
            ご希望があれば東北全域も対応可能です。
          </p>
          <p style={{ fontSize: "14px", lineHeight: 2.0, color: "#777", margin: 0 }}>
            <span style={{ fontSize: "14px", color: "#aaa", marginRight: "8px" }}>対応業態</span>
            飲食店・カフェ・テイクアウト・居酒屋/バー・美容室・ネイルサロン・パーソナルジム・物販店 など
          </p>
        </section>
      </ScrollFadeIn>

    </div>
    <StudioFooter />
    </div>
  );
}
