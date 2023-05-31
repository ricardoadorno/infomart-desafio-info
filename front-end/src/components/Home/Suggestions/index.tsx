import NewItemDialog from "../NewItemDialog";
import {
  SuggestionsContainer,
  SuggestionsComponent,
  SuggestionsDivider,
  SuggestionsItem,
  ItemImage,
  ItemInfo,
} from "./styles";

export default function Suggestions() {
  return (
    <SuggestionsContainer>
      <SuggestionsComponent>
        <h2>Algumas sugestões</h2>
        <section>
          <SuggestionsItem>
            <ItemImage
              draggable="false"
              src="https://placehold.it/150/150"
              alt="suggestion"
            />
            <ItemInfo>
              <h3>Item 1</h3>
              <span>Preço</span>
              <small>Tag</small>
            </ItemInfo>
            <button>+Lista</button>
          </SuggestionsItem>
        </section>
      </SuggestionsComponent>

      <SuggestionsDivider />

      <NewItemDialog />
    </SuggestionsContainer>
  );
}
