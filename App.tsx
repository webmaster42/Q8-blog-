import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RecentCarousel from './components/RecentCarousel';
import PostCard from './components/PostCard';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { BLOG_POSTS } from './data';
import { Post } from './types';
import { ArrowLeft, User, Calendar, Share2, Tag, ChevronLeft, ChevronRight, Share, TrendingUp, Sparkles, Clock, Bookmark } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'post' | 'category'>('home');
  const [activePostId, setActivePostId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, activePostId, activeCategory]);

  const navigateTo = (path: string) => {
    if (path === '/') {
      setCurrentPage('home');
      setActivePostId(null);
      setActiveCategory(null);
    } else if (path.startsWith('/category/')) {
      setCurrentPage('category');
      setActiveCategory(path.split('/category/')[1]);
      setActivePostId(null);
    }
  };

  const handlePostClick = (id: string) => {
    setActivePostId(id);
    setCurrentPage('post');
  };

  const filteredPosts = useMemo(() => {
    return activeCategory 
      ? BLOG_POSTS.filter(p => p.category.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === activeCategory.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
      : BLOG_POSTS;
  }, [activeCategory]);

  const activePostIndex = useMemo(() => {
    return BLOG_POSTS.findIndex(p => p.id === activePostId);
  }, [activePostId]);

  const activePost = BLOG_POSTS[activePostIndex];

  // Navegación entre posts correlativos
  const nextPost = activePostIndex > 0 ? BLOG_POSTS[activePostIndex - 1] : null;
  const prevPost = activePostIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[activePostIndex + 1] : null;

  // Los 3 artículos más recientes para el carrusel
  const recentCarouselPosts = useMemo(() => BLOG_POSTS.slice(0, 3), []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onNavigate={navigateTo} />
      
      {currentPage === 'home' && (
        <>
          <Hero />
          <RecentCarousel posts={recentCarouselPosts} onPostClick={handlePostClick} />
        </>
      )}

      <main className="flex-grow max-w-[1200px] mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-2/3">
            {currentPage === 'post' && activePost ? (
              <article className="animate-fadeIn max-w-[850px]">
                <button 
                  onClick={() => setCurrentPage('home')}
                  className="btn-modern flex items-center gap-3 text-[#0056FF] font-black uppercase text-[10px] tracking-[0.2em] mb-12 hover:translate-x-[-10px] transition-all bg-blue-50/50 hover:bg-blue-100 px-7 py-3 rounded-full italic"
                >
                  <ArrowLeft size={18} /> VOLVER A PORTADA
                </button>
                
                <header className="mb-14 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="bg-q8-gradient text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.25em] italic shadow-lg">
                        EDICIÓN PREMIUM
                    </span>
                    <span className="text-[#0056FF] text-[12px] font-black uppercase tracking-[0.3em] italic">
                        {activePost.category}
                    </span>
                  </div>
                  <h1 className="serif-title text-6xl md:text-8xl text-gray-950 leading-[0.95] mb-8 font-black tracking-tighter">
                    {activePost.title}
                  </h1>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-y border-gray-100 py-8 gap-6">
                    <div className="flex flex-wrap items-center gap-8 text-[11px] text-gray-400 font-black uppercase tracking-[0.2em]">
                        <div className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#0056FF] group-hover:bg-[#0056FF] group-hover:text-white transition-all shadow-sm">
                                <User size={18} />
                            </div>
                            <span className="text-gray-900 group-hover:text-[#0056FF] transition-colors">{activePost.author}</span>
                        </div>
                        <div className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#8B21F7] group-hover:bg-[#8B21F7] group-hover:text-white transition-all shadow-sm">
                                <Calendar size={18} />
                            </div>
                            <span>{activePost.date}</span>
                        </div>
                        <div className="hidden sm:flex items-center gap-3">
                            <Clock size={18} className="text-gray-300" />
                            <span>5 MIN READ</span>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#0056FF] hover:text-white hover:scale-110 transition-all shadow-sm border border-gray-100">
                            <Share2 size={20} />
                        </button>
                        <button className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#8B21F7] hover:text-white hover:scale-110 transition-all shadow-sm border border-gray-100">
                            <Bookmark size={20} />
                        </button>
                    </div>
                  </div>
                </header>

                <div className="mb-14 relative group">
                  <img src={activePost.image} className="w-full rounded-[2.5rem] shadow-2xl border-[6px] border-white group-hover:scale-[1.02] transition-transform duration-700" alt="" />
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl hidden md:block border border-gray-100 italic font-black text-[#0056FF] text-[10px] tracking-widest uppercase animate-pulse-soft">
                    Exclusive Report 2024
                  </div>
                </div>

                <div className="prose prose-xl max-w-none text-gray-900 leading-[1.85] space-y-10">
                  {activePost.content.map((p, i) => (
                    <p key={i} className="text-[22px] md:text-[24px] font-medium serif-title first-letter:text-7xl first-letter:font-black first-letter:text-[#0056FF] first-letter:mr-4 first-letter:float-left first-letter:leading-none first-letter:italic">
                        {p}
                    </p>
                  ))}
                </div>

                <footer className="mt-24 pt-14 border-t border-gray-100">
                   <div className="flex flex-wrap justify-between items-center gap-8 mb-20">
                     <div className="flex items-center gap-4">
                       <Tag size={20} className="text-[#8B21F7]" />
                       <div className="flex flex-wrap gap-3">
                        {['GERENCIA', 'INNOVACIÓN', activePost.category.toUpperCase()].map(tag => (
                            <span key={tag} className="bg-gray-50 text-gray-400 px-6 py-3 rounded-2xl text-[10px] font-black tracking-[0.2em] hover:text-[#0056FF] hover:bg-blue-50 cursor-pointer transition-all italic border border-gray-100">#{tag}</span>
                        ))}
                       </div>
                     </div>
                     <button className="btn-modern red-button px-10 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-2xl italic flex items-center gap-3">
                       <Share size={18} /> Compartir Reportaje
                     </button>
                   </div>

                   {/* Botones de navegación entre artículos Premium Refinados */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-14 border-t border-gray-100">
                      <div>
                        {prevPost ? (
                          <button 
                            onClick={() => handlePostClick(prevPost.id)}
                            className="w-full h-full p-8 rounded-[2rem] border-2 border-gray-50 flex flex-col items-start text-left group hover:bg-[#0056FF] transition-all duration-700 shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(0,86,255,0.4)]"
                          >
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4 flex items-center gap-3 group-hover:text-white/70 transition">
                              <ChevronLeft size={18} className="group-hover:-translate-x-2 transition-transform" /> Artículo Anterior
                            </span>
                            <span className="serif-title text-2xl text-gray-950 group-hover:text-white transition line-clamp-2 italic font-black leading-tight">{prevPost.title}</span>
                          </button>
                        ) : (
                          <div className="opacity-20 flex flex-col items-start p-8 border-2 border-dashed border-gray-100 rounded-[2rem]">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4">The Beginning</span>
                            <span className="serif-title text-2xl text-gray-400 italic font-bold">Primera historia</span>
                          </div>
                        )}
                      </div>

                      <div>
                        {nextPost ? (
                          <button 
                            onClick={() => handlePostClick(nextPost.id)}
                            className="w-full h-full p-8 rounded-[2rem] border-2 border-gray-50 flex flex-col items-end text-right group hover:bg-[#8B21F7] transition-all duration-700 shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(139,33,247,0.4)]"
                          >
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4 flex items-center gap-3 group-hover:text-white/70 transition">
                              Siguiente Artículo <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                            </span>
                            <span className="serif-title text-2xl text-gray-950 group-hover:text-white transition line-clamp-2 italic font-black leading-tight">{nextPost.title}</span>
                          </button>
                        ) : (
                          <div className="opacity-20 flex flex-col items-end p-8 border-2 border-dashed border-gray-100 rounded-[2rem]">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4">Coming Soon</span>
                            <span className="serif-title text-2xl text-gray-400 italic font-bold">Más historias pronto</span>
                          </div>
                        )}
                      </div>
                   </div>
                </footer>
              </article>
            ) : (
              <div className="space-y-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-gray-950 pb-10 mb-20 gap-6">
                   <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="w-10 h-[2px] bg-[#8B21F7]"></span>
                            <span className="text-[11px] font-black text-[#8B21F7] uppercase tracking-[0.5em] italic">Archive Collection</span>
                        </div>
                        <h2 className="serif-title text-5xl md:text-7xl text-gray-950 italic leading-none font-black">
                            {currentPage === 'category' ? `Sección: ${activeCategory}` : 'Mayo 2024'}
                        </h2>
                   </div>
                   <div className="flex items-center gap-4">
                        <button className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#0056FF] transition-all"><TrendingUp size={20} /></button>
                        <span className="text-[11px] font-black uppercase text-gray-400 tracking-[0.3em] italic">Issue v1.0</span>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                  {filteredPosts.map(post => (
                    <PostCard key={post.id} post={post} onClick={handlePostClick} />
                  ))}
                </div>

                {filteredPosts.length > 0 && (
                   <div className="flex flex-col md:flex-row justify-center items-center gap-8 pt-24 mt-16 border-t border-gray-100">
                      <button className="w-16 h-16 rounded-full border-2 border-gray-100 text-gray-200 flex items-center justify-center cursor-not-allowed transition-all opacity-50">
                        <ChevronLeft size={32} />
                      </button>
                      <div className="flex gap-4">
                        {[1, 2, 3].map(i => (
                            <button key={i} className={`w-14 h-14 rounded-full font-black text-sm flex items-center justify-center transition-all border-2 ${i === 1 ? 'bg-black text-white border-black shadow-2xl scale-110' : 'text-gray-400 border-gray-50 hover:border-gray-200 hover:bg-gray-50'}`}>
                                {String(i).padStart(2, '0')}
                            </button>
                        ))}
                      </div>
                      <button className="btn-modern w-16 h-16 rounded-full border-2 border-[#0056FF] text-[#0056FF] flex items-center justify-center hover:bg-[#0056FF] hover:text-white transition-all shadow-xl hover:shadow-[0_20px_40px_-10px_rgba(0,86,255,0.4)] group active:scale-95">
                        <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                   </div>
                )}

                {filteredPosts.length === 0 && (
                  <div className="text-center py-40 bg-gray-50 border-2 border-dashed border-gray-200 rounded-[4rem] relative overflow-hidden">
                    <Sparkles size={80} className="text-gray-100 mx-auto mb-10 absolute -top-10 -left-10 opacity-50" />
                    <div className="relative z-10 space-y-8">
                        <p className="serif-title text-4xl text-gray-300 italic font-bold">Próxima Edición en Camino...</p>
                        <button 
                        onClick={() => navigateTo('/')}
                        className="btn-modern bg-[#0056FF] text-white px-12 py-5 rounded-full font-black uppercase text-xs tracking-[0.3em] shadow-2xl hover:translate-y-[-5px] transition-all italic"
                        >
                        Volver a Portada Principal
                        </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="lg:w-1/3">
            <Sidebar 
              recentPosts={BLOG_POSTS.slice(0, 5)} 
              onPostClick={handlePostClick} 
            />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;