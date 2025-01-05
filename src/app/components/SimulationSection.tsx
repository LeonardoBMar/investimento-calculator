export function SimulationSection() {
  return (
    <section id="simulation" className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Faça simulações em títulos de renda fixa
        </h2>
        <p className="mt-4 text-gray-600">
          Descubra qual título de renda fixa é mais vantajoso para você.
        </p>
        <div className="mt-8">
          <a
            href="/simulador"
            className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded hover:bg-indigo-700"
          >
            Acesse o Simulador
          </a>
        </div>
      </div>
    </section>
  );
}
