import { keyframes, styled } from "@/styles";

import {
  DialogOverlay,
  DialogContent,
  DialogClose,
} from "@radix-ui/react-dialog";

export const StyledDialogOverlay = styled(DialogOverlay, {
  backgroundColor: "#FF5A1161",
  position: "fixed",
  inset: 0,
});

const contentShow = keyframes({
  "0%": {
    opacity: "0",
    transform: "translate(-50%, -50%) scale(0.5)",
  },
  "100%": {
    opacity: "1",
    transform: "translate(-50%, -50%) scale(1)",
  },
});

export const StyledDialogContent = styled(DialogContent, {
  backgroundColor: "white",
  borderRadius: "6px",
  boxShadow:
    "0px 10px 38px -10px hsl(206 22% 7% / 35%), 0px 10px 20px -15px hsl(206 22% 7% / 20%)",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "500px",
  maxHeight: "85vh",
  animation: `${contentShow}  150ms cubic-bezier(0.16, 1, 0.3, 1)  `,

  section: {
    padding: "2rem",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    rowGap: "2rem",
    columnGap: "3rem",
  },

  header: {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DEDEDE",

    p: {
      color: "#FF5A11",
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
  },
});

export const StyledImputGroup = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: ".3rem",

  input: {
    background: "#DEDEDE",
    borderRadius: "36px",
    border: "none",
    padding: "10px",

    "&:placeholder": {
      color: "#9E9E9E",
    },
  },
});

export const AddItemComponent = styled("div", {});

export const CreateItem = styled("div", {
  backgroundColor: "#DEDEDE",
  width: "495px",
  height: "217px",

  cursor: "pointer",
  display: "flex",
  gap: ".5rem",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  small: {
    color: "#FF5A11",
    fontWeight: "bolder",
  },
});

export const StyledDialogClose = styled(DialogClose, {
  position: "absolute",
  top: "20px",
  right: "40px",
  width: "20px",
  height: "20px",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  outline: "none",
});
