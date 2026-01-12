import React, { useState, useEffect, useCallback } from 'react';
import { Post } from '../types';
import { ChevronLeft, ChevronRight, ArrowRight, Play } from 'lucide-react';

interface RecentCarouselProps {
  posts: Post[];
  onPostClick: (id: string) => void;
}

const RecentCarousel: React.FC<RecentCarouselProps> = ({ posts, onPostClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
  }, [posts.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length);
  }, [posts.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  if (posts.length === 0) return null;

  return (
    <section className="max-w-[1200px] mx-auto px-4 mt-20 mb-24 relative">
      <div className="flex items-end justify-between mb-10 border-b border-gray-100 pb-8">
        <div className="space-y-2">
            <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#0056FF] animate-pulse"></span>
                <span className="text-[11px] font-black text-[#8B21F7] uppercase tracking-[0.4em] italic">On Air Now</span>
            </div>
            <h2 className="serif-title text-5xl text-gray-900 italic leading-none font-black">Reportajes Estrella</h2>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={prevSlide}
            className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-gray-100 text-gray-400 hover:border-[#0056FF] hover:text-[#0056FF] hover:bg-blue-50 transition-all duration-300 group active:scale-90 shadow-sm"
          >
            <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-gray-100 text-gray-400 hover:border-[#0056FF] hover:text-[#0056FF] hover:bg-blue-50 transition-all duration-300 group active:scale-90 shadow-sm"
          >
            <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div 
        className="relative overflow-hidden h-[500px] md:h-[650px] rounded-[2.5rem] group cursor-pointer shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)]" 
        onClick={() => onPostClick(posts[currentIndex].id)}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className="flex transition-transform duration-[1200ms] cubic-bezier(0.19, 1, 0.22, 1) h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {posts.map((post) => (
            <div key={post.id} className="min-w-full relative h-full overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[6000ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-12 md:p-20 w-full max-w-4xl z-20">
                <div className="flex items-center gap-4 mb-8">
                    <span className="bg-q8-gradient text-white px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.3em] italic shadow-2xl border border-white/20">
                    {post.category}
                    </span>
                    <span className="h-[1px] w-12 bg-white/30"></span>
                    <span className="text-white/70 text-[11px] font-black uppercase tracking-[0.3em]">{post.date}</span>
                </div>
                
                <h3 className="serif-title text-5xl md:text-8xl text-white leading-[1] mb-8 drop-shadow-2xl group-hover:text-cyan-100 transition-colors font-black">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 text-lg md:text-2xl line-clamp-2 font-medium opacity-90 mb-10 max-w-2xl leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-6">
                    <button className="btn-modern bg-white text-gray-950 px-10 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] italic group-hover:bg-[#0056FF] group-hover:text-white transition-all">
                        Leer Reportaje <ArrowRight size={18} />
                    </button>
                    <div className="hidden md:flex items-center gap-3 text-white/50 text-[10px] font-black uppercase tracking-widest">
                        <Play size={14} className="fill-white/50" />
                        <span>3 MIN READ</span>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Indicadores Dinámicos */}
        <div className="absolute top-1/2 right-12 -translate-y-1/2 flex flex-col gap-6 z-30">
          {posts.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className="group relative flex items-center justify-center py-2"
            >
              <div className={`h-16 w-1 rounded-full transition-all duration-700 ${currentIndex === idx ? 'bg-white scale-y-100' : 'bg-white/20 scale-y-50 group-hover:bg-white/40'}`}></div>
              {currentIndex === idx && (
                <span className="absolute right-6 text-[10px] font-black text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                   {String(idx + 1).padStart(2, '0')}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentCarousel;