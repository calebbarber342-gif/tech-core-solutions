import { useSearchParams } from "react-router-dom";
import { Zap, Flame, Sparkles } from "lucide-react";
import { GAMES, CATEGORIES, type Category } from "../data/games";
import GameCard from "../components/GameCard";
import AdBanner from "../components/AdBanner";
import Navbar from "../components/Navbar";

export default function HomePage() {
  const [params, setParams] = useSearchParams();
  const category = params.get("category") as Category | null;
  const search   = params.get("search") ?? "";
  const filter   = params.get("filter");

  // Filter games
  let games = GAMES;
  if (search)        games = games.filter(g => g.title.toLowerCase().includes(search.toLowerCase()) || g.description.toLowerCase().includes(search.toLowerCase()));
  else if (filter === "featured") games = games.filter(g => g.featured);
  else if (category) games = games.filter(g => g.category === category);

  const featured  = GAMES.filter(g => g.featured).slice(0, 6);
  const hot       = GAMES.filter(g => g.hot).slice(0, 6);
  const isDefault = !search && !category && !filter;

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />

      {/* Top leaderboard ad */}
      <div className="py-3 flex justify-center bg-[#0d0d14] border-b border-[#1e1e2e]">
        <AdBanner slot="leaderboard" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">

        {/* Hero — only on default view */}
        {isDefault && (
          <div className="relative rounded-2xl overflow-hidden mb-8 bg-gradient-to-r from-purple-900 via-purple-800 to-pink-900 p-8 md:p-12">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
            <div className="relative">
              <h1 className="text-3xl md:text-5xl font-black text-white mb-3 leading-tight">
                Play Free Browser Games<br />
                <span className="text-purple-300">Learn. Think. Play.</span>
              </h1>
              <p className="text-purple-200 text-lg mb-6 max-w-xl">
                Hundreds of free games that sharpen your mind — puzzle, strategy, action, classics and more. Instant play, no downloads.
              </p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(c => (
                  <button
                    key={c.id}
                    onClick={() => setParams({ category: c.id })}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white text-sm font-medium transition-colors"
                  >
                    {c.emoji} {c.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Category filter bar */}
        {!isDefault && (
          <div className="flex flex-wrap gap-2 mb-6">
            <button onClick={() => setParams({})} className={`px-4 py-2 rounded-xl text-sm font-medium border transition-colors ${!category && !filter ? "bg-purple-600 border-purple-600 text-white" : "bg-[#13131a] border-[#1e1e2e] text-gray-400 hover:text-white hover:border-purple-500"}`}>
              All Games
            </button>
            {CATEGORIES.map(c => (
              <button key={c.id} onClick={() => setParams({ category: c.id })}
                className={`px-4 py-2 rounded-xl text-sm font-medium border transition-colors ${category === c.id ? "bg-purple-600 border-purple-600 text-white" : "bg-[#13131a] border-[#1e1e2e] text-gray-400 hover:text-white hover:border-purple-500"}`}>
                {c.emoji} {c.label}
              </button>
            ))}
          </div>
        )}

        {/* Search results */}
        {search && (
          <div className="mb-6">
            <h2 className="text-white font-bold text-xl mb-4">Results for "{search}" — {games.length} games</h2>
            {games.length === 0 && (
              <div className="text-center py-16 text-gray-500">
                <p className="text-4xl mb-3">🎮</p>
                <p className="font-medium">No games found for "{search}"</p>
                <button onClick={() => setParams({})} className="mt-4 text-purple-400 hover:text-purple-300 text-sm underline">Browse all games</button>
              </div>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {games.map(g => <GameCard key={g.id} game={g} />)}
            </div>
          </div>
        )}

        {/* Category view */}
        {category && !search && (
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white font-black text-2xl capitalize">
                {CATEGORIES.find(c => c.id === category)?.emoji} {category} Games
              </h2>
              <span className="text-gray-500 text-sm">{games.length} games</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {games.map(g => <GameCard key={g.id} game={g} />)}
            </div>
          </>
        )}

        {/* Featured filter view */}
        {filter === "featured" && !search && (
          <>
            <h2 className="text-white font-black text-2xl mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6 text-yellow-400" /> Featured Games
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {games.map(g => <GameCard key={g.id} game={g} />)}
            </div>
          </>
        )}

        {/* Default home view */}
        {isDefault && (
          <div className="space-y-10">

            {/* Featured */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-white font-black text-xl flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" /> Featured Games
                </h2>
                <button onClick={() => setParams({ filter: "featured" })} className="text-purple-400 hover:text-purple-300 text-sm font-medium">See all →</button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {featured.map(g => <GameCard key={g.id} game={g} />)}
              </div>
            </section>

            {/* Mid-page ad */}
            <div className="flex justify-center">
              <AdBanner slot="leaderboard" />
            </div>

            {/* Hot right now */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-white font-black text-xl flex items-center gap-2">
                  <Flame className="w-5 h-5 text-red-400" /> Hot Right Now
                </h2>
                <button onClick={() => setParams({ filter: "featured" })} className="text-purple-400 hover:text-purple-300 text-sm font-medium">See all →</button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {hot.map(g => <GameCard key={g.id} game={g} />)}
              </div>
            </section>

            {/* All categories */}
            {CATEGORIES.map((cat, i) => {
              const catGames = GAMES.filter(g => g.category === cat.id).slice(0, 6);
              return (
                <section key={cat.id}>
                  {/* Insert ad every 3 categories */}
                  {i > 0 && i % 3 === 0 && (
                    <div className="flex justify-center mb-8">
                      <AdBanner slot="leaderboard" />
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-white font-black text-xl flex items-center gap-2">
                      <span>{cat.emoji}</span> {cat.label}
                    </h2>
                    <button onClick={() => setParams({ category: cat.id })} className="text-purple-400 hover:text-purple-300 text-sm font-medium">See all →</button>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {catGames.map(g => <GameCard key={g.id} game={g} />)}
                  </div>
                </section>
              );
            })}

            {/* New games */}
            <section>
              <h2 className="text-white font-black text-xl flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-green-400" /> New Games
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {GAMES.filter(g => g.new).map(g => <GameCard key={g.id} game={g} />)}
              </div>
            </section>

          </div>
        )}
      </div>

      {/* Footer ad */}
      <div className="py-4 flex justify-center border-t border-[#1e1e2e] mt-10">
        <AdBanner slot="leaderboard" />
      </div>

      {/* Footer */}
      <footer className="bg-[#0d0d14] border-t border-[#1e1e2e] py-8 mt-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2 font-black text-white">
            <span className="text-purple-400">Nov</span>Arcade
          </div>
          <p>© 2026 NovArcade. Free unblocked games.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <a href="mailto:support@techcoresolutions.online" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
