import { useState } from 'react';
import StudioNav from '../components/StudioNav';
import StudioFooter from '../components/StudioFooter';
import ArticleCard from '../components/ArticleCard';
import ScrollFadeIn from '../../shared/ScrollFadeIn';
import {
  getAllArticles,
  getArticlesByCategory,
  categoryLabels,
  type ArticleCategory,
} from '../../data/articles';
import { colors } from '../../shared/design-tokens';

const categories: { key: ArticleCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'すべて' },
  { key: 'case-study', label: '施工事例' },
  { key: 'column', label: 'コラム' },
  { key: 'interview', label: 'お客様の声' },
  { key: 'news', label: 'お知らせ' },
  { key: 'seo', label: 'お役立ち情報' },
];

export default function ArticleList() {
  const [activeCategory, setActiveCategory] = useState<ArticleCategory | 'all'>('all');

  const articles =
    activeCategory === 'all' ? getAllArticles() : getArticlesByCategory(activeCategory);

  return (
    <div style={{ backgroundColor: '#2E4229' }}>
      <div style={{ paddingTop: 0, backgroundColor: colors.beige }}>
        <StudioNav />

        {/* Hero */}
        <section
          style={{
            position: 'relative',
            height: '50vh',
            minHeight: '320px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              height: '100%',
              backgroundColor: '#CFC7BD',
            }}
          >
            <img
              src="/assets/textures/oak-hardwood-floor-sm.webp"
              alt=""
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(100%)',
              }}
            />
            <div
              style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)' }}
            />
          </div>
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            <p
              style={{
                color: '#fff',
                fontFamily: "'Noto Sans JP', sans-serif",
                fontSize: 'clamp(32px, 9vw, 48px)',
                fontWeight: 900,
                letterSpacing: 'clamp(0.06em, 1.5vw, 0.12em)',
                textTransform: 'uppercase',
              }}
            >
              Articles
            </p>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>記事一覧</p>
          </div>
        </section>

        {/* Filter + Cards */}
        <div className="max-w-[1080px] mx-auto px-6 pt-12 pb-20">
          {/* Category filter */}
          <ScrollFadeIn>
            <div className="flex flex-wrap gap-2 mb-10 justify-center">
              {categories.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className="text-[12px] tracking-[1.5px] px-5 py-2.5 border transition-colors cursor-pointer"
                  style={{
                    backgroundColor: activeCategory === key ? '#4A6741' : 'transparent',
                    color: activeCategory === key ? '#fff' : '#888',
                    borderColor:
                      activeCategory === key ? '#4A6741' : 'rgba(74,103,65,0.2)',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </ScrollFadeIn>

          {/* Articles grid */}
          {articles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[14px] text-[#999]">
                {activeCategory !== 'all'
                  ? `「${categoryLabels[activeCategory]}」の記事はまだありません`
                  : '記事はまだありません'}
              </p>
            </div>
          ) : (
            <ScrollFadeIn>
              <div
                className="grid gap-6"
                style={{
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                }}
              >
                {articles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </ScrollFadeIn>
          )}
        </div>
      </div>
      <StudioFooter />
    </div>
  );
}
