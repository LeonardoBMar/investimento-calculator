// components/simulator/AdvancedOptions.tsx
import { useState } from "react";

export default function AdvancedOptions() {
  const [adjustForInflation, setAdjustForInflation] = useState(false);
  const [managementFee, setManagementFee] = useState(0);
  const [reinvestProfits, setReinvestProfits] = useState(false);

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Opções Avançadas
      </h2>
      <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
        {/* Ajustar para Inflação */}
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={adjustForInflation}
            onChange={(e) => setAdjustForInflation(e.target.checked)}
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
          <label className="text-gray-700">Ajustar para inflação</label>
        </div>

        {/* Taxa de Administração */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Taxa de Administração (% ao ano)
          </label>
          <input
            type="number"
            value={managementFee}
            onChange={(e) => setManagementFee(Number(e.target.value))}
            className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Reinvestir Lucros */}
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={reinvestProfits}
            onChange={(e) => setReinvestProfits(e.target.checked)}
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
          <label className="text-gray-700">Reinvestir lucros</label>
        </div>
      </div>
    </div>
  );
}
