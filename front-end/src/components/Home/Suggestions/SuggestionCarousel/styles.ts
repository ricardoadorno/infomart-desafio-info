import { styled } from "@/styles";

export const CarouselContainer = styled("div", {
  section: {
    display: "flex",
    gap: "1rem",

    overflowX: "scroll",
    cursor: "grab",
    userSelect: "none",
    "-webkit-overflow-scrolling": "touch",
    "&:active": {
      cursor: "grabbing",
    },
  },
});

export const Carousel = styled("div", {});

export const CarouselItem = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const ItemImage = styled("img", {
  width: "100%",
  height: "100px",
});

export const ItemInfo = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  rowGap: ".5rem",
  marginBottom: ".5rem",

  h3: {
    margin: "0",
  },

  span: {
    textAlign: "right",
  },
});
