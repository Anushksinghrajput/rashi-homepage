import Link from "next/link";
import RashiLogo from "./RashiLogo";

export default function TopToolbar() {
  return (
    <div className="sticky top-0 z-[60] flex h-9 items-center justify-between border-b border-white/10 bg-[#2c3338] px-4 text-xs text-white/90 sm:px-6">
      <div className="flex items-center gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <RashiLogo variant="toolbar" href="/" className="h-6 w-auto" />
        <span className="hidden shrink-0 sm:inline">|</span>
        <Link href="/" className="shrink-0 hover:text-white">
          Customize
        </Link>
        <Link href="/" className="shrink-0 hover:text-white">
          New
        </Link>
        <Link href="/" className="shrink-0 hover:text-white">
          Edit Page
        </Link>
        <Link href="/" className="shrink-0 hover:text-white">
          Edit with Elementor
        </Link>
        <Link href="/" className="shrink-0 hover:text-white">
          Notes
        </Link>
        <Link href="/" className="shrink-0 hover:text-white">
          Insights
        </Link>
        <Link href="/" className="flex shrink-0 items-center gap-1 hover:text-white">
          SEO
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white" aria-label="Alert">
            !
          </span>
        </Link>
      </div>
      <div className="flex shrink-0 items-center gap-2 pl-4">
        <span className="hidden text-white/70 sm:inline">Howdy, rashi.ai</span>
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20" aria-hidden />
      </div>
    </div>
  );
}
