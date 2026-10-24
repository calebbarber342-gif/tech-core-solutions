import React from "react";
import { Link } from "react-router-dom";
import { Package, Search, Wrench, Truck, ArrowRight, Shield, Clock, DollarSign } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const steps = [
  {
    icon: Package,
    num: "01",
    title: "Submit a Repair Request",
    desc: "Fill out our contact form with your device info and what's wrong with it. We'll reply within 24 hours with a shipping address and instructions.",
  },
  {
    icon: Truck,
    num: "02",
    title: "Ship Your Device",
    desc: "Pack your device securely and ship it to us. Use a padded box or bubble wrap. We recommend adding tracking to your shipment for peace of mind.",
  },
  {
    icon: Search,
    num: "03",
    title: "Free Diagnosis & Quote",
    desc: "Our technicians will inspect your device thoroughly and send you a detailed quote. No work starts until you give the go-ahead.",
  },
  {
    icon: Wrench,
    num: "04",
    title: "We Get to Work",
    desc: "Once approved, we repair your device using quality parts. Most repairs are completed within 3–5 business days.",
  },
  {
    icon: Truck,
    num: "05",
    title: "We Ship It Back",
    desc: "Your repaired device is carefully packed and shipped back to you with tracking. Return shipping is included in your repair cost.",
  },
  {
    icon: Shield,
    num: "06",
    title: "90-Day Warranty",
    desc: "Every repair comes with a 90-day warranty. If the same issue comes back within that window, we'll fix it at no charge.",
  },
];

const faqs = [
  {
    q: "How long does a repair take?",
    a: "Most repairs are completed within 3–5 business days of receiving your device. Complex repairs like motherboard work may take a bit longer — we'll let you know upfront.",
  },
  {
    q: "What if my device can't be fixed?",
    a: "If we can't repair your device, you don't pay for repairs. You'd only be responsible for return shipping costs.",
  },
  {
    q: "How should I pack my device?",
    a: "Use a sturdy box with plenty of padding — bubble wrap, foam, or packing peanuts. Don't ship it in just an envelope. Remove any accessories like cases, chargers, or memory cards.",
  },
  {
    q: "Do I need to include my passcode?",
    a: "For phones and tablets, yes — we need access to test the device after repair. You can change it after you get it back.",
  },
  {
    q: "What brands do you support?",
    a: "Apple, Samsung, Google, LG, Sony, Microsoft, Nintendo and more. If you're unsure, just ask us.",
  },
  {
    q: "Is my data safe?",
    a: "We only access what's necessary to test the repair. We recommend backing up your data before shipping just to be safe.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">How It Works</h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Simple, transparent, and stress-free. Here's exactly what happens when you send us your device.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-5 mb-16">
            {steps.map(({ icon: Icon, num, title, desc }) => (
              <div key={num} className="flex gap-6 bg-gray-900 border border-gray-800 rounded-2xl p-7">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-blue-400 font-black text-sm">{num}</span>
                    <h3 className="text-white font-bold text-lg">{title}</h3>
                  </div>
                  <p className="text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantees */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {[
              { icon: Shield,    title: "90-Day Warranty",       desc: "Every repair is backed by a 90-day warranty on parts and labor." },
              { icon: Clock,     title: "Fast Turnaround",       desc: "3–5 business days for most repairs once your device arrives." },
              { icon: DollarSign, title: "No Fix, No Fee",       desc: "If we can't repair it, you don't pay for the repair." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-gray-900 border border-blue-500/20 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mb-14">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map(({ q, a }) => (
                <div key={q} className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                  <h3 className="text-white font-semibold mb-2">{q}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-xl transition-all shadow-xl shadow-blue-500/20 hover:-translate-y-0.5"
            >
              Start a Repair Request
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
