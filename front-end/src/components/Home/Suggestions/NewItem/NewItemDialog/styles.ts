"use client";

import styled from "styled-components";

import {
  DialogOverlay,
  DialogContent,
  DialogClose,
} from "@radix-ui/react-dialog";

export const CreateItem = styled.div`
  background-color: ${(props) => props.theme.colors.gray};
  width: 100%;
  height: 217px;
  cursor: pointer;
  display: flex;
  flex: 3;
  margin: 1rem 0;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  small {
    color: ${(props) => props.theme.colors.primary};
    font-weight: 700;
  }
`;

export const StyledDialogOverlay = styled(DialogOverlay)`
  background-color: #ff5a1161;
  position: fixed;
  inset: 0;
`;

export const StyledDialogContent = styled(DialogContent)`
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px hsl(206 22% 7% / 35%),
    0px 10px 20px -15px hsl(206 22% 7% / 20%);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 600px;
  max-height: 85vh;
  animation: contentShowAnimation 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes contentShowAnimation {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.5);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  section {
    width: 100%;
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
    column-gap: 2rem;
  }

  header {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.gray};

    p {
      color: #ff5a11;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`;

export const StyledImputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  }
`;

export const StyledDialogClose = styled(DialogClose)`
  position: absolute;
  top: 20px;
  right: 40px;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;
