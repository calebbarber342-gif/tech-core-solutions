import React, { useState } from "react";
import { Mail, Clock, Shield, CheckCircle, Send } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const deviceTypes = [
  "Phone", "Laptop", "Console (PS4/PS5)", "Console (Xbox)", "Nintendo Switch",
  "Tablet / iPad", "Desktop / PC", "Other",
];

const issues = [
  "Cracked / broken screen",
  "Battery not charging or dying fast",
  "Water damage",
  "Won't turn on",
  "Charging port broken",
  "Software / OS issues",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", device: "", issue: "", details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, wire this to EmailJS, Formspree, or your backend
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Request a Repair</h1>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Fill out the form below. We'll reply within 24 hours with a shipping address and your free diagnosis quote.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-gray-900 border border-green-500/30 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h2 className="text-white font-bold text-2xl mb-2">Request Received!</h2>
                  <p className="text-gray-500">
                    We'll review your request and get back to you within 24 hours with a shipping address and quote.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="bg-gray-900 border border-gray-800 rounded-2xl p-8 space-y-5">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-400 text-sm font-medium mb-1.5">Your Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handle}
                        required
                        placeholder="John Smith"
                        className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm font-medium mb-1.5">Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handle}
                        required
                        placeholder="you@email.com"
                        className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Device type */}
                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-1.5">Device Type *</label>
                    <select
                      name="device"
                      value={form.device}
                      onChange={handle}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select device type...</option>
                      {deviceTypes.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>

                  {/* Issue */}
                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-1.5">Main Issue *</label>
                    <select
                      name="issue"
                      value={form.issue}
                      onChange={handle}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select the main issue...</option>
                      {issues.map(i => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </div>

                  {/* Details */}
                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-1.5">Additional Details</label>
                    <textarea
                      name="details"
                      value={form.details}
                      onChange={handle}
                      rows={4}
                      placeholder="Describe the issue in more detail, your device model, or anything else we should know..."
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    Submit Repair Request
                  </button>

                  <p className="text-gray-600 text-xs text-center">
                    No payment required now. We'll send a quote before any work begins.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <h3 className="text-white font-semibold">Email Us Directly</h3>
                </div>
                <a
                  href="mailto:support@techcoresolutions.online"
                  className="text-blue-400 hover:text-blue-300 text-sm transition-colors break-all"
                >
                  support@techcoresolutions.online
                </a>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <h3 className="text-white font-semibold">Response Time</h3>
                </div>
                <p className="text-gray-500 text-sm">We respond to all requests within 24 hours, usually much faster.</p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <h3 className="text-white font-semibold">Our Promise</h3>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Free diagnosis & quote",
                    "No fix, no fee",
                    "90-day warranty",
                    "Free return shipping",
                    "Transparent pricing",
                  ].map(p => (
                    <li key={p} className="flex items-center gap-2 text-gray-500 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
