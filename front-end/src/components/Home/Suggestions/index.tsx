import NewItemDialog from "./NewItemDialog";
import SuggestionCarousel from "./SuggestionCarousel";
import { SuggestionsContainer, SuggestionsDivider } from "./styles";

export default function Suggestions() {
  return (
    <SuggestionsContainer>
      <SuggestionCarousel />

      <SuggestionsDivider />

      <NewItemDialog />
    </SuggestionsContainer>
  );
}
