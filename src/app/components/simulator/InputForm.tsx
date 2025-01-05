import { useState } from "react";

export default function InputForm({
  onSimulate,
}: {
  onSimulate: (data: {
    initialAmount: number;
    monthlyContribution: number;
    annualReturnRate: number;
    investmentPeriod: number;
    investmentType: string;
    timeUnit: string; // Adicionado para indicar se é "anos" ou "meses"
  }) => void;
}) {
  const [initialAmount, setInitialAmount] = useState(1000);
  const [monthlyContribution, setMonthlyContribution] = useState(100);
  const [annualReturnRate, setAnnualReturnRate] = useState(5);
  const [investmentPeriod, setInvestmentPeriod] = useState(5);
  const [timeUnit, setTimeUnit] = useState("anos");
  const [investmentType, setInvestmentType] = useState("renda fixa");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const periodInYears =
      timeUnit === "meses" ? investmentPeriod / 12 : investmentPeriod;
    const data = {
      initialAmount,
      monthlyContribution,
      annualReturnRate,
      investmentPeriod: periodInYears,
      investmentType,
      timeUnit,
    };
    onSimulate(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-8 space-y-6"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Montante Inicial (R$)
        </label>
        <input
          type="number"
          value={initialAmount}
          onChange={(e) => setInitialAmount(Number(e.target.value))}
          className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Contribuições Mensais (R$)
        </label>
        <input
          type="number"
          value={monthlyContribution}
          onChange={(e) => setMonthlyContribution(Number(e.target.value))}
          className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Taxa de Retorno Anual (%)
        </label>
        <input
          type="number"
          value={annualReturnRate}
          onChange={(e) => setAnnualReturnRate(Number(e.target.value))}
          className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Período
        </label>
        <div className="flex space-x-2">
          <input
            type="number"
            value={investmentPeriod}
            onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
            className="mt-1 block w-2/3 px-4 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
          <select
            value={timeUnit}
            onChange={(e) => setTimeUnit(e.target.value)}
            className="mt-1 block w-1/3 px-4 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="anos">Anos</option>
            <option value="meses">Meses</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Tipo de Investimento
        </label>
        <select
          value={investmentType}
          onChange={(e) => setInvestmentType(e.target.value)}
          className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="renda fixa">Renda Fixa</option>
          <option value="ações">Ações</option>
          <option value="fundos imobiliários">Fundos Imobiliários</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700"
      >
        Simular
      </button>
    </form>
  );
}
