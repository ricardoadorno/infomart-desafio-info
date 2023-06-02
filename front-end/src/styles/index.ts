import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      background: "#F6F6EF",
      primary: "#FF5A11",
      secondary: "#F5CB7A",
      black: "#262626",
      gray: "#DEDEDE",
      grayAlt: "#787878",
      placeholder: "#9E9E9E",
    },
    fonts: {
      sans: "Mulish, sans-serif",
      serif: "Domine, serif",
    },
    fontSizes: {
      h1: "4rem",
      h2: "3rem",
      h3: "2.25rem",
      h4: "1.5rem",
      p: "1rem",
      small: "0.75rem",

      h1Mobile: "1.875rem",
      h2Mobile: "1.406rem",
      h3Mobile: "0.938rem",
      h4Mobile: "0.75rem",
      pMobile: "0.75rem",
      smallMobile: "0.5rem",
    },
  },
  media: {
    xm: "(min-width: 640px)",
    sm: "(min-width: 768px)",
    md: "(min-width: 1024px)",
    lg: "(min-width: 1280px)",
  },
});
