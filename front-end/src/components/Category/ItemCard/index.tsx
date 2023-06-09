"use client";

import { ProductType } from "@/types";
import EditDialog from "../EditDialog";
import { ButtonGroup, Item, ItemContent } from "./styles";

export default function ItemCard({ item }: { item: ProductType }) {
  async function handleAddToList(id: string) {
    return fetch(`http://localhost:5000/products/list/${id}`, {
      method: "POST",
      cache: "no-cache",
    });
  }

  async function handleDeleteItem(id: string) {
    return fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    });
  }

  return (
    <Item>
      <img width={245} height={208} src={item.imageUrl} alt={item.name} />
      <ItemContent>
        <div>
          <h2>{item.name}</h2>
          <span>R$ {item.price}</span>
        </div>
        <ButtonGroup>
          <button onClick={() => handleAddToList(item.id)}>Adicionar</button>
          <EditDialog itemId={item.id} />
          <button
            onClick={() => {
              handleDeleteItem(item.id);
            }}
          >
            Excluir
          </button>
        </ButtonGroup>
      </ItemContent>
    </Item>
  );
}
