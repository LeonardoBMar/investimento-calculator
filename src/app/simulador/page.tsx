"use client";

import { useState } from "react";
import InputForm from "@/app/components/simulator/InputForm";
import ResultsDisplay from "@/app/components/simulator/ResultsDisplay";
import AdvancedOptions from "@/app/components/simulator/AdvancedOptions";
import ComplementaryInfo from "@/app/components/simulator/ComplementaryInfo";

// Define the type for the 'simulationData' object
interface SimulationData {
  initialAmount: number;
  monthlyContribution: number;
  annualReturnRate: number;
  investmentPeriod: number;
}

export default function SimulatorPage() {
  const [simulationData, setSimulationData] = useState<SimulationData | null>(
    null
  );

  const handleSimulation = (data: SimulationData) => {
    setSimulationData(data);
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Simulador de Investimentos
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Faça simulações e descubra o melhor investimento para você.
      </p>

      {/* Entrada de Dados */}
      <InputForm onSimulate={handleSimulation} />

      {/* Exibição de Resultados */}
      {simulationData && <ResultsDisplay data={simulationData} />}

      {/* Opções Avançadas */}
      <AdvancedOptions />

      {/* Informações Complementares */}
      <ComplementaryInfo />
    </div>
  );
}
