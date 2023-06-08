import { Suspense } from "react";
import NewItem from "./NewItem";
import SuggestionCarousel from "./SuggestionCarousel";
import { SuggestionsContainer, SuggestionsDivider } from "./styles";

async function getSuggetions() {
  return fetch("http://localhost:5000/products").then((res) => res.json());
}

export default async function Suggestions() {
  const data = await getSuggetions();

  return (
    <SuggestionsContainer>
      <SuggestionCarousel itens={data} />

      <SuggestionsDivider />

      <NewItem />
    </SuggestionsContainer>
  );
}
