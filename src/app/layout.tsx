import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const metadata = {
  title: "Calculadora de Investimentos",
  description: "Simule o crescimento dos seus investimentos facilmente.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
