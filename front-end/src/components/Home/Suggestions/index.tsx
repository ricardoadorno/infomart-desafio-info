import NewItem from "./NewItem";
import SuggestionCarousel from "./SuggestionCarousel";
import { SuggestionsContainer, SuggestionsDivider } from "./styles";

export default function Suggestions() {
  return (
    <SuggestionsContainer>
      <SuggestionCarousel />

      <SuggestionsDivider />

      <NewItem />
    </SuggestionsContainer>
  );
}
