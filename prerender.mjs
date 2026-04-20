import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITE_URL = "https://kiokuso.jp";
const SITE_NAME = "記憶荘";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/hero-bg-pc.webp`;

// ========== Per-route metadata ==========

const STATIC_META = {
  "/": {
    title: "記憶荘｜仙台・宮城の店舗内装／収益物件／工務店／不動産",
    description:
      "仙台・宮城で店舗内装・収益物件リノベ・工務店・不動産までを一気通貫で手がける記憶荘グループ。元不動産仲介20年×大工歴20年超の2人体制、テナント探し・物件探しから伴走します。",
  },
  "/about": {
    title: `記憶荘グループについて｜${SITE_NAME}`,
    description:
      "記憶荘グループは、店舗内装スタジオ・満室デザインLABO・記憶荘工務店・記憶荘不動産の4事業で、仙台・宮城の「始める人」と「続ける人」を支える集合体です。",
  },
  "/concept": {
    title: `コンセプト｜${SITE_NAME}`,
    description:
      "記憶荘グループの理念とブランドコンセプト。古い骨組みに、次の灯りを入れる。テナント・物件・施工・情報網の4方向から、仙台・宮城の場に記憶を積み重ねる。",
  },
  "/studio": {
    title: "記憶荘 店舗内装スタジオ｜テナント探しから手伝う内装屋（仙台・宮城）",
    description:
      "仙台・宮城で店舗を始める方へ。テナント探しから居抜き活用・スケルトン工事・開業支援まで一気通貫。非公開テナント情報、元不動産×大工歴20年の2人体制、営業なし・LINE相談無料。",
  },
  "/studio/about": {
    title: `店舗内装スタジオの体制｜${SITE_NAME}`,
    description:
      "記憶荘 店舗内装スタジオの運営体制。元不動産仲介業20年のKAIと大工歴20年超のKENが、テナント探しから設計・施工・開業後のフォローまで2人体制で伴走します。",
  },
  "/studio/works": {
    title: `店舗内装 施工事例｜${SITE_NAME}`,
    description:
      "仙台・宮城で手がけた店舗内装の施工事例。カフェ・バー・美容サロン・飲食店・小売など、居抜き活用〜スケルトン工事までの実例を費用・工期付きで公開。",
  },
  "/studio/pricing": {
    title: `店舗内装の料金目安｜${SITE_NAME}`,
    description:
      "仙台・宮城の店舗内装の料金目安。坪単価・居抜きとスケルトンの費用差・見積もりの内訳・支払条件まで、透明な料金ポリシーを公開しています。",
  },
  "/studio/works/crossover": {
    title: "バスケットボール Cafe&Bar CROSSOVER｜店舗内装事例｜記憶荘",
    description:
      "閉店店舗の什器をフル活用し、新築事務所をバスケットボールカフェバーへ変貌させた店舗内装事例。予算90万円・工期10日。居抜き什器再利用による大幅コストダウンの実例。",
  },
  "/studio/articles": {
    title: `店舗内装のお役立ち記事一覧｜${SITE_NAME}`,
    description:
      "仙台・宮城の店舗内装・テナント探し・開業・費用相場に関する記事一覧。施工事例・コラム・SEO記事を掲載。",
  },
  "/studio/guide/tenant": {
    title: `テナント攻略ガイド｜${SITE_NAME} 店舗内装スタジオ`,
    description:
      "仙台・宮城で店舗テナントを探す前に読む完全ガイド。居抜きvsスケルトンの判断、家賃と改装費の逆算、非公開物件の動かし方、契約の注意点まで1本にまとめました。",
  },
  "/privacy": {
    title: `プライバシーポリシー｜${SITE_NAME}`,
    description: "記憶荘グループのプライバシーポリシー。",
  },
  "/invest": {
    title: "満室デザインLABO（記憶荘INVEST）準備中｜築古アパート・戸建投資の収益物件リノベ",
    description:
      "満室デザインLABOは、築古アパート・戸建投資・ゾンビハウス再生で眠る物件を収益に変える記憶荘グループの収益物件リノベ事業です。準備中／仙台・宮城エリア。",
  },
  "/koumuten": {
    title: "記憶荘工務店（KIOKUSO BUILD）準備中｜施工の実行部隊",
    description:
      "記憶荘工務店は、店舗内装スタジオと満室デザインLABOから流れてくる施工を一つずつ丁寧に仕上げる実行部隊です。準備中／仙台・宮城エリア。",
  },
  "/fudousan": {
    title: "記憶荘不動産（KIOKUSO ESTATE）準備中｜物件探しの入口",
    description:
      "記憶荘不動産は、店舗内装スタジオと満室デザインLABOの上流にある物件探しの入口。非公開テナント・居抜き・収益物件を、仙台・宮城の情報網から見つけ出します。",
  },
  "/lp/tenant": {
    title: "仙台の飲食店テナント探し｜テナント探しから手伝う内装屋 記憶荘",
    description:
      "仙台・宮城で飲食店・カフェ・バーを開業する方へ。非公開テナント情報と内装工事を一気通貫で。元不動産×大工歴20年の2人体制、営業なし・LINE相談無料。",
  },
};

// ========== Data extraction from articles.ts ==========

function extractField(block, field) {
  const re = new RegExp(`${field}:\\s*(['"\`])((?:\\\\.|(?!\\1).)*)\\1`);
  const m = block.match(re);
  return m ? m[2] : null;
}

function parseArticles() {
  const src = fs.readFileSync(path.join(__dirname, "src/data/articles.ts"), "utf-8");

  // Collect top-level string constants so that we can substitute ${NAME}
  // references inside extracted template literals (e.g. `${IMG}/foo.webp`).
  const constMap = {};
  const constRe = /const\s+([A-Z_][A-Z0-9_]*)\s*=\s*['"`]([^'"`]+)['"`]\s*;/g;
  let m;
  while ((m = constRe.exec(src)) !== null) {
    constMap[m[1]] = m[2];
  }
  const resolve = (s) =>
    s == null
      ? s
      : s.replace(/\$\{(\w+)\}/g, (_, k) => (k in constMap ? constMap[k] : ""));

  const blocks = src.split(/\r?\n\s*\{\r?\n/).slice(1);
  const out = [];
  for (const raw of blocks) {
    const slug = extractField(raw, "slug");
    if (!slug) continue;
    out.push({
      slug,
      title: resolve(extractField(raw, "title")),
      metaDescription: resolve(extractField(raw, "metaDescription")),
      excerpt: resolve(extractField(raw, "excerpt")),
      thumbnail: resolve(extractField(raw, "thumbnail")),
    });
  }
  return out;
}

// ========== Head injection ==========

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function applyMeta(template, meta) {
  const t = escapeHtml(meta.title);
  const d = escapeHtml(meta.description);
  const url = escapeHtml(meta.url);
  const img = escapeHtml(meta.img || DEFAULT_OG_IMAGE);
  const ogType = escapeHtml(meta.ogType || "website");

  let html = template;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${t}</title>`);
  html = html.replace(
    /<meta\s+name="description"[\s\S]*?\/>/,
    `<meta name="description" content="${d}" />`
  );

  if (/<link\s+rel="canonical"[^>]*\/>/.test(html)) {
    html = html.replace(
      /<link\s+rel="canonical"[^>]*\/>/,
      `<link rel="canonical" href="${url}" />`
    );
  } else {
    html = html.replace(
      /<meta\s+name="description"[^>]*\/>/,
      (m) => `${m}\n    <link rel="canonical" href="${url}" />`
    );
  }

  html = html.replace(
    /<meta\s+property="og:title"[^>]*\/>/,
    `<meta property="og:title" content="${t}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"[\s\S]*?\/>/,
    `<meta property="og:description" content="${d}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"[^>]*\/>/,
    `<meta property="og:url" content="${url}" />`
  );
  html = html.replace(
    /<meta\s+property="og:image"[^>]*\/>/,
    `<meta property="og:image" content="${img}" />`
  );
  html = html.replace(
    /<meta\s+property="og:type"[^>]*\/>/,
    `<meta property="og:type" content="${ogType}" />`
  );

  html = html.replace(
    /<meta\s+name="twitter:title"[^>]*\/>/,
    `<meta name="twitter:title" content="${t}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"[\s\S]*?\/>/,
    `<meta name="twitter:description" content="${d}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:image"[^>]*\/>/,
    `<meta name="twitter:image" content="${img}" />`
  );

  return html;
}

async function prerender() {
  const templatePath = path.join(__dirname, "dist", "index.html");
  const template = fs.readFileSync(templatePath, "utf-8");

  const { render } = await import("./dist-server/entry-server.js");

  const articles = parseArticles();

  const routeMeta = new Map();

  for (const [route, m] of Object.entries(STATIC_META)) {
    routeMeta.set(route, {
      title: m.title,
      description: m.description,
      url: `${SITE_URL}${route === "/" ? "/" : route + "/"}`,
      img: DEFAULT_OG_IMAGE,
      ogType: "website",
    });
  }

  for (const a of articles) {
    const route = `/studio/articles/${a.slug}`;
    routeMeta.set(route, {
      title: a.title ? `${a.title}｜${SITE_NAME}` : STATIC_META["/studio/articles"].title,
      description:
        a.metaDescription ||
        a.excerpt ||
        STATIC_META["/studio/articles"].description,
      url: `${SITE_URL}${route}/`,
      img: a.thumbnail ? `${SITE_URL}${a.thumbnail}` : DEFAULT_OG_IMAGE,
      ogType: "article",
    });
  }

  const routes = [...routeMeta.keys()];

  for (const route of routes) {
    const appHtml = render(route);
    let html = applyMeta(template, routeMeta.get(route));
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    const filePath =
      route === "/"
        ? path.join(__dirname, "dist", "index.html")
        : path.join(__dirname, "dist", route.slice(1), "index.html");

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, html);

    console.log(`Prerendered: ${route} → ${path.relative(__dirname, filePath)}`);
  }

  fs.rmSync(path.join(__dirname, "dist-server"), { recursive: true, force: true });

  console.log(`\nPrerender complete! (${routes.length} routes with per-page meta)`);
}

prerender().catch((err) => {
  console.error(err);
  process.exit(1);
});
