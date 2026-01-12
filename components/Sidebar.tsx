
import React from 'react';
import { Post } from '../types';
import { Facebook, Twitter, Instagram, Linkedin, TrendingUp } from 'lucide-react';

interface SidebarProps {
  recentPosts: Post[];
  onPostClick: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ recentPosts, onPostClick }) => {
  return (
    <aside className="space-y-12 pl-8 border-l border-gray-100 hidden lg:block">
      {/* Sección Popular/Trending */}
      <div>
        <div className="flex items-center gap-2 mb-6">
            <TrendingUp size={18} className="text-[#8B21F7]" />
            <h4 className="text-gray-900 text-sm font-black uppercase tracking-[0.2em] italic">
                Lo más leído
            </h4>
        </div>
        <div className="space-y-8">
          {recentPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="flex gap-5 group cursor-pointer"
              onClick={() => onPostClick(post.id)}
            >
              <div className="relative">
                  <span className="absolute -top-3 -left-3 w-7 h-7 bg-white border border-gray-100 shadow-md rounded-full flex items-center justify-center text-[10px] font-black text-[#0056FF] z-10 italic">
                      {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-sm border border-gray-50">
                    <img src={post.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
              </div>
              <div className="flex-1 space-y-1">
                <h5 className="text-[15px] font-bold text-gray-900 group-hover:text-[#0056FF] transition leading-snug line-clamp-2 italic">
                  {post.title}
                </h5>
                <p className="text-[#8B21F7] text-[10px] font-black uppercase tracking-widest">{post.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comunidad Digital */}
      <div className="space-y-6">
        <h4 className="text-gray-900 text-sm font-black uppercase tracking-[0.2em] italic border-b-2 border-gray-100 pb-2">
          Comunidad Digital
        </h4>
        <div className="grid grid-cols-2 gap-3">
          <a href="#" className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 hover:bg-[#1877F2] hover:text-white transition-all duration-300 group">
            <Facebook size={20} className="text-[#1877F2] group-hover:text-white" />
            <span className="text-[10px] font-black uppercase tracking-widest">Facebook</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 group">
            <Twitter size={20} className="text-[#1DA1F2] group-hover:text-white" />
            <span className="text-[10px] font-black uppercase tracking-widest">Twitter</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 hover:bg-[#E4405F] hover:text-white transition-all duration-300 group">
            <span className="flex items-center justify-center w-5 h-5"><Instagram size={20} className="text-[#E4405F] group-hover:text-white" /></span>
            <span className="text-[10px] font-black uppercase tracking-widest">Instagram</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 hover:bg-[#0A66C2] hover:text-white transition-all duration-300 group">
            <Linkedin size={20} className="text-[#0A66C2] group-hover:text-white" />
            <span className="text-[10px] font-black uppercase tracking-widest">LinkedIn</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
