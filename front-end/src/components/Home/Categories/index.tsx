import CategoryCard from "./CategoryCard";
import { CardsContainer, CategoriesContainer } from "./styles";

export default function Categories() {
  return (
    <CategoriesContainer>
      <h2>Categorias</h2>

      <CardsContainer>
        <CategoryCard
          name="Padaria"
          imageUrl="/images/categories/padaria-min.png"
          slug="padaria"
        />
        <CategoryCard
          name="Hortifruti"
          imageUrl="/images/categories/hortifruti-min.png"
          slug="hortifruti"
        />
        <CategoryCard
          name="Limpeza"
          imageUrl="/images/categories/limpeza-min.png"
          slug="limpeza"
        />
        <CategoryCard
          name="Higiene"
          imageUrl="/images/categories/higiene-min.png"
          slug="higiene"
        />
      </CardsContainer>
    </CategoriesContainer>
  );
}
