import type { Config } from "tailwindcss";

/**
 * Foreword Forum brand tokens.
 *
 * Contrast against Paper Cream (#F5EEE0):
 *   navy 11.45:1, ink 10.59:1, bindery 6.6:1  -> safe for text
 *   coral 2.15:1, patina 2.58:1, endpaper 1.27:1 -> shapes, fills and rules ONLY
 *   alert 2.67:1 -> borders and icons on form errors, never text
 *
 * Several Tailwind defaults are deliberately removed (shadows, gradients,
 * pill radii) so they cannot creep into the design by accident.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      cream: "#F5EEE0",
      navy: "#103059",
      ink: "#353538",
      coral: "#E98B7B",
      patina: "#68A18A",
      endpaper: "#C1D7F2",
      bindery: "#3B5A4D",
      alert: "#FC5D4F",
    },
    fontFamily: {
      display: ["var(--font-playfair)", "Georgia", "serif"],
      sans: ["var(--font-inter)", "system-ui", "sans-serif"],
    },
    // [size, { lineHeight, letterSpacing }]. Mobile size is the base token,
    // the `-lg` token is applied from the `md` breakpoint up.
    fontSize: {
      title: ["36px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      "title-lg": ["56px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      h1: ["32px", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
      "h1-lg": ["44px", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
      h2: ["28px", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      "h2-lg": ["36px", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      quote: ["24px", { lineHeight: "1.4" }],
      "quote-lg": ["30px", { lineHeight: "1.4" }],
      subtitle: ["20px", { lineHeight: "1.4" }],
      "subtitle-lg": ["24px", { lineHeight: "1.4" }],
      h3: ["19px", { lineHeight: "1.3" }],
      "h3-lg": ["22px", { lineHeight: "1.3" }],
      body: ["16px", { lineHeight: "1.65" }],
      "body-lg": ["18px", { lineHeight: "1.65" }],
      caption: ["13px", { lineHeight: "1.5" }],
      "caption-lg": ["14px", { lineHeight: "1.5" }],
      label: ["12px", { lineHeight: "1.2", letterSpacing: "0.12em" }],
      "label-lg": ["13px", { lineHeight: "1.2", letterSpacing: "0.12em" }],
      button: ["15px", { lineHeight: "1.2" }],
      nav: ["15px", { lineHeight: "1.2" }],
    },
    borderRadius: {
      none: "0",
      DEFAULT: "4px",
    },
    boxShadow: {
      none: "none",
    },
    backgroundImage: {},
    dropShadow: {},
    extend: {
      maxWidth: {
        // Body copy measure: roughly 65 to 70 characters per line.
        prose: "34rem",
        page: "72rem",
      },
      borderWidth: {
        "1.5": "1.5px",
      },
      spacing: {
        // 8px scale shortcuts for section rhythm.
        block: "2rem", // 32px, the minimum gap between content blocks
        section: "6rem", // 96px
        "section-lg": "8rem", // 128px
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
