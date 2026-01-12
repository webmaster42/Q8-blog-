import React from 'react';
import { Post } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface PostCardProps {
  post: Post;
  onClick: (id: string) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onClick }) => {
  return (
    <article 
      onClick={() => onClick(post.id)}
      className="flex flex-col group cursor-pointer bg-white overflow-hidden rounded-xl border border-transparent hover:border-gray-100 hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
            <span className="bg-white/95 backdrop-blur-md text-[#0056FF] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                {post.category}
            </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#0056FF] scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 shadow-2xl">
                <ArrowUpRight size={24} />
            </div>
        </div>
      </div>
      
      <div className="p-6 space-y-3">
        <h3 className="serif-title text-2xl leading-tight text-gray-900 group-hover:text-[#0056FF] transition-colors">
          {post.title}
        </h3>
        <div className="flex items-center gap-3">
            <p className="text-[#8B21F7] text-[11px] font-black tracking-widest uppercase italic">{post.date}</p>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Digital Edition</p>
        </div>
        <p className="text-gray-600 text-[15px] leading-relaxed line-clamp-3 font-medium border-t border-gray-50 pt-4 mt-2">
          {post.excerpt}
        </p>
      </div>
    </article>
  );
};

export default PostCard;