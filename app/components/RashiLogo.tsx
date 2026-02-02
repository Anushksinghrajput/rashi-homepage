import Link from "next/link";

type RashiLogoProps = {
  variant?: "navbar" | "hero" | "contact";
  href?: string;
  className?: string;
};

export default function RashiLogo({ variant = "navbar", href = "/", className = "" }: RashiLogoProps) {
  const isNavbar = variant === "navbar";
  const isHero = variant === "hero";
  const isContact = variant === "contact";
  const symbolSize = isHero ? 64 : isContact ? 56 : 36;
  const textSize = isNavbar ? "text-2xl" : isHero ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl";
  const textColor = isContact ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" : "text-white";

  const content = (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {/* Abstract symbol: stylized Resh with neon pink outer + yellow inner glow */}
      <svg
        width={symbolSize}
        height={symbolSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-hidden
      >
        <defs>
          <filter id="rashi-glow-pink" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
            <feFlood floodColor="#ff0080" floodOpacity="0.6" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="rashi-glow-yellow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" result="blur" />
            <feFlood floodColor="#ffff00" floodOpacity="0.5" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Outer outline: pink with glow - stylized Resh (vertical, rounded, wider at bottom) */}
        <path
          d="M24 6C32 6 38 11 38 20V40C38 44 34 46 24 46C14 46 10 44 10 40V20C10 11 16 6 24 6Z"
          stroke="#ff0080"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter="url(#rashi-glow-pink)"
        />
        {/* Inner outline: yellow */}
        <path
          d="M24 6C32 6 38 11 38 20V40C38 44 34 46 24 46C14 46 10 44 10 40V20C10 11 16 6 24 6Z"
          stroke="#ffff00"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter="url(#rashi-glow-yellow)"
        />
      </svg>
      {/* Script text "Rashi" - contact variant uses neon blue/cyan glow */}
      <span className={`font-[family-name:var(--font-great-vibes)] font-normal ${textColor} ${textSize}`}>
        Rashi
      </span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-pink)] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded">
        {content}
      </Link>
    );
  }
  return content;
}
