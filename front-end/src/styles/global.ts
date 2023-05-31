import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    backgroundColor: "$background",
  },

  "body, input, button, textarea": {
    fontFamily: "'Roboto', sans-serif",
    fontSize: "1rem",
    fontWeight: 400,
  },

  a: {
    color: "inherit",
    textDecoration: "none",
  },

  li: {
    listStyle: "none",
  },

  button: {
    backgroundColor: "$primary",
    color: "#fff",
    padding: "12px 16px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
});
