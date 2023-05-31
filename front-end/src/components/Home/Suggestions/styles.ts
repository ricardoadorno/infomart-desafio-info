import { styled } from "@/styles";

export const SuggestionsContainer = styled("div", {
  display: "flex",
  justifyContent: "space-evenly",
  gap: "1rem",
  padding: "1rem",
  backgroundColor: "$secondary",
  borderRadius: "10px",
});

export const SuggestionsDivider = styled("div", {
  width: "1px",
  height: "100%",
  backgroundColor: "$primary",
  alignSelf: "center",
});
