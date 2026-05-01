import { Link } from "react-router-dom";
import { LINE_URL_HP } from "../../shared/design-tokens";

const guideFaqs = [
  { q: "このガイドは無料ですか？", a: "はい、完全無料です。工事をご依頼いただいた段階で対価をいただきます。相談・物件紹介の段階で費用は発生しません。" },
  { q: "まだ何も決まっていませんが、相談できますか？", a: "むしろ、決まっていない段階から相談に来てもらった方が助かります。条件整理から一緒にやります。" },
  { q: "他の内装屋との違いは？", a: "物件探しの段階から関わる点です。多くの内装屋は物件決定後の相談しか受けませんが、記憶荘は物件を見る前から入ります。" },
  { q: "DIYで自分でやりたい部分があります", a: "歓迎します。電気・給排水・ガスなど事故リスクの高い工事だけ記憶荘で請け、塗装・装飾などはご自身で進める形が、コストが一番下がります。" },
  { q: "相見積もりしていいですか？", a: "もちろんです。他社と比較して決めてもらう方が、後の信頼関係もすっきりします。" },
  { q: "正直に話すと、足元を見られませんか？", a: "仲介料・コンサル料は0円、内装工事を他社に出してもOKという関係でやっています。情報を引き出して足元を見るインセンティブが構造的にありません。むしろ正直な情報があるほど提案の精度が上がります。" },
  { q: "私は窓口で、決めるのは家族なんですが？", a: "大丈夫です。ただ最初にそれを伝えてください。窓口の方が判断できる範囲を意識した提案にする、要所で本人とのMTGを組む、など効率が大きく変わります。決定者と話す機会のないまま進むと、お互い消耗します。" },
  { q: "最初に話しておくべきことは？", a: "3点あります。①経営経験・家族のバックボーン ②何を「成功」と呼ぶか（生計／趣味／投資のどれか）③最終決定者は誰か。この3点が分かると提案の方向性が一気に決まります。" },
  { q: "生計ではなく趣味的に続けたい場合は？", a: "標準提案は「生計を立てる規模」前提なので、最初に「趣味モードで続けたい」と一言伝えてください。家賃・初期費用・撤退ラインを含めて無理なく続く設計に切り替えます。" },
];

const guideSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "テナント攻略ガイド",
  description: "仙台・宮城で店舗を始める方のためのテナント物件選びガイド。元不動産20年×大工20年の視点で、物件選びの失敗を防ぐ知識を体系化。",
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

