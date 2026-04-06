import { useEffect } from 'react';
import StudioNav from './components/StudioNav';
import StudioFooter from './components/StudioFooter';

const IMG = '/images';

export default function WorksCrossover() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: "#2E4229" }}>
      <div style={{ paddingTop: 0, backgroundColor: "#F8F5F0" }}>
        <StudioNav />

        {/* HERO */}
        <section className="relative h-[85vh] min-h-[500px] overflow-hidden flex items-end">
          <img
            src={`${IMG}/crossover-after-01.webp`}
            alt="バスケットボール Cafe&Bar CROSSOVER 完成写真"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/70" />
          <div className="relative z-10 px-6 md:px-12 pb-16 max-w-[900px]">
            <div className="text-[13px] tracking-[4px] text-white/60 mb-3 font-bold uppercase">
              WORKS — CASE 001
            </div>
            <h1 className="font-bold text-[clamp(24px,4vw,40px)] text-white leading-relaxed mb-2">
              バスケットボール Cafe&Bar<br />CROSSOVER
            </h1>
            <div className="font-semibold text-[15px] text-white/50 tracking-[2px]">
              Sendai, Wakabayashi — 2026.02
            </div>
          </div>
        </section>

        {/* SPEC TABLE */}
        <div className="max-w-[860px] mx-auto px-6">
          <section className="pt-16 pb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#4A6741]/10 border border-[#4A6741]/10">
              {[
                { label: 'Cost', value: '¥900,000' },
                { label: 'Period', value: '約10日' },
                { label: 'Type', value: '新築事務所' },
                { label: 'Area', value: '18坪' },
              ].map((spec) => (
                <div key={spec.label} className="bg-[#F8F5F0] py-6 text-center">
                  <div className="text-[13px] tracking-[3px] text-[#888] uppercase mb-2">
                    {spec.label}
                  </div>
                  <div className="font-normal text-lg text-[#333]">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </section>
          <a
            href="/studio/works"
            className="inline-flex items-center gap-2 text-[13px] tracking-[2px] text-[#888] hover:text-[#4A6741] transition-colors no-underline mb-8"
          >
            ← Back to Works
          </a>

          <SectionHeading en="Story" ja="この施工の背景" />
          <div className="space-y-6">
            <P>もともとバスケ仲間だったオーナーが、仙台市内で「バスケを観ながら飲める場所」を作りたいと相談に来た。すでに一度カフェバーを営業した経験があり、移転先を探していた。</P>
            <P>見つかった物件は、若林区の新築ビル2階。築3年、誰も入居しないまま残っていた事務所。石膏ボードそのままの壁、ベニヤ張りの床、事務所用の蛍光灯。ここがバスケカフェになるイメージは、正直持ちにくかった。</P>
            <P>予算は限られている。だからまず「壊さなくていいものは壊さない」「新品を買わなくていいものは買わない」という方針を立てた。ちょうど閉店するバーのカウンターやショーケース、冷蔵庫、テーブル、照明器具があった。それを引き取って再利用する前提で設計を組んだ。</P>
            <P>壁と天井を黒く塗った。床にバスケットコートのラインを塗装した。カウンター正面にトタン板を張り、下からブルーLEDを仕込んだ。壁の一面に古材を張ってバスケットゴールを取り付けた。棚は木材で造作して、ジャージやスニーカーを飾れるようにした。</P>
            <P>鍵をもらってから10日後、NBAのユニフォームとボブルヘッドが並ぶ空間が出来上がった。あの白い事務所が、こうなるとは誰も思わなかっただろう。</P>
          </div>

          <SectionHeading en="Before" ja="施工前の状態" />
          <p className="text-sm text-[#888] mb-4">
            新築事務所。石膏ボードの壁とベニヤ張りの床、事務所用の蛍光灯。3年間空室のまま残っていた。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-14">
            {['before-01', 'before-02'].map((name) => (
              <img
                key={name}
                src={`${IMG}/crossover-${name}-sm.webp`}
                alt="CROSSOVER施工前"
                className="w-full h-60 object-cover grayscale-[40%] hover:grayscale-0 transition-all hover:scale-[1.02]"
                loading="lazy"
              />
            ))}
          </div>
          <SectionHeading en="Process" ja="施工の流れ" />
          <div className="mb-10">
            {[
              { day: 'Day 1–2', text: '養生・天井と壁の黒塗装。蛍光灯を撤去し、ライティングレールを設置。' },
              { day: 'Day 3–4', text: '床のサンディングとコート風塗装。ラインテープでバスケットコートを再現。' },
              { day: 'Day 5–6', text: 'カウンター搬入・設置。トタン板を正面に張り、LED照明を仕込む。背面にボトル棚を造作。' },
              { day: 'Day 7–8', text: '壁面に古材パネルを施工。バスケットゴール取り付け。ディスプレイ棚の造作。' },
              { day: 'Day 9–10', text: 'シーリングファン設置。照明・電気配線の最終調整。什器搬入・ディスプレイ配置。' },
            ].map((item) => (
              <div key={item.day} className="flex flex-col md:flex-row gap-1 md:gap-6 py-5 border-b border-[#4A6741]/8">
                <div className="shrink-0 w-20 text-sm tracking-[1px] text-[#4A6741] pt-0.5 font-semibold">
                  {item.day}
                </div>
                <div className="text-sm text-[#555] leading-relaxed">{item.text}</div>
              </div>
            ))}
          </div>

          <div className="text-[13px] tracking-[4px] text-[#888] mb-4 font-semibold">
            DURING CONSTRUCTION
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-14">
            {['process-01', 'process-02', 'process-03', 'process-04'].map((name) => (
              <img
                key={name}
                src={`${IMG}/crossover-${name}-sm.webp`}
                alt="施工中"
                className="w-full h-[280px] object-cover hover:scale-[1.02] transition-transform"
                loading="lazy"
              />
            ))}
          </div>

          <SectionHeading en="After" ja="完成" />
          <div className="space-y-2 mb-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {['after-01', 'after-02', 'after-03', 'after-04'].map((name) => (
                <img
                  key={name}
                  src={`${IMG}/crossover-${name}-sm.webp`}
                  alt="完成写真"
                  className="w-full h-[280px] object-cover hover:scale-[1.02] transition-transform"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          <SectionHeading en="Point" ja="この施工のポイント" />
          <div className="space-y-6">
            <P>
              <strong className="font-medium">閉店店舗の什器をフル活用。</strong><br />
              カウンター、ショーケース、冷蔵庫、テーブル、照明器具を閉店するバーから引き取り再利用した。什器を新品で揃えた場合と比較して、50万円以上のコスト削減になっている。
            </P>
            <P>
              <strong className="font-medium">塗装だけで空間を一変させる。</strong><br />
              石膏ボードの壁と天井を黒に塗り替えただけで、事務所感は完全に消える。今回はボード張りの物件だったため下地が整っており、塗装の仕上がりも綾麗にできた。スケルトン物件よりも効率が良い場合がある。
            </P>
            <P>
              <strong className="font-medium">オーナーのコレクションが「内装」になる。</strong><br />
              NBAジャージ、スニーカー、ボブルヘッドフィギュア。オーナーが長年集めてきたコレクションを飾る棚を造作することで、他にない空間ができた。既製品を買い足すより、持っているものを活かす方が強い。
            </P>
            <P>
              <strong className="font-medium">一面のモルタルが、空間の「芯」になる。</strong><br />
              壁の一面にモルタルを施工し、アクセントウォールにした。お金をかけなくても、こだわるべき場所にこだわれば空間に芯が生まれる。高い内装だけが空間づくりではない。素材の組み合わせと意図がうまく調和すれば、それだけで空間は十分な味を持つ。
            </P>
            <P>
              <strong className="font-medium">トタン素材で、インダストリアルなアクセントを。</strong><br />
              カウンターの下にトタン板を張り、ブルーLEDを仕込んだ。ちょっとした素材の使い方で、空間にインダストリアルな表情が加わる。高い素材を使わなくても、意外な組み合わせが空間のアクセントになる。
            </P>
          </div>

          <div className="flex flex-wrap gap-2 mt-12 mb-12">
            {[
              '#バスケカフェバー', '#新築事務所からの改装', '#閉店店舗什器の再利用',
              '#DIY併用', '#モルタル壁', '#バスケットコート風床',
              '#LED間接照明', '#古材パネル', '#トタン素材', '#90万円', '#10日施工', '#仙台市若林区',
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs tracking-[1px] text-[#4A6741] border border-[#4A6741]/20 px-3.5 py-1.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <section className="text-center py-[72px] px-6 border-t border-[#4A6741]/10 mt-12">
          <p className="text-[15px] text-[#555] leading-8 mb-8">
            まだ何も決まっていなくても、大丈夫です。<br />
            物件未定でもOK。断りはLINE1本で完了です。
          </p>
          <a
            href="https://lin.ee/HVV0QJO"
            className="inline-block bg-[#06C755] text-white font-normal text-sm tracking-[2px] px-12 py-4 hover:opacity-85 transition-opacity no-underline"
          >
            LINEで相談する
          </a>
        </section>
      </div>
      <StudioFooter />
    </div>
  );
}

function SectionHeading({ en, ja }: { en: string; ja: string }) {
  return (
    <div className="mt-[72px] mb-8">
      <div className="font-semibold text-[32px] tracking-[4px] text-[#4A6741]">
        {en}
      </div>
      <div className="text-xs tracking-[2px] text-[#888] mt-1">{ja}</div>
      <div className="w-10 h-px bg-[#C9A84C] mt-4" />
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[15px] text-[#555] leading-[2.1] font-light">
      {children}
    </p>
  );
}
