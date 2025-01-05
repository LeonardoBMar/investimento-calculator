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
          <div className="p-6 border rounded-lg bg-white shadow-sm">
            <h3 className="text-xl font-semibold text-indigo-600">
              Simulações Personalizadas
            </h3>
            <p className="mt-4 text-gray-600">
              Ajuste os valores, prazos e taxas para ver resultados específicos.
            </p>
          </div>
          <div className="p-6 border rounded-lg bg-white shadow-sm">
            <h3 className="text-xl font-semibold text-indigo-600">
              Comparação de Títulos
            </h3>
            <p className="mt-4 text-gray-600">
              Compare diferentes opções de renda fixa e veja qual é mais
              vantajosa.
            </p>
          </div>
          <div className="p-6 border rounded-lg bg-white shadow-sm">
            <h3 className="text-xl font-semibold text-indigo-600">
              Fácil de Usar
            </h3>
            <p className="mt-4 text-gray-600">
              Interface intuitiva para que qualquer pessoa possa simular
              investimentos rapidamente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
