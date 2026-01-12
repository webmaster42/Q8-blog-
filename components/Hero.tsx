import React from 'react';
import { MousePointer2, Star, Sparkles, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-q8-gradient py-20 px-4 relative overflow-hidden min-h-[650px] flex items-center">
      {/* Background patterns refine */}
      <div className="absolute top-0 left-0 w-full h-full opacity-15 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-white rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] bg-[#8B21F7] rounded-full blur-[100px]"></div>
        <div className="absolute top-[20%] left-[30%] w-[300px] h-[300px] border border-white/10 rounded-full animate-pulse-soft"></div>
      </div>
      
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Lado Izquierdo: Contenido Editorial Premium */}
        <div className="text-white space-y-10 animate-fadeIn">
          <div className="flex items-center gap-4">
              <span className="px-4 py-1.5 rounded-full border border-white/30 text-[10px] font-black uppercase tracking-[0.4em] italic bg-white/5 backdrop-blur-sm">
                Edición de Colección
              </span>
              <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-white/40 text-white/40" />)}
              </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="serif-title text-7xl md:text-9xl leading-[0.85] mb-4 drop-shadow-2xl">
              Gestión <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-300 italic font-black">Inteligente</span>
            </h2>
            <p className="text-xl md:text-3xl font-light text-white/90 max-w-lg italic leading-relaxed border-l-2 border-[#8B21F7] pl-6 py-2">
              Transformamos datos brutos en estrategias ganadoras para gerentes Pro.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 pt-6">
              <button className="btn-modern bg-white text-[#0056FF] px-12 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] shadow-[0_20px_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_25px_50px_-10px_rgba(255,255,255,0.4)] hover:-translate-y-2 group">
                Explorar Revista <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="btn-modern glass-button px-10 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] group">
                Ver Demos <Sparkles size={18} className="text-purple-300 group-hover:rotate-12 transition-transform" />
              </button>
          </div>
        </div>

        {/* Lado Derecho: Mockup de Revista Editorial */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative transform rotate-[5deg] hover:rotate-0 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] cursor-pointer group">
            <div className="bg-white p-4 rounded-2xl hero-magazine-shadow border border-white/30 relative">
               <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#0056FF] rounded-full flex items-center justify-center border-4 border-white shadow-xl z-20 group-hover:scale-110 transition-transform">
                    <div className="text-center text-white">
                        <p className="text-[10px] font-black leading-none">FREE</p>
                        <p className="text-xl font-black italic leading-none">PRO</p>
                    </div>
               </div>
               
               <div className="border-[4px] border-gray-950 overflow-hidden relative rounded-sm">
                  <div className="bg-white p-10 w-[360px] md:w-[440px]">
                    <div className="flex flex-col items-center mb-12 border-b border-gray-100 pb-8 relative">
                       <h3 className="serif-title text-7xl text-gray-950 font-black italic tracking-tighter">Q8</h3>
                       <p className="text-[11px] font-black tracking-[0.5em] text-[#8B21F7] uppercase mt-3">NEGOCIOS PRO</p>
                    </div>
                    
                    <div className="space-y-8">
                       <div className="h-56 bg-gray-50 rounded-2xl overflow-hidden relative shadow-inner group">
                          <img src="https://picsum.photos/id/180/900/700" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[3000ms]" alt="" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                       </div>
                       <div className="space-y-4">
                          <div className="flex items-center gap-2">
                             <div className="h-[2px] w-8 bg-[#0056FF]"></div>
                             <p className="text-[12px] font-black text-[#0056FF] uppercase tracking-[0.3em] italic">Edition Special 2024</p>
                          </div>
                          <h4 className="serif-title text-4xl text-gray-950 leading-[1.05] font-black">EL ARTE DE DIRIGIR SIN ESTAR PRESENTE</h4>
                          <p className="text-base text-gray-500 font-medium leading-relaxed italic">Cómo los nuevos gerentes dominan el control remoto con precisión milimétrica.</p>
                       </div>
                    </div>
                    
                    <div className="mt-14 pt-8 border-t border-gray-100 flex justify-between items-center">
                       <div className="flex items-center gap-2">
                           <div className="w-10 h-10 rounded-full bg-[#0056FF]/10 flex items-center justify-center text-[#0056FF]">
                               <Sparkles size={16} />
                           </div>
                           <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Digital Issue #01</span>
                       </div>
                       <div className="text-right">
                           <p className="text-[10px] font-bold text-gray-300">EST. 2024</p>
                       </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
          
          {/* Adornos Flotantes Refinados */}
          <div className="absolute -bottom-16 -left-16 text-[#8B21F7]/20 animate-pulse hidden lg:block">
            <svg width="180" height="180" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                <circle cx="50" cy="50" r="40" stroke-dasharray="10 5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;