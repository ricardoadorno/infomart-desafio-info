import Link from "next/link";
import { CardsContainer, CategoriesCard, CardImage, H2 } from "./styles";

export default function Categories() {
  return (
    <>
      <H2>Categories</H2>
      <CardsContainer>
        <CategoriesCard>
          <CardImage src="https://placehold.it/300x450" alt="Category 1" />
          <h3>Category 1</h3>
          <Link href="/category/1">
            <button>Confira</button>
          </Link>
        </CategoriesCard>
        <CategoriesCard>
          <CardImage src="https://placehold.it/300x450" alt="Category 1" />
          <h3>Category 1</h3>
          <Link href="/category/1">
            <button>Confira</button>
          </Link>
        </CategoriesCard>
        <CategoriesCard>
          <CardImage src="https://placehold.it/300x450" alt="Category 1" />
          <h3>Category 1</h3>
          <Link href="/category/1">
            <button>Confira</button>
          </Link>
        </CategoriesCard>
        <CategoriesCard>
          <CardImage src="https://placehold.it/300x450" alt="Category 1" />
          <h3>Category 1</h3>
          <Link href="/category/1">
            <button>Confira</button>
          </Link>
        </CategoriesCard>
      </CardsContainer>
    </>
  );
}
