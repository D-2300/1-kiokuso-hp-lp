import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LINE_URL_HP } from "../../shared/design-tokens";

const guideFaqs = [
  { q: "このガイドは本当に無料ですか？", a: "はい、完全無料です。記憶荘の本業は内装工事で、実際に工事をご依頼いただいた段階で対価をいただきます。物件選びや相談の段階で費用を請求することはありません。" },
  { q: "宮城県外でも参考になりますか？", a: "相場の数字は仙台・宮城県のものですが、物件選びの3基準・設備チェック・費用圧縮の考え方・失敗回避の方法論は地域を問わず使えます。" },
  { q: "初めての出店なのですが大丈夫ですか？", a: "むしろ初めての方のために書いたガイドです。業界用語は付録Bで解説しています。「まだ何も決まっていない」段階からご相談ください。" },
  { q: "他の内装屋との違いは何ですか？", a: "一番の違いは「物件探しの段階から関わる」こと。多くの内装屋は物件決定後に見積もり依頼を受けますが、記憶荘は物件を選ぶ前から相談を受けます。選択肢の幅が全く違います。" },
  { q: "DIYで自分でやりたい部分があるのですが？", a: "歓迎します。「全部任せてください」派ではなく、「ここだけプロに」という頼み方を推奨しています。電気・給排水・ガスなど事故リスクが高い領域だけ記憶荘で請け、塗装・装飾などDIY可能な領域はご自身で進めていただく形が、コストが下がって開業しやすいです。" },
  { q: "相見積もりを取りたいのですが？", a: "もちろん歓迎です。他社と比較して決めてもらう方が、後の信頼関係もすっきりします。相談段階で「いまは他社も検討中です」と伝えていただいて構いません。" },
  { q: "個別相談はできますか？", a: "LINE公式アカウントで個別相談を承っています。物件のURLや写真を送っていただければ、内装屋の視点で正直な感想を無料でお返しします。" },
];

const guideSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "仙台のテナント攻略ガイド",
  description: "仙台・宮城県で店舗を始める方のためのテナント物件選びガイド。相場データ・物件3基準・設備チェック・居抜きvsスケルトン・費用圧縮3技・失敗事例10選まで内装屋視点で体系化。",
  image: "https://kiokuso.jp/assets/textures/koumuten-hero.webp",
  datePublished: "2026-04-18",
  dateModified: "2026-04-18",
  author: { "@type": "Organization", name: "記憶荘 店舗内装スタジオ", url: "https://kiokuso.jp/" },
  publisher: {
    "@type": "Organization",
    name: "記憶荘",
    logo: { "@type": "ImageObject", url: "https://kiokuso.jp/assets/logos/logo-group-h-gold.webp" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://kiokuso.jp/studio/guide/tenant" },
};

/**
 * 仙台のテナント攻略ガイド HTML版
 *
 * 原稿: docs/guide-tenant-manuscript.md
 * 配布: /studio/guide/tenant
 * 印刷: Ctrl+P → PDFで保存 → 画面と同じデザインでダウンロード可
 */
export default function TenantGuidePage() {
  useEffect(() => {
    document.title = "仙台のテナント攻略ガイド｜記憶荘 店舗内装スタジオ";
    const description = "仙台・宮城県で店舗を始める方のためのテナント物件選びガイド。内装屋視点で、物件3基準・設備チェック・居抜きvsスケルトン・費用圧縮術・失敗10選まで体系化。";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);
    const setMeta = (selector: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute("content", value);
    };
    setMeta('meta[property="og:title"]', "仙台のテナント攻略ガイド｜記憶荘");
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[name="twitter:title"]', "仙台のテナント攻略ガイド｜記憶荘");
    setMeta('meta[name="twitter:description"]', description);
  }, []);

  return (
    <div className="guide-root">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSchema) }} />
      <style>{styles}</style>

      {/* スクリーン用ヘッダー（印刷時非表示） */}
      <nav className="guide-nav screen-only">
        <Link to="/" className="guide-nav-brand">記憶荘</Link>
        <div className="guide-nav-actions">
          <button onClick={() => window.print()} className="guide-nav-print">
            🖨️ 印刷・PDF保存
          </button>
          <a href={LINE_URL_HP} target="_blank" rel="noopener noreferrer" className="guide-nav-line">
            LINE相談
          </a>
        </div>
      </nav>

      {/* ===== 表紙 ===== */}
      <article className="guide-cover page">
        <div className="cover-accent-top" />
        <p className="cover-category">TENANT GUIDE</p>
        <hr className="cover-hr" />
        <h1 className="cover-title">
          <span className="cover-title-l1">仙台の</span>
          <span className="cover-title-l2">テナント</span>
          <span className="cover-title-l3">攻略ガイド</span>
        </h1>
        <p className="cover-subtitle">— 内装屋だから見えている、店舗物件の選び方 —</p>

        <ul className="cover-chapters">
          <li>◆ 仙台の店舗物件相場</li>
          <li>◆ 物件探しの前に決める3基準</li>
          <li>◆ 内装屋が見る物件チェック</li>
          <li>◆ 居抜きvsスケルトン</li>
          <li>◆ 費用を圧縮する3つの技</li>
          <li>◆ 「未公開物件」の真実と注意</li>
          <li>◆ 失敗事例10選</li>
        </ul>

        <div className="cover-footer">
          <hr className="cover-footer-hr" />
          <p className="cover-brand">記憶荘 店舗内装スタジオ</p>
          <p className="cover-url">kiokuso.jp</p>
        </div>
        <div className="cover-accent-bottom" />
      </article>

      {/* ===== 目次 ===== */}
      <article className="page guide-toc">
        <div className="page-header"><span>CONTENTS</span></div>
        <h2 className="chapter-heading-toc">目次</h2>
        <ol className="toc-list">
          <li><span className="toc-num">Ch.1</span><span>はじめに — なぜ内装屋が物件探しから関わるのか</span></li>
          <li><span className="toc-num">Ch.2</span><span>仙台の店舗物件相場 — エリア別・業態別の実データ</span></li>
          <li><span className="toc-num">Ch.3</span><span>物件探しの前に決める 3つの基準</span></li>
          <li><span className="toc-num">Ch.4</span><span>内装屋が見る物件チェック — 電気・給排水・ダクト・天井高</span></li>
          <li><span className="toc-num">Ch.5</span><span>居抜き vs スケルトン — 費用差と判断基準</span></li>
          <li><span className="toc-num">Ch.6</span><span>費用を圧縮する 3つの技</span></li>
          <li><span className="toc-num">Ch.7</span><span>「未公開物件」の真実と、依頼する時の注意</span></li>
          <li><span className="toc-num">Ch.8</span><span>失敗事例10選</span></li>
          <li><span className="toc-num">Ch.9</span><span>まとめ — 最初の1歩の踏み出し方</span></li>
          <li><span className="toc-num">付録A</span><span>エリア別 平均家賃データ</span></li>
          <li><span className="toc-num">付録B</span><span>用語集</span></li>
          <li><span className="toc-num">付録C</span><span>退去時の原状回復</span></li>
          <li><span className="toc-num">付録D</span><span>よくある質問</span></li>
        </ol>
      </article>

      {/* ===== Ch.1 ===== */}
      <article className="page">
        <div className="page-header"><span>Ch.1 はじめに</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">Ch.1</span>はじめに — なぜ内装屋が物件探しから関わるのか</h2>

        <h3 className="section-heading">1-1. このガイドで伝えたいこと</h3>
        <p>記憶荘は、仙台・宮城で店舗の内装工事をしている会社です。物件を売ってお金をもらう立場にはいません。物件を見つけて、設計して、造って、その対価で生きています。</p>
        <p>この立場から、これから店を始める方に、一つだけ先にお伝えしたいことがあります。</p>
        <blockquote className="quote">「物件選びで失敗すれば、どんなに良い内装をしても商売は回らない」</blockquote>
        <p>これは10年以上、現場を見てきた実感です。どんなに雰囲気の良い内装を造っても、立地が間違っていれば客は来ない。どんなに家賃が安くても、設備が商売に合っていなければ改修費が膨らむ。</p>
        <p>このガイドでは、<strong>契約ボタンを押す前に知っておくべきこと</strong>を、内装側から見た視点で体系化しました。</p>

        <h3 className="section-heading">1-2. なぜ「内装屋」が物件探しから関わるのか</h3>
        <p>多くの方が、こういう順番で相談に来ます。</p>
        <ol className="ordered">
          <li>物件を決めた（or ほぼ決めた）</li>
          <li>内装屋を探し始める</li>
          <li>見積もりを取る</li>
        </ol>
        <p>この順番で来ると、内装屋にできることは<strong>限られています</strong>。設備が貧弱ならそれを補う工事を乗せる。天井が低いなら圧迫感を何とか軽減する。ダクトが通らない業態なら「別の物件の方が…」とも言いづらい。</p>
        <p>物件が決まった後の相談は、<strong>「できることの中で最大限やる」</strong>しかできません。物件を決める前の相談なら、<strong>「そもそもこの物件でいいのか」</strong>から一緒に考えられます。</p>
        <p>選択肢の幅が全然違います。だから記憶荘は、<strong>物件探しの段階から相談を受ける</strong>というやり方にしています。他の内装屋さんと少し違うところは、ここだけです。</p>

        <h3 className="section-heading">1-3. 誰が書いているのか — 元不動産20年 × 大工20年</h3>
        <p>このガイドを書いているのが「どんな人か」を先に伝えます。ここに納得できなければ、以降のノウハウも机上の空論に聞こえてしまうからです。</p>

        <h4 className="sub-heading">KAI（元不動産業 20年）</h4>
        <p>記憶荘のメンバーの一人、<strong>KAI</strong> は、仙台で<strong>不動産仲介業を約20年</strong>やってきました。住宅・テナント・収益物件を広く扱ってきました。</p>
        <p>仲介業の20年で、ずっと抱えていた違和感があります。</p>
        <blockquote className="quote">「仲介業では、本当の意味でお客様の立場に立ちきれない」</blockquote>

        <h4 className="sub-heading">仲介業には構造的な矛盾がある</h4>
        <div className="structure">
          <div className="structure-item">
            <p className="structure-title">① 営業ノルマの圧力</p>
            <p className="structure-body">月ごとの成約目標があると、「本当はこの物件は勧めない方がいい」と思っても、他に候補がなければ推してしまう。</p>
          </div>
          <div className="structure-item">
            <p className="structure-title">② 売主の代理人になる構造</p>
            <p className="structure-body">物件を預かって売り切るのが仕事になる。買主のために強く指値を入れるほど売主との関係が悪くなる。</p>
          </div>
          <div className="structure-item">
            <p className="structure-title">③ 仲介手数料は物件価格に比例</p>
            <p className="structure-body">高い物件を決めた方が自分の取り分も増える。客の利益と自分の利益が一致しない。</p>
          </div>
        </div>
        <p>これは会社の方針や担当者の人柄の問題ではなく、<strong>仲介業のビジネスモデル自体が抱える矛盾</strong>です。この構造に違和感を持ち続け、20年で仲介業を離れました。</p>

        <h4 className="sub-heading">次に選んだのが「内装側から支える」ポジション</h4>
        <div className="benefit-list">
          <div className="benefit-item">
            <span className="benefit-icon">◆</span>
            <p><strong>物件売買では儲けない</strong>：どの物件を選んでもらっても構わない</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">◆</span>
            <p><strong>内装工事で対価をいただく</strong>：物件を「良くする」ことにインセンティブがある</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">◆</span>
            <p><strong>仲介手数料ゼロ</strong>：オーナーの手取りを減らさない</p>
          </div>
        </div>
        <p>この立場なら、20年の仲介経験を活かして「この物件はやめた方がいい」と本音で言えます。今までできなかったことが、ようやくできるようになりました。</p>

        <h4 className="sub-heading">KEN（大工歴 20年超）</h4>
        <p>そして大工歴20年超の <strong>KEN</strong>。前職では店舗内装の現場監督として、年間30件以上の飲食店・美容室・物販・ジムを手がけてきました。</p>
        <p>独立のきっかけは、業界の不透明さへの違和感でした。見積もりの中身がわからない。追加費用が次々と発生する。オーナーが納得しないまま工事が進む。</p>
        <p>「これを変えたい」と思って始めたのが、記憶荘です。</p>

        <div className="profile-cards">
          <div className="profile-card">
            <p className="profile-name">KAI</p>
            <p className="profile-role">元・不動産業20年</p>
            <p className="profile-desc">物件の見極め・交渉・相談の窓口</p>
          </div>
          <div className="profile-card">
            <p className="profile-name">KEN</p>
            <p className="profile-role">大工歴20年超</p>
            <p className="profile-desc">設計から施工まで現場を動かす技術</p>
          </div>
        </div>

        <div className="sidebar">
          <p className="sidebar-label">このガイドで伝える視点</p>
          <p>このガイドの内容は、<strong>仲介現場で「本当はお客様にこう伝えたかった」内容</strong>と、<strong>施工現場で「この物件では厳しい」と感じてきた経験</strong>の集大成です。物件を選ぶ立場の視点でまとめました。</p>
        </div>

        <h3 className="section-heading">1-4. いま動くべきタイミングか</h3>
        <p>2026年時点、仙台の店舗物件市場には以下の傾向があります。</p>
        <ul>
          <li><strong>新規開業数は横ばい〜微減</strong>：コロナ後のリバウンドが落ち着き、慎重な開業者が増えている</li>
          <li><strong>閉店物件（居抜き）は継続発生</strong>：飲食を中心に居抜き案件が常に市場に回っている</li>
          <li><strong>好立地の家賃は上昇傾向</strong>：国分町・仙台駅周辺は坪1万円超が増加</li>
          <li><strong>郊外・駅近の「隠れた良物件」がまだある</strong>：泉中央・長町・名取・多賀城エリアに条件のいい中小テナントが出回る</li>
        </ul>
        <p><strong>参入者が慎重になっている今は、良い物件を相対的に取りやすい局面</strong>でもあります。焦らず、条件を定めてから動ける方が勝ちやすい時期です。</p>
      </article>

      {/* ===== Ch.2 ===== */}
      <article className="page">
        <div className="page-header"><span>Ch.2 仙台の店舗物件相場</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">Ch.2</span>仙台の店舗物件相場 — エリア別・業態別の実データ</h2>

        <h3 className="section-heading">2-1. エリア別の家賃相場感（2026年4月時点）</h3>
        <p>仙台市内の主要エリアの、1階路面店を想定した家賃相場：</p>
        <table className="data-table">
          <thead>
            <tr><th>エリア</th><th>坪単価（月額）</th><th>10坪換算</th><th>特徴</th></tr>
          </thead>
          <tbody>
            <tr><td>国分町</td><td>1.2〜2.0万円</td><td>12〜20万円</td><td>飲食・夜系の聖地</td></tr>
            <tr><td>仙台駅周辺</td><td>1.3〜2.2万円</td><td>13〜22万円</td><td>オフィス・物販向き</td></tr>
            <tr><td>一番町・定禅寺通</td><td>1.0〜1.8万円</td><td>10〜18万円</td><td>カフェ・物販定番</td></tr>
            <tr><td>勾当台公園周辺</td><td>0.9〜1.4万円</td><td>9〜14万円</td><td>バランス型</td></tr>
            <tr><td>泉中央</td><td>0.7〜1.2万円</td><td>7〜12万円</td><td>ファミリー需要</td></tr>
            <tr><td>長町・太白区</td><td>0.7〜1.1万円</td><td>7〜11万円</td><td>再開発進行中</td></tr>
            <tr><td>若林区（中心寄り）</td><td>0.6〜1.0万円</td><td>6〜10万円</td><td>家賃を抑えられる</td></tr>
            <tr><td>名取市・多賀城市</td><td>0.5〜0.9万円</td><td>5〜9万円</td><td>仙台通勤圏</td></tr>
            <tr><td>宮城野区（荒井・新田）</td><td>0.6〜1.0万円</td><td>6〜10万円</td><td>東西線で伸び中</td></tr>
          </tbody>
        </table>
        <p className="note">坪単価は「敷金・礼金・保証金除く、月額家賃 ÷ 坪数」で計算。ビル階数・築年・入居付きのサービスで変動します。</p>

        <h3 className="section-heading">2-2. 業種別の家賃適正ライン</h3>
        <p><strong>家賃は売上の 10% 以内が目安</strong>と言われます。これを超えると固定費で利益が削られ、少し売上が落ちただけで赤字に入ります。</p>
        <table className="data-table">
          <thead>
            <tr><th>業種</th><th>月商目安</th><th>適正家賃</th><th>坪数目安</th></tr>
          </thead>
          <tbody>
            <tr><td>カフェ</td><td>200〜400万</td><td>20〜40万</td><td>10〜15坪</td></tr>
            <tr><td>バー・居酒屋</td><td>150〜350万</td><td>15〜35万</td><td>12〜20坪</td></tr>
            <tr><td>ラーメン店</td><td>250〜500万</td><td>25〜50万</td><td>10〜15坪</td></tr>
            <tr><td>焼肉店</td><td>400〜800万</td><td>40〜80万</td><td>20〜30坪</td></tr>
            <tr><td>美容室</td><td>100〜300万</td><td>10〜30万</td><td>8〜15坪</td></tr>
            <tr><td>ネイル・エステ</td><td>50〜200万</td><td>5〜20万</td><td>6〜12坪</td></tr>
            <tr><td>物販（アパレル）</td><td>80〜300万</td><td>8〜30万</td><td>10〜20坪</td></tr>
            <tr><td>パーソナルジム</td><td>50〜200万</td><td>5〜20万</td><td>10〜20坪</td></tr>
          </tbody>
        </table>

        <div className="sidebar">
          <p className="sidebar-label">内装屋視点</p>
          <p>「月商の目安」は希望的観測に寄りがちです。<strong>売上目標の 70% 程度で固定費が回る家賃</strong>を選ぶのが安全線。開業初年度は想定の半分、という声も少なくありません。</p>
        </div>

        <h3 className="section-heading">2-3. 記憶荘で紹介できる物件について</h3>
        <p>記憶荘にも、継続的にテナント情報が入ってきます。その多くは、仲介会社・大家さん・閉店の決まった店舗オーナーから「<strong>人を見てから話したい</strong>」と預かる案件です。</p>
        <p>ただし、こうした非公開案件の扱いには注意があります（詳しくは Ch.7）。</p>
        <ul>
          <li>非公開 = 必ずしもお得、とは限らない</li>
          <li>売主側の事情（家族・相続・経営上の都合）で水面下で動いているケースが多い</li>
          <li>情報収集だけを目的とされた方にはお渡しできない</li>
        </ul>
        <p>出店意思が固まった段階でご相談ください。フィットする物件があれば送ります。無ければ「今はありません」と正直にお伝えします。</p>
      </article>

      {/* ===== Ch.3 ===== */}
      <article className="page">
        <div className="page-header"><span>Ch.3 物件探しの前に決める3基準</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">Ch.3</span>物件探しの前に決める 3つの基準</h2>

        <p>物件を見始める前に、これだけは自分の中で決めてください。これを決めずに内見を始めると、どの物件も「悪くない気がする」状態になって、結局決められなくなります。</p>

        <h3 className="section-heading">3-1. 基準① 客層は誰か</h3>
        <ul>
          <li>ターゲットの年齢層</li>
          <li>性別バランス</li>
          <li>ライフスタイル（単身／ファミリー／学生／ビジネスマン 他）</li>
          <li>来店動機（平日昼／夜／週末／特別な日／日常使い）</li>
        </ul>
        <p>これが曖昧だと、エリアも内装も定まりません。</p>
        <div className="jirei">
          <p className="jirei-title">例：同じカフェでも対象が違えば物件が違う</p>
          <ul>
            <li><strong>「20〜30代女性が仕事帰りに一人でも入れるカフェ」</strong> → オフィス街 or 駅近</li>
            <li><strong>「ファミリーが週末にゆっくりできるカフェ」</strong> → 住宅地近く・駐車場あり・広め</li>
          </ul>
        </div>

        <h3 className="section-heading">3-2. 基準② どんな形で迎えたいか</h3>
        <ul>
          <li>席数</li>
          <li>滞在時間（15分 or 2時間）</li>
          <li>客単価（¥800 or ¥3,500）</li>
          <li>回転率で稼ぐのか、客単価で稼ぐのか</li>
        </ul>
        <p>これが物件の広さ（坪数）と家賃の上限を決める基準になります。</p>
        <div className="jirei">
          <p className="jirei-title">例：同じ坪数でも月商が倍違う</p>
          <ul>
            <li><strong>回転型ラーメン店</strong>：12坪・客単価¥1,200・5回転／日・月商 ¥400万</li>
            <li><strong>滞在型カフェ</strong>：15坪・客単価¥1,500・1.5回転／日・月商 ¥180万</li>
          </ul>
        </div>

        <h3 className="section-heading">3-3. 基準③ 集客方法は何か</h3>
        <ul>
          <li>路面の通行量で自然集客するのか</li>
          <li>SNSや口コミで呼ぶのか</li>
          <li>デリバリー・EC比率はどれくらいか</li>
          <li>広告にいくらまで出すか</li>
        </ul>
        <p><strong>通行量に頼るなら路面店が必須</strong>ですが、SNS集客がメインなら2階・地下でも家賃を抑えられます。</p>
        <div className="jirei">
          <p className="jirei-title">例：集客方針で物件選びが逆転する</p>
          <ul>
            <li><strong>通行量依存型</strong>（ランチ系・物販）: 1階路面・家賃高でも仕方ない</li>
            <li><strong>SNS集客型</strong>（特色ある業態）: 2階・路地裏でOK、家賃は抑えられる</li>
          </ul>
        </div>

        <div className="sidebar">
          <p className="sidebar-label">この3つが決まれば、物件は半分決まる</p>
          <p>客層 × 形 × 集客。この3つが決まると、「どんな物件が必要か」が自動的に見えてきます。迷ったら、まず LINE で相談してください。この3つを書き出すところから、ご一緒できます。</p>
        </div>
      </article>

      {/* ===== Ch.4 ===== */}
      <article className="page">
        <div className="page-header"><span>Ch.4 内装屋が見る物件チェック</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">Ch.4</span>内装屋が見る物件チェック — 電気・給排水・ダクト・天井高</h2>

        <p>物件の「見た目」「家賃」「広さ」だけでなく、内装工事に直結する<strong>設備条件</strong>を契約前に必ず確認してください。この確認を飛ばすと、契約後に「やりたかった工事ができない」「追加工事で200万円オーバー」という事態が起きます。</p>

        <h3 className="section-heading">4-1. 電気容量</h3>
        <p><strong>飲食店なら最低でも動力（三相200V）が引ける物件が必要</strong>です。</p>
        <ul>
          <li>エアコン、厨房機器、照明を同時に稼働させるには <strong>30A以上</strong></li>
          <li>美容室はドライヤーの同時使用を考えると <strong>50A以上</strong></li>
          <li>ラーメン店・焼肉店など電力使用量が大きい業態は <strong>100A以上</strong></li>
        </ul>
        <p><strong>確認方法</strong>：不動産屋に「電気の容量（契約アンペア）」を聞く。曖昧な答えなら管理会社に直接確認。増設には <strong>30〜100万円</strong>かかります。</p>

        <h3 className="section-heading">4-2. 給排水</h3>
        <p><strong>厨房・シャンプー台・トイレの位置</strong>は、既存の給排水管の位置で大きく制約されます。</p>
        <ul>
          <li>配管を延長すれば自由度は上がるが、費用も上がる（1m延長あたり数万円〜）</li>
          <li>居抜き物件なら前テナントの配管がそのまま使えるかが大きなポイント</li>
          <li>前テナントが異業種（例: 物販 → 飲食）の場合、配管を一から引く必要があり費用が膨らむ</li>
        </ul>
        <p><strong>確認方法</strong>：物件の平面図で排水管の位置を見る。図面にない場合は現地で床下点検口から配管を見せてもらう。</p>

        <h3 className="section-heading">4-3. ダクト・換気</h3>
        <p><strong>飲食店（特に焼肉・ラーメン・焼鳥など煙が出る業態）はダクト工事が必須</strong>です。</p>
        <ul>
          <li>ダクトを外部に通せるルートがあるかは、物件の構造で決まる</li>
          <li>ビル内の共用ダクトに接続できるか、大家承諾を取れるか</li>
          <li>後から「ダクトが通せません」と判明するケースは、実際かなり多い</li>
        </ul>
        <p><strong>確認方法</strong>：現地で天井裏・壁内のダクトルートを確認。必要なら大家・管理会社に「ダクト工事は可能か」を書面で確認。</p>

        <h3 className="section-heading">4-4. 天井高・搬入経路</h3>
        <ul>
          <li><strong>天井高が低いと圧迫感</strong>が出る。飲食店なら <strong>2.4m以上</strong>欲しい。カフェ・バーは2.6m以上が理想</li>
          <li><strong>大型機器（冷蔵庫、業務用オーブン）が搬入できる経路があるか</strong>を確認</li>
          <li>エレベーターに入らない、階段が狭い、という理由で機器が入らないケースもある</li>
        </ul>

        <div className="checklist">
          <p className="checklist-title">✅ 契約前チェックリスト（印刷用）</p>
          <div className="checklist-grid">
            <div>
              <p className="checklist-group">【電気・動力】</p>
              <p>□ 契約アンペア数<br />□ 三相200V 引き込み可<br />□ 増設の可否と概算</p>
            </div>
            <div>
              <p className="checklist-group">【給排水・ダクト】</p>
              <p>□ 給水圧<br />□ 排水管位置<br />□ ダクト引回し<br />□ 大家承諾書</p>
            </div>
            <div>
              <p className="checklist-group">【その他】</p>
              <p>□ 天井高 2.4m以上<br />□ 搬入経路<br />□ 防火・避難<br />□ 看板設置可否<br />□ 原状回復範囲</p>
            </div>
          </div>
        </div>
        <p>気になった物件があれば、内見時にこのリストを内装屋に持たせて同行してもらうのが一番確実です。記憶荘はLINEで物件情報を送っていただければ、チェックリストベースで正直な感想をお返しします。</p>
      </article>

      {/* ===== Ch.5 ===== */}
      <article className="page">
        <div className="page-header"><span>Ch.5 居抜き vs スケルトン</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">Ch.5</span>居抜き vs スケルトン — 費用差と判断基準</h2>

        <h3 className="section-heading">5-1. 費用の違い（15坪・カフェを想定）</h3>
        <table className="data-table">
          <thead>
            <tr><th>タイプ</th><th>初期費用</th><th>工期</th><th>特徴</th></tr>
          </thead>
          <tbody>
            <tr><td>居抜き（前店活用）</td><td>50〜200万</td><td>1〜2週間</td><td>早く安いが制約あり</td></tr>
            <tr><td>居抜き（設備活用＋内装変更）</td><td>200〜500万</td><td>3〜4週間</td><td>バランス◎</td></tr>
            <tr><td>スケルトン（ゼロから）</td><td>450〜800万</td><td>6〜10週間</td><td>自由度高、費用重い</td></tr>
          </tbody>
        </table>
        <p className="note">坪単価換算: 居抜き最小 3〜13万円/坪、居抜き改装型 13〜33万円/坪、スケルトン 30〜55万円/坪</p>

        <h3 className="section-heading">5-2. 居抜きのメリット・デメリット</h3>
        <div className="pro-con">
          <div className="pro-con-col pro">
            <p className="pro-con-label">メリット</p>
            <ul>
              <li>初期費用を抑えられる（最小 50万円〜 実例あり）</li>
              <li>工期が短い（1〜2週間で開業可能なケースも）</li>
              <li>什器・厨房機器がそのまま使える</li>
              <li>既存の給排水・電気を活用できる</li>
            </ul>
          </div>
          <div className="pro-con-col con">
            <p className="pro-con-label">デメリット</p>
            <ul>
              <li>前店の業態・レイアウトに縛られる</li>
              <li>設備が古ければ改修費が結果的にかさむ</li>
              <li>内装の「独自性」を出しにくい</li>
              <li>前店の評判を引きずる場合がある</li>
            </ul>
          </div>
        </div>

        <h3 className="section-heading">5-3. スケルトンのメリット・デメリット</h3>
        <div className="pro-con">
          <div className="pro-con-col pro">
            <p className="pro-con-label">メリット</p>
            <ul>
              <li>自由度が高い（間取り・動線・デザイン）</li>
              <li>設備が新しく、長く使える</li>
              <li>独自の世界観を作りやすい</li>
              <li>中長期的な運営コストが読みやすい</li>
            </ul>
          </div>
          <div className="pro-con-col con">
            <p className="pro-con-label">デメリット</p>
            <ul>
              <li>初期費用が重い</li>
              <li>工期が長い（=開業までの家賃・人件費負担）</li>
              <li>設計・許認可の手間が大きい</li>
              <li>スケルトン物件そのものが希少</li>
            </ul>
          </div>
        </div>

        <h3 className="section-heading">5-4. 判断基準</h3>
        <p><strong>居抜きが向いているのは</strong>：初期費用を抑えたい／早く開業したい／前店と近い業態／立地に惚れ込んだ居抜きに出会った</p>
        <p><strong>スケルトンが向いているのは</strong>：独自の世界観を作りたい／長期（5〜10年）で運営する／初期投資を吸収できる業態（客単価高・回転率高）／居抜き市場に条件に合うものがない</p>

        <div className="sidebar">
          <p className="sidebar-label">居抜きの落とし穴</p>
          <p><strong>「居抜きだから安い」とは限りません</strong>。前テナントの設備が10年以上前、配管が詰まっている、電気容量が新業態に足りない、前店の「造作売買」に高値が付いている、など。見た目の家賃が安くても、実質コストで比較するとスケルトンより高くなるケースがあります。<strong>内装屋の視点で「この居抜きは本当にお得か」を見極める</strong>ことが重要です。</p>
        </div>
      </article>

      {/* ===== Ch.6 ===== */}
      <article className="page">
        <div className="page-header"><span>Ch.6 費用を圧縮する3つの技</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">Ch.6</span>費用を圧縮する 3つの技 — 居抜き活用・施主支給・DIY併走</h2>

        <p>記憶荘が一番得意なのはここです。「品質を落とさずに予算を圧縮する」ための技術を開示します。</p>

        <h3 className="section-heading">6-1. 技① 居抜き設備の徹底活用</h3>
        <p>居抜きを選ぶなら、<strong>使える設備は全部使う</strong>のが基本です。</p>
        <p className="subhead">よく活用する設備：</p>
        <ul>
          <li>厨房機器（冷蔵庫・コンロ・食洗機・シンク）</li>
          <li>カウンター・テーブル・椅子（清掃・塗装で蘇る）</li>
          <li>照明器具</li>
          <li>レジカウンター</li>
          <li>空調（年式確認必須）</li>
        </ul>
        <div className="jirei">
          <p className="jirei-title">実例：バスケットボール Cafe & Bar CROSSOVER</p>
          <ul>
            <li>閉店するバーからカウンター・ショーケース・冷蔵庫・テーブル・照明を引き取り</li>
            <li>新品で揃えた場合と比較して <strong className="gold">50万円以上のコスト削減</strong></li>
            <li>総工費 <strong className="gold">90万円・工期10日</strong>で開業</li>
          </ul>
        </div>

        <h3 className="section-heading">6-2. 技② 施主支給</h3>
        <p><strong>施主支給</strong>とは、オーナーが直接購入した材料・什器を、内装屋が設置・施工する仕組みです。</p>
        <p className="subhead">効果：</p>
        <ul>
          <li>中間マージンを削れる（業者経由なら10〜30%上乗せが一般的）</li>
          <li>メルカリ・ヤフオク・Amazon・楽天で掘り出し物を拾える</li>
          <li>中古の業務用機器が新品の 1/3〜1/2 で手に入る</li>
        </ul>
        <p className="subhead">施主支給しやすい品目：</p>
        <ul>
          <li>照明器具（ペンダントライト・ダクトレール）</li>
          <li>タイル・壁紙</li>
          <li>椅子・テーブル（特にヴィンテージ家具）</li>
          <li>中古の業務用冷蔵庫・コンロ（動作確認必須）</li>
          <li>装飾アイテム（什器・植栽）</li>
        </ul>
        <div className="sidebar">
          <p className="sidebar-label">注意点</p>
          <p>施主支給品の不具合は施主責任になる契約が多い。業務用機器はメーカー保証の有無を確認。施工日までに現場に届けておく必要がある（工期ズレのリスク）。</p>
        </div>

        <h3 className="section-heading">6-3. 技③ DIY併走</h3>
        <p>オーナーがプロと一緒に作業する<strong>DIY併走型</strong>は、費用を削るうえに愛着も生まれます。</p>
        <div className="pro-con">
          <div className="pro-con-col pro">
            <p className="pro-con-label">DIYに向いている</p>
            <ul>
              <li>塗装（下地処理はプロ、塗りは併走）</li>
              <li>壁紙貼り（狭面積・アクセント壁）</li>
              <li>簡単な棚・ディスプレイ造作</li>
              <li>装飾・小物配置</li>
              <li>掃除・養生剥がし</li>
            </ul>
          </div>
          <div className="pro-con-col con">
            <p className="pro-con-label">プロに任せるべき</p>
            <ul>
              <li>電気工事（資格必須）</li>
              <li>給排水工事（水漏れリスク）</li>
              <li>ガス工事（資格必須）</li>
              <li>防水工事（浸水リスク）</li>
              <li>耐震・構造に関わる大工仕事</li>
            </ul>
          </div>
        </div>
        <div className="jirei">
          <p className="jirei-title">実例：15坪カフェで人件費40万円カット</p>
          <p>塗装・壁紙貼り・棚取付をオーナー併走にした結果、<strong className="gold">人件費で約40万円カット</strong>できたケースあり。</p>
        </div>

        <h3 className="section-heading">6-4. 3つの技をセットで使う</h3>
        <div className="calc-box">
          <p>通常 <strong>400万円</strong>かかる15坪カフェを → <strong className="gold">200〜250万円</strong> で開業</p>
          <p className="calc-note">業態・物件次第ですが、実例ベースの圧縮幅です</p>
        </div>
        <p>ただし、これは<strong>早い段階から内装屋が関わっている場合</strong>に限ります。物件決定後に「安くしたい」と言われても、できることが限られます。だから記憶荘は<strong>物件探しから関わる</strong>ことにこだわっています。</p>
      </article>

      {/* ===== Ch.7 ===== */}
      <article className="page">
        <div className="page-header"><span>Ch.7 「未公開物件」の真実</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">Ch.7</span>「未公開物件」の真実と、依頼する時の注意</h2>

        <p>ここは Ch.1 の次に大事な章です。物件探しで誰もが気になる「非公開物件」について、内装屋から見た実態をお伝えします。</p>

        <h3 className="section-heading">7-1. 「未公開物件 = お宝」は本当か</h3>
        <p>「ネットに載っていない物件こそ良い物件」と思っていませんか。</p>
        <p>気持ちはよくわかります。「非公開」「未公開」と聞くと、選ばれた人だけが手に入れられるお宝物件のような響きがあります。</p>
        <p>でも、内装工事を通じてたくさんの出店・閉店を見てきた立場から言うと、<strong>実態はちょっと違います</strong>。</p>

        <h3 className="section-heading">7-2. 未公開物件が生まれる理由</h3>
        <div className="structure">
          <div className="structure-item">
            <p className="structure-title">パターン1: 売主・貸主の事情</p>
            <p className="structure-body">家族関係・相続の整理で表立って動かしたくない／経営上の理由で目立たず打診したい／過去のトラブル履歴があり一般公開を避けている</p>
          </div>
          <div className="structure-item">
            <p className="structure-title">パターン2: 仲介会社の囲い込み</p>
            <p className="structure-body">高確度の買い手（借り手）候補を先に当てたい／契約までの流れを管理したい／両手仲介（売主と買主両方から手数料）を狙いたい</p>
          </div>
          <div className="structure-item">
            <p className="structure-title">パターン3: 初期段階の「値付け探り」</p>
            <p className="structure-body"><strong>初期段階はむしろ強気の値付け</strong>のことが多い。「この値段で出したらどうか」を試している。売れ残ると値下げして一般公開される。<strong>同じ物件が数ヶ月後にネットに出ていることがザラ</strong>にあります。</p>
          </div>
        </div>

        <h3 className="section-heading">7-3. 「お得な未公開物件」がゼロではないが</h3>
        <p>もちろん、本当に条件の良い未公開物件もあります。</p>
        <ul>
          <li>仲介会社との長年の信頼関係の中で回ってくるもの</li>
          <li>内装屋として現場に居続けた結果、閉店情報を先に掴めるもの</li>
          <li>大家さんが「この人に貸したい」と指名で動かすもの</li>
        </ul>
        <p>こういう物件は、<strong>人間関係の上に成り立っている</strong>ので、情報収集目的だけの方にはお渡しできません。売主・大家さんからの信頼を壊してしまうからです。</p>

        <h3 className="section-heading">7-4. 依頼する時の注意点（NG / 推奨）</h3>
        <div className="pro-con">
          <div className="pro-con-col con">
            <p className="pro-con-label">❌ NG行動</p>
            <ul>
              <li>「面白い物件あったら全部見せて」と情報収集のみで依頼</li>
              <li>条件が定まらないまま、手当たり次第に内見申込</li>
              <li>他社にも並行して同じ物件を問い合わせる</li>
              <li>見せてもらった情報をSNS・ブログに流す</li>
            </ul>
          </div>
          <div className="pro-con-col pro">
            <p className="pro-con-label">✅ 推奨行動</p>
            <ul>
              <li>事業計画の骨子を先に固める（Ch.3 の3基準）</li>
              <li>予算・エリア・坪数・業種を明確に伝える</li>
              <li>内見は本気で検討する物件だけ</li>
              <li>断る時は「今回は見送ります」と早めに伝える</li>
            </ul>
          </div>
        </div>

        <h3 className="section-heading">7-5. 記憶荘に依頼する時、注意してほしいこと</h3>
        <p>率直に、記憶荘に依頼する時の「気をつけてほしい点」も書いておきます。</p>
        <div className="benefit-list">
          <div className="benefit-item"><span className="benefit-icon">⚠</span><p><strong>返信が翌日になることがあります</strong>：少人数で動いているので、夜間・休日の即レスはできません</p></div>
          <div className="benefit-item"><span className="benefit-icon">⚠</span><p><strong>合わない物件は紹介できません</strong>：条件に合わない物件を数合わせで紹介することはしません。「今はありません」と正直に答えます</p></div>
          <div className="benefit-item"><span className="benefit-icon">⚠</span><p><strong>営業はしません</strong>：こちらから追いかけて連絡することはしません。LINE ブロックも自由です</p></div>
          <div className="benefit-item"><span className="benefit-icon">⚠</span><p><strong>「この物件はやめた方がいい」と言います</strong>：内装屋の視点で厳しい物件は、本音で伝えます</p></div>
          <div className="benefit-item"><span className="benefit-icon">⚠</span><p><strong>大規模案件は得意ではありません</strong>：月10件程度が現実的な処理量。大型プロジェクトは別会社を紹介します</p></div>
        </div>
        <p>この条件で大丈夫であれば、ぜひご相談ください。</p>
      </article>

      {/* ===== Ch.8 ===== */}
      <article className="page">
        <div className="page-header"><span>Ch.8 失敗事例10選</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">Ch.8</span>失敗事例10選 — 内装屋が見てきた落とし穴</h2>

        <p>契約後に「あっ」となる典型的な失敗事例を集めました。先に知っておけば避けられます。</p>

        {[
          { n: 1, title: "電気容量が足りず、厨房フル稼働できなかった", sym: "30Aの物件でブレーカーが何度も落ちる", sol: "契約前に容量確認していれば、別物件 or 増設見積もりで判断できた" },
          { n: 2, title: "ダクトが通らず、希望業態を諦めた", sym: "ラーメン店予定だったがダクトルートが取れない", sol: "内装屋に先に見てもらっていれば、別物件を選べた" },
          { n: 3, title: "家賃が売上に対して重すぎた", sym: "月商見込み300万 → 実際150万、家賃35万で2年で撤退", sol: "売上目標の70%で固定費が回る家賃を選ぶ" },
          { n: 4, title: "居抜きの造作売買が高すぎた", sym: "設備付き500万即決 → 実際は古く結局1000万オーバー", sol: "内装屋に設備状態を見てもらっていれば適正価格で交渉できた" },
          { n: 5, title: "スケルトン見積もりが「一式」だった", sym: "「内装工事一式600万」で契約 → 追加で最終900万", sol: "項目別見積もりを出す業者を選ぶ" },
          { n: 6, title: "保健所・消防の要件を見落とした", sym: "厨房レイアウトが許可下りずやり直し", sol: "設計段階で行政要件を織り込む" },
          { n: 7, title: "天井高が足りず、圧迫感のある空間に", sym: "2.2mの物件で客足が伸びなかった", sol: "最低2.4m、できれば2.6m以上" },
          { n: 8, title: "搬入経路を確認せず、冷蔵庫が入らなかった", sym: "業務用冷蔵庫が階段に入らず解体搬入", sol: "発注前に搬入経路を計測" },
          { n: 9, title: "退去時の原状回復範囲を確認していなかった", sym: "スケルトン返却で撤退時400万円", sol: "契約時に「どこまで戻すのか」を書面で確認" },
          { n: 10, title: "内装屋に頼むのが遅すぎた", sym: "物件契約済みで相談→ダクト制約で希望不可", sol: "物件決定前に相談していれば選択肢があった" },
        ].map((f) => (
          <div key={f.n} className="fail">
            <p className="fail-title"><span className="fail-num">{f.n}</span>{f.title}</p>
            <p className="fail-line"><span className="fail-label">症状：</span>{f.sym}</p>
            <p className="fail-line"><span className="fail-label">回避：</span>{f.sol}</p>
          </div>
        ))}
      </article>

      {/* ===== Ch.9 ===== */}
      <article className="page">
        <div className="page-header"><span>Ch.9 まとめ</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">Ch.9</span>まとめ — 最初の1歩の踏み出し方</h2>

        <p>ここまで読んでいただき、ありがとうございます。最後に、今日からできることを3つだけお伝えします。</p>

        <div className="step">
          <p className="step-num">Step 1: 自分の事業の「3基準」を書き出す</p>
          <p>客層（誰に来てほしいか）／形（席数・滞在・単価）／集客（路面・SNS・口コミ）。これが物件選びの全ての出発点。</p>
        </div>
        <div className="step">
          <p className="step-num">Step 2: 家賃上限を売上の 7〜10% で引く</p>
          <p>見込み月商の70%で固定費が回る家賃を上限に決める。これを超える物件は、どれだけ立地が良くても候補から外す。感情で契約すると後で自分を苦しめる。</p>
        </div>
        <div className="step">
          <p className="step-num">Step 3: 物件を見る前に、内装屋に相談する</p>
          <p>物件を見てから相談するのと、見る前に相談するのでは、選択肢の幅が全然違う。「まだ何も決まっていない」段階でOK。</p>
        </div>

        <h3 className="section-heading">この7つをメモしてください</h3>
        <ol className="ordered big">
          <li>物件選びは内装とセットで考える</li>
          <li>家賃は売上の10%以内（安全線は7%）</li>
          <li>電気・給排水・ダクト・天井高を契約前に必ず確認</li>
          <li>居抜きは「本当に安いか」を内装屋の目で判断</li>
          <li>施主支給・DIY併走で費用圧縮できる</li>
          <li>「未公開＝お得」とは限らない。条件が合えば紹介される</li>
          <li>原状回復の範囲を契約時に書面で確認</li>
        </ol>

        <div className="final-cta">
          <p className="final-title">ご相談はLINEから</p>
          <p>個別の相談・物件リクエスト・内見同行のお申込みは、記憶荘 LINE公式アカウントまで。</p>
          <p>すべて<strong className="gold">無料</strong>です。営業はしません。ブロックも自由です。</p>
          <p className="final-url">{LINE_URL_HP}</p>
        </div>
      </article>

      {/* ===== 付録A ===== */}
      <article className="page">
        <div className="page-header"><span>付録A エリア別 平均家賃データ</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">付録A</span>エリア別 平均家賃データ（仙台・宮城）</h2>
        <p className="note">1階路面店、坪単価（月額）。2026年4月時点の目安。</p>
        <table className="data-table">
          <thead><tr><th>エリア</th><th>坪単価</th><th>備考</th></tr></thead>
          <tbody>
            <tr><td>国分町（中心部）</td><td>1.2〜2.0万円</td><td>飲食・夜系集積</td></tr>
            <tr><td>仙台駅西口</td><td>1.5〜2.5万円</td><td>駅近最強立地</td></tr>
            <tr><td>仙台駅東口</td><td>1.2〜1.8万円</td><td>再開発進行</td></tr>
            <tr><td>青葉通</td><td>1.3〜2.0万円</td><td>オフィス街</td></tr>
            <tr><td>一番町（アーケード）</td><td>1.5〜2.8万円</td><td>物販・カフェ</td></tr>
            <tr><td>定禅寺通</td><td>1.0〜1.6万円</td><td>カフェ・美容</td></tr>
            <tr><td>勾当台公園周辺</td><td>0.9〜1.4万円</td><td>昼夜バランス</td></tr>
            <tr><td>北四番丁・東照宮</td><td>0.7〜1.1万円</td><td>住宅地近接</td></tr>
            <tr><td>泉中央</td><td>0.7〜1.2万円</td><td>ファミリー需要</td></tr>
            <tr><td>長町（副都心）</td><td>0.7〜1.1万円</td><td>再開発・注目</td></tr>
            <tr><td>八木山・愛子</td><td>0.5〜0.9万円</td><td>郊外住宅地</td></tr>
            <tr><td>宮城野区（新田・荒井）</td><td>0.6〜1.0万円</td><td>東西線沿線</td></tr>
            <tr><td>若林区（卸町・若林）</td><td>0.5〜0.9万円</td><td>中心近・コスパ良</td></tr>
            <tr><td>名取市</td><td>0.5〜0.9万円</td><td>イオン系・ロード</td></tr>
            <tr><td>多賀城市</td><td>0.4〜0.8万円</td><td>仙台通勤圏</td></tr>
            <tr><td>塩釜市</td><td>0.4〜0.7万円</td><td>港町・観光系</td></tr>
            <tr><td>石巻市</td><td>0.4〜0.8万円</td><td>復興商業地</td></tr>
          </tbody>
        </table>
        <p className="note">※ ビル階数・築年・入居付きサービス・共益費の有無で変動します。敷金・礼金・保証金は別途。飲食は保証金が家賃12ヶ月分以上の物件もあります。</p>
      </article>

      {/* ===== 付録B ===== */}
      <article className="page">
        <div className="page-header"><span>付録B 用語集</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">付録B</span>店舗物件・内装の用語集</h2>
        <dl className="yougoshu">
          <dt>居抜き（いぬき）</dt><dd>前テナントの内装・設備を残したまま、次のテナントに引き渡す物件。造作譲渡料が発生する場合あり。</dd>
          <dt>スケルトン</dt><dd>内装・設備が何もない、コンクリート躯体の状態。自由度が高いが工事費も高い。</dd>
          <dt>造作（ぞうさく）</dt><dd>内装で作り付けの家具・カウンター・棚など。物件から取り外せない固定物。</dd>
          <dt>造作譲渡（ぞうさくじょうと）</dt><dd>前テナントの造作・設備を買い取ること。50万円〜数百万円の幅あり。</dd>
          <dt>原状回復（げんじょうかいふく）</dt><dd>退去時に物件を契約当初の状態に戻すこと。スケルトン返却・居抜きOKなどバリエーションあり。</dd>
          <dt>坪単価（つぼたんか）</dt><dd>1坪（約3.3㎡）あたりの内装工事費。総工費 ÷ 坪数で算出。</dd>
          <dt>動力（どうりょく）</dt><dd>三相200Vの電源。業務用エアコン・大型厨房機器に必要。</dd>
          <dt>アンペア数（A）</dt><dd>電気容量。30A・50A・100Aなど。業態に応じて必要量が変わる。</dd>
          <dt>防火区画（ぼうかくかく）</dt><dd>火災時の延焼を防ぐための建築上の区画。用途変更で追加工事が必要な場合あり。</dd>
          <dt>排煙設備（はいえんせつび）</dt><dd>火災時に煙を排出する設備。店舗面積が一定規模を超えると設置義務。</dd>
          <dt>施主支給（せしゅしきゅう）</dt><dd>オーナーが直接購入した材料・什器を、内装業者が設置すること。中間マージンをカットできる。</dd>
          <dt>DIY併走</dt><dd>オーナーと内装業者が一緒に作業すること。人件費を削減できる。記憶荘の得意技。</dd>
          <dt>仕上げ表（しあげひょう）</dt><dd>各部屋の床・壁・天井の素材を一覧化した設計書類。</dd>
          <dt>平面図（へいめんず）</dt><dd>物件を上から見た図。設備・家具の配置を示す。</dd>
          <dt>立面図（りつめんず）</dt><dd>物件の壁・窓を横から見た図。高さ方向の情報。</dd>
          <dt>パース</dt><dd>内装の完成イメージを描いた3D的な画像。AI生成でコストが下がりつつある。</dd>
        </dl>
      </article>

      {/* ===== 付録C ===== */}
      <article className="page">
        <div className="page-header"><span>付録C 退去時の原状回復</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">付録C</span>退去時の原状回復 — 契約前にここだけ見ておく</h2>

        <p>退去時のトラブルを避けるため、<strong>契約時に必ず確認</strong>する3点。</p>

        <h3 className="section-heading">C-1. 「原状回復」の範囲</h3>
        <p>契約書の「原状回復」の定義を確認：</p>
        <ul>
          <li><strong>スケルトン返却</strong>: 全部撤去して躯体状態に戻す（費用大）</li>
          <li><strong>居抜きOK（造作残置可）</strong>: 次のテナントに造作を残せる（費用小）</li>
          <li><strong>部分原状回復</strong>: 指定箇所のみ戻す</li>
        </ul>
        <div className="sidebar">
          <p className="sidebar-label">最悪のパターン</p>
          <p>契約時に「原状回復」としか書かれていない → 退去時に「スケルトン返却」を要求される → <strong>数百万円の撤去費用</strong>。契約前に<strong>「退去時にどこまで戻すのか」を書面で明確化</strong>。できれば「居抜き譲渡可」の条項を入れてもらう。</p>
        </div>

        <h3 className="section-heading">C-2. 通常損耗・経年劣化の扱い</h3>
        <ul>
          <li>壁紙の日焼け、床の使用感 → これらは<strong>通常損耗</strong>として借主負担ではないのが原則</li>
          <li>ただし<strong>「特約」で借主負担</strong>にしている契約も多い</li>
          <li>特約の有無を契約書で確認</li>
        </ul>

        <h3 className="section-heading">C-3. 敷金・保証金の返還条件</h3>
        <ul>
          <li>敷金は原状回復費用に充当 → 残額返還</li>
          <li>保証金は契約上の特約で<strong>償却</strong>（返還されない部分）がある場合が多い</li>
          <li>「保証金 300万円・償却 150万円」= 退去時に戻るのは最大 150万円</li>
        </ul>

        <h3 className="section-heading">C-4. 退去時に揉めないための予防策</h3>
        <ol className="ordered">
          <li><strong>契約時に撮影</strong>: 入居時の状態を写真・動画で記録</li>
          <li><strong>退去条項のコピー保管</strong>: 契約書の該当箇所を別途保存</li>
          <li><strong>途中の工事履歴を残す</strong>: 大家承諾を取った工事は書面で残す</li>
          <li><strong>退去 6ヶ月前から準備</strong>: 原状回復の見積もり、次のテナント候補の打診</li>
        </ol>
      </article>

      {/* ===== 付録D FAQ ===== */}
      <article className="page">
        <div className="page-header"><span>付録D よくある質問</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">付録D</span>よくある質問</h2>
        <dl className="yougoshu">
          {guideFaqs.map((faq, i) => (
            <div key={i} style={{ marginBottom: "16px" }}>
              <dt>Q. {faq.q}</dt>
              <dd>A. {faq.a}</dd>
            </div>
          ))}
        </dl>

        <div className="closing">
          <p>© 2026 記憶荘 店舗内装スタジオ</p>
          <p className="closing-sub">仙台の店舗内装を、物件探しから手伝う内装屋。</p>
          <p>kiokuso.jp ／ LINE相談はこちらから</p>
        </div>
      </article>
    </div>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&family=Noto+Serif+JP:wght@500;700&display=swap');

