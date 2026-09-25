import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Gamepad2 } from "lucide-react";

export default function PrivacyPage() {
  useEffect(() => { document.title = "Privacy Policy — NovArcade"; }, []);
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
        <h1 className="text-3xl font-black text-white mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: September 2026</p>

        <div className="space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-white font-bold text-lg mb-2">1. Introduction</h2>
            <p>NovArcade ("we", "us", or "our") operates the website at techcoresolutions.online. This Privacy Policy explains how we collect, use, and protect information when you visit our site.</p>
          </section>
          <section>
            <h2 className="text-white font-bold text-lg mb-2">2. Information We Collect</h2>
            <p>We do not require you to create an account or provide personal information to use NovArcade. We may collect anonymous usage data such as pages visited and time spent on the site through analytics tools to help us improve the experience.</p>
          </section>
          <section>
            <h2 className="text-white font-bold text-lg mb-2">3. Google AdSense & Cookies</h2>
            <p>We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to our site or other sites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-purple-400 hover:text-purple-300">Google Ads Settings</a>. For more information, see <a href="https://policies.google.com/technologies/ads" className="text-purple-400 hover:text-purple-300">Google's advertising policies</a>.</p>
          </section>
          <section>
            <h2 className="text-white font-bold text-lg mb-2">4. Third-Party Games</h2>
            <p>Games on NovArcade are hosted by third-party providers and load within our site via standard web embeds. Those providers may have their own privacy policies. We are not responsible for the privacy practices of third-party game providers.</p>
          </section>
          <section>
            <h2 className="text-white font-bold text-lg mb-2">5. Children's Privacy</h2>
            <p>NovArcade is intended for general audiences. We do not knowingly collect personal information from children under 13. If you believe a child has provided us personal information, please contact us and we will delete it promptly.</p>
          </section>
          <section>
            <h2 className="text-white font-bold text-lg mb-2">6. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.</p>
          </section>
          <section>
            <h2 className="text-white font-bold text-lg mb-2">7. Contact</h2>
            <p>Questions? Email us at <a href="mailto:support@techcoresolutions.online" className="text-purple-400 hover:text-purple-300">support@techcoresolutions.online</a></p>
          </section>
        </div>
      </div>
    </div>
  );
}
