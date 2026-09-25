import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Gamepad2, Brain, Globe, Zap, Users } from "lucide-react";

export default function AboutPage() {
  useEffect(() => { document.title = "About — NovArcade"; }, []);
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-300">
      <nav className="bg-[#0d0d14] border-b border-[#1e1e2e] px-4 h-14 flex items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center">
            <Gamepad2 className="w-5 h-5 text-white" />
          </div>
          <span className="font-black text-white text-lg">Nov<span className="text-purple-400">Arcade</span></span>
        </Link>
      </nav>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-black text-white mb-4">About NovArcade</h1>
        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
          NovArcade is a free browser-based gaming platform built to make fun, engaging games accessible to everyone — instantly, with no downloads or installs required.
        </p>

        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {[
            { icon: Brain,  title: "Brain-Building Games",   desc: "Our puzzle and strategy games are designed to sharpen critical thinking, problem solving, and spatial reasoning." },
            { icon: Globe,  title: "Instant, Anywhere",      desc: "Every game runs directly in your browser. No app store, no downloads — just click and play from any device." },
            { icon: Zap,    title: "Hundreds of Games",      desc: "From action and racing to classic arcade titles, we curate the best browser games across every category." },
            { icon: Users,  title: "For Everyone",           desc: "Whether you have 2 minutes or 2 hours, NovArcade has something fun and engaging for every type of player." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-[#13131a] border border-[#1e1e2e] rounded-2xl p-5">
              <div className="w-10 h-10 bg-purple-900/50 rounded-xl flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-white font-bold mb-1">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#13131a] border border-[#1e1e2e] rounded-2xl p-6 mb-8">
          <h2 className="text-white font-bold text-xl mb-3">Our Mission</h2>
          <p className="text-gray-400 leading-relaxed">
            We believe games are more than entertainment — they build reflexes, pattern recognition, strategic thinking, and persistence. NovArcade curates browser games that are genuinely fun while developing real cognitive skills. Every game on our platform is hand-selected, free to play, and works on any modern browser.
          </p>
        </div>

        <div className="text-sm text-gray-500">
          <p>Questions or feedback? Reach us at <a href="mailto:support@techcoresolutions.online" className="text-purple-400 hover:text-purple-300">support@techcoresolutions.online</a></p>
        </div>
      </div>
    </div>
  );
}
