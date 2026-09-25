// AdBanner — replace the placeholder divs with real AdSense units
// once your account is approved. See README for instructions.
interface AdBannerProps {
  slot: "leaderboard" | "rectangle" | "sidebar";
  className?: string;
}

const sizes = {
  leaderboard: { w: "w-full max-w-[728px]", h: "h-[90px]",  label: "728×90 Leaderboard" },
  rectangle:   { w: "w-[300px]",            h: "h-[250px]", label: "300×250 Rectangle" },
  sidebar:     { w: "w-full",               h: "h-[600px]", label: "160×600 Sidebar" },
};

export default function AdBanner({ slot, className = "" }: AdBannerProps) {
  const s = sizes[slot];

  // ── When AdSense is approved, replace this div with: ──────────────
  // <ins className="adsbygoogle"
  //   style={{ display: "block" }}
  //   data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
  //   data-ad-slot="YOUR_AD_SLOT_ID"
  //   data-ad-format="auto"
  //   data-full-width-responsive="true" />
  // ─────────────────────────────────────────────────────────────────

  return (
    <div className={`${s.w} ${s.h} ${className} mx-auto flex items-center justify-center bg-[#13131a] border border-dashed border-[#2d2d3d] rounded-xl`}>
      <p className="text-gray-600 text-xs font-medium">Ad — {s.label}</p>
    </div>
  );
}
