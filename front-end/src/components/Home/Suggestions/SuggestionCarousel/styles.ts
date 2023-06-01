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
    height: "8px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "$primary",
    borderRadius: "9999px",
    "&:hover": {
      backgroundColor: "$primary",
    },
  },
});
