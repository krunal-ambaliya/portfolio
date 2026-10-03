import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const COUNT_KEY = 'portfolio_likes_count';
const LIKED_KEY = 'portfolio_user_liked';

export const LikeWidget: React.FC = () => {
  const [likes, setLikes] = useState<number>(42);
  const [hasLiked, setHasLiked] = useState<boolean>(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(COUNT_KEY);
      if (saved) setLikes(parseInt(saved, 10));
      if (localStorage.getItem(LIKED_KEY) === 'true') setHasLiked(true);
    } catch {
      // Storage unavailable — fall back to the default count
    }
  }, []);

  const handleLike = () => {
    const next = likes + 1;
    setLikes(next);
    setHasLiked(true);
    try {
      localStorage.setItem(COUNT_KEY, next.toString());
      localStorage.setItem(LIKED_KEY, 'true');
    } catch {
      // Ignore storage errors
    }
  };

  return (
    <button
      type="button"
      onClick={handleLike}
      aria-label={`Send appreciation (${likes} so far)`}
      className="group inline-flex h-9 items-center gap-2 rounded-full border border-line px-3.5 text-sm text-muted transition-colors hover:border-line-strong hover:text-fg cursor-pointer"
    >
      <Heart
        aria-hidden="true"
        className={`h-4 w-4 transition-colors ${hasLiked ? 'fill-current text-[#d64560]' : 'group-hover:text-[#d64560]'}`}
      />
      <span className="tabular-nums">{likes}</span>
      <span className="hidden sm:inline">appreciations</span>
    </button>
  );
};
