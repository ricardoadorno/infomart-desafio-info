import { styled } from "@/styles";

export const NewItemContainer = styled("div", {
  height: "80%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  h3: {
    fontSize: "$h3",
    color: "$black",
    alignSelf: "flex-start",
  },
});
