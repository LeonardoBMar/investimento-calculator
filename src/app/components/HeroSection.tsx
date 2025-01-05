export function HeroSection() {
  return (
    <section className="bg-indigo-600 text-white py-20">
      <div className="container mx-auto text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Planeje seus Investimentos com Facilidade
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Use nossa calculadora de investimentos para encontrar a melhor opção e
          maximizar seus ganhos.
        </p>
        <div className="mt-6">
          <a
            href="#simulation"
            className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded hover:bg-gray-200"
          >
            Comece Agora
          </a>
        </div>
      </div>
    </section>
  );
}
