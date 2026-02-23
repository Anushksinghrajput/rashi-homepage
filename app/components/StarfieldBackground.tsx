"use client";

import { useEffect, useRef } from "react";

const STAR_COUNT = 380;
const DUST_COUNT = 55;
const STAR_LAYERS = 3;
const SHOOTING_STAR_INTERVAL_MS = 8000; // approx time between shooting stars

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
    type ShootingStar = {
      x: number;
      y: number;
      progress: number;
      angle: number;
      length: number;
    };
    let stars: Star[] = [];
    let dust: Dust[] = [];
    let shootingStar: ShootingStar | null = null;
    let lastShootingStarTime = 0;

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

      // Shooting star: spawn periodically, animate across sky
      const elapsed = t * 1000;
      if (!shootingStar && elapsed - lastShootingStarTime > SHOOTING_STAR_INTERVAL_MS) {
        lastShootingStarTime = elapsed;
        shootingStar = {
          x: Math.random() * w * 0.4,
          y: Math.random() * h * 0.3,
          progress: 0,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
          length: 80 + Math.random() * 60,
        };
      }
      if (shootingStar) {
        shootingStar.progress += 0.03;
        if (shootingStar.progress >= 1) {
          shootingStar = null;
        } else {
          const { x, y, progress, angle, length } = shootingStar;
          const headX = x + Math.cos(angle) * progress * w * 0.8;
          const headY = y + Math.sin(angle) * progress * h * 0.8;
          const tailX = headX - Math.cos(angle) * length;
          const tailY = headY - Math.sin(angle) * length;
          const alpha = (1 - progress) * 0.9;
          const gradient = ctx.createLinearGradient(tailX, tailY, headX, headY);
          gradient.addColorStop(0, `rgba(255, 255, 255, 0)`);
          gradient.addColorStop(0.5, `rgba(255, 255, 255, ${alpha * 0.4})`);
          gradient.addColorStop(1, `rgba(255, 255, 255, ${alpha})`);
          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(headX, headY);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.lineCap = "round";
          ctx.stroke();
        }
      }

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

      {/* Nebula: deep blue, violet, magenta, warm pink accents */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 85% 20%, rgba(255, 0, 128, 0.06) 0%, transparent 40%),
            radial-gradient(ellipse 120% 80% at 85% 20%, rgba(88, 28, 135, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse 100% 70% at 75% 70%, rgba(30, 58, 138, 0.18) 0%, transparent 45%),
            radial-gradient(ellipse 90% 60% at 15% 80%, rgba(78, 4, 96, 0.12) 0%, transparent 40%),
            radial-gradient(ellipse 140% 100% at 50% 50%, rgba(15, 23, 42, 0.4) 0%, transparent 55%),
            radial-gradient(ellipse 80% 100% at 25% 40%, rgba(0, 0, 0, 0.35) 0%, transparent 50%)
          `,
        }}
      />

      {/* Soft ambient glow accents — pink, violet, cyan */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-70"
        aria-hidden="true"
      >
        <div
          className="absolute rounded-full blur-[140px]"
          style={{
            width: 450,
            height: 450,
            left: "70%",
            top: "15%",
            background: "radial-gradient(circle, rgba(255, 0, 128, 0.05) 0%, rgba(99, 102, 241, 0.06) 40%, transparent 70%)",
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
        <div
          className="absolute rounded-full blur-[80px]"
          style={{
            width: 280,
            height: 280,
            left: "20%",
            top: "70%",
            background: "radial-gradient(circle, rgba(34, 211, 238, 0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Solar system planets — small, realistic, inspired by reference */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Earth: subtle accent — smaller, refined for professional balance */}
        <div
          className="animate-planet-drift absolute flex items-center justify-center"
          style={{ left: "88%", top: "12%", width: 28, height: 28, animationDelay: "3s" }}
        >
          <div
            className="absolute rounded-full"
            style={{
              width: 22,
              height: 22,
              background: `
                radial-gradient(circle at 30% 26%, rgba(200, 235, 255, 0.98) 0%, rgba(50, 130, 210, 0.95) 35%, rgba(15, 70, 165, 0.95) 100%),
                radial-gradient(ellipse 35% 25% at 55% 45%, rgba(95, 170, 120, 0.6) 0%, transparent 55%),
                radial-gradient(ellipse 25% 20% at 65% 30%, rgba(150, 130, 95, 0.45) 0%, transparent 50%),
                radial-gradient(ellipse 30% 28% at 45% 50%, rgba(255, 255, 255, 0.6) 0%, transparent 45%),
                radial-gradient(circle at 100% 48%, rgba(180, 220, 255, 0.1) 0%, transparent 35%)
              `,
              boxShadow: "inset -4px -5px 10px rgba(0,0,0,0.4), 0 0 8px rgba(80, 160, 255, 0.15)",
            }}
          />
        </div>

        {/* Mars: reddish-orange, darker hazy patches — subtle bloom */}
        <div
          className="animate-planet-drift absolute flex items-center justify-center"
          style={{ left: "6%", top: "55%", width: 32, height: 32, animationDelay: "2s" }}
        >
          <div
            className="absolute rounded-full"
            style={{
              width: 26,
              height: 26,
              background: `
                radial-gradient(circle at 30% 28%, rgba(230, 150, 110, 0.95) 0%, rgba(190, 100, 70, 0.9) 30%, rgba(150, 70, 50, 0.9) 60%, rgba(100, 45, 35, 0.95) 100%),
                radial-gradient(ellipse 45% 35% at 55% 55%, rgba(80, 40, 35, 0.5) 0%, transparent 55%),
                radial-gradient(ellipse 30% 20% at 35% 20%, rgba(255, 235, 220, 0.4) 0%, transparent 50%)
              `,
              boxShadow: "inset -5px -6px 12px rgba(0,0,0,0.5), 0 0 10px rgba(200, 100, 80, 0.18)",
            }}
          />
        </div>

        {/* Jupiter: horizontal bands — cream, off-white, light orange, light brown — subtle bloom */}
        <div
          className="animate-planet-drift absolute flex items-center justify-center"
          style={{ left: "8%", top: "22%", width: 48, height: 48, animationDelay: "4s" }}
        >
          <div
            className="absolute rounded-full overflow-hidden"
            style={{
              width: 42,
              height: 42,
              background: `
                linear-gradient(180deg,
                  rgba(255, 250, 240, 0.95) 0%,
                  rgba(250, 235, 210, 0.9) 12%,
                  rgba(230, 200, 160, 0.9) 25%,
                  rgba(210, 170, 130, 0.9) 38%,
                  rgba(240, 215, 175, 0.9) 50%,
                  rgba(220, 185, 140, 0.9) 62%,
                  rgba(195, 155, 110, 0.9) 75%,
                  rgba(230, 200, 160, 0.9) 88%,
                  rgba(250, 235, 210, 0.95) 100%
                ),
                radial-gradient(circle at 35% 30%, rgba(255, 250, 240, 0.6) 0%, transparent 40%)
              `,
              boxShadow: "inset -10px -12px 22px rgba(0,0,0,0.4), 0 0 14px rgba(250, 230, 200, 0.15)",
            }}
          />
        </div>

        {/* Saturn: compact, photorealistic — pale gold bands + tilted ring system */}
        <div
          className="animate-planet-drift absolute flex items-center justify-center"
          style={{ left: "92%", top: "75%", width: 30, height: 30, animationDelay: "0.5s" }}
        >
          {/* Ring: tilted ellipse, subtle A/B ring banding */}
          <div
            className="absolute rounded-full"
            style={{
              width: 34,
              height: 10,
              background: `
                linear-gradient(to bottom,
                  rgba(205, 190, 165, 0.2) 0%,
                  rgba(185, 170, 148, 0.45) 20%,
                  rgba(175, 160, 138, 0.5) 35%,
                  rgba(185, 170, 148, 0.35) 50%,
                  rgba(165, 152, 132, 0.45) 65%,
                  rgba(195, 180, 158, 0.25) 80%,
                  transparent 100%
                )
              `,
              boxShadow: "inset 0 1px 2px rgba(255,255,255,0.06)",
            }}
          />
          {/* Sphere: pale gold with subtle equatorial band */}
          <div
            className="absolute rounded-full"
            style={{
              width: 18,
              height: 18,
              background: `
                radial-gradient(circle at 32% 28%, rgba(255, 250, 238, 0.98) 0%, rgba(248, 238, 212, 0.95) 25%, rgba(235, 218, 188, 0.95) 50%, rgba(218, 198, 165, 0.95) 75%, rgba(200, 178, 145, 0.98) 100%),
                radial-gradient(ellipse 80% 25% at 50% 55%, rgba(228, 210, 178, 0.5) 0%, transparent 60%)
              `,
              boxShadow: "inset -3px -4px 8px rgba(0,0,0,0.5), 0 0 8px rgba(255, 248, 230, 0.12)",
            }}
          />
        </div>

        {/* Pluto: mottled brown, beige — icy dwarf planet — subtle bloom */}
        <div
          className="animate-planet-drift absolute flex items-center justify-center"
          style={{ left: "78%", top: "82%", width: 24, height: 24, animationDelay: "3.5s" }}
        >
          <div
            className="absolute rounded-full"
            style={{
              width: 18,
              height: 18,
              background: `
                radial-gradient(circle at 35% 30%, rgba(220, 210, 195, 0.95) 0%, rgba(190, 175, 155, 0.9) 30%, rgba(160, 145, 125, 0.9) 60%, rgba(130, 115, 100, 0.95) 100%),
                radial-gradient(circle at 60% 65%, rgba(140, 125, 110, 0.5) 0%, transparent 40%)
              `,
              boxShadow: "inset -3px -4px 8px rgba(0,0,0,0.5), 0 0 6px rgba(210, 195, 175, 0.15)",
            }}
          />
        </div>
      </div>

    </>
  );
}
