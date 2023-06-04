import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100vw;
    background-color: pink;
    font-family: ${({theme}) => theme.fonts.sans};

    display: flex;
    flex-direction: column;
    align-items: center; 
`

export const ContactNavBar = styled.div`
    max-height: 30px;
    min-width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    font-size: ${({ theme }) => theme.fontSizes.small};
    padding: 7.5px 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .whatsappNumber {
        display: flex;
        gap: 10px;
    }
`

export const NavBar = styled.div`
    max-height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes.h4};
    color: ${({ theme }) => theme.colors.black};
    

    padding: 10px 0;
    
    .logo {
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: ${({theme}) => theme.fonts.serif};
        font-size: ${({ theme }) => theme.fontSizes.h3};
    }




    .searchInput{
        min-width: 415px;
        min-height: 36px;
        border-radius: 36px;
        border: none;
        outline: none;
        background-color: ${({ theme }) => theme.colors.gray};
        padding: 10.5px 10px;
    }

    .searchInput::placeholder{
        color: ${({ theme }) => theme.colors.placeholder};
        font-size: ${({ theme }) => theme.fontSizes.small};
    }

    


    .mylist{
        display: flex;
        align-items: center;
    }
    
`