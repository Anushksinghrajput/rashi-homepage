"use client";

import { motion } from "framer-motion";
import { CONTAINER, SECTION_BORDER, SECTION_PADDING } from "@/lib/layout";

/**
 * Three-stage flow matching rashi.ai reference:
 * Universe of Data → Unique Insights → Accelerated Decision Making.
 * Single SVG with wavy path (arrow at end), three circles, and action labels.
 * Path and labels positioned so they do not overlap circles or text.
 */
const VIEWBOX = "0 0 1920 1080";
const PATH_D =
  "M-792.857,5.143 C-792.857,5.143 -533.142,-642.858 -260.571,2.571 C12,648 222.857,7.714 228,0 C233.117,-7.676 439.361,-641.647 730.204,-14.639";

export default function FlowDiagramSection() {
  return (
    <section
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
          </defs>

          {/* Wavy connecting path (centered at 960,540); arrow at end */}
          <g transform="translate(960, 540)">
            <motion.path
              d={PATH_D}
              fill="none"
              stroke="rgb(255,255,255)"
              strokeWidth="4"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              markerEnd="url(#flow-arrow-ref)"
              initial={{ pathLength: 0, opacity: 0.9 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                pathLength: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1] },
                opacity: { duration: 0.3 },
              }}
            />
          </g>

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
