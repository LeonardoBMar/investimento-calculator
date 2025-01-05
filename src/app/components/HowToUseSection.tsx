export function HowToUseSection() {
  return (
    <section id="how-to-use" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Como usar a calculadora de investimentos?
        </h2>
        <p className="mt-4 text-gray-600">
          Em apenas 3 passos, você pode começar a planejar seus investimentos.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-4xl font-bold text-indigo-600">1</div>
            <p className="mt-4 text-gray-600">
              Informe o valor que deseja investir e o prazo.
            </p>
          </div>
          <div>
            <div className="text-4xl font-bold text-indigo-600">2</div>
            <p className="mt-4 text-gray-600">
              Escolha entre diferentes taxas e modalidades de investimento.
            </p>
          </div>
          <div>
            <div className="text-4xl font-bold text-indigo-600">3</div>
            <p className="mt-4 text-gray-600">
              Compare os resultados e veja qual título oferece o melhor retorno.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
