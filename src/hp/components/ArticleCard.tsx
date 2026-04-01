import { Link } from 'react-router-dom';
import type { Article } from '../../data/articles';
import { categoryLabels } from '../../data/articles';

interface Props {
  article: Article;
}

export default function ArticleCard({ article }: Props) {
  const date = article.publishedAt.replace(/-/g, '.');

  return (
    <Link
      to={`/studio/articles/${article.slug}`}
      className="group block no-underline"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden">
        <img
          src={article.thumbnail.replace('.webp', '-sm.webp')}
          alt={article.title}
          className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Category badge */}
        <span
          className="absolute top-3 left-3 text-[10px] tracking-[2px] uppercase px-3 py-1"
          style={{
            backgroundColor: '#4A6741',
            color: '#fff',
          }}
        >
          {categoryLabels[article.category]}
        </span>
      </div>

      {/* Body */}
      <div className="pt-4 pb-6">
        {/* Date */}
        <div className="text-[11px] tracking-[1px] text-[#999] mb-1.5">
          {date}
        </div>
        {/* Title */}
        <h3 className="text-[15px] font-medium text-[#333] leading-relaxed mb-2 group-hover:text-[#4A6741] transition-colors">
          {article.title}
        </h3>
        {/* Excerpt */}
        <p
          className="text-[13px] text-[#666] leading-[1.8] mb-3"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {article.excerpt}
        </p>
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {article.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-[10px] tracking-[0.5px] text-[#4A6741] border border-[#4A6741]/20 px-2 py-0.5"
            >
              #{tag}
            </span>
          ))}
          {article.tags.length > 4 && (
            <span className="text-[10px] text-[#999]">
              +{article.tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
