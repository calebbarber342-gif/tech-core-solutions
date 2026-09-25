import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Gamepad2, Search, Menu, X, Zap } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [q, setQ]       = useState("");
  const navigate        = useNavigate();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (q.trim()) { navigate(`/?search=${encodeURIComponent(q.trim())}`); setOpen(false); }
  }

  return (
    <nav className="bg-[#0d0d14] border-b border-[#1e1e2e] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center">
            <Gamepad2 className="w-5 h-5 text-white" />
          </div>
          <span className="font-black text-white text-lg tracking-tight">
            Nov<span className="text-purple-400">Arcade</span>
          </span>
        </Link>

        {/* Search */}
        <form onSubmit={handleSearch} className="flex-1 max-w-md hidden md:flex">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              value={q} onChange={e => setQ(e.target.value)}
              placeholder="Search games..."
              className="w-full bg-[#13131a] border border-[#1e1e2e] rounded-xl pl-9 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>
        </form>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-5 ml-2 text-sm font-medium">
          <Link to="/?filter=featured" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-yellow-400" /> Featured
          </Link>
          {["action","puzzle","racing","io"].map(c => (
            <Link key={c} to={`/?category=${c}`} className="text-gray-400 hover:text-white transition-colors capitalize">{c}</Link>
          ))}
          <Link to="/?category=classic" className="text-gray-400 hover:text-white transition-colors">Classic</Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden ml-auto p-1.5 text-gray-400 hover:text-white" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0d0d14] border-t border-[#1e1e2e] px-4 py-4 space-y-3">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search games..." className="w-full bg-[#13131a] border border-[#1e1e2e] rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500" />
            </div>
          </form>
          {["action","puzzle","racing","sports","shooting","adventure","io","classic"].map(c => (
            <Link key={c} to={`/?category=${c}`} onClick={() => setOpen(false)} className="block py-1.5 text-gray-400 hover:text-white capitalize text-sm">{c}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}
