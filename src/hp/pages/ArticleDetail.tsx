import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import StudioNav from '../components/StudioNav';
import StudioFooter from '../components/StudioFooter';
import GalleryCarousel from '../components/GalleryCarousel';
import ArticleCard from '../components/ArticleCard';
import ScrollFadeIn from '../../shared/ScrollFadeIn';
import {
  getArticleBySlug,
  getArticlesByCategory,
  categoryLabels,
} from '../../data/articles';
import { colors } from '../../shared/design-tokens';

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div style={{ backgroundColor: '#2E4229' }}>
        <div style={{ paddingTop: 0, backgroundColor: colors.beige }}>
          <StudioNav />
          <div className="max-w-[860px] mx-auto px-6 py-40 text-center">
            <p className="text-[15px] text-[#999]">記事が見つかりません</p>
            <Link
              to="/studio/articles"
              className="inline-block mt-6 text-[13px] tracking-[2px] text-[#4A6741] no-underline hover:opacity-70 transition-opacity"
            >
              ← 記事一覧に戻る
            </Link>
          </div>
        </div>
        <StudioFooter />
      </div>
    );
  }

  const isCaseStudy = article.category === 'case-study';
  const related = getArticlesByCategory(article.category)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <div style={{ backgroundColor: '#2E4229' }}>
      <div style={{ paddingTop: 0, backgroundColor: '#F8F5F0' }}>
        <StudioNav />

        {/* HERO */}
        <section className="relative h-[85vh] min-h-[500px] overflow-hidden flex items-end">
          <img
            src={article.thumbnail}
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/70" />
          <div className="relative z-10 px-6 md:px-12 pb-16 max-w-[900px]">
            {article.enTitle && (
              <div className="text-[13px] tracking-[4px] text-white/60 mb-3 font-bold uppercase">
                {article.enTitle}
              </div>
            )}
            <h1 className="font-bold text-[clamp(24px,4vw,40px)] text-white leading-relaxed mb-2">
              {article.title}
            </h1>
            <div className="font-semibold text-[15px] text-white/50 tracking-[2px]">
              {categoryLabels[article.category]} — {article.publishedAt.replace(/-/g, '.')}
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <div className="max-w-[860px] mx-auto px-6">
          {/* Breadcrumbs */}
          <nav className="pt-8 pb-6 flex items-center gap-2 text-[12px] text-[#999]">
            <Link to="/studio" className="no-underline text-[#999] hover:text-[#4A6741] transition-colors">
              Top
            </Link>
            <span>&gt;</span>
            <Link to="/studio/articles" className="no-underline text-[#999] hover:text-[#4A6741] transition-colors">
              記事一覧
            </Link>
            <span>&gt;</span>
            <span className="text-[#666]">{categoryLabels[article.category]}</span>
          </nav>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs tracking-[1px] text-[#4A6741] border border-[#4A6741]/20 px-3.5 py-1.5"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Spec grid (case-study only) */}
          {isCaseStudy && article.specs && (
            <ScrollFadeIn>
              <section className="pb-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#4A6741]/10 border border-[#4A6741]/10">
                  {article.specs.map((spec) => (
                    <div key={spec.label} className="bg-[#F8F5F0] py-6 text-center">
                      <div className="text-[13px] tracking-[3px] text-[#888] uppercase mb-2">
                        {spec.label}
                      </div>
                      <div className="font-normal text-lg text-[#333]">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollFadeIn>
          )}

          {/* Gallery (case-study only) */}
          {isCaseStudy && article.gallery && article.gallery.length > 0 && (
            <ScrollFadeIn>
              <SectionHeading en="Gallery" ja="施工写真" />
              <GalleryCarousel photos={article.gallery} />
            </ScrollFadeIn>
          )}

          {/* Lead */}
          <ScrollFadeIn>
            <div
              className="mt-12 mb-12 pl-5"
              style={{ borderLeft: '4px solid #C9A84C' }}
            >
              <P>{article.lead}</P>
            </div>
          </ScrollFadeIn>

          {/* Sections */}
          {article.sections.map((section, i) => (
            <ScrollFadeIn key={i}>
              <SectionHeading
                en={section.headingEn || ''}
                ja={section.heading}
              />
              <div className="space-y-6">
                {section.text.split('\n\n').map((paragraph, j) => (
                  <P key={j}>{paragraph}</P>
                ))}
              </div>
              {section.image && (
                <img
                  src={section.image}
                  alt={section.imageAlt || ''}
                  className="w-full h-auto mt-8 hover:scale-[1.01] transition-transform"
                  loading="lazy"
                />
              )}
            </ScrollFadeIn>
          ))}

          {/* Back link (above CTA) */}
          <div className="mt-16 mb-4">
            <Link
              to="/studio/articles"
              className="inline-flex items-center gap-2 text-[13px] tracking-[2px] text-[#888] hover:text-[#4A6741] transition-colors no-underline"
            >
              ← 記事一覧に戻る
            </Link>
          </div>
        </div>

        {/* LINE CTA */}
        <section className="text-center py-[72px] px-6 border-t border-[#4A6741]/10 mt-12">
          <p className="text-[15px] text-[#555] leading-8 mb-8">
            まだ何も決まっていなくても、大丈夫です。
            <br />
            物件未定でもOK。断りはLINE1本で完了です。
          </p>
          <a
            href="https://lin.ee/HVV0QJO"
            className="inline-block bg-[#06C755] text-white font-normal text-sm tracking-[2px] px-12 py-4 hover:opacity-85 transition-opacity no-underline"
          >
            LINEで相談する
          </a>
        </section>

        {/* Related articles */}
        {related.length > 0 && (
          <div className="max-w-[1080px] mx-auto px-6 pb-20">
            <ScrollFadeIn>
              <SectionHeading en="Related" ja="関連記事" />
              <div
                className="grid gap-6 mt-8"
                style={{
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                }}
              >
                {related.map((a) => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
            </ScrollFadeIn>
          </div>
        )}
      </div>
      <StudioFooter />
    </div>
  );
}

// ─── Local components (same style as WorksCrossover) ────

function SectionHeading({ en, ja }: { en: string; ja: string }) {
  return (
    <div className="mt-[72px] mb-8">
      {en && (
        <div className="font-semibold text-[32px] tracking-[4px] text-[#4A6741]">
          {en}
        </div>
      )}
      <div className="text-xs tracking-[2px] text-[#888] mt-1">{ja}</div>
      <div className="w-10 h-px bg-[#C9A84C] mt-4" />
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[15px] text-[#555] leading-[2.1] font-light">{children}</p>
  );
}
