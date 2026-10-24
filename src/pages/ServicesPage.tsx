import React from "react";
import { Link } from "react-router-dom";
import { Smartphone, Laptop, Gamepad2, Tablet, Monitor, Headphones, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    icon: Smartphone,
    label: "Phone Repair",
    repairs: [
      "Screen & LCD replacement",
      "Battery replacement",
      "Charging port repair",
      "Water damage treatment",
      "Camera repair",
      "Speaker / microphone repair",
      "Back glass replacement",
    ],
  },
  {
    icon: Laptop,
    label: "Laptop Repair",
    repairs: [
      "Screen replacement",
      "Keyboard replacement",
      "Battery replacement",
      "Motherboard diagnostics & repair",
      "Hinge repair",
      "Virus & malware removal",
      "SSD / RAM upgrades",
    ],
  },
  {
    icon: Gamepad2,
    label: "Console Repair",
    repairs: [
      "PS4 / PS5 HDMI port repair",
      "Xbox disc drive replacement",
      "Nintendo Switch screen repair",
      "Joy-Con drift fix",
      "Overheating / thermal paste",
      "Disc read errors",
      "Power issues",
    ],
  },
  {
    icon: Tablet,
    label: "Tablet Repair",
    repairs: [
      "iPad screen replacement",
      "Android tablet screen repair",
      "Battery replacement",
      "Charging port repair",
      "Camera replacement",
      "Water damage treatment",
    ],
  },
  {
    icon: Monitor,
    label: "Desktop / PC",
    repairs: [
      "No power diagnosis",
      "Motherboard repair",
      "GPU diagnostics",
      "OS reinstall & setup",
      "Virus removal",
      "Hardware upgrades",
    ],
  },
  {
    icon: Headphones,
    label: "Other Devices",
    repairs: [
      "Smartwatches",
      "Wireless earbuds",
      "Portable speakers",
      "E-readers",
      "Not sure? Just ask us.",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Our Services</h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              We repair a wide range of devices. If you don't see yours listed, reach out — we probably still can help.
            </p>
          </div>

          {/* Service grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map(({ icon: Icon, label, repairs }) => (
              <div key={label} className="card-hover bg-gray-900 border border-gray-800 rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 bg-blue-500/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h2 className="text-white font-bold text-lg">{label}</h2>
                </div>
                <ul className="space-y-2.5">
                  {repairs.map(repair => (
                    <li key={repair} className="flex items-start gap-2 text-gray-400 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      {repair}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Pricing note */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center mb-8">
            <h2 className="text-white font-bold text-2xl mb-3">Transparent Pricing</h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              We always send you a quote before any work starts. You only pay if you approve — no surprises, no hidden fees.
              If we can't fix it, you don't pay.
            </p>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-xl transition-all shadow-xl shadow-blue-500/20 hover:-translate-y-0.5"
            >
              Request a Repair
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
