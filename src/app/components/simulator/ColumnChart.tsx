import { Chart } from "react-chartjs-2";
import {
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart as ChartJS } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface InvestmentData {
  initialAmount: number;
  monthlyContribution: number;
  annualReturnRate: number;
  investmentPeriod: number;
}

export default function ColumnChart({ data }: { data: InvestmentData }) {
  const {
    initialAmount,
    monthlyContribution,
    annualReturnRate,
    investmentPeriod,
  } = data;

  const totalMonths = investmentPeriod * 12;
  const monthlyRate = annualReturnRate / 100 / 12;
  let balance = initialAmount;
  const balanceData = [];
  const monthlyReturns = [];

  for (let i = 0; i <= totalMonths; i++) {
    balanceData.push(balance.toFixed(2));
    const monthReturn = balance * monthlyRate;
    monthlyReturns.push(monthReturn.toFixed(2));
    balance += monthlyContribution + monthReturn;
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Evolução Mensal</h2>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        {/* Gráfico de Colunas */}
        <div className="mt-6">
          <Chart
            type="bar"
            data={{
              labels: Array.from(
                { length: totalMonths + 1 },
                (_, i) => `Mês ${i + 1}`
              ),
              datasets: [
                {
                  label: "Valor Acumulado (R$)",
                  data: balanceData.map(Number),
                  backgroundColor: "rgba(75, 192, 192, 0.5)",
                  borderColor: "rgba(75, 192, 192, 1)",
                  borderWidth: 1,
                },
                {
                  label: "Rendimento Mensal (R$)",
                  data: monthlyReturns.map(Number),
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                  borderColor: "rgba(255, 99, 132, 1)",
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: "Evolução do Investimento",
                },
                tooltip: {
                  mode: "index",
                  intersect: false,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
