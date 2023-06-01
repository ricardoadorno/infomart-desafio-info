import { styled } from "@/styles";

export const SuggestionsContainer = styled("div", {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  gap: "1rem",
  padding: "0 1rem 0 1rem",
  backgroundColor: "$secondary",
  borderRadius: "10px",
  height: "30rem",
});

export const SuggestionsDivider = styled("div", {
  width: "1px",
  height: "80%",
  backgroundColor: "$primary",
  alignSelf: "center",
});