.guide-root {
  min-height: 100vh;
  background: #F8F5F0;
  padding: 20px 0;
  font-family: 'Noto Sans JP', sans-serif;
  color: #3A2816;
}

.guide-root *, .guide-root *::before, .guide-root *::after {
  box-sizing: border-box;
}

/* Screen nav */
.guide-nav {
  position: sticky;
  top: 0;
  z-index: 10;
  max-width: 840px;
  margin: 0 auto 20px;
  padding: 12px 24px;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(8px);
  border: 1px solid #e8e2d4;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.guide-nav-brand {
  font-size: 14px;
  font-weight: 700;
  color: #3A2816;
  text-decoration: none;
  letter-spacing: 0.1em;
}

.guide-nav-actions {
  display: flex;
  gap: 10px;
  align-items: center;
}

.guide-nav-print {
  padding: 8px 14px;
  font-size: 12px;
  font-weight: 700;
  background: #fff;
  border: 1px solid #C9A84C;
  color: #5C3A21;
  border-radius: 6px;
  cursor: pointer;
}

.guide-nav-line {
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 700;
  background: #06C755;
  color: #fff;
  border-radius: 6px;
  text-decoration: none;
}

/* Page (一枚のA4想定) */
.page {
  max-width: 840px;
  margin: 0 auto 20px;
  padding: 60px 56px;
  background: #fff;
  border: 1px solid #e8e2d4;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  position: relative;
}

