import { styled } from "@/styles";

export const HeroContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100vh",

  hgroup: {
    maxWidth: "50%",
    fontWeight: "700",
    fontFamily: "$serif",
  },

  h1: {
    fontSize: "$h1",
    marginBottom: "1rem",
    lineHeight: "1.14",
  },

  h4: {
    fontSize: "$h4",
  },

  "@bp1": {
    hgroup: {
      maxWidth: "40%",
    },
  },
});

export const HeroImage = styled("img", {
  "@bp3": {
    height: "400px",
    width: "400px",
  },

  "@bp1": {
    display: "none",
  },
});
