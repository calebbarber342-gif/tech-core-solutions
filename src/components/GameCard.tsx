import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import type { Game } from "../data/games";
import { CATEGORIES } from "../data/games";

export default function GameCard({ game }: { game: Game }) {
  const cat = CATEGORIES.find(c => c.id === game.category);

  return (
    <Link to={`/game/${game.id}`} className="game-card group block">
      {/* Thumbnail */}
      <div className="relative aspect-video bg-[#0a0a0f] overflow-hidden">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {/* Play overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center shadow-xl">
            <Play className="w-6 h-6 text-white fill-white ml-0.5" />
          </div>
        </div>
        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-1.5">
          {game.hot  && <span className="badge bg-red-500/90 text-white text-[10px]">🔥 Hot</span>}
          {game.new  && <span className="badge bg-green-500/90 text-white text-[10px]">✨ New</span>}
          {game.featured && <span className="badge bg-purple-600/90 text-white text-[10px]">⭐ Featured</span>}
        </div>
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="font-bold text-white text-sm truncate mb-1">{game.title}</h3>
        <div className="flex items-center justify-between">
          <span className={`badge border text-[10px] ${cat?.color}`}>{cat?.emoji} {cat?.label}</span>
        </div>
      </div>
    </Link>
  );
}
