import { styled } from "@/styles";

export const CardsContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: ".8rem",
});

export const CategoriesCard = styled("div", {
  width: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "1rem",
  alignItems: "center",
  borderRadius: "0.5rem",
  boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.1)",
  backgroundColor: "$gray",
  paddingBottom: "3rem",

  h3: {
    fontSize: "$h3",
  },
});

export const CardImage = styled("img", {
  width: "100%",
  height: "auto",
  borderRadius: "0.5rem 0.5rem 0 0",
});

export const H2 = styled("h2", {
  fontSize: "$h2",
  fontFamily: "$serif",
  fontWeight: "700",
  margin: "2rem 0 2rem 0",
});
