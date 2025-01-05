export default function ComplementaryInfo() {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Informações Complementares
      </h2>
      <div className="bg-gray-50 shadow-md rounded-lg p-6 space-y-4">
        {/* Descrição dos cálculos */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">
            Descrição dos cálculos
          </h3>
          <p className="text-gray-600">
            Os cálculos são baseados em juros compostos, considerando as
            entradas fornecidas e as taxas aplicadas ao longo do período de
            investimento.
          </p>
        </div>

        {/* Dicas de Investimento */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">
            Dicas de investimento
          </h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Diversifique sua carteira para reduzir riscos.</li>
            <li>Considere o impacto da inflação ao longo do tempo.</li>
            <li>
              Escolha investimentos que se alinhem aos seus objetivos
              financeiros.
            </li>
          </ul>
        </div>

        {/* Links para artigos */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Links úteis</h3>
          <ul className="list-disc list-inside text-indigo-600">
            <li>
              <a
                href="https://www.tesourodireto.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                Guia do Tesouro Direto
              </a>
            </li>
            <li>
              <a
                href="https://www.investopedia.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Investopedia - Educação Financeira
              </a>
            </li>
          </ul>
        </div>

        {/* Avisos de risco */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">
            Avisos de risco
          </h3>
          <p className="text-gray-600">
            Investimentos envolvem riscos. Consulte um profissional financeiro
            para orientações personalizadas.
          </p>
        </div>
      </div>
    </div>
  );
}
