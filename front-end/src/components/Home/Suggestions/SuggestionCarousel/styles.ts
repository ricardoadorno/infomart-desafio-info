import { styled } from "@/styles";

export const CarouselContainer = styled("div", {
  h3: {
    fontSize: "$h3",
    color: "$black",
  },
});

export const Carousel = styled("div", {
  marginTop: ".6rem",

  display: "flex",
  height: "347px",
  overflowX: "auto",
  justifyContent: "space-between",
  gap: "1rem",

  scrollbarWidth: "thin",

  "&::-webkit-scrollbar": {
    marginTop: "1rem",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888",
    borderRadius: "9999px",
    "&:hover": {
      backgroundColor: "#555",
    },
  },
});

export const CarouselItem = styled("div", {
  flexShrink: "0",
  flexBasis: "200px",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const ItemImage = styled("img", {
  width: "100%",
  height: "auto",
  borderRadius: "10px",
});

export const ItemInfo = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  rowGap: ".5rem",
  marginBottom: ".5rem",
  fontWeight: "700",

  p: {
    color: "$black",
  },

  span: {
    textAlign: "right",
    color: "$primary",
  },

  small: {
    color: "$placeholder",
    gridColumn: "1 / span 2",
  },
});
