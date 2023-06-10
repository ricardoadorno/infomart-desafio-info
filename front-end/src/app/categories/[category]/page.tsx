import ItemCard from "@/components/Category/ItemCard";
import { ProductType } from "@/types";

interface CategoryProps {
  params: { category: string };
}

async function getItemsByCategory(category: string) {
  return fetch(`http://localhost:5000/products?category=${category}`, { cache: 'no-store' }).then(
    (res) => res.json()
  );
}

export default async function Category({
  params: { category },
}: CategoryProps) {
  const categoryItens = (await getItemsByCategory(category)) as ProductType[];

  return (
    <main className="container">
      <h1>Categoria: {category}</h1>

      <section>
        {categoryItens.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
}
