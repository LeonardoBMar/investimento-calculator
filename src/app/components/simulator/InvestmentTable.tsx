interface InvestmentTableProps {
  data: { month: number; balance: string }[];
}

const InvestmentTable = ({ data }: InvestmentTableProps) => (
  <div className="mt-8">
    <h3 className="text-xl font-bold text-gray-800 mb-4">
      Tabela de Crescimento Mensal
    </h3>
    <table className="min-w-full table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
            Mês
          </th>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
            Valor Acumulado (R$)
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.month}>
            <td className="px-4 py-2 text-sm text-gray-800">{item.month}</td>
            <td className="px-4 py-2 text-sm text-gray-800">{item.balance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default InvestmentTable;
