import { styled } from "@/styles";

export const HeroContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100vh",
  padding: "0 1rem",

  hgroup: {
    maxWidth: "50%",
    fontWeight: "400",
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
});

export const HeroImage = styled("img", {
  height: "50vmin",
});
