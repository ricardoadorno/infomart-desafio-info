import Image from "next/image";
import { Item, ItemInfo } from "./styles";

interface CarouselItemProps {
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}

export default function CarouselItemMobile({
  item,
}: {
  item: CarouselItemProps;
}) {
  return (
    <Item>
      <Image
        draggable="false"
        src={item.imageUrl}
        width={111}
        height={111}
        alt={item.name}
      />
      <ItemInfo>
        <p>{item.name}</p>
        <span>R$ {item.price}</span>
        <button>+ Lista</button>
      </ItemInfo>
    </Item>
  );
}
