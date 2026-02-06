"use client";

import { motion } from "framer-motion";

/**
 * Exact replica of Rashi.ai Lottie flow diagram (1920×1080).
 * - White curved path (stroke 4) with draw animation + directional arrow at end
 * - Left: pink circle rgb(238,11,94) — "Universe of Data" (white), "Analyze & Cluster" (gray) below
 * - Middle: white circle — "Unique Insights" (black), "Extract & Generate" (gray) above
 * - Right: orange circle rgb(255,167,14) — "Accelerated Decision Making" (white), "Interpret & Learn" (gray) below
 */
const VIEWBOX = "0 0 1920 1080";

// Exact path from Lottie (centered at 960,540): ends at 702.672,-70.778
const CURVE_PATH =
  "M-792.857,5.143 C-792.857,5.143 -533.142,-642.858 -260.571,2.571 C12,648 222.857,7.714 228,0 C232.954,-7.431 426.426,-601.895 702.672,-70.778";

export default function FlowDiagram() {
  return (
    <section
      className="relative border-t border-white/10 px-4 py-16 sm:py-20 lg:py-24"
      aria-labelledby="flow-heading"
    >
      <div className="mx-auto max-w-7xl">
        <h2 id="flow-heading" className="sr-only">
          Data flow: Universe of Data to Unique Insights to Accelerated Decision Making
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <svg
            viewBox={VIEWBOX}
            preserveAspectRatio="xMidYMid meet"
            className="h-auto w-full min-h-[280px] sm:min-h-[340px] md:min-h-[400px] lg:min-h-[480px]"
            aria-hidden
          >
            <defs>
              <clipPath id="flow-clip">
                <rect width="1920" height="1080" x="0" y="0" />
              </clipPath>
              <marker
                id="flow-arrow"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="5"
                orient="auto"
              >
                <path
                  fill="rgb(255,255,255)"
                  d="M0 0 L10 5 L0 10 Z"
                />
              </marker>
            </defs>
            <g clipPath="url(#flow-clip)">
              {/* Curve: group centered at (960,540) */}
              <g transform="translate(960, 540)">
                <motion.path
                  d={CURVE_PATH}
                  fill="none"
                  stroke="rgb(255,255,255)"
                  strokeWidth="4"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeOpacity="1"
                  markerEnd="url(#flow-arrow)"
                  initial={{ pathLength: 0, opacity: 0.7 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: "easeInOut" }}
                />
              </g>

              {/* Node 1: Pink circle — Universe of Data */}
              <g transform="translate(504, 286) scale(1.07) translate(-66.77, 222.55)">
                <motion.circle
                  r="165"
                  fill="rgb(238,11,94)"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                />
              </g>
              <motion.g
                fill="rgb(255,255,255)"
                fontSize="48"
                fontFamily="Helvetica, Arial, sans-serif"
                fontWeight="700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <text x="434" y="520" textAnchor="middle">
                  Universe of Data
                </text>
              </motion.g>
              <motion.g
                fill="rgb(235,235,235)"
                fontSize="48"
                fontFamily="Helvetica, Arial, sans-serif"
                fontWeight="700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.4 }}
              >
                <text x="242.6" y="789.26" textAnchor="start">
                  Analyze &amp; Cluster
                </text>
              </motion.g>

              {/* Node 2: White circle — Unique Insights */}
              <g transform="translate(1016, 329) scale(1.07) translate(-66.77, 222.55)">
                <motion.circle
                  r="165"
                  fill="rgb(255,255,255)"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </g>
              <motion.g
                fill="rgb(0,0,0)"
                fontSize="48"
                fontFamily="Helvetica, Arial, sans-serif"
                fontWeight="700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <text x="943" y="554" textAnchor="middle">
                  Unique Insights
                </text>
              </motion.g>
              <motion.g
                fill="rgb(235,235,235)"
                fontSize="48"
                fontFamily="Helvetica, Arial, sans-serif"
                fontWeight="700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.4 }}
              >
                <text x="720.73" y="317.74" textAnchor="start">
                  Extract &amp; Generate
                </text>
              </motion.g>

              {/* Node 3: Orange circle — Accelerated Decision Making */}
              <g transform="translate(1517, 293) scale(1.07) translate(-66.77, 222.55)">
                <motion.circle
                  r="165"
                  fill="rgb(255,167,14)"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />
              </g>
              <motion.g
                fill="rgb(255,255,255)"
                fontSize="45"
                fontFamily="Helvetica, Arial, sans-serif"
                fontWeight="700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45, duration: 0.4 }}
              >
                <text x="1445" y="501" textAnchor="middle">
                  Accelerated Decision Making
                </text>
              </motion.g>
              <motion.g
                fill="rgb(235,235,235)"
                fontSize="48"
                fontFamily="Helvetica, Arial, sans-serif"
                fontWeight="700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <text x="1264.15" y="794.54" textAnchor="start">
                  Interpret &amp; Learn
                </text>
              </motion.g>
            </g>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
