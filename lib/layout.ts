/**
 * Shared layout constants for consistent grid, section boundaries, and spacing.
 * One source of truth for alignment and responsiveness.
 */

/** Section vertical padding: ample spacing, responsive — prevents overlap */
export const SECTION_PADDING = "py-16 sm:py-20 lg:py-24";

/** Section vertical padding (slightly tighter for dense content) */
export const SECTION_PADDING_TIGHT = "py-12 sm:py-16 lg:py-20";

/** Vertical gap between stacked content within a section */
export const SECTION_GAP = "gap-8 sm:gap-10 lg:gap-12";

/** Main content container: max-width + horizontal padding */
export const CONTAINER = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

/** Narrow content (e.g. contact, waitlist) */
export const CONTAINER_NARROW = "mx-auto max-w-2xl px-4 sm:px-6 lg:px-8";

/** Section boundary (use with border-t for clear separation) */
export const SECTION_BORDER = "border-t border-white/10";

/** Standard section wrapper: boundary + padding + container */
export const SECTION = `${SECTION_BORDER} ${SECTION_PADDING} ${CONTAINER}`;

/** Standard section with narrow content */
export const SECTION_NARROW = `${SECTION_BORDER} ${SECTION_PADDING} ${CONTAINER_NARROW}`;
