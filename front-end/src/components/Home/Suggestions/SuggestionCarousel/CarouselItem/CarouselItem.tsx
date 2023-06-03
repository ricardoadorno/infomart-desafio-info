import Image from "next/image";
import { Item, ItemInfo } from "./styles";

interface CarouselItemProps {
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}

export default function CarouselItem({ item }: { item: CarouselItemProps }) {
  return (
    <Item>
      <Image
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
