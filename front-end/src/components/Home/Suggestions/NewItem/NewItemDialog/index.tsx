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

export default () => (
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
        </header>

        <section>
          <StyledImputGroup>
            <label htmlFor="nome">Nome</label>
            <input name="nome" type="text" placeholder="Digite o nome" />
          </StyledImputGroup>
          <StyledImputGroup>
            <label htmlFor="preço">Preço</label>
            <input
              name="preço"
              type="text"
              placeholder="Digite o preço estimado"
            />
          </StyledImputGroup>
          <StyledImputGroup>
            <label htmlFor="categoria">Categoria</label>
            <input
              name="categoria"
              type="text"
              placeholder="Digite a categoria"
            />
          </StyledImputGroup>
          <button>+ Adicionar à lista</button>
        </section>
      </StyledDialogContent>
    </Dialog.Portal>
  </Dialog.Root>
);
