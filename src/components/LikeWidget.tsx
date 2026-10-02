import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

export const LikeWidget: React.FC = () => {
  const [likes, setLikes] = useState<number>(42);
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem('portfolio_likes_count');
    const userLiked = localStorage.getItem('portfolio_user_liked');
    if (saved) setLikes(parseInt(saved, 10));
    if (userLiked === 'true') setHasLiked(true);
  }, []);

  const handleLike = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);

    if (!hasLiked) {
      const newCount = likes + 1;
      setLikes(newCount);
      setHasLiked(true);
      localStorage.setItem('portfolio_likes_count', newCount.toString());
      localStorage.setItem('portfolio_user_liked', 'true');
    } else {
      // Allow adding a clap up to a reasonable cap
      const newCount = likes + 1;
      setLikes(newCount);
      localStorage.setItem('portfolio_likes_count', newCount.toString());
    }
  };

  return (
    <button
      onClick={handleLike}
      className={`group relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 active:scale-95 ${
        hasLiked
          ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900/60 shadow-sm'
          : 'bg-slate-100 dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
      }`}
      aria-label="Send appreciation"
      title="Leave an appreciation"
    >
      <Heart
        className={`w-3.5 h-3.5 transition-transform duration-200 ${
          hasLiked ? 'fill-rose-500 text-rose-500' : 'text-slate-400 group-hover:text-rose-500'
        } ${isAnimating ? 'scale-125' : 'scale-100'}`}
      />
      <span className="tabular-nums font-mono font-medium">{likes}</span>
      <span className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:inline">appreciations</span>
    </button>
  );
};
