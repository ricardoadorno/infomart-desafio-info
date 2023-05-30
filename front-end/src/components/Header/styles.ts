import { styled } from "@/styles";

export const HeaderContainer = styled('header', {
    width: '100vw',
    minHeight: '100px',
    backgroundColor: 'pink',
})

export const ContactNavBar = styled('div', { 
    minHeight: '30px',
    backgroundColor: '$primary',
    fontFamily: '$sans',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'certer',

    padding: '5px 10px',

    span: {
        display: 'flex',
        alignItems: 'certer',
        minWidth: 500,
        gap: 10,
    },

    p: {
        fontSize: '$small',
    }
})