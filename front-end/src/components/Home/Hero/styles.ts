import { styled } from "@/styles";

export const HeroContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  margin: "8rem 0",

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
});

export const HeroImage = styled("img", {
  height: "auto",
  width: "400px",
});
