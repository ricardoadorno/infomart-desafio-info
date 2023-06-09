import { Suspense } from "react";
import NewItem from "./NewItem";
import SuggestionCarousel from "./SuggestionCarousel";
import { SuggestionsContainer, SuggestionsDivider } from "./styles";
import { ProductType } from "@/types";

export default function Suggestions({
  suggestionItens,
}: {
  suggestionItens: ProductType[];
}) {
  return (
    <SuggestionsContainer>
      <SuggestionCarousel itens={suggestionItens} />

      <SuggestionsDivider />

      <NewItem />
    </SuggestionsContainer>
  );
}
