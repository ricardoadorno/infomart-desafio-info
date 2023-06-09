"use client";
import * as Dialog from "@radix-ui/react-dialog";
import {
  StyledDialogOverlay,
  StyledDialogContent,
  StyledDialogClose,
  StyledImputGroup,
  CreateItem,
} from "./styles";
import Image from "next/image";
import { useState } from "react";

export default function NewItemDialog() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    imageUrl: "",
  });

  async function handleCreateItem() {
    return fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        name: form.name,
        price: Number(form.price),
        category: form.category,
        imageUrl: form.imageUrl,
      }),
    });
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CreateItem>
          <Image
            src="/icons/add-item.png"
            width={84}
            height={84}
            alt="Adicionar item"
          />
          <small>Crie seu item</small>
        </CreateItem>
      </Dialog.Trigger>
      <Dialog.Portal>
        <StyledDialogOverlay />
        <StyledDialogContent>
          <header>
            <StyledDialogClose>
              <Image
                src="/icons/close-button.png"
                width={33}
                height={33}
                alt="Fechar"
              />
            </StyledDialogClose>
            <Image
              src="/icons/add-item.png"
              width={42}
              height={42}
              alt="Adicionar item"
            />
            <p>Adicionar uma imagem</p>
            <input
              name="nome"
              type="text"
              placeholder="Insira a URL"
              value={form.imageUrl}
              onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
            />
          </header>

          <section>
            <StyledImputGroup>
              <label htmlFor="nome">Nome</label>
              <input
                name="nome"
                type="text"
                placeholder="Digite o nome"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </StyledImputGroup>
            <StyledImputGroup>
              <label htmlFor="preço">Preço</label>
              <input
                name="preço"
                type="number"
                placeholder="Digite o preço estimado"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />
            </StyledImputGroup>
            <StyledImputGroup>
              <label htmlFor="categoria">Categoria</label>
              <input
                name="categoria"
                type="text"
                placeholder="Digite a categoria"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              />
            </StyledImputGroup>
            <button onClick={handleCreateItem}>+ Adicionar à lista</button>
          </section>
        </StyledDialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
