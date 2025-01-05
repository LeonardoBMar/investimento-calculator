"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  TooltipItem,
} from "chart.js";

// Registering necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function InvestmentChart() {
  // Dados da simulação do investimento
  const data: ChartData<"line"> = {
    labels: [
      "Mês 1",
      "Mês 2",
      "Mês 3",
      "Mês 4",
      "Mês 5",
      "Mês 6",
      "Mês 7",
      "Mês 8",
      "Mês 9",
      "Mês 10",
    ], // Representação de meses
    datasets: [
      {
        label: "Valor Investido",
        data: [1000, 2110, 4020, 5030, 7040, 8051, 10061, 13702, 15782, 17903],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Simulação de Crescimento do Investimento",
        font: {
          size: 18,
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: TooltipItem<"line">) => {
            const value = tooltipItem.raw as number; // Garantindo que o valor seja tratado como um número
            return `R$ ${value.toFixed(2)}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Tempo (Meses)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Valor (R$)",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white rounded-lg p-10 shadow-lg mt-12 max-w-[700px] max-h-[400px] w-full h-auto mx-auto my-10">
      <h3 className="text-xl font-semibold text-center mb-6">
        Simulação de Investimento
      </h3>
      <Line data={data} options={options} />
    </div>
  );
}
