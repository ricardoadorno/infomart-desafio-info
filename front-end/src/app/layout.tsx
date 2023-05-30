import Header from "@/components/Header";
import { Domine, Mulish } from "next/font/google";
import { globalStyles } from "../styles/global";
import { getCssText } from "../styles";

const domine = Domine({ 
  subsets: ["latin"],
  weight: ["400", "700"] 
});

const mulish = Mulish({ 
  subsets: ["latin"],
  weight: ["400", "700"] 
});


globalStyles()

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
    <html lang="pt">
      <head>
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </head>
      <body className={domine.className + mulish.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
