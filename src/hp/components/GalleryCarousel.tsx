import { useState, useRef, useEffect, useCallback } from 'react';
import type { GalleryPhoto } from '../../data/articles';

type PhaseFilter = 'all' | 'before' | 'process' | 'after';

const filterLabels: { key: PhaseFilter; label: string }[] = [
  { key: 'all', label: 'すべて' },
  { key: 'before', label: 'Before' },
  { key: 'process', label: 'Process' },
  { key: 'after', label: 'After' },
];

interface Props {
  photos: GalleryPhoto[];
}

export default function GalleryCarousel({ photos }: Props) {
  const [filter, setFilter] = useState<PhaseFilter>('all');
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const filtered = filter === 'all' ? photos : photos.filter((p) => p.phase === filter);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Reset index on filter change
  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < filtered.length - 1) {
        setCurrentIndex((i) => i + 1);
      } else if (diff < 0 && currentIndex > 0) {
        setCurrentIndex((i) => i - 1);
      }
    }
  }, [currentIndex, filtered.length]);

  return (
    <div className="mt-8 mb-14">
      {/* Filter buttons */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {filterLabels.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className="text-[12px] tracking-[1.5px] px-4 py-2 border transition-colors cursor-pointer"
            style={{
              backgroundColor: filter === key ? '#4A6741' : 'transparent',
              color: filter === key ? '#fff' : '#888',
              borderColor: filter === key ? '#4A6741' : 'rgba(74,103,65,0.2)',
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-sm text-[#999]">該当する写真がありません</p>
      )}

      {/* Mobile: Carousel */}
      {isMobile && filtered.length > 0 && (
        <div>
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {filtered.map((photo, i) => (
                <div key={i} className="w-full flex-shrink-0">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-[240px] object-cover"
                    loading="lazy"
                  />
                  <div className="text-[10px] tracking-[2px] text-[#888] uppercase mt-2">
                    {photo.phase}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Dot indicators */}
          {filtered.length > 1 && (
            <div className="flex justify-center gap-1.5 mt-4">
              {filtered.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className="w-2 h-2 rounded-full transition-colors cursor-pointer border-0"
                  style={{
                    backgroundColor: i === currentIndex ? '#4A6741' : '#ccc',
                  }}
                  aria-label={`写真 ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* PC: Grid */}
      {!isMobile && filtered.length > 0 && (
        <div className="grid grid-cols-2 gap-2">
          {filtered.map((photo, i) => (
            <div key={i} className="relative group">
              <img
                src={photo.src}
                alt={photo.alt}
                className={`w-full h-[280px] object-cover transition-all duration-300 hover:scale-[1.02] ${
                  photo.phase === 'before' ? 'grayscale-[40%] hover:grayscale-0' : ''
                }`}
                loading="lazy"
              />
              <div className="text-[10px] tracking-[2px] text-[#888] uppercase mt-1.5">
                {photo.phase}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
