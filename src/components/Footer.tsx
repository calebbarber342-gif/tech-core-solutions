import React from "react";
import { Link } from "react-router-dom";
import { Cpu, Mail, Shield, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800/50 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Cpu className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white text-lg">
                Tech<span className="text-blue-400">Core</span> Solutions
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Professional mail-in tech repair. Fast turnaround, quality work, transparent pricing.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {[
                { to: "/",             label: "Home"         },
                { to: "/services",     label: "Services"     },
                { to: "/how-it-works", label: "How It Works" },
                { to: "/contact",      label: "Contact"      },
              ].map(link => (
                <Link key={link.to} to={link.to} className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Trust */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Why Us</h3>
            <div className="flex flex-col gap-3">
              {[
                { icon: Shield, text: "90-day repair warranty" },
                { icon: Clock,  text: "3–5 business day turnaround" },
                { icon: Mail,   text: "Free return shipping" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-gray-500 text-sm">
                  <Icon className="w-4 h-4 text-blue-400 shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Tech Core Solutions. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Questions? <a href="mailto:support@techcoresolutions.online" className="text-blue-400 hover:text-blue-300 transition-colors">support@techcoresolutions.online</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
