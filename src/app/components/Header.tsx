import Link from "next/link";
import { Button } from "@/app/components/ui/button";

export function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          InvestSim
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-indigo-600">
            Início
          </Link>
          <Link
            href="#features"
            className="text-gray-700 hover:text-indigo-600"
          >
            Recursos
          </Link>
          <Link href="#pricing" className="text-gray-700 hover:text-indigo-600">
            Preços
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-indigo-600">
            Contato
          </Link>
        </nav>

        {/* Call to Action */}
        <div className="flex items-center space-x-4">
          <Link href="/login">
            <Button variant="ghost">Entrar</Button>
          </Link>
          <Link href="/register">
            <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
              Cadastre-se
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
