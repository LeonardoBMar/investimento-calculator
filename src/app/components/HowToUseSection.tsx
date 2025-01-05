import { Card, CardTitle, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";

export function HowToUseSection() {
  return (
    <section id="how-to-use" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
          Como usar a calculadora de investimentos?
        </h2>
        <p className="mt-4 text-gray-600 text-lg md:text-xl">
          Em apenas 3 passos, você pode começar a planejar seus investimentos.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="hover:scale-105 transition-all duration-300 transform bg-white rounded-lg shadow-lg p-6">
            <CardContent className="flex flex-col items-center">
              <Badge
                variant="outline"
                className="text-4xl font-bold text-indigo-600 bg-indigo-50 px-6 py-3 rounded-full shadow-md mb-4"
              >
                1
              </Badge>
              <CardTitle className="text-xl text-indigo-600 font-semibold mb-2">
                Informe os dados iniciais
              </CardTitle>
              <p className="text-gray-600 text-base">
                Informe o valor que deseja investir e o prazo.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:scale-105 transition-all duration-300 transform bg-white rounded-lg shadow-lg p-6">
            <CardContent className="flex flex-col items-center">
              <Badge
                variant="outline"
                className="text-4xl font-bold text-indigo-600 bg-indigo-50 px-6 py-3 rounded-full shadow-md mb-4"
              >
                2
              </Badge>
              <CardTitle className="text-xl text-indigo-600 font-semibold mb-2">
                Escolha as opções
              </CardTitle>
              <p className="text-gray-600 text-base">
                Escolha entre diferentes taxas e modalidades de investimento.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:scale-105 transition-all duration-300 transform bg-white rounded-lg shadow-lg p-6">
            <CardContent className="flex flex-col items-center">
              <Badge
                variant="outline"
                className="text-4xl font-bold text-indigo-600 bg-indigo-50 px-6 py-3 rounded-full shadow-md mb-4"
              >
                3
              </Badge>
              <CardTitle className="text-xl text-indigo-600 font-semibold mb-2">
                Compare os resultados
              </CardTitle>
              <p className="text-gray-600 text-base">
                Compare os resultados e veja qual título oferece o melhor
                retorno.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
