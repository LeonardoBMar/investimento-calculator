import { Chart } from "react-chartjs-2";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart as ChartJS } from "chart.js";
import ColumnChart from "./ColumnChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Define the type for the 'data' prop
interface InvestmentData {
  initialAmount: number;
  monthlyContribution: number;
  annualReturnRate: number;
  investmentPeriod: number;
}

export default function ResultsDisplay({ data }: { data: InvestmentData }) {
  const {
    initialAmount,
    monthlyContribution,
    annualReturnRate,
    investmentPeriod,
  } = data;

  // Cálculo simplificado
  const totalMonths = investmentPeriod * 12;
  const monthlyRate = annualReturnRate / 100 / 12;
  let balance = initialAmount;
  let totalContributions = initialAmount;
  const chartData = [];

  for (let i = 0; i <= totalMonths; i++) {
    chartData.push(balance.toFixed(2));
    if (i > 0) totalContributions += monthlyContribution; // Soma as contribuições mensais
    balance += monthlyContribution;
    balance *= 1 + monthlyRate;
  }

  // Calcula o rendimento como o saldo final menos as contribuições totais
  const rendimento = balance - totalContributions;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Resultados</h2>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <p>
          Valor Futuro:{" "}
          <span className="text-green-600 font-bold">
            R${" "}
            {balance.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </p>
        <p>
          Valor do Rendimento:{" "}
          <span className="text-blue-600 font-bold">
            R${" "}
            {rendimento.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </p>

        {/* Gráfico de Colunas */}
        <ColumnChart data={data} />

        {/* Gráfico de Linha */}
        <div className="mt-6">
          <Chart
            type="line"
            data={{
              labels: Array.from({ length: totalMonths + 1 }, (_, i) => i),
              datasets: [
                {
                  label: "Crescimento do Investimento",
                  data: chartData,
                  borderColor: "rgba(75, 192, 192, 1)",
                  backgroundColor: "rgba(75, 192, 192, 0.2)",
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
}
