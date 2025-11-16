import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog do Zé Xereca",
  description: "Um blog sobre tudo que envolve o Zé Xereca.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
          {children}
      </body>
    </html>
  );
}
