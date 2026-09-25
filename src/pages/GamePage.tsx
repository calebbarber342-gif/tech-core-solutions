import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, Maximize2, Minimize2, ExternalLink, Shuffle } from "lucide-react";
import { GAMES, CATEGORIES } from "../data/games";
import GameCard from "../components/GameCard";
import AdBanner from "../components/AdBanner";
import Navbar from "../components/Navbar";

export default function GamePage() {
  const { id }        = useParams<{ id: string }>();
  const navigate      = useNavigate();
  const game          = GAMES.find(g => g.id === id);
  const [full, setFull] = useState(false);

  // Update page title
  useEffect(() => {
    if (game) document.title = `${game.title} — NovArcade`;
    return () => { document.title = "NovArcade — Unblocked Games"; };
  }, [game]);

  if (!game) return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center gap-4">
      <p className="text-4xl">🎮</p>
      <p className="text-white font-bold text-xl">Game not found</p>
      <Link to="/" className="text-purple-400 hover:text-purple-300">← Back to all games</Link>
    </div>
  );

  const cat       = CATEGORIES.find(c => c.id === game.category);
  const related   = GAMES.filter(g => g.category === game.category && g.id !== game.id).slice(0, 6);
  const random    = GAMES.filter(g => g.id !== game.id)[Math.floor(Math.random() * (GAMES.length - 1))];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />

      {/* Top ad */}
      <div className="py-3 flex justify-center bg-[#0d0d14] border-b border-[#1e1e2e]">
        <AdBanner slot="leaderboard" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link to={`/?category=${game.category}`} className="hover:text-white transition-colors capitalize">{game.category}</Link>
          <span>/</span>
          <span className="text-white">{game.title}</span>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">

          {/* Game frame */}
          <div className="lg:col-span-3">
            {/* Game header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <button onClick={() => navigate(-1)} className="p-2 bg-[#13131a] border border-[#1e1e2e] rounded-xl text-gray-400 hover:text-white hover:border-purple-500 transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <div>
                  <h1 className="text-white font-black text-xl">{game.title}</h1>
                  <span className={`badge border text-[10px] ${cat?.color}`}>{cat?.emoji} {cat?.label}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => navigate(`/game/${random.id}`)} className="p-2 bg-[#13131a] border border-[#1e1e2e] rounded-xl text-gray-400 hover:text-white hover:border-purple-500 transition-colors" title="Random game">
                  <Shuffle className="w-4 h-4" />
                </button>
                <a href={game.url} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#13131a] border border-[#1e1e2e] rounded-xl text-gray-400 hover:text-white hover:border-purple-500 transition-colors" title="Open in new tab">
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button onClick={() => setFull(!full)} className="p-2 bg-[#13131a] border border-[#1e1e2e] rounded-xl text-gray-400 hover:text-white hover:border-purple-500 transition-colors" title="Toggle fullscreen">
                  {full ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* iFrame */}
            <div className={`bg-black rounded-2xl overflow-hidden border border-[#1e1e2e] ${full ? "fixed inset-0 z-50 rounded-none border-0" : "aspect-video"}`}>
              {full && (
                <button onClick={() => setFull(false)} className="absolute top-4 right-4 z-10 p-2 bg-black/80 rounded-xl text-white hover:bg-black">
                  <Minimize2 className="w-5 h-5" />
                </button>
              )}
              <iframe
                src={game.url}
                title={game.title}
                className="w-full h-full"
                allowFullScreen
                allow="autoplay; fullscreen; gamepad"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-pointer-lock"
              />
            </div>

            {/* Description */}
            <div className="mt-4 p-4 bg-[#13131a] border border-[#1e1e2e] rounded-2xl">
              <h2 className="text-white font-bold mb-1">About {game.title}</h2>
              <p className="text-gray-400 text-sm">{game.description}</p>
            </div>

            {/* Mid ad */}
            <div className="flex justify-center mt-6">
              <AdBanner slot="leaderboard" />
            </div>

            {/* Related games */}
            {related.length > 0 && (
              <div className="mt-8">
                <h2 className="text-white font-black text-lg mb-4">More {cat?.label} Games</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {related.map(g => <GameCard key={g.id} game={g} />)}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar ads */}
          <div className="hidden lg:flex flex-col gap-6">
            <AdBanner slot="rectangle" />
            <AdBanner slot="rectangle" />
            <div className="space-y-3">
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">More Games</p>
              {GAMES.filter(g => g.id !== game.id && g.featured).slice(0, 4).map(g => (
                <Link key={g.id} to={`/game/${g.id}`} className="flex items-center gap-3 p-2 bg-[#13131a] border border-[#1e1e2e] rounded-xl hover:border-purple-500 transition-colors group">
                  <img src={g.thumbnail} alt={g.title} className="w-16 h-10 object-cover rounded-lg shrink-0" />
                  <div className="min-w-0">
                    <p className="text-white text-xs font-semibold truncate group-hover:text-purple-300 transition-colors">{g.title}</p>
                    <p className="text-gray-500 text-xs capitalize">{g.category}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer ad */}
      <div className="py-4 flex justify-center border-t border-[#1e1e2e] mt-10">
        <AdBanner slot="leaderboard" />
      </div>
    </div>
  );
}
