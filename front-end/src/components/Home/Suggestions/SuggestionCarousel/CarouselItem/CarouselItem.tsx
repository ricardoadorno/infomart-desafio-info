import { Item, ItemInfo } from "./styles";
import { ProductType } from "@/types";

export default function CarouselItem({ item }: { item: ProductType }) {
  async function handleAddToList(id: string) {
    return fetch(`http://localhost:5000/products/list/${id}`, {
      method: "POST",
      cache: "no-cache",
    });
  }

  return (
    <Item>
      <img
        draggable="false"
        src={item.imageUrl}
        width={245}
        height={208}
        alt={item.name}
      />
      <ItemInfo>
        <p>{item.name}</p>
        <span>R$ {item.price}</span>
        <small> Categoria: {item.categoryName}</small>
      </ItemInfo>
      <button onClick={() => handleAddToList(item.id)}>+ Lista</button>
    </Item>
  );
}
