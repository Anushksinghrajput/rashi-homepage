"use client";

import { useEffect, useRef } from "react";

const STAR_COUNT = 520;
const DUST_COUNT = 45;
const STAR_LAYERS = 3; // depth: 0 = far (small, dim), 1 = mid, 2 = near (brighter, larger)

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
      alphaBase: number;
      twinklePhase: number;
      twinkleSpeed: number;
      driftX: number;
      driftY: number;
      layer: number;
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
        const layerScale = 0.4 + (layer / STAR_LAYERS) * 0.8;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: (Math.random() * 0.8 + 0.2) * (1 + layer * 0.4),
          alphaBase: 0.2 + layer * 0.2 + Math.random() * 0.15,
          twinklePhase: Math.random() * Math.PI * 2,
          twinkleSpeed: 0.3 + Math.random() * 0.5,
          driftX: (Math.random() - 0.5) * 0.03,
          driftY: (Math.random() - 0.5) * 0.02,
          layer,
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

      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, w, h);

      // Depth-of-field: draw far layer first (slightly softer look via smaller radius)
      stars.forEach((star) => {
        star.x = (star.x + star.driftX + w) % w;
        star.y = (star.y + star.driftY + h) % h;
        const twinkle = 0.85 + 0.15 * Math.sin(star.twinklePhase + t * star.twinkleSpeed) ** 2;
        const alpha = Math.min(1, star.alphaBase * twinkle);
        const x = star.x;
        const y = star.y;
        const r = star.r;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, r * 2);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
        gradient.addColorStop(0.4, `rgba(240, 245, 255, ${alpha * 0.6})`);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.beginPath();
        ctx.arc(x, y, r * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
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
