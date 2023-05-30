import Header from "@/components/Header";
import { Roboto } from "next/font/google";
import { globalStyles } from "./styles/global";
import { getCssText } from "./styles";

const roboto = Roboto({ 
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
      <body className={roboto.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
