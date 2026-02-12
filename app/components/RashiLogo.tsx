import Link from "next/link";
import Image from "next/image";

const RASHI_LOGO_SRC =
  "https://rashi.ai/wp-content/uploads/2023/06/Rashi-Logo-Transparent-e1685619567554-1024x632.png";

type RashiLogoProps = {
  variant?: "navbar" | "hero" | "contact" | "heroLarge" | "heroXl" | "toolbar";
  href?: string;
  className?: string;
};

export default function RashiLogo({ variant = "navbar", href = "/", className = "" }: RashiLogoProps) {
  const isNavbar = variant === "navbar";
  const isHero = variant === "hero";
  const isHeroLarge = variant === "heroLarge";
  const isHeroXl = variant === "heroXl";
  const isToolbar = variant === "toolbar";
  const width = isHeroXl ? 520 : isHeroLarge ? 420 : isHero ? 200 : isNavbar ? 120 : isToolbar ? 80 : 140;
  const height = isHeroXl ? 321 : isHeroLarge ? 250 : isHero ? 124 : isNavbar ? 74 : isToolbar ? 50 : 87;

  const content = (
    <Image
      src={RASHI_LOGO_SRC}
      alt="Rashi"
      width={width}
      height={height}
      className={`object-contain object-left ${className}`}
      sizes={isHeroXl ? "520px" : isHeroLarge ? "420px" : isHero ? "(max-width: 640px) 160px, 200px" : isNavbar ? "120px" : isToolbar ? "80px" : "140px"}
      priority={isNavbar || isHeroLarge || isHeroXl || isToolbar}
    />
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-pink)] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
      >
        {content}
      </Link>
    );
  }
  return content;
}
