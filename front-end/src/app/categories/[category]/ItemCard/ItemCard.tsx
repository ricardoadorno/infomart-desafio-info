import { Item, ItemContent } from "./styles";
import Image from "next/image";

interface ItemCardProps {
  id: number;
  name: string;
  price: number;
  imgURL: string;
}

export default function ItemCard(ItemPlaceholder: ItemCardProps) {
  return (
    <Item>
      <Image
        width={245}
        height={208}
        src={ItemPlaceholder.imgURL}
        alt={ItemPlaceholder.name}
      />
      <ItemContent>
        <div>
          <h2>{ItemPlaceholder.name}</h2>
          <span>R$ {ItemPlaceholder.price}</span>
        </div>
        <button>Adicionar</button>
      </ItemContent>
    </Item>
  );
}
