"use client";
import * as Dialog from "@radix-ui/react-dialog";
import {
  StyledDialogOverlay,
  StyledDialogContent,
  StyledDialogClose,
  StyledImputGroup,
  CreateItem,
} from "./styles";
import addItem from "@/assets/icons/add-item.png";
import closeButton from "@/assets/icons/close-button.png";

export default () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <CreateItem>
        <img src={addItem.src} alt="add-item" />
        <small>Crie seu item</small>
      </CreateItem>
    </Dialog.Trigger>
    <Dialog.Portal>
      <StyledDialogOverlay />
      <StyledDialogContent>
        <header>
          <StyledDialogClose>
            <img src={closeButton.src} alt="Fechar" />
          </StyledDialogClose>
          <img src={addItem.src} alt="Adicionar item" />
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
