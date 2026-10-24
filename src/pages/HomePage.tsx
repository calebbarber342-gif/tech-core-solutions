import React from "react";
import { Link } from "react-router-dom";
import {
  Smartphone, Laptop, Gamepad2, Tablet, ArrowRight,
  Shield, Clock, Star, CheckCircle, Package, Wrench, Truck
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  { icon: Smartphone, label: "Phones",   desc: "Screen replacements, battery swaps, charging ports, water damage" },
  { icon: Laptop,     label: "Laptops",  desc: "Screen repairs, keyboard replacements, motherboard diagnostics" },
  { icon: Gamepad2,   label: "Consoles", desc: "PS4/PS5, Xbox, Nintendo Switch — disc drives, HDMI, overheating" },
  { icon: Tablet,     label: "Tablets",  desc: "iPad and Android tablet screen repairs, battery replacements" },
];

const steps = [
  { icon: Package, num: "01", title: "Mail It In",     desc: "Package your device securely and ship it to us. We provide the address after you submit a request." },
  { icon: Wrench,  num: "02", title: "We Diagnose",    desc: "Our technicians inspect your device and send you a quote before any work begins." },
  { icon: Shield,  num: "03", title: "We Fix It",      desc: "Once you approve the quote, we get to work. Most repairs are done within 3–5 business days." },
  { icon: Truck,   num: "04", title: "We Ship It Back", desc: "We ship your repaired device back to you with tracking and a 90-day warranty." },
];

const reviews = [
  { name: "Jordan M.",   rating: 5, text: "Sent in my PS5 with a broken HDMI port. Got it back in 4 days working perfectly. Great communication throughout." },
  { name: "Ashley R.",   rating: 5, text: "My laptop screen cracked and they fixed it for way less than Best Buy quoted me. Super easy process." },
  { name: "Marcus T.",   rating: 5, text: "iPhone battery was dying in 2 hours. Replaced it for a fair price. Works like new." },
  { name: "Priya K.",    rating: 5, text: "Nintendo Switch wouldn't charge. Fixed and returned quickly. Will definitely use again." },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-gray-950 to-gray-950 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-blue-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            Mail-In Repairs — No Appointment Needed
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            Your Tech,{" "}
            <span className="gradient-text">Fixed Fast.</span>
          </h1>

          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Professional mail-in repair service for phones, laptops, consoles and tablets.
            Ship it to us — we fix it and ship it right back.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="flex items-center gap-2 px-8 py-3.5 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-xl transition-all shadow-xl shadow-blue-500/20 hover:shadow-blue-400/30 hover:-translate-y-0.5"
            >
              Start a Repair Request
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="flex items-center gap-2 px-8 py-3.5 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-xl transition-all"
            >
              How It Works
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-gray-500">
            {["90-Day Warranty", "Free Return Shipping", "No Fix, No Fee", "Fast 3–5 Day Turnaround"].map(badge => (
              <div key={badge} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Repair</h2>
            <p className="text-gray-500 max-w-xl mx-auto">From cracked screens to dead motherboards — if it's broken, we can most likely fix it.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="card-hover bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="text-blue-400 hover:text-blue-300 text-sm font-medium inline-flex items-center gap-1 transition-colors">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-gray-900/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Four simple steps from broken to fixed.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map(({ icon: Icon, num, title, desc }) => (
              <div key={num} className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="text-5xl font-black text-gray-800 mb-4 select-none">{num}</div>
                <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.map(({ name, rating, text }) => (
              <div key={name} className="card-hover bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{text}</p>
                <p className="text-white font-semibold text-sm">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-950/50 to-gray-900 border border-blue-500/20 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to get it fixed?</h2>
            <p className="text-gray-400 mb-8">Submit a repair request and we'll get back to you with a quote within 24 hours.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-xl transition-all shadow-xl shadow-blue-500/20 hover:-translate-y-0.5"
            >
              Start Your Repair
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
