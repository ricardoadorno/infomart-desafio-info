import { CardsContainer, CategoriesCard, CardImage, H2 } from "./styles";

export default function Categories() {
  return (
    <>
      <H2>Categories</H2>
      <CardsContainer>
        <CategoriesCard>
          <CardImage src="https://placehold.it/300x450" alt="Category 1" />
          <h3>Category 1</h3>
          <button>Confira</button>
        </CategoriesCard>
        <CategoriesCard>
          <CardImage src="https://placehold.it/300x450" alt="Category 1" />
          <h3>Category 1</h3>
          <button>Confira</button>
        </CategoriesCard>
        <CategoriesCard>
          <CardImage src="https://placehold.it/300x450" alt="Category 1" />
          <h3>Category 1</h3>
          <button>Confira</button>
        </CategoriesCard>
        <CategoriesCard>
          <CardImage src="https://placehold.it/300x450" alt="Category 1" />
          <h3>Category 1</h3>
          <button>Confira</button>
        </CategoriesCard>
      </CardsContainer>
    </>
  );
}
