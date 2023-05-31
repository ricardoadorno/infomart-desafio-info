import { styled } from "@/styles";

export const HeroContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "15rem",
  height: "100vh",
  padding: "0 1rem",

  h1: {
    fontSize: "$h2",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
});

export const HeroImage = styled("img", {
  height: "50vmin",
});
