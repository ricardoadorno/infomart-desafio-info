import ItemCard from "../../../components/Category/ItemCard/ItemCard";

interface CategoryProps {
  params: { category: string };
}

const ItemPlaceholder = [
  {
    id: 1,
    name: "Item 1",
    price: 10,
    imgURL: "/images/placeholder.png",
  },
  {
    id: 1,
    name: "Item 1",
    price: 10,
    imgURL: "/images/placeholder.png",
  },
];

export default function Category({ params: { category } }: CategoryProps) {
  return (
    <main className="container">
      <h1>Categoria: {category}</h1>

      <section>
        {ItemPlaceholder.map((item) => (
          <ItemCard key={item.id} {...item} />
        ))}
      </section>
    </main>
  );
}