.page p {
  font-size: 14px;
  line-height: 1.9;
  margin-bottom: 14px;
  color: #3a3a3a;
}

.page strong {
  color: #3A2816;
  font-weight: 700;
}

.page .gold {
  color: #C9A84C;
}

.page ul, .page ol {
  padding-left: 20px;
  margin-bottom: 14px;
}

.page ul li, .page ol li {
  font-size: 14px;
  line-height: 1.9;
  margin-bottom: 6px;
  color: #3a3a3a;
}

.page ol.big li {
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 10px;
}

.page .note {
  font-size: 13px;
  color: #8a7a68;
  font-style: italic;
}

.page a {
  color: #5C3A21;
  text-decoration: underline;
}

/* Cover */
.guide-cover {
  background: linear-gradient(135deg, #F8F5F0 0%, #EBE0CE 60%, #D9C9AC 100%);
  color: #3A2816;
  padding: 80px 56px 60px;
  text-align: center;
  position: relative;
  min-height: auto;
}

.cover-accent-top, .cover-accent-bottom {
  position: absolute;
  left: 0;
  right: 0;
  height: 6px;
  background: #C9A84C;
}
.cover-accent-top { top: 0; }
.cover-accent-bottom { bottom: 0; }

.cover-category {
  font-size: 14px !important;
  font-weight: 500;
  color: #C9A84C !important;
  letter-spacing: 0.4em;
  margin-bottom: 16px !important;
  text-transform: uppercase;
}

.cover-hr {
  width: 60px;
  height: 2px;
  background: #C9A84C;
  border: none;
  margin: 0 auto 40px;
}

.cover-title {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin: 40px 0;
}

.cover-title-l1, .cover-title-l2, .cover-title-l3 {
  font-family: 'Noto Serif JP', serif;
  font-weight: 700;
  color: #3A2816;
  line-height: 1.1;
  letter-spacing: 0.08em;
}

.cover-title-l1 { font-size: 46px; }
.cover-title-l2 { font-size: 64px; }
.cover-title-l3 { font-size: 64px; color: #C9A84C; }

.cover-subtitle {
  font-size: 14px !important;
  color: rgba(58,40,22,0.7) !important;
  letter-spacing: 0.1em;
  margin-top: 32px !important;
  margin-bottom: 48px !important;
}

.cover-chapters {
  list-style: none !important;
  padding: 0 !important;
  text-align: left;
  max-width: 420px;
  margin: 0 auto 60px !important;
}

.cover-chapters li {
  font-size: 14px !important;
  color: rgba(58,40,22,0.8) !important;
  padding: 6px 0;
  letter-spacing: 0.04em;
  font-weight: 500;
}

.cover-footer {
  margin-top: 60px;
}

.cover-footer-hr {
  width: 100px;
  height: 1px;
  background: #C9A84C;
  border: none;
  margin: 0 auto 20px;
  opacity: 0.5;
}

.cover-brand {
  font-size: 16px !important;
  font-weight: 700;
  color: #3A2816 !important;
  letter-spacing: 0.15em;
  margin-bottom: 6px !important;
}

.cover-url {
  font-size: 12px !important;
  color: rgba(58,40,22,0.4) !important;
  letter-spacing: 0.1em;
}

/* Page header */
.page-header {
  position: absolute;
  top: 20px;
  right: 28px;
  font-size: 10px;
  color: #C9A84C;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 700;
}

/* Chapter headings */
.chapter-heading {
  font-family: 'Noto Serif JP', serif;
  font-size: 24px;
  font-weight: 700;
  color: #3A2816;
  margin-bottom: 28px;
  padding-bottom: 14px;
  border-bottom: 2px solid #C9A84C;
  line-height: 1.4;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 12px;
}

.chapter-heading-toc {
  font-family: 'Noto Serif JP', serif;
  font-size: 32px;
  font-weight: 700;
  color: #3A2816;
  text-align: center;
  margin: 20px 0 40px;
}

.chapter-no {
  font-size: 14px;
  font-weight: 500;
  color: #C9A84C;
  background: rgba(201,168,76,0.08);
  padding: 4px 12px;
  border-radius: 20px;
  letter-spacing: 0.1em;
}

.section-heading {
  font-size: 17px;
  font-weight: 700;
  color: #3A2816;
  margin: 32px 0 14px;
  padding-left: 14px;
  border-left: 4px solid #C9A84C;
  line-height: 1.5;
}

.sub-heading {
  font-size: 15px;
  font-weight: 700;
  color: #5C3A21;
  margin: 22px 0 10px;
}

.subhead {
  font-size: 13px !important;
  font-weight: 700;
  color: #5C3A21;
  margin-top: 14px !important;
  margin-bottom: 6px !important;
}

/* TOC */
.toc-list {
  list-style: none !important;
  padding: 0 !important;
  max-width: 600px;
  margin: 0 auto;
}

.toc-list li {
  display: flex;
  gap: 14px;
  padding: 10px 0;
  border-bottom: 1px dashed #e8e2d4;
  font-size: 14px;
}

.toc-num {
  flex-shrink: 0;
  width: 56px;
  font-weight: 700;
  color: #C9A84C;
  letter-spacing: 0.05em;
}

/* Quote / blockquote */
.quote {
  background: linear-gradient(135deg, #FCF8F0 0%, #F3EBDA 100%);
  border-left: 4px solid #C9A84C;
  padding: 16px 22px;
  font-size: 16px !important;
  font-weight: 500;
  color: #3A2816 !important;
  border-radius: 0 6px 6px 0;
  margin: 18px 0;
  font-family: 'Noto Serif JP', serif;
}

/* Data table */
.data-table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;
  font-size: 13px;
}

.data-table thead {
  background: #3A2816;
  color: #fff;
}

.data-table th {
  padding: 10px 12px;
  text-align: left;
  font-weight: 500;
  letter-spacing: 0.04em;
}

.data-table td {
  padding: 9px 12px;
  border-bottom: 1px solid #e8e2d4;
  vertical-align: middle;
  color: #3a3a3a;
}

.data-table tr:hover td {
  background: #FCF8F0;
}

/* Sidebar (内装屋視点 box) */
.sidebar {
  background: linear-gradient(135deg, #F3EBDA 0%, #EADFC9 100%);
  border: 1px solid #D9C9AC;
  border-radius: 8px;
  padding: 16px 22px;
  margin: 20px 0;
}

.sidebar-label {
  font-size: 12px !important;
  font-weight: 700;
  color: #C9A84C !important;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 8px !important;
}

.sidebar p:not(.sidebar-label) {
  font-size: 13px !important;
  color: #3a3a3a !important;
  margin-bottom: 0 !important;
  line-height: 1.8 !important;
}

/* Checklist */
.checklist {
  background: #FCF8F0;
  border: 1px solid #e8e2d4;
  border-radius: 8px;
  padding: 20px 24px;
  margin: 20px 0;
}

.checklist-title {
  font-size: 14px !important;
  font-weight: 700;
  color: #3A2816 !important;
  margin-bottom: 14px !important;
}

.checklist-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 18px;
}

.checklist-group {
  font-size: 12px !important;
  font-weight: 700;
  color: #C9A84C !important;
  margin-bottom: 6px !important;
}

.checklist p:not(.checklist-title):not(.checklist-group) {
  font-size: 12px !important;
  color: #3a3a3a !important;
  line-height: 2 !important;
  margin-bottom: 0 !important;
}

/* Jirei (事例カード) */
.jirei {
  background: #fff;
  border: 1px solid #e0d8cc;
  border-left: 4px solid #C9A84C;
  border-radius: 0 6px 6px 0;
  padding: 14px 18px;
  margin: 12px 0;
}

.jirei-title {
  font-size: 13px !important;
  font-weight: 700;
  color: #5C3A21 !important;
  margin-bottom: 6px !important;
}

.jirei ul {
  margin-bottom: 0 !important;
  padding-left: 20px;
}

.jirei li {
  font-size: 13px !important;
  color: #3a3a3a !important;
  line-height: 1.8 !important;
  margin-bottom: 4px !important;
}

/* Calc box */
.calc-box {
  background: #3A2816;
  color: #fff;
  padding: 18px 22px;
  border-radius: 8px;
  margin: 16px 0;
  text-align: center;
}

.calc-box p {
  color: #fff !important;
  font-size: 14px !important;
  margin-bottom: 8px !important;
}

.calc-box p:last-child {
  margin-bottom: 0 !important;
}

.calc-note {
  color: rgba(255,255,255,0.6) !important;
  font-size: 11px !important;
  font-style: italic;
}

/* Fail case */
.fail {
  background: #fff;
  border: 1px solid #e0d8cc;
  border-left: 4px solid #C44D3F;
  border-radius: 0 6px 6px 0;
  padding: 12px 16px;
  margin-bottom: 10px;
}

.fail-title {
  font-size: 13px !important;
  font-weight: 700;
  color: #3A2816 !important;
  margin-bottom: 6px !important;
}

.fail-num {
  display: inline-block;
  width: 22px;
  height: 22px;
  background: #C44D3F;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  font-size: 11px;
  font-weight: 700;
  line-height: 22px;
  margin-right: 8px;
}

.fail-line {
  font-size: 12px !important;
  color: #666 !important;
  margin-bottom: 2px !important;
  line-height: 1.6 !important;
}

.fail-label {
  font-weight: 700;
  color: #C44D3F;
  margin-right: 4px;
}

/* Step */
.step {
  background: linear-gradient(135deg, #FCF8F0 0%, #F3EBDA 100%);
  border: 1px solid #D9C9AC;
  border-radius: 8px;
  padding: 14px 18px;
  margin-bottom: 10px;
}

.step-num {
  font-size: 14px !important;
  font-weight: 700;
  color: #5C3A21 !important;
  margin-bottom: 4px !important;
}

.step p:last-child {
  font-size: 13px !important;
  color: #3a3a3a !important;
  margin-bottom: 0 !important;
}

/* Final CTA */
.final-cta {
  background: linear-gradient(135deg, #3A2816 0%, #5C3A21 100%);
  color: #fff;
  padding: 32px 28px;
  border-radius: 12px;
  text-align: center;
  margin-top: 40px;
}

.final-cta p {
  color: rgba(255,255,255,0.8) !important;
  margin-bottom: 10px !important;
}

.final-title {
  font-size: 20px !important;
  font-weight: 700;
  color: #fff !important;
  letter-spacing: 0.05em;
}

.final-url {
  font-size: 13px !important;
  color: #C9A84C !important;
  margin-top: 16px !important;
  word-break: break-all;
}

/* 用語集 */
.yougoshu { margin-top: 20px; }

.yougoshu dt {
  font-size: 14px;
  font-weight: 700;
  color: #3A2816;
  margin-top: 14px;
  padding-bottom: 4px;
  border-bottom: 1px dashed #D9C9AC;
}

.yougoshu dd {
  font-size: 13px;
  line-height: 1.8;
  color: #3a3a3a;
  margin: 6px 0 0;
  padding-left: 16px;
}

.closing {
  margin-top: 50px;
  padding-top: 20px;
  border-top: 2px solid #C9A84C;
  text-align: center;
}

.closing p {
  font-size: 12px !important;
  color: #8a7a68 !important;
  margin-bottom: 4px !important;
}

.closing-sub {
  font-size: 13px !important;
  color: #5C3A21 !important;
  font-weight: 500;
}

/* Structure list */
.structure { margin: 18px 0; }

.structure-item {
  background: #fff;
  border-left: 4px solid #5C3A21;
  border-top: 1px solid #e0d8cc;
  border-right: 1px solid #e0d8cc;
  border-bottom: 1px solid #e0d8cc;
  border-radius: 0 8px 8px 0;
  padding: 14px 18px;
  margin-bottom: 10px;
}

.structure-title {
  font-size: 14px !important;
  font-weight: 700;
  color: #3A2816 !important;
  margin-bottom: 6px !important;
}

.structure-body {
  font-size: 13px !important;
  color: #555 !important;
  line-height: 1.8 !important;
  margin-bottom: 0 !important;
}

/* Benefit list */
.benefit-list {
  background: linear-gradient(135deg, #FCF8F0 0%, #F3EBDA 100%);
  border: 1px solid #D9C9AC;
  border-radius: 10px;
  padding: 20px 24px;
  margin: 20px 0;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 10px;
}

.benefit-item:last-child { margin-bottom: 0; }

.benefit-icon {
  color: #C9A84C;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.4;
  flex-shrink: 0;
}

.benefit-item p {
  margin-bottom: 0 !important;
  font-size: 14px !important;
  color: #3A2816 !important;
  line-height: 1.7 !important;
}

/* Profile cards */
.profile-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 20px 0;
}

.profile-card {
  background: #3A2816;
  color: #fff;
  border-radius: 10px;
  padding: 20px 16px;
  text-align: center;
  border: 1px solid #5C3A21;
}

.profile-name {
  font-size: 22px !important;
  font-weight: 900;
  color: #fff !important;
  margin-bottom: 4px !important;
  letter-spacing: 0.1em;
}

.profile-role {
  font-size: 11px !important;
  color: #C9A84C !important;
  margin-bottom: 10px !important;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.profile-desc {
  font-size: 12px !important;
  color: rgba(255,255,255,0.7) !important;
  line-height: 1.7 !important;
  margin-bottom: 0 !important;
}

/* Pro-Con (two columns) */
.pro-con {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 18px 0;
}

.pro-con-col {
  padding: 14px 18px;
  border-radius: 8px;
  border: 1px solid #e0d8cc;
}

.pro-con-col.pro {
  background: #F0F7F0;
  border-color: #c8dac0;
}

.pro-con-col.con {
  background: #FCF2EE;
  border-color: #e8ccc0;
}

.pro-con-label {
  font-size: 12px !important;
  font-weight: 700;
  letter-spacing: 0.1em;
  margin-bottom: 8px !important;
}

.pro-con-col.pro .pro-con-label { color: #4A6741 !important; }
.pro-con-col.con .pro-con-label { color: #C44D3F !important; }

.pro-con-col ul {
  padding-left: 18px;
  margin-bottom: 0 !important;
}

.pro-con-col li {
  font-size: 12px !important;
  line-height: 1.7 !important;
  margin-bottom: 4px !important;
  color: #3a3a3a !important;
}

@media (max-width: 640px) {
  .page {
    padding: 40px 24px;
  }
  .checklist-grid {
    grid-template-columns: 1fr;
  }
  .cover-title-l2, .cover-title-l3 {
    font-size: 40px;
  }
  .profile-cards, .pro-con {
    grid-template-columns: 1fr;
  }
  .chapter-heading { font-size: 20px; }
  .cover-title-l1 { font-size: 34px; }
}

/* 印刷用 */
@media print {
  @page { size: A4; margin: 15mm 12mm; }

  .guide-root {
    background: #fff !important;
    padding: 0 !important;
  }

  .screen-only { display: none !important; }

  .page {
    box-shadow: none !important;
    border-radius: 0 !important;
    margin: 0 !important;
    padding: 20mm 15mm !important;
    min-height: auto !important;
    page-break-after: always;
    max-width: none !important;
  }

  .guide-cover { min-height: 260mm !important; }

  .data-table, .jirei, .fail, .step, .sidebar, .checklist, .pro-con, .structure {
    page-break-inside: avoid;
  }
}
`;
