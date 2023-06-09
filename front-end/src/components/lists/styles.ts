import { styled } from "styled-components";

export const AmountContainer = styled.div`
  position: absolute;
  bottom: -1.875rem;
  left: auto;
  font-family: ${({ theme }) => theme.fonts.sans};
  margin-top: 1.25rem;
  font-weight: 700;

  .value {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ButtonContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  position: relative;
  bottom: 3.75rem;
  margin-right: 1.75rem;
  height: 0px;
`;

export const EmptyContainer = styled.section`
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .empty {
    width: 80%;
    gap: 2.5rem;

    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .emptyDescription {
    color: ${({ theme }) => theme.colors.grayAlt};
  }

  .homeButton {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    font-size: ${({ theme }) => theme.fontSizes.h4};
    font-family: ${({ theme }) => theme.fonts.sans};
    font-weight: 700;
    padding: 0.75rem 1rem;
    border-radius: 10px;
  }
`;
