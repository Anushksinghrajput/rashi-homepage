"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CONTAINER, SECTION_BORDER, SECTION_PADDING } from "@/lib/layout";

/**
 * Three-stage flow: Universe of Data → Unique Insights → Accelerated Decision Making.
 * Continuous animated flow along the center line, scroll-linked movement.
 */
const VIEWBOX = "0 0 1920 1080";
const PATH_D =
  "M-792.857,5.143 C-792.857,5.143 -533.142,-642.858 -260.571,2.571 C12,648 222.857,7.714 228,0 C233.117,-7.676 439.361,-641.647 730.204,-14.639";
const PATH_LENGTH = 1200; // approx for stroke-dash purposes

export default function FlowDiagramSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const flowOffset = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 300, 600, 900, 1200]);
  const flowOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.5, 0.7, 0.9], [0.4, 0.9, 1, 0.9, 0.4]);

  return (
    <section
      ref={sectionRef}
      className={`relative ${SECTION_BORDER} ${SECTION_PADDING} ${CONTAINER}`}
      aria-labelledby="flow-diagram-heading"
    >
      <h2 id="flow-diagram-heading" className="sr-only">
        Data flow: Universe of Data to Unique Insights to Accelerated Decision Making
      </h2>

      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm">
        <svg
          viewBox={VIEWBOX}
          preserveAspectRatio="xMidYMid meet"
          className="h-auto w-full min-h-[280px] sm:min-h-[340px] md:min-h-[400px] lg:min-h-[480px]"
          aria-hidden
        >
          <defs>
            <marker
              id="flow-arrow-ref"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="5"
              orient="auto"
            >
              <path fill="rgb(255,255,255)" d="M0 0 L10 5 L0 10 Z" />
            </marker>
            <linearGradient id="flow-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(238,11,94)" stopOpacity="1" />
              <stop offset="50%" stopColor="rgb(255,255,255)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgb(255,167,14)" stopOpacity="1" />
            </linearGradient>
            <filter id="flow-glow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Wavy connecting path — base white line */}
          <g transform="translate(960, 540)">
            <motion.path
              d={PATH_D}
              fill="none"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            />
            <path
              d={PATH_D}
              fill="none"
              stroke="rgb(255,255,255)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              markerEnd="url(#flow-arrow-ref)"
              style={{ opacity: 0.95 }}
            />
          </g>

          {/* Continuous flow — gradient strokes, animated dashes (data/insights flowing) */}
          <g transform="translate(960, 540)" style={{ filter: "url(#flow-glow)" }}>
            <path
              d={PATH_D}
              fill="none"
              stroke="url(#flow-line-gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flow-line-animated-slow"
              style={{ opacity: 0.6 }}
            />
            <path
              d={PATH_D}
              fill="none"
              stroke="url(#flow-line-gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flow-line-animated"
            />
          </g>

          {/* Scroll-driven flow — bright segment follows scroll up/down */}
          <FlowPathScrollDriven pathD={PATH_D} pathLength={PATH_LENGTH} flowOffset={flowOffset} flowOpacity={flowOpacity} />

          {/* Pink circle — Universe of Data */}
          <g transform="matrix(1.07,0,0,1.07,504,286)">
            <g transform="translate(-66.773,222.555)">
              <circle fill="rgb(238,11,94)" r="165" />
            </g>
          </g>
          <text
            fill="rgb(235,235,235)"
            fontSize="48"
            fontFamily="Helvetica, Arial, sans-serif"
            fontWeight="700"
            x="242.6"
            y="789.26"
          >
            Analyze &amp; Cluster
          </text>
          <text
            fill="rgb(255,255,255)"
            fontSize="32"
            fontFamily="Helvetica, Arial, sans-serif"
            fontWeight="700"
            textAnchor="middle"
            x="434"
            y="533"
          >
            Universe of Data
          </text>

          {/* White circle — Unique Insights */}
          <text
            fill="rgb(235,235,235)"
            fontSize="48"
            fontFamily="Helvetica, Arial, sans-serif"
            fontWeight="700"
            x="720.73"
            y="317.74"
          >
            Extract &amp; Generate
          </text>
          <g transform="matrix(1.07,0,0,1.07,1016,329)">
            <g transform="translate(-66.773,222.555)">
              <circle fill="rgb(255,255,255)" r="165" />
            </g>
          </g>
          <text
            fill="rgb(0,0,0)"
            fontSize="32"
            fontFamily="Helvetica, Arial, sans-serif"
            fontWeight="700"
            textAnchor="middle"
            x="943"
            y="554"
          >
            Unique Insights
          </text>

          {/* Orange circle — Accelerated Decision Making */}
          <text
            fill="rgb(235,235,235)"
            fontSize="48"
            fontFamily="Helvetica, Arial, sans-serif"
            fontWeight="700"
            x="1264.15"
            y="794.54"
          >
            Interpret &amp; Learn
          </text>
          <g transform="matrix(1.07,0,0,1.07,1517,293)">
            <g transform="translate(-66.773,222.555)">
              <circle fill="rgb(255,167,14)" r="165" />
            </g>
          </g>
          <text
            fill="rgb(255,255,255)"
            fontSize="32"
            fontFamily="Helvetica, Arial, sans-serif"
            fontWeight="700"
            textAnchor="middle"
            x="1445.56"
            y="506"
          >
            Accelerated
          </text>
          <text
            fill="rgb(255,255,255)"
            fontSize="32"
            fontFamily="Helvetica, Arial, sans-serif"
            fontWeight="700"
            textAnchor="middle"
            x="1445.56"
            y="536"
          >
            Decision
          </text>
          <text
            fill="rgb(255,255,255)"
            fontSize="32"
            fontFamily="Helvetica, Arial, sans-serif"
            fontWeight="700"
            textAnchor="middle"
            x="1445.56"
            y="566"
          >
            Making
          </text>
        </svg>
      </div>
    </section>
  );
}

function FlowPathScrollDriven({
  pathD,
  pathLength,
  flowOffset,
  flowOpacity,
}: {
  pathD: string;
  pathLength: number;
  flowOffset: ReturnType<typeof useTransform<number>>;
  flowOpacity: ReturnType<typeof useTransform<number>>;
}) {
  return (
    <g transform="translate(960, 540)">
      <motion.path
        d={pathD}
        fill="none"
        stroke="url(#flow-line-gradient)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={`${100} ${pathLength}`}
        style={{
          filter: "url(#flow-glow)",
          opacity: flowOpacity,
          strokeDashoffset: flowOffset,
        }}
      />
    </g>
  );
}
