"use client";

import { useEffect, useRef } from "react";

const STAR_COUNT = 320;
const DUST_COUNT = 45;
const STAR_LAYERS = 3; // depth: far (small, dim) → near (brighter, larger, shinier)

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sizeRef = useRef({ w: 0, h: 0 });

  useEffect(() => {
    if (!canvasRef.current) return;

    let animationId: number;
    type Star = {
      x: number;
      y: number;
      r: number;
      hue: number;
      saturation: number;
      twinklePhase: number;
      twinkleSpeed: number;
      layer: number;
      brightness: number;
    };
    type Dust = {
      x: number;
      y: number;
      size: number;
      phase: number;
      driftX: number;
      driftY: number;
    };
    let stars: Star[] = [];
    let dust: Dust[] = [];

    function resize() {
      const c = canvasRef.current;
      const ctx = c?.getContext("2d");
      if (!c || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      sizeRef.current = { w, h };
      c.width = w * dpr;
      c.height = h * dpr;
      c.style.width = `${w}px`;
      c.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      stars = Array.from({ length: STAR_COUNT }, () => {
        const layer = Math.floor(Math.random() * STAR_LAYERS);
        const isBright = Math.random() < 0.2; // more bright "close" stars for shine
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: (isBright ? 1.2 + Math.random() * 1.2 : 0.3 + Math.random() * 0.7) + layer * 0.25,
          hue: Math.random() < 0.7 ? 200 + Math.random() * 30 : 45 + Math.random() * 25,
          saturation: 15 + Math.random() * 25,
          twinklePhase: Math.random() * Math.PI * 2,
          twinkleSpeed: 1.2 + Math.random() * 1.8,
          layer,
          brightness: isBright ? 0.92 + Math.random() * 0.08 : 0.6 + Math.random() * 0.35,
        };
      });

      dust = Array.from({ length: DUST_COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 1.2 + 0.4,
        phase: Math.random() * Math.PI * 2,
        driftX: (Math.random() - 0.5) * 0.15,
        driftY: (Math.random() - 0.5) * 0.1,
      }));
    }

    function draw() {
      const c = canvasRef.current;
      const ctx = c?.getContext("2d");
      if (!c || !ctx) return;
      const { w, h } = sizeRef.current;
      const t = Date.now() * 0.001;

      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, w, h);

      // Stars: simple points, blinking only
      stars.forEach((star) => {
        const blink = 0.5 + 0.5 * Math.sin(star.twinklePhase + t * star.twinkleSpeed) ** 2;
        const alpha = 0.2 + 0.8 * blink;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${star.hue}, ${star.saturation}%, 92%, ${alpha})`;
        ctx.fill();
      });

      // Subtle dust particles
      dust.forEach((d) => {
        d.x = (d.x + d.driftX + w) % w;
        d.y = (d.y + d.driftY + h) % h;
        const driftAlpha = 0.08 + 0.12 * (0.5 + 0.5 * Math.sin(d.phase + t * 0.2));
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${driftAlpha})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 h-full w-full"
        aria-hidden="true"
      />

      {/* Nebula: deep blue, violet, magenta — center-left kept darker for typography */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 85% 20%, rgba(88, 28, 135, 0.22) 0%, transparent 50%),
            radial-gradient(ellipse 100% 70% at 75% 70%, rgba(30, 58, 138, 0.18) 0%, transparent 45%),
            radial-gradient(ellipse 90% 60% at 15% 80%, rgba(78, 4, 96, 0.12) 0%, transparent 40%),
            radial-gradient(ellipse 140% 100% at 50% 50%, rgba(15, 23, 42, 0.4) 0%, transparent 55%),
            radial-gradient(ellipse 80% 100% at 25% 40%, rgba(0, 0, 0, 0.35) 0%, transparent 50%)
          `,
        }}
      />

      {/* Soft ambient glow accents — very subtle */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-60"
        aria-hidden="true"
      >
        <div
          className="absolute rounded-full blur-[120px]"
          style={{
            width: 400,
            height: 400,
            left: "70%",
            top: "15%",
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full blur-[100px]"
          style={{
            width: 350,
            height: 350,
            left: "80%",
            top: "60%",
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%)",
          }}
        />
      </div>

    </>
  );
}
