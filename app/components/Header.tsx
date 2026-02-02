"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import RashiLogo from "./RashiLogo";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blogs", label: "Blogs" },
    {
      label: "Solutions",
      children: [
        { href: "/solutions/sales-marketing", label: "Sales & Marketing" },
        { href: "/solutions/product-design", label: "Product Design" },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <RashiLogo variant="navbar" href="/" />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) =>
            "children" in item ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <button
                  type="button"
                  className="nav-link flex items-center gap-1 text-white/90 hover:text-white"
                  aria-expanded={solutionsOpen}
                  aria-haspopup="true"
                >
                  {item.label}
                  <svg
                    className={`h-4 w-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {solutionsOpen && item.children && (
                  <div className="absolute left-0 top-full mt-1 w-56 rounded-lg border border-white/10 bg-[var(--card)] py-2 shadow-xl backdrop-blur-md">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-white/90 hover:bg-white/5 hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link text-white/90 hover:text-white ${pathname === item.href ? "text-white" : ""}`}
                data-active={pathname === item.href ? "true" : undefined}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="#waitlist-form"
            className="btn-gradient rounded-[9999px] px-5 py-2.5 text-sm font-medium text-white"
          >
            Join Waitlist
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-black/95 px-4 py-4 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-2">
            <Link href="/" className="rounded-lg px-3 py-2 text-white/90 hover:bg-white/5" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link href="/blogs" className="rounded-lg px-3 py-2 text-white/90 hover:bg-white/5" onClick={() => setMobileOpen(false)}>
              Blogs
            </Link>
            <span className="px-3 py-2 text-sm font-medium text-white/50">Solutions</span>
            <Link href="/solutions/sales-marketing" className="rounded-lg px-3 py-2 pl-6 text-white/90 hover:bg-white/5" onClick={() => setMobileOpen(false)}>
              Sales & Marketing
            </Link>
            <Link href="/solutions/product-design" className="rounded-lg px-3 py-2 pl-6 text-white/90 hover:bg-white/5" onClick={() => setMobileOpen(false)}>
              Product Design
            </Link>
            <Link
              href="#waitlist-form"
              className="btn-gradient mt-2 rounded-full px-5 py-2.5 text-center text-sm font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              Join Waitlist
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
