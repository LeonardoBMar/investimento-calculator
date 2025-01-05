import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Por que usar nossa calculadora?
        </h2>
        <p className="mt-4 text-gray-600">
          Descubra as vantagens de planejar seus investimentos com eficiência.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-indigo-600">
                Simulações Personalizadas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Ajuste os valores, prazos e taxas para ver resultados
                específicos.
              </p>
              <Button variant="outline" className="mt-4">
                Saiba mais
              </Button>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-indigo-600">
                Comparação de Títulos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Compare diferentes opções de renda fixa e veja qual é mais
                vantajosa.
              </p>
              <Button variant="outline" className="mt-4">
                Explorar opções
              </Button>
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-indigo-600">Fácil de Usar</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Interface intuitiva para que qualquer pessoa possa simular
                investimentos rapidamente.
              </p>
              <Button variant="outline" className="mt-4">
                Testar agora
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
