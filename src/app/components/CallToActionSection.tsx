export function CallToActionSection() {
  return (
    <section className="bg-indigo-600 text-white py-20">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Pronto para começar?</h2>
        <p className="mt-4 text-lg">
          Simule seus investimentos e descubra as melhores opções para você.
        </p>
        <div className="mt-6">
          <a
            href="/simulador"
            className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded hover:bg-gray-200"
          >
            Acesse o Simulador Agora
          </a>
        </div>
      </div>
    </section>
  );
}
