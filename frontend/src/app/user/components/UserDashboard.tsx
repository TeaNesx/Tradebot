"use client";

import { useState } from "react";
import { 
  DollarSign, 
  Activity, 
  TrendingUp,
  LineChart
} from "lucide-react";

// Dummy-Daten für das Dashboard
const dummyTransactions = [
  {
    id: 1,
    symbol: "EURUSD",
    type: "buy",
    amount: "1.0",
    price: "1.0876",
    timestamp: "2025-08-13 09:45:23",
    status: "completed",
    profit: "+€12.50"
  },
  {
    id: 2,
    symbol: "GBPUSD",
    type: "sell",
    amount: "0.5",
    price: "1.2654",
    timestamp: "2025-08-13 09:30:15",
    status: "completed",
    profit: "+€8.75"
  },
  {
    id: 3,
    symbol: "XAUUSD",
    type: "buy",
    amount: "0.1",
    price: "1945.20",
    timestamp: "2025-08-13 09:15:42",
    status: "pending",
    profit: "€0.00"
  },
  {
    id: 4,
    symbol: "USDJPY",
    type: "sell",
    amount: "1.0",
    price: "145.67",
    timestamp: "2025-08-13 08:55:10",
    status: "failed",
    profit: "€0.00"
  },
  {
    id: 5,
    symbol: "BTCUSD",
    type: "buy",
    amount: "0.01",
    price: "45678.90",
    timestamp: "2025-08-13 08:40:37",
    status: "completed",
    profit: "-€5.25"
  },
];

// Typdefinitionen für die StatCard-Komponente
interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}

// Einfache StatCard-Komponente
function StatCard({ title, value, description, icon }: StatCardProps) {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-blue-100 p-2 text-blue-600">
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function UserDashboard() {
  const [transactions, setTransactions] = useState(dummyTransactions);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-bold">Benutzer Dashboard</h1>
      
      {/* Statistik-Karten */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Kontostand"
          value="€2,543.78"
          icon={<DollarSign className="h-5 w-5" />}
          description="+€125.50 heute"
        />
        <StatCard
          title="Offene Positionen"
          value="3"
          icon={<Activity className="h-5 w-5" />}
          description="2 Kauf, 1 Verkauf"
        />
        <StatCard
          title="Erfolgsrate"
          value="68%"
          icon={<TrendingUp className="h-5 w-5" />}
          description="+2% gegenüber letzter Woche"
        />
        <StatCard
          title="Gesamtgewinn"
          value="€345.25"
          icon={<LineChart className="h-5 w-5" />}
          description="+12% gegenüber letztem Monat"
        />
      </div>

      {/* Transaktionen */}
      <div className="rounded-lg border bg-white p-4 shadow-sm">
        <h2 className="mb-4 text-xl font-bold">Letzte Transaktionen</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-left">Symbol</th>
                <th className="py-2 text-left">Typ</th>
                <th className="py-2 text-left">Menge</th>
                <th className="py-2 text-left">Preis</th>
                <th className="py-2 text-left">Zeitpunkt</th>
                <th className="py-2 text-left">Status</th>
                <th className="py-2 text-left">Gewinn/Verlust</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b">
                  <td className="py-2 font-medium">{transaction.symbol}</td>
                  <td className="py-2">
                    <span className={`rounded-full px-2 py-1 text-xs font-medium ${transaction.type === "buy" ? "bg-blue-100 text-blue-800" : "bg-red-100 text-red-800"}`}>
                      {transaction.type === "buy" ? "Kauf" : "Verkauf"}
                    </span>
                  </td>
                  <td className="py-2">{transaction.amount}</td>
                  <td className="py-2">{transaction.price}</td>
                  <td className="py-2">{transaction.timestamp}</td>
                  <td className="py-2">
                    <span className={`rounded-full px-2 py-1 text-xs font-medium ${
                      transaction.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : transaction.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}>
                      {transaction.status === "completed"
                        ? "Abgeschlossen"
                        : transaction.status === "pending"
                        ? "Ausstehend"
                        : "Fehlgeschlagen"}
                    </span>
                  </td>
                  <td className={`py-2 ${transaction.profit.startsWith("+") ? "text-green-600" : transaction.profit === "€0.00" ? "" : "text-red-600"}`}>
                    {transaction.profit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Strategien */}
      <div className="rounded-lg border bg-white p-4 shadow-sm">
        <h2 className="mb-4 text-xl font-bold">Aktive Strategien</h2>
        <p className="text-sm text-gray-500">
          Sie haben derzeit keine aktiven Handelsstrategien. Erstellen Sie eine neue Strategie, um automatisiert zu handeln.
        </p>
      </div>
    </div>
  );
}
