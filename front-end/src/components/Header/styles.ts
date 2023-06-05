import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100vw;
    font-family: ${({theme}) => theme.fonts.sans};

    display: flex;
    flex-direction: column;
    align-items: center; 

    .flex{
        display: flex;
        align-items: center;
        gap: 15px;
    }
`

export const ContactNavBar = styled.div`
    max-height: 30px;
    min-width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    padding: 7.5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NavBar = styled.div`
    max-height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black};
    
    padding: 10px;
    
    .logo {
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: ${({theme}) => theme.fonts.serif};
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
        /* flex: 1; */
        width: 100%;
        min-width: 110px;
    }

    .search__button {
        background-color: transparent;
        margin-top: .1em;
    }

    .search__button:hover {
        cursor: pointer;
    }

    ::placeholder{
        color: ${({ theme }) => theme.colors.placeholder};
        font-size: ${({ theme }) => theme.fontSizes.small};
    } 
    
    .searchIcon{
        position: relative;
        right: 10px;
    }

    .burger {
        position: relative;
        width: 40px;
        height: 30px;
        background: transparent;
        cursor: pointer;
        display: none;

        transform: scale(0.7);
    } 

    .burger input {
        display: none;
    }

    .burger span {
        display: block;
        position: absolute;
        height: 4px;
        width: 100%;
        background: ${({ theme }) => theme.colors.primary};
        border-radius: 9px;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: .25s ease-in-out;
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
        left: 5px;
    }

    .burger input:checked ~ span:nth-of-type(2) {
        width: 0%;
        opacity: 0;
    }

    .burger input:checked ~ span:nth-of-type(3) {
        transform: rotate(-45deg);
        top: 28px;
        left: 5px;
    }

    @media ${(props) => props.theme.media.sm} {
        .burger{
            display: block;
        }

        .menuList {
            position: fixed;
            width: 50vw;
            min-height: 84vh;
            right: -100%;
            bottom: 0;
            margin: 0 auto;
            padding: 2rem 1.5rem ;
            
            background-color: hsla(18, 100%, 53%, .5);
            backdrop-filter: blur(1px);
            -webkit-backdrop-filter: blur(24px); 
            transition: right .5s;

            text-align: center;
            flex-direction: column-reverse;
            justify-content: flex-end;
            gap: 30px;
        }

    }
    .show-menu {
        right: 0;
    }   
`