import { globalCss } from ".";

export const globalStyles = globalCss({
    "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
    },

    body: {
        backgroundColor: "$primary",    
    },

    'body, input, button, textarea': {
        fontFamily: "'Roboto', sans-serif",
        fontSize: "1rem",
        fontWeight: 400,
    },

    a: {
        color: 'inherit',
        textDecoration: 'none',
    },
    
    li: {
        listStyle: 'none',
    }
})