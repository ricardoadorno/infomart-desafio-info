import NewItemDialog from "./NewItemDialog";
import { NewItemContainer } from "./styles";

export default function NewItem() {
  return (
    <NewItemContainer>
      <h3>Ou adicione um item personalizado</h3>
      <NewItemDialog />
    </NewItemContainer>
  );
}
