import React from 'react';
import { Facebook, Twitter, ShoppingCart, ChevronDown, Bell, Search } from 'lucide-react';

interface HeaderProps {
  onNavigate: (path: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const categories = [
    { name: 'INICIO', path: '/' },
    { name: 'GESTIÓN', path: '/category/Gestion' },
    { name: 'RESTAURANTES', path: '/category/Restaurantes' },
    { name: 'HOTELES', path: '/category/Hoteles' },
    { name: 'FARMACIAS', path: '/category/Farmacias' },
    { name: 'RETAIL', path: '/category/Retail' },
    { name: 'CONTACTA', path: '#' },
  ];

  return (
    <header className="w-full flex flex-col">
      {/* Barra Superior Blanca */}
      <div className="bg-white py-3 md:py-5 border-b border-gray-100 relative z-[60]">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
          <div className="flex-1 hidden md:flex items-center gap-4">
            <button className="btn-modern red-button px-7 py-3 rounded-full font-extrabold text-[10px] uppercase tracking-[0.15em] animate-pulse-glow">
              <ShoppingCart size={15} /> 
              <span>SUSCRÍBETE</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-gray-100 transition-all border border-gray-100">
                <Search size={18} />
            </button>
          </div>
          
          <div 
            onClick={() => onNavigate('/')} 
            className="flex flex-col items-center cursor-pointer group flex-1"
          >
            <h1 className="serif-title text-5xl md:text-7xl text-gray-900 leading-none tracking-tighter group-hover:text-[#0056FF] transition-all duration-500">
              Q8<span className="text-[16px] font-black align-top ml-1 tracking-[0.2em] text-[#8B21F7]">BLOG</span>
            </h1>
            <div className="flex items-center gap-3 mt-1 opacity-60">
                <span className="w-6 h-[1px] bg-gray-300"></span>
                <p className="text-[10px] font-bold text-gray-500 tracking-[0.5em] uppercase">Negocios PRO</p>
                <span className="w-6 h-[1px] bg-gray-300"></span>
            </div>
          </div>

          <div className="flex-1 flex justify-end items-center gap-2 md:gap-4">
            <div className="flex items-center gap-2">
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-500 hover:bg-[#1877F2] hover:text-white hover:scale-110 transition-all duration-300 border border-gray-100 shadow-sm"><Facebook size={18} fill="currentColor" /></a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-500 hover:bg-[#1DA1F2] hover:text-white hover:scale-110 transition-all duration-300 border border-gray-100 shadow-sm"><Twitter size={18} fill="currentColor" /></a>
            </div>
            <div className="w-[1px] h-8 bg-gray-100 mx-2 hidden md:block"></div>
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-[#8B21F7] hover:bg-purple-50 transition-all relative">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#8B21F7] rounded-full border-2 border-white"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Barra de Navegación Negra */}
      <nav className="bg-black text-white sticky top-0 z-50 shadow-2xl overflow-x-auto no-scrollbar">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-16 min-w-max">
          <ul className="flex items-center h-full">
            {categories.map((cat) => (
              <li key={cat.name} className="relative group h-full">
                <button 
                  onClick={() => onNavigate(cat.path)}
                  className="px-5 h-full text-[11px] font-extrabold text-gray-400 hover:text-white transition-all flex items-center gap-2 uppercase tracking-[0.2em] relative"
                >
                  {cat.name}
                  {(cat.name !== 'INICIO' && cat.name !== 'CONTACTA') && <ChevronDown size={12} className="text-gray-700 group-hover:text-[#0056FF] transition-colors" />}
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#0056FF] to-[#8B21F7] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                </button>
              </li>
            ))}
          </ul>
          
          <div className="pl-6 hidden lg:block">
            <button className="btn-modern purple-gradient-button px-8 py-2.5 rounded-full font-black text-[10px] uppercase tracking-[0.2em] italic">
              Digital Newsletter
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;