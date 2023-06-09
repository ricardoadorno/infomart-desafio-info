"use client";

import { Product } from "@/types";
import { Dispatch, SetStateAction } from "react";
import { styled } from "styled-components";

const StyledDeleteButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontSizes.small};
  cursor: pointer;
  width: 10.25rem;
  min-height: 2.5rem;
  border-radius: 10px; 
`;

export interface DeleteButtonProps {
  productId: number;
  setProducts: Dispatch<SetStateAction<Product[]>>;
}

export default function DeleteButton({
  productId,
  setProducts,
}: DeleteButtonProps) {
  return (
    <StyledDeleteButton
      onClick={async () => {
        try {
          await fetch(`http://localhost:5000/products/${productId}`, {
            method: "DELETE",
          }); //pegar os da lista
          setProducts((productList) =>
            productList.filter((item) => item.id !== productId)
          );
        } catch (error) {
          console.error(error);
        }
      }}
    >
      Remover item
    </StyledDeleteButton>
  );
}
