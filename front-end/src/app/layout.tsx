"use client";

import StyledComponentsRegistry from "@/lib/registry";
import { theme } from "@/styles/theme";
import { GlobalStyles } from "@/styles/global";
import { ThemeProvider } from "styled-components";
import Header from "@/components/Header";

export const metadata = {
  title: "InfoMart",
  description:
    "Listas de compra nunca foram tão simples! Com um clique construa sua lista de compras gratuitamente de forma rápida",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <html lang="pt">
          <head>
            <link
              href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Domine:wght@400;700&display=swap"
              rel="stylesheet"
            />
          </head>
          <body>
            <Header />
            {children}
          </body>
        </html>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