export default function TenantGuidePage() {
  return (
    <div className="guide-root">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSchema) }} />
      <style>{styles}</style>

      <nav className="guide-nav screen-only">
        <Link to="/" className="guide-nav-brand">記憶荘</Link>
        <div className="guide-nav-actions">
          <button onClick={() => window.print()} className="guide-nav-print">🖨️ PDFで保存</button>
          <a href={LINE_URL_HP} target="_blank" rel="noopener noreferrer" className="guide-nav-line">LINE相談</a>
        </div>
      </nav>

      {/* 表紙 */}
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
          <li>◆ 記憶荘の3つの強み</li>
          <li>◆ なぜ物件探しから関わるのか</li>
          <li>◆ 「未公開物件」の真実</li>
          <li>◆ 物件選びの3基準</li>
          <li>◆ 内装屋の設備チェック</li>
          <li>◆ 費用を圧縮する3つの技</li>
          <li>◆ 契約条件の交渉テクニック</li>
          <li>◆ AIパースで事前プレビュー</li>
          <li>◆ 失敗事例10選</li>
        </ul>
        <div className="cover-footer">
          <hr className="cover-footer-hr" />
          <p className="cover-brand">記憶荘 店舗内装スタジオ</p>
          <p className="cover-url">kiokuso.jp</p>
        </div>
        <div className="cover-accent-bottom" />
      </article>

      {/* ===== Ch.1 記憶荘の3つの強み ===== */}
      <article className="page">
        <div className="page-header"><span>Ch.1 WHY US</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">Ch.1</span>記憶荘の3つの強み</h2>

        <div className="strength-grid">
          <div className="strength-card">
            <div className="strength-num">01</div>
            <p className="strength-title">物件探しから<br />関わる</p>
            <p className="strength-desc">物件決定後ではなく、<br />見る前から相談OK。<br />選択肢の幅が段違い。</p>
          </div>
          <div className="strength-card">
            <div className="strength-num">02</div>
            <p className="strength-title">各分野の<br />職人が集結</p>
            <p className="strength-desc">不動産・大工・設備・<br />電工・塗装・左官。<br />各プロが各プロの仕事を。</p>
          </div>
          <div className="strength-card">
            <div className="strength-num">03</div>
            <p className="strength-title">物件売買では<br />儲けない中立</p>
            <p className="strength-desc">内装工事で対価を<br />いただく立場だから、<br />「やめた方がいい」も言える。</p>
          </div>
        </div>

        <figure className="guide-figure">
          <img src="/images/kai-ken-onsite-check-sm.webp" alt="現地で打ち合わせする職人" loading="lazy" />
          <figcaption>物件ごとに必要な職人が集まって判断する。見る目が違えば、判断は早くなる。</figcaption>
        </figure>

        <h3 className="section-heading">窓口となる中心メンバー</h3>
        <div className="profile-cards">
          <div className="profile-card">
            <img src="/images/about-kai-sm.webp" alt="KAI" className="profile-photo" loading="lazy" />
            <p className="profile-name">KAI</p>
            <p className="profile-role">不動産 20年</p>
            <p className="profile-desc">物件の見極め・<br />交渉・相談の窓口</p>
          </div>
          <div className="profile-card">
            <img src="/images/about-ken-sm.webp" alt="KEN" className="profile-photo" loading="lazy" />
            <p className="profile-name">KEN</p>
            <p className="profile-role">大工 20年超</p>
            <p className="profile-desc">設計から施工まで<br />現場を動かす技術</p>
          </div>
        </div>

        <h3 className="section-heading">集まる職人たち</h3>
        <p className="crew-intro">現場に必要な腕を必要なだけ。長く一緒に仕事をしてきた、各分野でプライドを持つ職人が集結します。</p>
        <div className="crew-grid">
          <div className="crew-chip"><span className="crew-icon">🔨</span><p className="crew-role">大工</p><p className="crew-yrs">20年超</p></div>
          <div className="crew-chip"><span className="crew-icon">⚡</span><p className="crew-role">電工</p><p className="crew-yrs">有資格</p></div>
          <div className="crew-chip"><span className="crew-icon">🔧</span><p className="crew-role">設備</p><p className="crew-yrs">給排水・ガス</p></div>
          <div className="crew-chip"><span className="crew-icon">🎨</span><p className="crew-role">塗装</p><p className="crew-yrs">仕上げ専門</p></div>
          <div className="crew-chip"><span className="crew-icon">🪵</span><p className="crew-role">建具・家具</p><p className="crew-yrs">造作</p></div>
          <div className="crew-chip"><span className="crew-icon">🏠</span><p className="crew-role">左官・タイル</p><p className="crew-yrs">手仕事</p></div>
          <div className="crew-chip"><span className="crew-icon">📐</span><p className="crew-role">設計</p><p className="crew-yrs">店舗特化</p></div>
          <div className="crew-chip"><span className="crew-icon">🏢</span><p className="crew-role">不動産</p><p className="crew-yrs">20年</p></div>
        </div>

        <h3 className="section-heading">逆に、記憶荘が不得意なこと</h3>
        <p className="crew-intro">合う方／合わない方がはっきりあります。先にお伝えしておきます。</p>
        <div className="weak-grid">
          <div className="weak-card">
            <p className="weak-head">大規模・多店舗同時展開</p>
            <p className="weak-sub">月10件前後が現実的な上限。全国チェーンの同時出店には対応できません。</p>
          </div>
          <div className="weak-card">
            <p className="weak-head">ラグジュアリー・高級路線</p>
            <p className="weak-sub">得意は気取らない店・手触りのある空間。高級ホテル的な空気感は他社向き。</p>
          </div>
          <div className="weak-card">
            <p className="weak-head">超短納期（1週間切り）</p>
            <p className="weak-sub">品質を落とさないため、最低2週間以上いただくのが基本です。</p>
          </div>
          <div className="weak-card">
            <p className="weak-head">提案書・3Dパース量産</p>
            <p className="weak-sub">コンペ対応や大量のプレゼン資料制作はしません。打合せと実物で決めていきます。</p>
          </div>
          <div className="weak-card">
            <p className="weak-head">仙台都市圏の外</p>
            <p className="weak-sub">宮城県内中心。県外は内容と距離次第で応相談です。</p>
          </div>
          <div className="weak-card">
            <p className="weak-head">丸投げでの進行</p>
            <p className="weak-sub">物件判断・業態設計・費用圧縮はオーナーと一緒に決めたい。お任せ一括では力が出ません。</p>
          </div>
        </div>
      </article>

      {/* ===== Ch.2 なぜ物件探しから関わるのか ===== */}
      <article className="page">
        <div className="page-header"><span>Ch.2 WHY EARLY</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">Ch.2</span>なぜ物件探しから関わるのか</h2>

        <div className="when-compare">
          <div className="when-col bad">
            <p className="when-label">❌ よくある順番</p>
            <div className="when-flow">
              <div className="when-step">物件決定</div>
              <div className="when-arrow">→</div>
              <div className="when-step">内装屋に<br />相談</div>
              <div className="when-arrow">→</div>
              <div className="when-step">見積もり</div>
            </div>
            <div className="when-result bad-result">
              <p className="when-result-label">できることが限定</p>
              <ul>
                <li>設備が貧弱なら補う工事を乗せる</li>
                <li>ダクトが通らない業態は諦め</li>
                <li>家賃が重すぎても後戻り不可</li>
              </ul>
            </div>
          </div>

          <div className="when-col good">
            <p className="when-label">✅ 記憶荘の順番</p>
            <div className="when-flow">
              <div className="when-step">条件整理</div>
              <div className="when-arrow">→</div>
              <div className="when-step">物件を<br />一緒に見る</div>
              <div className="when-arrow">→</div>
              <div className="when-step">物件決定<br />＋設計</div>
            </div>
            <div className="when-result good-result">
              <p className="when-result-label">選択肢が広い</p>
              <ul>
                <li>「そもそもこの物件でいいか」から判断</li>
                <li>設備・家賃・立地を事業に合わせて選べる</li>
                <li>やめる選択肢も残せる</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="callout">
          <p className="callout-big">物件が決まった後の相談は<br /><strong>「できることの中で最大限やる」</strong>しかない。</p>
          <p className="callout-big">物件を決める前の相談は<br /><strong className="gold">「そもそもこの物件でいいのか」</strong>から考えられる。</p>
        </div>

        <figure className="guide-figure">
          <img src="/images/consultation-salon-owner-sm.webp" alt="物件探し段階のご相談" loading="lazy" />
          <figcaption>まだ何も決まっていない段階からが、一番話しやすいタイミング。</figcaption>
        </figure>
      </article>

      {/* ===== Ch.3 「未公開物件」の真実 ===== */}
      <article className="page">
        <div className="page-header"><span>Ch.3 HIDDEN PROPERTIES</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">Ch.3</span>「未公開物件」の真実と、依頼時の注意</h2>

        <figure className="guide-figure">
          <img src="/images/fudousan-keys-sm.webp" alt="物件の鍵" loading="lazy" />
        </figure>

        <div className="myth-box">
          <p className="myth-q">「ネットに載ってない物件こそ<br />お宝」は本当？</p>
          <p className="myth-a">→ 実はちょっと違います</p>
        </div>

        <h3 className="section-heading">非公開になる 3つの理由</h3>
        <div className="pattern-grid">
          <div className="pattern-card">
            <div className="pattern-icon">🔐</div>
            <p className="pattern-title">貸主の事情</p>
            <p className="pattern-desc">相続・家族・経営上の都合で<br />表立って動かせない</p>
          </div>
          <div className="pattern-card">
            <div className="pattern-icon">🤝</div>
            <p className="pattern-title">仲介の囲い込み</p>
            <p className="pattern-desc">先に高確度の買い手を当てたい／<br />両手仲介狙い</p>
          </div>
          <div className="pattern-card">
            <div className="pattern-icon">💰</div>
            <p className="pattern-title">強気の値付け</p>
            <p className="pattern-desc">初期は高め → 数ヶ月後に<br />値下げして公開、も普通</p>
          </div>
        </div>

        <p className="note-emphasize">つまり <strong>「非公開＝お得」とは限らない</strong>。同じ物件が数ヶ月後にネットに出ていることもあります。</p>

        <h3 className="section-heading">なぜ不動産屋だけだと選びづらいのか</h3>
        <p className="crew-intro">仲介の仕事は <strong>「決める」こと</strong>。物件が動けば報酬が出ます。だから「この物件、お店に向いてるか」の判断は主戦場ではありません。</p>

        <div className="incentive-grid">
          <div className="incentive-col bad">
            <p className="incentive-label">❌ 不動産屋の立ち位置</p>
            <ul className="meriha-list">
              <li><strong>報酬源は大家さん側</strong><span>貸主から広告料（AD）が出るため、貸主寄りの動き方になりがち</span></li>
              <li><strong>早く決まるほど得</strong><span>長く引き留めるインセンティブが弱い</span></li>
              <li><strong>設備・工事費は専門外</strong><span>電気容量・ダクトの可否を判断できない</span></li>
              <li><strong>業態適性は測れない</strong><span>「この業態でここは成立するか」は答えづらい</span></li>
            </ul>
          </div>
          <div className="incentive-col good">
            <p className="incentive-label">✅ 内装屋が並走する意味</p>
            <ul className="meriha-list">
              <li><strong>工事のしやすさで物件を見る</strong><span>設備が揃っていれば初期費用が数百万変わる</span></li>
              <li><strong>業態との相性を即答できる</strong><span>動線・席数・客層まで考えて判断</span></li>
              <li><strong>やめた方がいい、が言える</strong><span>物件が決まっても決まらなくてもフラット</span></li>
              <li><strong>家賃＋工事費の合計で見る</strong><span>「家賃だけ安い物件」の罠を避けられる</span></li>
            </ul>
          </div>
        </div>

        <h3 className="section-heading">依頼する時の 5つの約束</h3>
        <div className="warn-list">
          <div className="warn-item">
            <span className="warn-icon">⏱</span>
            <div>
              <p className="warn-head">返信が翌日になることあり</p>
              <p className="warn-sub">少人数運営。急ぎの方はお電話で。</p>
            </div>
          </div>
          <div className="warn-item">
            <span className="warn-icon">🚫</span>
            <div>
              <p className="warn-head">合わない物件は紹介しない</p>
              <p className="warn-sub">数合わせで物件を回すことはしません。</p>
            </div>
          </div>
          <div className="warn-item">
            <span className="warn-icon">📵</span>
            <div>
              <p className="warn-head">営業電話はしない</p>
              <p className="warn-sub">LINEブロックも自由にどうぞ。</p>
            </div>
          </div>
          <div className="warn-item">
            <span className="warn-icon">⚠</span>
            <div>
              <p className="warn-head">「やめた方がいい」も言う</p>
              <p className="warn-sub">お世辞より、本音の方が役に立つと考えています。</p>
            </div>
          </div>
          <div className="warn-item">
            <span className="warn-icon">🔨</span>
            <div>
              <p className="warn-head">月10件が上限</p>
              <p className="warn-sub">大規模・多店舗同時展開の案件は苦手です。</p>
            </div>
          </div>
        </div>
      </article>

      {/* ===== Ch.4 物件選びの3基準 ===== */}
      <article className="page">
        <div className="page-header"><span>Ch.4 THREE CRITERIA</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">Ch.4</span>物件選びの 3つの基準</h2>

        <p className="intro-lead">物件を見始める前に<strong>これだけは決めてください</strong>。決めずに内見すると、どの物件も「悪くない気がする」になります。</p>

        <svg viewBox="0 0 360 280" className="triangle-svg">
          <polygon points="180,30 50,230 310,230" fill="none" stroke="#C9A84C" strokeWidth="2" />
          <circle cx="180" cy="30" r="50" fill="#FCF8F0" stroke="#C9A84C" strokeWidth="2" />
          <text x="180" y="28" textAnchor="middle" fontSize="14" fontWeight="700" fill="#3A2816">①</text>
          <text x="180" y="46" textAnchor="middle" fontSize="13" fontWeight="700" fill="#3A2816">客層</text>
          <text x="180" y="62" textAnchor="middle" fontSize="10" fill="#5C3A21">誰に来てほしいか</text>

          <circle cx="50" cy="230" r="50" fill="#FCF8F0" stroke="#C9A84C" strokeWidth="2" />
          <text x="50" y="228" textAnchor="middle" fontSize="14" fontWeight="700" fill="#3A2816">②</text>
          <text x="50" y="246" textAnchor="middle" fontSize="13" fontWeight="700" fill="#3A2816">形</text>
          <text x="50" y="262" textAnchor="middle" fontSize="10" fill="#5C3A21">席数・単価</text>

          <circle cx="310" cy="230" r="50" fill="#FCF8F0" stroke="#C9A84C" strokeWidth="2" />
          <text x="310" y="228" textAnchor="middle" fontSize="14" fontWeight="700" fill="#3A2816">③</text>
          <text x="310" y="246" textAnchor="middle" fontSize="13" fontWeight="700" fill="#3A2816">集客</text>
          <text x="310" y="262" textAnchor="middle" fontSize="10" fill="#5C3A21">路面／SNS</text>
        </svg>

        <div className="criteria-detail">
          <div className="criteria-item">
            <span className="criteria-num">①</span>
            <div>
              <p className="criteria-name">客層は誰か</p>
              <p className="criteria-text">年齢層・ライフスタイル・来店動機を明確に。<br /><span className="criteria-ex">例：20代女性が仕事帰りに一人で入れるカフェ → 駅近</span></p>
            </div>
          </div>
          <div className="criteria-item">
            <span className="criteria-num">②</span>
            <div>
              <p className="criteria-name">どんな形で迎えたいか</p>
              <p className="criteria-text">席数・滞在時間・客単価。回転型か滞在型か。<br /><span className="criteria-ex">例：回転型ラーメン12坪と滞在型カフェ15坪は月商倍違う</span></p>
            </div>
          </div>
          <div className="criteria-item">
            <span className="criteria-num">③</span>
            <div>
              <p className="criteria-name">集客方法は何か</p>
              <p className="criteria-text">路面依存か、SNS依存か、広告依存か。<br /><span className="criteria-ex">例：SNS集客型なら2階・路地裏でもOK、家賃を抑えられる</span></p>
            </div>
          </div>
        </div>

        <div className="callout-small">
          <p>この3つが決まると、必要な物件が半分見えてきます。<br />迷ったら、LINE で書き出すところからご一緒します。</p>
        </div>

        <div className="biz-row">
          <figure className="biz-thumb"><img src="/images/diag-bar-sm.webp" alt="飲食・バー" loading="lazy" /><figcaption>飲食・バー</figcaption></figure>
          <figure className="biz-thumb"><img src="/images/diag-beauty-sm.webp" alt="美容・サロン" loading="lazy" /><figcaption>美容・サロン</figcaption></figure>
          <figure className="biz-thumb"><img src="/images/diag-retail-sm.webp" alt="物販・カフェ" loading="lazy" /><figcaption>物販・カフェ</figcaption></figure>
        </div>
      </article>

      {/* ===== Ch.5 設備チェック ===== */}
      <article className="page">
        <div className="page-header"><span>Ch.5 SETUP CHECK</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">Ch.5</span>内装屋が見る 4つの設備</h2>

        <p className="intro-lead">家賃と広さだけで判断すると<strong>契約後に「やりたい工事ができない」</strong>事態が起きます。契約前に4つだけ確認してください。</p>

        <figure className="guide-figure">
          <img src="/images/art-skeleton-kitchen-sm.webp" alt="スケルトン厨房" loading="lazy" />
          <figcaption>電気・給排水・ダクトは、天井裏と床下に何が通っているかで決まる。</figcaption>
        </figure>

        <div className="setup-grid">
          <div className="setup-card">
            <div className="setup-icon">⚡</div>
            <p className="setup-title">電気容量</p>
            <p className="setup-big">30〜100A</p>
            <p className="setup-sub">飲食30A / 美容50A / ラーメン100A</p>
            <p className="setup-warn">増設 <strong>30〜100万円</strong></p>
          </div>
          <div className="setup-card">
            <div className="setup-icon">💧</div>
            <p className="setup-title">給排水</p>
            <p className="setup-big">既存配管</p>
            <p className="setup-sub">厨房・シャンプー台の位置はここで決まる</p>
            <p className="setup-warn">延長 <strong>1m数万〜</strong></p>
          </div>
          <div className="setup-card">
            <div className="setup-icon">🌬</div>
            <p className="setup-title">ダクト・換気</p>
            <p className="setup-big">通るか</p>
            <p className="setup-sub">焼肉・ラーメン・焼鳥は必須</p>
            <p className="setup-warn">通らないと <strong>業態変更</strong></p>
          </div>
          <div className="setup-card">
            <div className="setup-icon">📏</div>
            <p className="setup-title">天井高・搬入</p>
            <p className="setup-big">2.4m↑</p>
            <p className="setup-sub">飲食2.4m / カフェ2.6m推奨</p>
            <p className="setup-warn">低いと <strong>客離れ</strong></p>
          </div>
        </div>

        <div className="checklist">
          <p className="checklist-title">✅ 契約前チェックリスト</p>
          <div className="checklist-grid">
            <div>
              <p className="checklist-group">電気</p>
              <p>□ 契約アンペア<br />□ 三相200V<br />□ 増設可否</p>
            </div>
            <div>
              <p className="checklist-group">給排水・ダクト</p>
              <p>□ 給水圧<br />□ 排水管位置<br />□ ダクト引回し<br />□ 大家承諾</p>
            </div>
            <div>
              <p className="checklist-group">その他</p>
              <p>□ 天井高<br />□ 搬入経路<br />□ 防火・避難<br />□ 看板可否<br />□ 原状回復範囲</p>
            </div>
          </div>
        </div>
      </article>

      {/* ===== Ch.6 居抜き vs スケルトン ===== */}
      <article className="page">
        <div className="page-header"><span>Ch.6 INUKI OR SKELETON</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">Ch.6</span>居抜き vs スケルトン</h2>

        <p className="intro-lead">15坪・カフェを想定した初期費用の目安</p>

        <div className="biz-row">
          <figure className="biz-thumb"><img src="/images/pricing-inuki-sm.webp" alt="居抜き" loading="lazy" /><figcaption>居抜き（前店を活用）</figcaption></figure>
          <figure className="biz-thumb"><img src="/images/pricing-skeleton-sm.webp" alt="スケルトン" loading="lazy" /><figcaption>スケルトン（ゼロから）</figcaption></figure>
        </div>

        <div className="cost-bar">
          <div className="cost-row">
            <p className="cost-label">居抜き<br /><span>（前店活用）</span></p>
            <div className="cost-bar-track">
              <div className="cost-bar-fill inuki" style={{ width: "18%" }}>
                <span>50〜200万円</span>
              </div>
            </div>
            <p className="cost-time">1〜2週間</p>
          </div>
          <div className="cost-row">
            <p className="cost-label">居抜き<br /><span>（改装型）</span></p>
            <div className="cost-bar-track">
              <div className="cost-bar-fill inuki-mid" style={{ width: "50%" }}>
                <span>200〜500万円</span>
              </div>
            </div>
            <p className="cost-time">3〜4週間</p>
          </div>
          <div className="cost-row">
            <p className="cost-label">スケルトン<br /><span>（ゼロから）</span></p>
            <div className="cost-bar-track">
              <div className="cost-bar-fill sukelton" style={{ width: "85%" }}>
                <span>450〜800万円</span>
              </div>
            </div>
            <p className="cost-time">6〜10週間</p>
          </div>
        </div>

        <div className="pro-con">
          <div className="pro-con-col pro">
            <p className="pro-con-label">居抜きが向いている</p>
            <ul className="meriha-list">
              <li><strong>初期費用を抑えたい</strong><span>500万以下で収めたい場合</span></li>
              <li><strong>早く開業したい</strong><span>1〜4週間でオープンしたい</span></li>
              <li><strong>前店と近い業態</strong><span>厨房・配管が流用できる</span></li>
              <li><strong>立地に惚れた居抜き</strong><span>条件が揃った物件に出会った</span></li>
            </ul>
          </div>
          <div className="pro-con-col pro-alt">
            <p className="pro-con-label">スケルトンが向いている</p>
            <ul className="meriha-list">
              <li><strong>独自の世界観を作りたい</strong><span>内装が集客の主力</span></li>
              <li><strong>長期運営前提</strong><span>5〜10年で償却できる</span></li>
              <li><strong>客単価高・回転率高</strong><span>高効率オペが必要な業態</span></li>
              <li><strong>合う居抜きがない</strong><span>市場に物件が出てこない</span></li>
            </ul>
          </div>
        </div>

        <div className="sidebar">
          <p className="sidebar-label">⚠ 居抜きの落とし穴</p>
          <p><strong>「居抜き＝安い」とは限らない</strong>。前店の設備が10年以上前・配管詰まり・電気容量不足・造作売買が高値、などで実質スケルトンより高くなるケースあり。内装屋の目で「本当にお得か」を判断してください。</p>
        </div>

        <figure className="guide-figure">
          <img src="/images/art-skeleton-split-sm.webp" alt="居抜きとスケルトンの比較" loading="lazy" />
        </figure>
      </article>

      {/* ===== Ch.7 費用圧縮3技 ===== */}
      <article className="page">
        <div className="page-header"><span>Ch.7 COST HACKS</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">Ch.7</span>費用を圧縮する 3つの技</h2>

        <p className="intro-lead">記憶荘が一番得意な領域。<strong>品質を落とさず予算を圧縮</strong>する技術。</p>

        <h3 className="section-heading">そもそも、なぜ他社は高いのか</h3>

        <div className="margin-compare">
          <div className="margin-col bad">
            <p className="margin-label">❌ 一般的な内装会社</p>
            <div className="margin-chain">
              <div className="chain-item">元請け<br /><span>+15〜25%</span></div>
              <div className="chain-arrow">→</div>
              <div className="chain-item">下請け<br /><span>+10〜15%</span></div>
              <div className="chain-arrow">→</div>
              <div className="chain-item">孫請け<br /><span>（実際の工事）</span></div>
            </div>
            <p className="margin-note">工事が末端に届くまでに <strong>25〜40%の中間マージン</strong> が乗ります。</p>
          </div>
          <div className="margin-col good">
            <p className="margin-label">✅ 記憶荘</p>
            <div className="margin-direct">
              <div className="chain-item-solo">オーナー</div>
              <div className="chain-arrow">↔</div>
              <div className="chain-item-solo">職人が直接</div>
            </div>
            <p className="margin-note">元請けマージンなし。<strong>職人の手間賃＋材料費</strong>がそのまま工事費です。</p>
          </div>
        </div>

        <div className="why-cheap-grid">
          <div className="why-cheap">
            <p className="why-num">01</p>
            <p className="why-head">中間マージンを抜く</p>
            <p className="why-sub">元請け・下請け構造をなくし、職人が直接現場に入ります。</p>
          </div>
          <div className="why-cheap">
            <p className="why-num">02</p>
            <p className="why-head">物件段階から無駄を削る</p>
            <p className="why-sub">設備の悪い物件を選ばない。それだけで数百万円の工事が消えます。</p>
          </div>
          <div className="why-cheap">
            <p className="why-num">03</p>
            <p className="why-head">オーナー併走を前提にする</p>
            <p className="why-sub">下の3技（居抜き・施主支給・DIY併走）で、品質を落とさず圧縮します。</p>
          </div>
        </div>

        <h3 className="section-heading">3つの圧縮技</h3>

        <div className="hack-grid">
          <div className="hack-card">
            <img src="/images/art-skeleton-inuki-sm.webp" alt="居抜き活用" className="hack-img" loading="lazy" />
            <div className="hack-num">01</div>
            <p className="hack-title">居抜き設備の<br />徹底活用</p>
            <p className="hack-desc">厨房機器・カウンター・照明・<br />空調を、清掃と塗装で蘇らせる</p>
            <p className="hack-saving">削減例<br /><strong>50万円+</strong></p>
          </div>
          <div className="hack-card">
            <img src="/images/art-cafe-kitchen-sm.webp" alt="施主支給" className="hack-img" loading="lazy" />
            <div className="hack-num">02</div>
            <p className="hack-title">施主支給</p>
            <p className="hack-desc">オーナー直接購入→設置のみ<br />中古業務用機器で1/3〜1/2</p>
            <p className="hack-saving">業者経由比<br /><strong>10〜30%減</strong></p>
          </div>
          <div className="hack-card">
            <img src="/images/art-diy-painting-sm.webp" alt="DIY併走" className="hack-img" loading="lazy" />
            <div className="hack-num">03</div>
            <p className="hack-title">DIY併走</p>
            <p className="hack-desc">塗装・装飾はオーナー併走<br />電気・水回りはプロ</p>
            <p className="hack-saving">人件費<br /><strong>40万円+</strong></p>
          </div>
        </div>

        <h3 className="section-heading">3技を組み合わせると</h3>

        <svg viewBox="0 0 400 140" className="saving-svg">
          <rect x="20" y="40" width="160" height="60" rx="6" fill="#3A2816" />
          <text x="100" y="70" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="700">通常</text>
          <text x="100" y="92" textAnchor="middle" fontSize="20" fill="#fff" fontWeight="900">400万円</text>
          <path d="M 180 70 L 220 70" stroke="#C9A84C" strokeWidth="3" markerEnd="url(#arr2)" />
          <defs>
            <marker id="arr2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#C9A84C" />
            </marker>
          </defs>
          <rect x="220" y="40" width="160" height="60" rx="6" fill="#C9A84C" />
          <text x="300" y="70" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="700">記憶荘</text>
          <text x="300" y="92" textAnchor="middle" fontSize="20" fill="#fff" fontWeight="900">200〜250万円</text>
        </svg>

        <div className="jirei">
          <p className="jirei-title">実例：バスケットボール Cafe&Bar CROSSOVER</p>
          <div className="ba-grid">
            <figure className="ba-fig"><img src="/images/crossover-before-01-sm.webp" alt="Before" loading="lazy" /><figcaption>Before</figcaption></figure>
            <figure className="ba-fig"><img src="/images/crossover-after-01-sm.webp" alt="After" loading="lazy" /><figcaption>After</figcaption></figure>
          </div>
          <ul>
            <li>閉店するバーから什器引き取り → <strong className="gold">50万+ 削減</strong></li>
            <li>総工費 <strong className="gold">90万円・10日</strong>でスケルトンから開業</li>
            <li>仙台市若林区・15坪</li>
          </ul>
        </div>

        <p className="note-emphasize">※ 3技は<strong>早い段階から内装屋が関わっている場合</strong>に最大効果。物件決定後では選択肢が限られます。</p>
      </article>

      {/* ===== Ch.8 契約交渉 ===== */}
      <article className="page">
        <div className="page-header"><span>Ch.8 NEGOTIATION</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">Ch.8</span>契約条件の交渉テクニック</h2>

        <p className="intro-lead">家賃だけが交渉項目ではありません。<strong>表に出ている条件のうち、動かせる余地があるのは実は5つ</strong>あります。</p>

        <div className="nego-grid">
          <div className="nego-card">
            <div className="nego-head"><span className="nego-num">01</span><p className="nego-name">家賃</p></div>
            <p className="nego-text">長期空室の物件には<strong>相場差を埋める余地</strong>がある。</p>
            <p className="nego-sub">データと根拠があれば動きます。</p>
          </div>
          <div className="nego-card">
            <div className="nego-head"><span className="nego-num">02</span><p className="nego-name">フリーレント</p></div>
            <p className="nego-text">工事期間中の<strong>家賃免除</strong>。業態と工期次第で引き出せる。</p>
            <p className="nego-sub">開業までの資金繰りが一気に楽になる項目。</p>
          </div>
          <div className="nego-card">
            <div className="nego-head"><span className="nego-num">03</span><p className="nego-name">敷金・保証金</p></div>
            <p className="nego-text">金額・<strong>償却割合</strong>ともに厚めに設定されていることが多い。</p>
            <p className="nego-sub">初期費用をどこに寄せるかの調整弁になる。</p>
          </div>
          <div className="nego-card">
            <div className="nego-head"><span className="nego-num">04</span><p className="nego-name">原状回復範囲</p></div>
            <p className="nego-text">一番揉める項目。<strong>契約前の特約</strong>で退去費が数百万単位で動く。</p>
            <p className="nego-sub">入居時に握っておかないと、後から戻せない。</p>
          </div>
          <div className="nego-card nego-wide">
            <div className="nego-head"><span className="nego-num">05</span><p className="nego-name">契約年数・更新料・中途解約</p></div>
            <p className="nego-text">長く借りる意思と引き換えに、<strong>更新料・中途解約条項</strong>を動かせる。</p>
            <p className="nego-sub">「安定して借りてくれる」は大家さんにとって大きな価値。</p>
          </div>
        </div>

        <figure className="guide-figure">
          <img src="/images/kai-ken-casual-talk-sm.webp" alt="交渉の打ち合わせ" loading="lazy" />
          <figcaption>交渉の入り方・タイミング・言い回しは、物件と大家さんによって全部違います。</figcaption>
        </figure>

        <div className="sidebar">
          <p className="sidebar-label">⚠ 交渉の鉄則</p>
          <p><strong>「値段を下げろ」ではなく「条件を整えたい」</strong>と伝える。無理を押すより、<strong>長く借りる・丁寧に使う</strong>という信頼を担保にする方が通ります。具体的な切り出し方・金額感は、物件を見ながら一緒に組み立てます。</p>
        </div>
      </article>

      {/* ===== Ch.9 AIパース ===== */}
      <article className="page">
        <div className="page-header"><span>Ch.9 AI PREVIEW</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">Ch.9</span>AIパースで事前プレビュー</h2>

        <p className="intro-lead">契約前に、<strong>完成形をビジュアルで確認</strong>できます。「こんなはずじゃなかった」を減らす仕組み。</p>

        <figure className="guide-figure">
          <img src="/images/ai-pers-tablet-sm.webp" alt="AIパースでのプレビュー" loading="lazy" />
          <figcaption>物件写真とヒアリングから、数日で完成イメージ案を出します。</figcaption>
        </figure>

        <div className="parse-flow">
          <div className="parse-step">
            <div className="parse-icon">📷</div>
            <p className="parse-stepnum">STEP 1</p>
            <p className="parse-stephead">物件写真</p>
            <p className="parse-stepdesc">内見時の写真を<br />共有してください</p>
          </div>
          <div className="parse-arrow">→</div>
          <div className="parse-step">
            <div className="parse-icon">💬</div>
            <p className="parse-stepnum">STEP 2</p>
            <p className="parse-stephead">ヒアリング</p>
            <p className="parse-stepdesc">業態・世界観・<br />好きな店の参考画像</p>
          </div>
          <div className="parse-arrow">→</div>
          <div className="parse-step">
            <div className="parse-icon">🎨</div>
            <p className="parse-stepnum">STEP 3</p>
            <p className="parse-stephead">AIパース生成</p>
            <p className="parse-stepdesc">数日で<br />完成イメージ案</p>
          </div>
          <div className="parse-arrow">→</div>
          <div className="parse-step">
            <div className="parse-icon">✅</div>
            <p className="parse-stepnum">STEP 4</p>
            <p className="parse-stephead">判断材料に</p>
            <p className="parse-stepdesc">契約・融資・<br />家族相談の資料</p>
          </div>
        </div>

        <h3 className="section-heading">何に使えるか</h3>
        <div className="parse-use-grid">
          <div className="parse-use">
            <p className="parse-use-title">① 物件の判断に使う</p>
            <p className="parse-use-head">「この物件でイメージ通りになるか」を契約前に可視化</p>
            <p className="parse-use-sub">家族・パートナーへの説明材料としても有効です。</p>
          </div>
          <div className="parse-use">
            <p className="parse-use-title">② 融資・補助金の資料に使う</p>
            <p className="parse-use-head">事業計画書に完成イメージを添付</p>
            <p className="parse-use-sub">銀行・日本政策金融公庫・補助金申請での説得力が変わります。</p>
          </div>
          <div className="parse-use">
            <p className="parse-use-title">③ 施工方向性のすり合わせに使う</p>
            <p className="parse-use-head">言葉では伝わらない「雰囲気」を共有</p>
            <p className="parse-use-sub">施工後の「思ってたのと違う」を減らすための事前合意。</p>
          </div>
        </div>

        <div className="callout-small">
          <p><strong>注意：AIパースはあくまでイメージ</strong>。実際の施工は構造・予算・素材で差が出ます。最終的な設計図面・見積もりは別途作成します。<br />※ 相談の流れでお出しする簡易版は<strong className="gold">無料</strong>。複数案・高精細版は別途ご案内。</p>
        </div>
      </article>

      {/* ===== Ch.10 失敗10選 ===== */}
      <article className="page">
        <div className="page-header"><span>Ch.10 MISTAKES</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">Ch.10</span>失敗事例 10選</h2>
        <p className="intro-lead">契約後に「あっ」となる典型パターン。先に知れば避けられます。</p>

        <figure className="guide-figure">
          <img src="/images/art-failure-hero-sm.webp" alt="失敗事例" loading="lazy" />
        </figure>

        {[
          { n: 1, t: "電気容量が足りず厨房フル稼働できず", s: "30A物件でブレーカー落ちる" },
          { n: 2, t: "ダクトが通らず業態を諦める", s: "ラーメン店予定→カフェに変更" },
          { n: 3, t: "家賃が重すぎて2年で撤退", s: "月商150万に対し家賃35万" },
          { n: 4, t: "居抜き造作売買が高すぎ", s: "500万設備→実質1000万オーバー" },
          { n: 5, t: "「一式○万」見積で追加請求続出", s: "600万契約→最終900万" },
          { n: 6, t: "保健所の要件を見落とし", s: "厨房レイアウトやり直し" },
          { n: 7, t: "天井高2.2mで圧迫感", s: "客足伸びずリピート少" },
          { n: 8, t: "搬入経路未確認で冷蔵庫入らず", s: "解体搬入で追加費用" },
          { n: 9, t: "原状回復範囲を未確認", s: "撤退時400万円の請求" },
          { n: 10, t: "内装屋への相談が遅すぎた", s: "物件契約済みで選択肢なし" },
        ].map((f) => (
          <div key={f.n} className="fail">
            <p className="fail-title"><span className="fail-num">{f.n}</span>{f.t}</p>
            <p className="fail-line">{f.s}</p>
          </div>
        ))}
      </article>

      {/* ===== Ch.11 まとめ ===== */}
      <article className="page">
        <div className="page-header"><span>Ch.11 NEXT STEPS</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">Ch.11</span>最初の 1歩</h2>

        <div className="step">
          <p className="step-num">STEP 1</p>
          <p className="step-head">3基準を書き出す</p>
          <p className="step-body">客層・形・集客。これが物件選びの全ての出発点。</p>
        </div>
        <div className="step">
          <p className="step-num">STEP 2</p>
          <p className="step-head">家賃上限を決める</p>
          <p className="step-body">見込み月商の<strong>70%で固定費が回る</strong>家賃を上限に。これを超える物件は候補から外す。</p>
        </div>
        <div className="step">
          <p className="step-num">STEP 3</p>
          <p className="step-head">物件を見る前に相談する</p>
          <p className="step-body">見る前と後では選択肢が全然違います。<strong>「まだ何も決まってない」でOK</strong>。</p>
        </div>

        <figure className="guide-figure">
          <img src="/images/finalcta-step01-line-sm.webp" alt="LINEで相談" loading="lazy" />
        </figure>

        <div className="final-cta">
          <p className="final-title">ご相談はLINEから</p>
          <p>個別の相談・物件リクエスト・内見同行、すべて<strong className="gold">無料</strong>。営業はしません。</p>
          <p className="final-url">{LINE_URL_HP}</p>
        </div>
      </article>

      {/* ===== 付録A ===== */}
      <article className="page">
        <div className="page-header"><span>付録A エリア別家賃</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">付録A</span>エリア別 平均家賃（参考）</h2>
        <p className="note">1階路面店、坪単価（月額）。2026年4月時点の目安。</p>
        <table className="data-table">
          <thead><tr><th>エリア</th><th>坪単価</th><th>備考</th></tr></thead>
          <tbody>
            <tr><td>国分町</td><td>1.2〜2.0万</td><td>飲食・夜系</td></tr>
            <tr><td>仙台駅西口</td><td>1.5〜2.5万</td><td>駅近最強</td></tr>
            <tr><td>仙台駅東口</td><td>1.2〜1.8万</td><td>再開発進行</td></tr>
            <tr><td>一番町</td><td>1.5〜2.8万</td><td>物販・カフェ</td></tr>
            <tr><td>定禅寺通</td><td>1.0〜1.6万</td><td>カフェ・美容</td></tr>
            <tr><td>勾当台公園周辺</td><td>0.9〜1.4万</td><td>バランス型</td></tr>
            <tr><td>泉中央</td><td>0.7〜1.2万</td><td>ファミリー</td></tr>
            <tr><td>長町（副都心）</td><td>0.7〜1.1万</td><td>再開発</td></tr>
            <tr><td>若林区</td><td>0.5〜0.9万</td><td>コスパ良</td></tr>
            <tr><td>宮城野区（新田・荒井）</td><td>0.6〜1.0万</td><td>東西線</td></tr>
            <tr><td>名取市・多賀城市</td><td>0.4〜0.9万</td><td>仙台圏</td></tr>
          </tbody>
        </table>
        <p className="note">※ 敷金・礼金・保証金・共益費別途。飲食は保証金が家賃12ヶ月以上の物件も。</p>
      </article>

      {/* ===== 付録B ===== */}
      <article className="page">
        <div className="page-header"><span>付録B 用語集</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">付録B</span>用語集</h2>
        <dl className="yougoshu">
          <dt>居抜き（いぬき）</dt><dd>前テナントの内装・設備を残したまま次に引き渡す物件。</dd>
          <dt>スケルトン</dt><dd>内装・設備が何もない躯体状態。自由度高・工事費高。</dd>
          <dt>造作譲渡</dt><dd>前テナントの造作・設備を買い取ること。50万〜数百万円。</dd>
          <dt>原状回復</dt><dd>退去時に物件を契約当初の状態に戻すこと。</dd>
          <dt>坪単価</dt><dd>1坪（約3.3㎡）あたりの内装工事費。</dd>
          <dt>動力</dt><dd>三相200Vの電源。業務用機器に必要。</dd>
          <dt>施主支給</dt><dd>オーナーが直接購入した材料・什器を業者が設置すること。</dd>
          <dt>DIY併走</dt><dd>オーナーと業者が一緒に作業。人件費を削減できる。</dd>
          <dt>排煙設備</dt><dd>火災時に煙を排出する設備。規模により設置義務。</dd>
          <dt>防火区画</dt><dd>火災延焼を防ぐ建築上の区画。</dd>
        </dl>
      </article>

      {/* ===== 付録C 原状回復 ===== */}
      <article className="page">
        <div className="page-header"><span>付録C 原状回復</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">付録C</span>退去時の原状回復</h2>
        <p>契約時に必ず確認する3点。</p>

        <h3 className="section-heading">1. 「原状回復」の範囲</h3>
        <ul>
          <li><strong>スケルトン返却</strong>：全撤去（費用大）</li>
          <li><strong>居抜きOK</strong>：造作残置可（費用小）</li>
          <li><strong>部分原状回復</strong>：指定箇所のみ</li>
        </ul>
        <div className="sidebar">
          <p className="sidebar-label">⚠ 最悪パターン</p>
          <p>契約書に「原状回復」としか書かれていない → 退去時にスケルトン要求 → <strong>数百万円</strong>の撤去費用。契約前に書面で範囲を明確化。</p>
        </div>

        <h3 className="section-heading">2. 敷金・保証金の返還</h3>
        <ul>
          <li>敷金：原状回復費に充当、残額返還</li>
          <li>保証金：<strong>償却</strong>（返還されない部分）あり多数</li>
          <li>例：保証金300万・償却150万 → 戻るのは最大150万</li>
        </ul>

        <h3 className="section-heading">3. 予防策</h3>
        <ol className="ordered">
          <li>入居時の状態を写真・動画で記録</li>
          <li>契約書の退去条項を別途保管</li>
          <li>工事履歴は書面で残す</li>
          <li>退去6ヶ月前から準備開始</li>
        </ol>
      </article>

      {/* ===== 付録D FAQ ===== */}
      <article className="page">
        <div className="page-header"><span>付録D FAQ</span></div>
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
          <p>kiokuso.jp</p>
        </div>
      </article>
    </div>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&family=Noto+Serif+JP:wght@500;700&display=swap');

