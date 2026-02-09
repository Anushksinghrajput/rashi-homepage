"use client";

import { useEffect, useRef } from "react";

const STAR_COUNT = 180;
const ORB_COUNT = 6;

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sizeRef = useRef({ w: 0, h: 0 });

  useEffect(() => {
    if (!canvasRef.current) return;

    let animationId: number;
    let stars: { x: number; y: number; r: number; hue: number; twinkle: number; driftX: number; driftY: number }[] = [];

    function resize() {
      const c = canvasRef.current;
      const context = c?.getContext("2d");
      if (!c || !context) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      sizeRef.current = { w, h };
      c.width = w * dpr;
      c.height = h * dpr;
      c.style.width = `${w}px`;
      c.style.height = `${h}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + 0.3,
        hue: Math.random() * 60 + 180,
        twinkle: Math.random() * Math.PI * 2,
        driftX: (Math.random() - 0.5) * 0.08,
        driftY: (Math.random() - 0.5) * 0.04,
      }));
    }

    function draw() {
      const c = canvasRef.current;
      const context = c?.getContext("2d");
      if (!c || !context) return;
      const { w, h } = sizeRef.current;
      context.fillStyle = "#000000";
      context.fillRect(0, 0, w, h);
      const t = Date.now() * 0.001;
      stars.forEach((star) => {
        star.x = (star.x + star.driftX + w) % w;
        star.y = (star.y + star.driftY + h) % h;
        const alpha = 0.3 + 0.5 * Math.sin(star.twinkle + t * 2) ** 2;
        context.beginPath();
        context.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        context.fillStyle = `hsla(${star.hue}, 70%, 85%, ${alpha})`;
        context.fill();
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
      {/* Nebula glows: pink, purple, blue, green, red - cosmic feel */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        {[
          { color: "bg-purple-500/25", w: 280, left: "10%", top: "5%", delay: "0s", dur: "20s" },
          { color: "bg-pink-500/20", w: 320, left: "60%", top: "10%", delay: "2s", dur: "22s" },
          { color: "bg-blue-500/15", w: 240, left: "75%", top: "50%", delay: "1s", dur: "18s" },
          { color: "bg-cyan-500/15", w: 200, left: "20%", top: "60%", delay: "3s", dur: "24s" },
          { color: "bg-red-500/15", w: 260, left: "50%", top: "75%", delay: "1.5s", dur: "19s" },
          { color: "bg-green-500/10", w: 180, left: "85%", top: "25%", delay: "0.5s", dur: "21s" },
        ].map((orb, i) => (
          <div
            key={i}
            className={`absolute rounded-full blur-[100px] animate-float-orb ${orb.color}`}
            style={{
              width: orb.w,
              height: orb.w,
              left: orb.left,
              top: orb.top,
              animationDelay: orb.delay,
              animationDuration: orb.dur,
            }}
          />
        ))}
      </div>
    </>
  );
}
