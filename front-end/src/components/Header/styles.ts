import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.sans};

  display: flex;
  flex-direction: column;
  align-items: center;

  .flex {
    display: flex;
    align-items: center;
    gap: 0.938rem;
  }
`;

export const ContactNavBar = styled.div`
  max-height: 1.875rem;
  min-width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: 0.469rem 0.625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavBar = styled.div`
  max-height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};

  padding: 0.625rem;

  .logo {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    font-family: ${({ theme }) => theme.fonts.serif};
  }

  .search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    width: 100%;
  }

  .search__input {
    font-size: ${({ theme }) => theme.fontSizes.placeholder};
    background-color: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.black};
    padding: 0.7rem 1rem;
    border-radius: 36px;
    margin-right: -2rem;
    width: 100%;
    min-width: 6.875rem;
  }

  .search__button {
    background-color: transparent;
    margin-top: 0.1em;
  }

  .search__button:hover {
    cursor: pointer;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
    font-size: ${({ theme }) => theme.fontSizes.small};
  }

  .searchIcon {
    position: relative;
    right: 0.625rem;
  }

  .burger {
    position: relative;
    min-width: 2.5rem;
    height: 1.875rem;
    background: transparent;
    cursor: pointer;
    display: none;
    z-index: 1001;
    transform: scale(0.7);
  }

  .burger input {
    display: none;
  }

  .burger span {
    display: block;
    position: absolute;
    height: 0.25rem;
    width: 100%;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  .burger span:nth-of-type(1) {
    top: 0px;
    transform-origin: left center;
  }

  .burger span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
  }

  .burger span:nth-of-type(3) {
    top: 100%;
    transform-origin: left center;
    transform: translateY(-100%);
  }

  .burger input:checked ~ span:nth-of-type(1) {
    transform: rotate(45deg);
    top: 0px;
    left: 0.313rem;
    background-color: ${({ theme }) => theme.colors.black};
  }

  .burger input:checked ~ span:nth-of-type(2) {
    width: 0%;
    opacity: 0;
  }

  .burger input:checked ~ span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 1.75rem;
    left: 0.313rem;
    background-color: ${({ theme }) => theme.colors.black};
  }

  .burger input:checked {
  }

  @media ${(props) => props.theme.media.sd} {
    .burger {
      display: block;
    }

    .menuList {
      position: fixed;
      width: 50vw;
      min-height: 100%;
      right: -100%;
      bottom: 0;
      margin: 0 auto;
      padding: 6rem 1.5rem;
      background-color: ${({ theme }) => theme.colors.primary};
      transition: right 0.5s;
      text-align: center;
      flex-direction: column-reverse;
      justify-content: flex-end;
      gap: 1.875rem;
      z-index: 100;
    }
  }
  .show-menu {
    right: 0;
  }
`;
