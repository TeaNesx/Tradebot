"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/dashboard/StatCard";
import { 
  DollarSign, 
  Activity, 
  TrendingUp,
  LineChart
} from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

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
          icon={<DollarSign />}
          description="+€125.50 heute"
        />
        <StatCard
          title="Offene Positionen"
          value="3"
          icon={<Activity />}
          description="2 Kauf, 1 Verkauf"
        />
        <StatCard
          title="Erfolgsrate"
          value="68%"
          icon={<TrendingUp />}
          description="+2% gegenüber letzter Woche"
        />
        <StatCard
          title="Gesamtgewinn"
          value="€345.25"
          icon={<LineChart />}
          description="+12% gegenüber letztem Monat"
        />
      </div>

      {/* Transaktionen */}
      <Card>
        <CardHeader>
          <CardTitle>Letzte Transaktionen</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Symbol</TableHead>
                <TableHead>Typ</TableHead>
                <TableHead>Menge</TableHead>
                <TableHead>Preis</TableHead>
                <TableHead>Zeitpunkt</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Gewinn/Verlust</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">{transaction.symbol}</TableCell>
                  <TableCell>
                    <Badge
                      variant={transaction.type === "buy" ? "default" : "destructive"}
                    >
                      {transaction.type === "buy" ? "Kauf" : "Verkauf"}
                    </Badge>
                  </TableCell>
                  <TableCell>{transaction.amount}</TableCell>
                  <TableCell>{transaction.price}</TableCell>
                  <TableCell>{transaction.timestamp}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        transaction.status === "completed"
                          ? "default"
                          : transaction.status === "pending"
                          ? "outline"
                          : "destructive"
                      }
                    >
                      {transaction.status === "completed"
                        ? "Abgeschlossen"
                        : transaction.status === "pending"
                        ? "Ausstehend"
                        : "Fehlgeschlagen"}
                    </Badge>
                  </TableCell>
                  <TableCell className={transaction.profit.startsWith("+") ? "text-green-600" : transaction.profit === "€0.00" ? "" : "text-red-600"}>
                    {transaction.profit}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Strategien */}
      <Card>
        <CardHeader>
          <CardTitle>Aktive Strategien</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            Sie haben derzeit keine aktiven Handelsstrategien. Erstellen Sie eine neue Strategie, um automatisiert zu handeln.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