.guide-root { min-height: 100vh; background: #F8F5F0; padding: 20px 0; font-family: 'Noto Sans JP', sans-serif; color: #3A2816; }
.guide-root *, .guide-root *::before, .guide-root *::after { box-sizing: border-box; }

/* Nav */
.guide-nav { position: sticky; top: 0; z-index: 10; max-width: 840px; margin: 0 auto 20px; padding: 12px 24px; background: rgba(255,255,255,0.95); backdrop-filter: blur(8px); border: 1px solid #e8e2d4; border-radius: 10px; display: flex; justify-content: space-between; align-items: center; }
.guide-nav-brand { font-size: 14px; font-weight: 700; color: #3A2816; text-decoration: none; letter-spacing: 0.1em; }
.guide-nav-actions { display: flex; gap: 10px; align-items: center; }
.guide-nav-print { padding: 8px 14px; font-size: 12px; font-weight: 700; background: #fff; border: 1px solid #C9A84C; color: #5C3A21; border-radius: 6px; cursor: pointer; }
.guide-nav-line { padding: 8px 16px; font-size: 12px; font-weight: 700; background: #06C755; color: #fff; border-radius: 6px; text-decoration: none; }

/* Page */
.page { max-width: 840px; margin: 0 auto 20px; padding: 60px 56px; background: #fff; border: 1px solid #e8e2d4; border-radius: 8px; box-shadow: 0 1px 4px rgba(0,0,0,0.04); position: relative; }
.page p { font-size: 14px; line-height: 1.85; margin-bottom: 12px; color: #3a3a3a; }
.page strong { color: #3A2816; font-weight: 700; }
.page .gold { color: #C9A84C; }
.page ul, .page ol { padding-left: 20px; margin-bottom: 12px; }
.page ul li, .page ol li { font-size: 14px; line-height: 1.85; margin-bottom: 5px; color: #3a3a3a; }
.page .note { font-size: 13px; color: #8a7a68; font-style: italic; }
.page .intro-lead { font-size: 14px; color: #3a3a3a; margin-bottom: 24px; line-height: 1.9; }
.note-emphasize { background: #FCF8F0; border-left: 3px solid #C9A84C; padding: 12px 16px; font-size: 14px !important; line-height: 1.85 !important; margin: 16px 0 !important; }
.page a { color: #5C3A21; text-decoration: underline; }

/* Cover */
.guide-cover { background: linear-gradient(135deg, #F8F5F0 0%, #EBE0CE 60%, #D9C9AC 100%); color: #3A2816; padding: 80px 56px 60px; text-align: center; position: relative; min-height: auto; }
.cover-accent-top, .cover-accent-bottom { position: absolute; left: 0; right: 0; height: 6px; background: #C9A84C; }
.cover-accent-top { top: 0; }
.cover-accent-bottom { bottom: 0; }
.cover-category { font-size: 14px !important; font-weight: 500; color: #C9A84C !important; letter-spacing: 0.4em; margin-bottom: 16px !important; text-transform: uppercase; }
.cover-hr { width: 60px; height: 2px; background: #C9A84C; border: none; margin: 0 auto 40px; }
.cover-title { display: flex; flex-direction: column; gap: 18px; margin: 40px 0; }
.cover-title-l1, .cover-title-l2, .cover-title-l3 { font-family: 'Noto Serif JP', serif; font-weight: 700; color: #3A2816; line-height: 1.1; letter-spacing: 0.08em; }
.cover-title-l1 { font-size: 46px; }
.cover-title-l2 { font-size: 64px; }
.cover-title-l3 { font-size: 64px; color: #C9A84C; }
.cover-subtitle { font-size: 14px !important; color: rgba(58,40,22,0.7) !important; letter-spacing: 0.1em; margin-top: 32px !important; margin-bottom: 48px !important; }
.cover-chapters { list-style: none !important; padding: 0 !important; text-align: left; max-width: 420px; margin: 0 auto 60px !important; }
.cover-chapters li { font-size: 14px !important; color: rgba(58,40,22,0.8) !important; padding: 6px 0; letter-spacing: 0.04em; font-weight: 500; }
.cover-footer { margin-top: 60px; }
.cover-footer-hr { width: 100px; height: 1px; background: #C9A84C; border: none; margin: 0 auto 20px; opacity: 0.5; }
.cover-brand { font-size: 16px !important; font-weight: 700; color: #3A2816 !important; letter-spacing: 0.15em; margin-bottom: 6px !important; }
.cover-url { font-size: 12px !important; color: rgba(58,40,22,0.4) !important; letter-spacing: 0.1em; }

/* Page header badge */
.page-header { position: absolute; top: 20px; right: 28px; font-size: 10px; color: #C9A84C; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 700; }

/* Headings */
.chapter-heading { font-family: 'Noto Serif JP', serif; font-size: 26px; font-weight: 700; color: #3A2816; margin-bottom: 28px; padding-bottom: 14px; border-bottom: 2px solid #C9A84C; line-height: 1.4; display: flex; flex-wrap: wrap; align-items: baseline; gap: 12px; }
.chapter-no { font-size: 13px; font-weight: 500; color: #C9A84C; background: rgba(201,168,76,0.08); padding: 4px 12px; border-radius: 20px; letter-spacing: 0.1em; }
.section-heading { font-size: 17px; font-weight: 700; color: #3A2816; margin: 32px 0 14px; padding-left: 14px; border-left: 4px solid #C9A84C; line-height: 1.5; }

/* Ch.1 Strength grid */
.strength-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 24px 0 32px; }
.strength-card { background: linear-gradient(180deg, #FCF8F0 0%, #F3EBDA 100%); border: 1px solid #D9C9AC; border-radius: 10px; padding: 20px 16px; text-align: center; position: relative; }
.strength-num { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); width: 30px; height: 30px; background: #C9A84C; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; }
.strength-title { font-size: 15px !important; font-weight: 700; color: #3A2816 !important; margin: 10px 0 10px !important; line-height: 1.5 !important; }
.strength-desc { font-size: 12px !important; color: #5C3A21 !important; line-height: 1.8 !important; margin-bottom: 0 !important; }

/* Figures (guide-wide) */
.guide-figure { margin: 20px 0; text-align: center; }
.guide-figure img { width: 100%; max-width: 420px; height: auto; border-radius: 10px; border: 1px solid #e8e2d4; display: block; margin: 0 auto; }
.guide-figure figcaption { font-size: 12px; color: #8a7a68; margin-top: 8px; line-height: 1.6; font-style: italic; }

/* Business thumb row (3 col / 2 col) */
.biz-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 10px; margin: 16px 0 20px; }
.biz-thumb { margin: 0; }
.biz-thumb img { width: 100%; aspect-ratio: 4/3; object-fit: cover; border-radius: 8px; border: 1px solid #e8e2d4; display: block; }
.biz-thumb figcaption { font-size: 12px; color: #5C3A21; margin-top: 6px; text-align: center; font-weight: 500; }

/* Before/After grid */
.ba-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 12px 0; }
.ba-fig { margin: 0; }
.ba-fig img { width: 100%; aspect-ratio: 4/3; object-fit: cover; border-radius: 6px; display: block; }
.ba-fig figcaption { font-size: 11px; color: #C9A84C; font-weight: 700; letter-spacing: 0.1em; margin-top: 4px; text-align: center; }

/* Profile cards */
.profile-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 20px 0; }
.profile-card { background: #3A2816; color: #fff; border-radius: 10px; padding: 20px 16px; text-align: center; border: 1px solid #5C3A21; }
.profile-photo { width: 96px; height: 96px; object-fit: cover; border-radius: 50%; border: 2px solid #C9A84C; margin: 0 auto 12px; display: block; }

/* Incentive compare (Ch.3) */
.incentive-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin: 14px 0 20px; }
.incentive-col { padding: 16px 18px; border-radius: 10px; border: 1px solid #e8e2d4; }
.incentive-col.bad { background: #FCF2EE; border-color: #e8ccc0; }
.incentive-col.good { background: #F0F7F0; border-color: #c8dac0; }
.incentive-label { font-size: 13px !important; font-weight: 700; margin-bottom: 10px !important; letter-spacing: 0.04em; }
.incentive-col.bad .incentive-label { color: #C44D3F !important; }
.incentive-col.good .incentive-label { color: #4A6741 !important; }

/* Margin compare (Ch.7) */
.margin-compare { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 16px 0 20px; }
.margin-col { padding: 16px 16px 14px; border-radius: 10px; border: 1px solid #e8e2d4; }
.margin-col.bad { background: #FCF2EE; border-color: #e8ccc0; }
.margin-col.good { background: #F0F7F0; border-color: #c8dac0; }
.margin-label { font-size: 13px !important; font-weight: 700; margin-bottom: 12px !important; }
.margin-col.bad .margin-label { color: #C44D3F !important; }
.margin-col.good .margin-label { color: #4A6741 !important; }
.margin-chain, .margin-direct { display: flex; align-items: center; justify-content: space-between; gap: 4px; margin-bottom: 10px; }
.chain-item { flex: 1; background: #fff; border: 1px solid #D9C9AC; border-radius: 6px; padding: 8px 4px; text-align: center; font-size: 11px; font-weight: 700; color: #3A2816; line-height: 1.3; }
.chain-item span { display: block; font-size: 10px; font-weight: 400; color: #8a7a68; margin-top: 2px; }
.chain-item-solo { flex: 1; background: #fff; border: 1.5px solid #C9A84C; border-radius: 6px; padding: 10px 4px; text-align: center; font-size: 12px; font-weight: 700; color: #3A2816; }
.chain-arrow { color: #C9A84C; font-weight: 700; font-size: 14px; flex-shrink: 0; }
.margin-note { font-size: 11px !important; color: #5C3A21 !important; line-height: 1.7 !important; margin-bottom: 0 !important; }

/* Why cheap grid (Ch.7) */
.why-cheap-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 8px 0 24px; }
.why-cheap { background: #FCF8F0; border: 1px solid #D9C9AC; border-radius: 8px; padding: 14px 12px; }
.why-num { font-size: 11px !important; font-weight: 700; color: #C9A84C !important; letter-spacing: 0.15em; margin-bottom: 4px !important; }
.why-head { font-size: 13px !important; font-weight: 700; color: #3A2816 !important; line-height: 1.5 !important; margin-bottom: 4px !important; }
.why-sub { font-size: 11px !important; color: #8a7a68 !important; line-height: 1.7 !important; margin-bottom: 0 !important; }

/* Crew (職人集団) */
.crew-intro { font-size: 13px !important; color: #5C3A21 !important; line-height: 1.8 !important; margin-bottom: 14px !important; }
.crew-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin: 0 0 4px; }
.crew-chip { background: #FCF8F0; border: 1px solid #D9C9AC; border-radius: 8px; padding: 12px 6px; text-align: center; }
.crew-icon { font-size: 22px; display: block; margin-bottom: 4px; }
.crew-role { font-size: 12px !important; font-weight: 700; color: #3A2816 !important; margin-bottom: 2px !important; line-height: 1.3 !important; }
.crew-yrs { font-size: 10px !important; color: #8a7a68 !important; margin-bottom: 0 !important; line-height: 1.4 !important; }

/* Weak (不得意) grid */
.weak-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 12px 0 4px; }
.weak-card { background: #fff; border: 1px solid #e0d8cc; border-left: 3px solid #8a7a68; border-radius: 0 8px 8px 0; padding: 12px 14px; }
.weak-head { font-size: 13px !important; font-weight: 700; color: #3A2816 !important; margin-bottom: 4px !important; line-height: 1.5 !important; }
.weak-head::before { content: '✕  '; color: #8a7a68; font-weight: 400; }
.weak-sub { font-size: 11px !important; color: #8a7a68 !important; line-height: 1.7 !important; margin-bottom: 0 !important; }
.profile-name { font-size: 24px !important; font-weight: 900; color: #fff !important; margin-bottom: 4px !important; letter-spacing: 0.1em; }
.profile-role { font-size: 11px !important; color: #C9A84C !important; margin-bottom: 10px !important; letter-spacing: 0.15em; text-transform: uppercase; }
.profile-desc { font-size: 12px !important; color: rgba(255,255,255,0.7) !important; line-height: 1.7 !important; margin-bottom: 0 !important; }

/* Ch.2 When compare */
.when-compare { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin: 20px 0 24px; }
.when-col { padding: 18px 16px; border-radius: 10px; border: 1px solid #e8e2d4; }
.when-col.bad { background: #FCF2EE; border-color: #e8ccc0; }
.when-col.good { background: #F0F7F0; border-color: #c8dac0; }
.when-label { font-size: 13px !important; font-weight: 700; margin-bottom: 14px !important; }
.when-col.bad .when-label { color: #C44D3F !important; }
.when-col.good .when-label { color: #4A6741 !important; }
.when-flow { display: flex; align-items: center; gap: 4px; justify-content: center; margin-bottom: 14px; flex-wrap: wrap; }
.when-step { background: #fff; border: 1px solid #D9C9AC; border-radius: 6px; padding: 8px 10px; font-size: 11px; font-weight: 700; color: #3A2816; text-align: center; min-width: 60px; line-height: 1.3; }
.when-arrow { color: #C9A84C; font-weight: 700; font-size: 14px; }
.when-result { margin-top: 8px; }
.when-result-label { font-size: 12px !important; font-weight: 700; margin-bottom: 6px !important; }
.when-col.bad .when-result-label { color: #C44D3F !important; }
.when-col.good .when-result-label { color: #4A6741 !important; }
.when-result ul { padding-left: 18px !important; margin-bottom: 0 !important; }
.when-result li { font-size: 11px !important; line-height: 1.7 !important; margin-bottom: 3px !important; }

/* Callout */
.callout { background: linear-gradient(135deg, #FCF8F0 0%, #F3EBDA 100%); border: 1px solid #D9C9AC; border-radius: 10px; padding: 20px 24px; margin: 20px 0; text-align: center; }
.callout-big { font-size: 14px !important; color: #3A2816 !important; line-height: 1.9 !important; margin-bottom: 12px !important; }
.callout-big:last-child { margin-bottom: 0 !important; }
.callout-small { background: #FCF8F0; border: 1px solid #D9C9AC; border-radius: 8px; padding: 14px 18px; margin-top: 20px; }
.callout-small p { font-size: 13px !important; color: #5C3A21 !important; line-height: 1.8 !important; margin-bottom: 0 !important; }

/* Ch.3 Myth box */
.myth-box { background: #3A2816; color: #fff; padding: 24px 28px; border-radius: 10px; margin: 20px 0 24px; text-align: center; }
.myth-q { font-size: 18px !important; color: #fff !important; font-family: 'Noto Serif JP', serif; line-height: 1.6 !important; margin-bottom: 8px !important; }
.myth-a { font-size: 14px !important; color: #C9A84C !important; margin-bottom: 0 !important; }

/* Ch.3 Pattern grid */
.pattern-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 16px 0 20px; }
.pattern-card { background: #fff; border: 1px solid #e8e2d4; border-top: 3px solid #C9A84C; border-radius: 0 0 8px 8px; padding: 18px 14px; text-align: center; }
.pattern-icon { font-size: 28px; margin-bottom: 8px; }
.pattern-title { font-size: 13px !important; font-weight: 700; color: #3A2816 !important; margin-bottom: 8px !important; }
.pattern-desc { font-size: 11px !important; color: #5C3A21 !important; line-height: 1.7 !important; margin-bottom: 0 !important; }

/* Ch.3 Warn list */
.warn-list { background: #FCF8F0; border-radius: 10px; padding: 16px 20px; margin: 16px 0; }
.warn-item { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 10px; }
.warn-item:last-child { margin-bottom: 0; }
.warn-icon { font-size: 18px; line-height: 1.4; flex-shrink: 0; }
.warn-item p { font-size: 13px !important; color: #3A2816 !important; line-height: 1.7 !important; margin-bottom: 0 !important; }
.warn-head { font-size: 14px !important; font-weight: 700; color: #3A2816 !important; margin-bottom: 2px !important; line-height: 1.5 !important; }
.warn-sub { font-size: 12px !important; color: #8a7a68 !important; margin-bottom: 0 !important; line-height: 1.6 !important; }

/* Pro-Con */
.pro-con { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 16px 0; }
.pro-con-col { padding: 14px 18px; border-radius: 8px; border: 1px solid #e0d8cc; }
.pro-con-col.pro { background: #F0F7F0; border-color: #c8dac0; }
.pro-con-col.pro-alt { background: #FCF8F0; border-color: #D9C9AC; }
.pro-con-col.con { background: #FCF2EE; border-color: #e8ccc0; }
.pro-con-label { font-size: 12px !important; font-weight: 700; letter-spacing: 0.1em; margin-bottom: 8px !important; }
.pro-con-col.pro .pro-con-label { color: #4A6741 !important; }
.pro-con-col.pro-alt .pro-con-label { color: #5C3A21 !important; }
.pro-con-col.con .pro-con-label { color: #C44D3F !important; }
.pro-con-col ul { padding-left: 18px; margin-bottom: 0 !important; }
.pro-con-col li { font-size: 12px !important; line-height: 1.7 !important; margin-bottom: 4px !important; color: #3a3a3a !important; }

/* Ch.4 Triangle SVG */
.triangle-svg { width: 100%; max-width: 360px; display: block; margin: 20px auto 24px; height: auto; }

/* Ch.4 Criteria detail */
.criteria-detail { margin: 16px 0 20px; }
.criteria-item { display: flex; gap: 14px; padding: 12px 16px; border-bottom: 1px dashed #e8e2d4; }
.criteria-item:last-child { border-bottom: none; }
.criteria-num { font-size: 24px; font-weight: 900; color: #C9A84C; flex-shrink: 0; line-height: 1; font-family: 'Noto Serif JP', serif; }
.criteria-name { font-size: 15px !important; font-weight: 700; color: #3A2816 !important; margin-bottom: 4px !important; }
.criteria-text { font-size: 13px !important; color: #3a3a3a !important; line-height: 1.7 !important; margin-bottom: 0 !important; }
.criteria-ex { font-size: 12px; color: #8a7a68; font-style: italic; }

/* Meriha list: bold head + muted sub */
.meriha-list { list-style: none !important; padding-left: 0 !important; margin-bottom: 0 !important; }
.meriha-list li { display: block !important; font-size: 12px !important; line-height: 1.7 !important; margin-bottom: 8px !important; padding-left: 14px; position: relative; }
.meriha-list li::before { content: '◆'; position: absolute; left: 0; color: #C9A84C; font-size: 9px; top: 3px; }
.meriha-list li strong { display: block; font-size: 13px; color: #3A2816; font-weight: 700; margin-bottom: 1px; }
.meriha-list li span { display: block; font-size: 11px; color: #8a7a68; line-height: 1.6; }

/* Nego sub */
.nego-sub { font-size: 11px !important; color: #8a7a68 !important; line-height: 1.6 !important; margin-top: 4px !important; margin-bottom: 0 !important; }

/* Ch.5 Setup grid */
.setup-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin: 20px 0 24px; }
.setup-card { background: #FCF8F0; border: 1px solid #D9C9AC; border-radius: 10px; padding: 16px 10px; text-align: center; }
.setup-icon { font-size: 28px; margin-bottom: 8px; }
.setup-title { font-size: 13px !important; font-weight: 700; color: #3A2816 !important; margin-bottom: 8px !important; }
.setup-big { font-family: 'Noto Serif JP', serif; font-size: 22px !important; font-weight: 700; color: #C9A84C !important; line-height: 1.2 !important; margin: 4px 0 6px !important; letter-spacing: 0.02em; }
.setup-sub { font-size: 10px !important; color: #8a7a68 !important; line-height: 1.5 !important; margin-bottom: 8px !important; }
.setup-warn { font-size: 10px !important; color: #C44D3F !important; background: #fff; padding: 6px 4px; border-radius: 4px; margin-bottom: 0 !important; line-height: 1.4 !important; }

/* Checklist */
.checklist { background: #FCF8F0; border: 1px solid #e8e2d4; border-radius: 8px; padding: 18px 22px; margin: 20px 0; }
.checklist-title { font-size: 14px !important; font-weight: 700; color: #3A2816 !important; margin-bottom: 12px !important; }
.checklist-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 18px; }
.checklist-group { font-size: 12px !important; font-weight: 700; color: #C9A84C !important; margin-bottom: 6px !important; }
.checklist p:not(.checklist-title):not(.checklist-group) { font-size: 12px !important; color: #3a3a3a !important; line-height: 2 !important; margin-bottom: 0 !important; }

/* Ch.6 Cost bar */
.cost-bar { margin: 16px 0 20px; background: #FCF8F0; border: 1px solid #e8e2d4; border-radius: 10px; padding: 18px 20px; }
.cost-row { display: grid; grid-template-columns: 110px 1fr 90px; align-items: center; gap: 14px; padding: 10px 0; border-bottom: 1px dashed #e8e2d4; }
.cost-row:last-child { border-bottom: none; }
.cost-label { font-size: 12px !important; color: #3A2816 !important; font-weight: 700; line-height: 1.4 !important; margin-bottom: 0 !important; }
.cost-label span { font-size: 11px; font-weight: 400; color: #5C3A21; }
.cost-bar-track { background: #fff; border: 1px solid #e8e2d4; border-radius: 4px; height: 22px; position: relative; }
.cost-bar-fill { height: 100%; border-radius: 4px; display: flex; align-items: center; padding: 0 10px; color: #fff; font-size: 11px; font-weight: 700; white-space: nowrap; overflow: visible; position: relative; z-index: 1; }
.cost-bar-fill.inuki { background: #4A6741; }
.cost-bar-fill.inuki-mid { background: #5C3A21; }
.cost-bar-fill.sukelton { background: #8B3A3A; }
.cost-time { font-size: 11px !important; color: #5C3A21 !important; font-weight: 500; text-align: right; margin-bottom: 0 !important; }

/* Sidebar */
.sidebar { background: linear-gradient(135deg, #F3EBDA 0%, #EADFC9 100%); border: 1px solid #D9C9AC; border-radius: 8px; padding: 16px 22px; margin: 18px 0; }
.sidebar-label { font-size: 12px !important; font-weight: 700; color: #C9A84C !important; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 8px !important; }
.sidebar p:not(.sidebar-label) { font-size: 13px !important; color: #3a3a3a !important; margin-bottom: 0 !important; line-height: 1.8 !important; }

/* Ch.7 Hack grid */
.hack-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 20px 0 24px; }
.hack-card { background: #fff; border: 1px solid #D9C9AC; border-top: 3px solid #C9A84C; border-radius: 0 0 10px 10px; padding: 0 0 18px; text-align: center; overflow: hidden; }
.hack-img { width: 100%; aspect-ratio: 16/10; object-fit: cover; display: block; margin-bottom: 10px; }
.hack-num { font-size: 14px; font-weight: 700; color: #C9A84C; letter-spacing: 0.15em; margin-bottom: 8px; }
.hack-title { font-size: 14px !important; font-weight: 700; color: #3A2816 !important; margin: 0 14px 10px !important; line-height: 1.5 !important; }
.hack-desc { font-size: 12px !important; color: #5C3A21 !important; line-height: 1.7 !important; margin: 0 14px 10px !important; }
.hack-saving { font-size: 11px !important; color: #3A2816 !important; background: #FCF8F0; padding: 6px 8px; border-radius: 4px; margin: 0 14px !important; line-height: 1.5 !important; }
.hack-saving strong { color: #C9A84C !important; font-size: 14px; }

/* Saving SVG */
.saving-svg { width: 100%; max-width: 400px; display: block; margin: 16px auto 20px; height: auto; }

/* Jirei */
.jirei { background: #fff; border: 1px solid #e0d8cc; border-left: 4px solid #C9A84C; border-radius: 0 6px 6px 0; padding: 14px 18px; margin: 14px 0; }
.jirei-title { font-size: 13px !important; font-weight: 700; color: #5C3A21 !important; margin-bottom: 6px !important; }
.jirei ul { margin-bottom: 0 !important; padding-left: 20px; }
.jirei li { font-size: 13px !important; color: #3a3a3a !important; line-height: 1.8 !important; margin-bottom: 4px !important; }

/* Ch.8 Fail */
.fail { background: #fff; border: 1px solid #e0d8cc; border-left: 4px solid #C44D3F; border-radius: 0 6px 6px 0; padding: 10px 16px; margin-bottom: 8px; }
.fail-title { font-size: 13px !important; font-weight: 700; color: #3A2816 !important; margin-bottom: 4px !important; line-height: 1.5 !important; }
.fail-num { display: inline-block; width: 22px; height: 22px; background: #C44D3F; color: #fff; border-radius: 50%; text-align: center; font-size: 11px; font-weight: 700; line-height: 22px; margin-right: 8px; }
.fail-line { font-size: 12px !important; color: #666 !important; margin-bottom: 0 !important; line-height: 1.6 !important; }

/* Ch.8 Negotiation */
.nego-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 20px 0 20px; }
.nego-wide { grid-column: 1 / -1; }
.nego-card { background: #fff; border: 1px solid #e0d8cc; border-left: 4px solid #C9A84C; border-radius: 0 8px 8px 0; padding: 14px 18px; }
.nego-head { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
.nego-num { display: inline-block; width: 28px; height: 28px; background: #C9A84C; color: #fff; border-radius: 50%; text-align: center; font-size: 12px; font-weight: 700; line-height: 28px; flex-shrink: 0; }
.nego-name { font-size: 14px !important; font-weight: 700; color: #3A2816 !important; margin-bottom: 0 !important; }
.nego-text { font-size: 13px !important; color: #3a3a3a !important; line-height: 1.75 !important; margin-bottom: 8px !important; }
.nego-line { font-size: 12px !important; color: #5C3A21 !important; background: #FCF8F0; padding: 8px 12px; border-radius: 4px; line-height: 1.7 !important; margin-bottom: 0 !important; font-style: italic; }
.nego-line::before { content: '💬 '; }

/* Ch.9 Parse flow */
.parse-flow { display: grid; grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr; gap: 6px; align-items: center; margin: 20px 0 24px; }
.parse-step { background: #FCF8F0; border: 1px solid #D9C9AC; border-radius: 10px; padding: 14px 8px; text-align: center; }
.parse-icon { font-size: 28px; margin-bottom: 6px; }
.parse-stepnum { font-size: 10px !important; font-weight: 700; color: #C9A84C !important; letter-spacing: 0.15em; margin-bottom: 4px !important; }
.parse-stephead { font-size: 13px !important; font-weight: 700; color: #3A2816 !important; margin-bottom: 6px !important; line-height: 1.4 !important; }
.parse-stepdesc { font-size: 11px !important; color: #5C3A21 !important; line-height: 1.6 !important; margin-bottom: 0 !important; }
.parse-arrow { color: #C9A84C; font-weight: 700; font-size: 18px; text-align: center; }
.parse-use-grid { display: grid; grid-template-columns: 1fr; gap: 10px; margin: 14px 0 16px; }
.parse-use { background: #fff; border: 1px solid #e0d8cc; border-radius: 8px; padding: 12px 16px; }
.parse-use-title { font-size: 12px !important; font-weight: 700; color: #C9A84C !important; letter-spacing: 0.08em; margin-bottom: 4px !important; }
.parse-use-head { font-size: 14px !important; font-weight: 700; color: #3A2816 !important; line-height: 1.6 !important; margin-bottom: 4px !important; }
.parse-use-sub { font-size: 12px !important; color: #8a7a68 !important; line-height: 1.7 !important; margin-bottom: 0 !important; }

/* Step */
.step { background: linear-gradient(135deg, #FCF8F0 0%, #F3EBDA 100%); border: 1px solid #D9C9AC; border-radius: 8px; padding: 18px 22px; margin-bottom: 12px; }
.step-num { font-size: 11px !important; font-weight: 700; color: #C9A84C !important; letter-spacing: 0.15em; margin-bottom: 6px !important; }
.step-head { font-size: 16px !important; font-weight: 700; color: #3A2816 !important; margin-bottom: 6px !important; line-height: 1.4 !important; }
.step-body { font-size: 13px !important; color: #3a3a3a !important; line-height: 1.8 !important; margin-bottom: 0 !important; }

/* Final CTA */
.final-cta { background: linear-gradient(135deg, #3A2816 0%, #5C3A21 100%); color: #fff; padding: 32px 28px; border-radius: 12px; text-align: center; margin-top: 32px; }
.final-cta p { color: rgba(255,255,255,0.8) !important; margin-bottom: 10px !important; }
.final-title { font-size: 20px !important; font-weight: 700; color: #fff !important; letter-spacing: 0.05em; }
.final-url { font-size: 13px !important; color: #C9A84C !important; margin-top: 16px !important; word-break: break-all; }

/* Data table */
.data-table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 13px; }
.data-table thead { background: #3A2816; color: #fff; }
.data-table th { padding: 10px 12px; text-align: left; font-weight: 500; letter-spacing: 0.04em; }
.data-table td { padding: 9px 12px; border-bottom: 1px solid #e8e2d4; vertical-align: middle; color: #3a3a3a; }
.data-table tr:hover td { background: #FCF8F0; }

/* 用語集 */
.yougoshu { margin-top: 16px; }
.yougoshu dt { font-size: 14px; font-weight: 700; color: #3A2816; margin-top: 12px; padding-bottom: 3px; border-bottom: 1px dashed #D9C9AC; }
.yougoshu dd { font-size: 13px; line-height: 1.8; color: #3a3a3a; margin: 5px 0 0; padding-left: 16px; }

.closing { margin-top: 44px; padding-top: 18px; border-top: 2px solid #C9A84C; text-align: center; }
.closing p { font-size: 12px !important; color: #8a7a68 !important; margin-bottom: 4px !important; }
.closing-sub { font-size: 13px !important; color: #5C3A21 !important; font-weight: 500; }

@media (max-width: 640px) {
  .page { padding: 40px 20px; }
  .strength-grid, .pattern-grid, .setup-grid, .hack-grid { grid-template-columns: 1fr 1fr; }
  .setup-grid { grid-template-columns: 1fr 1fr; }
  .when-compare, .profile-cards, .pro-con, .nego-grid, .ba-grid { grid-template-columns: 1fr; }
  .crew-grid { grid-template-columns: repeat(2, 1fr); }
  .incentive-grid, .margin-compare, .weak-grid { grid-template-columns: 1fr; }
  .why-cheap-grid { grid-template-columns: 1fr; }
  .nego-wide { grid-column: 1; }
  .parse-flow { grid-template-columns: 1fr; }
  .parse-arrow { transform: rotate(90deg); padding: 4px 0; }
  .checklist-grid { grid-template-columns: 1fr; }
  .cover-title-l2, .cover-title-l3 { font-size: 40px; }
  .cover-title-l1 { font-size: 34px; }
  .cost-row { grid-template-columns: 90px 1fr; }
  .cost-time { grid-column: 1 / -1; text-align: right; font-size: 10px !important; }
}

@media print {
  @page { size: A4; margin: 15mm 12mm; }
  .guide-root { background: #fff !important; padding: 0 !important; }
  .screen-only { display: none !important; }
  .page { box-shadow: none !important; border-radius: 0 !important; margin: 0 !important; padding: 18mm 14mm !important; min-height: auto !important; page-break-after: always; max-width: none !important; }
  .guide-cover { min-height: 260mm !important; }
  .data-table, .jirei, .fail, .step, .sidebar, .checklist, .pro-con, .stance-compare, .when-compare, .strength-grid, .pattern-grid, .setup-grid, .hack-grid { page-break-inside: avoid; }
}
`;
