import { createStitches } from "@stitches/react";

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,

} = createStitches({
    theme: {
        colors: {
            background: '#F6F6EF',
            primary: "#FF5A11",
            secondary: "#F5CB7A",
            black: "#262626", 
            gray: "#DEDEDE", 
            grayAlt: "#787878", 
            placeholder: "#9E9E9E",
        }
    }
})