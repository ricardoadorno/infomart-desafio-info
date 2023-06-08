import Image from "next/image";
import { Item, ItemInfo } from "./styles";
import { ProductType } from "@/types";

export default function CarouselItem({ item }: { item: ProductType }) {
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
        <small> Categoria: {item.category}</small>
      </ItemInfo>
      <button>+ Lista</button>
    </Item>
  );
}
