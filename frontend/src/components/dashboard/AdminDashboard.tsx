"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/dashboard/StatCard";
import { ActivityTable } from "@/components/dashboard/ActivityTable";
import { UsersTable } from "@/components/dashboard/UsersTable";
import { 
  Users, 
  DollarSign, 
  Activity, 
  TrendingUp 
} from "lucide-react";

// Dummy-Daten für das Dashboard
const dummyActivities = [
  {
    id: 1,
    user: "Max Mustermann",
    action: "Login",
    timestamp: "2025-08-13 09:45:23",
    status: "success" as const,
  },
  {
    id: 2,
    user: "Anna Schmidt",
    action: "Strategie erstellt",
    timestamp: "2025-08-13 09:30:15",
    status: "success" as const,
  },
  {
    id: 3,
    user: "Thomas Weber",
    action: "Transaktion durchgeführt",
    timestamp: "2025-08-13 09:15:42",
    status: "pending" as const,
  },
  {
    id: 4,
    user: "Lisa Müller",
    action: "Passwort zurückgesetzt",
    timestamp: "2025-08-13 08:55:10",
    status: "error" as const,
  },
  {
    id: 5,
    user: "Michael Becker",
    action: "Profil aktualisiert",
    timestamp: "2025-08-13 08:40:37",
    status: "success" as const,
  },
];

const dummyUsers = [
  {
    id: 1,
    name: "Max Mustermann",
    email: "max.mustermann@example.com",
    role: "Admin",
    status: "active" as const,
    registeredDate: "2025-01-15",
  },
  {
    id: 2,
    name: "Anna Schmidt",
    email: "anna.schmidt@example.com",
    role: "User",
    status: "active" as const,
    registeredDate: "2025-02-20",
  },
  {
    id: 3,
    name: "Thomas Weber",
    email: "thomas.weber@example.com",
    role: "User",
    status: "active" as const,
    registeredDate: "2025-03-10",
  },
  {
    id: 4,
    name: "Lisa Müller",
    email: "lisa.mueller@example.com",
    role: "User",
    status: "inactive" as const,
    registeredDate: "2025-04-05",
  },
  {
    id: 5,
    name: "Michael Becker",
    email: "michael.becker@example.com",
    role: "User",
    status: "active" as const,
    registeredDate: "2025-05-12",
  },
];

export default function AdminDashboard() {
  const [users, setUsers] = useState(dummyUsers);
  const [activities, setActivities] = useState(dummyActivities);

  // Funktionen zum Aktivieren/Deaktivieren von Benutzern
  const handleActivateUser = (id: number) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, status: "active" as const } : user
      )
    );
  };

  const handleDeactivateUser = (id: number) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, status: "inactive" as const } : user
      )
    );
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      
      {/* Statistik-Karten */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Gesamtbenutzer"
          value={users.length}
          icon={<Users />}
          description="+2% gegenüber letztem Monat"
        />
        <StatCard
          title="Aktive Benutzer"
          value={users.filter(u => u.status === "active").length}
          icon={<Users />}
          description="+5% gegenüber letztem Monat"
        />
        <StatCard
          title="Transaktionsvolumen"
          value="€12,543"
          icon={<DollarSign />}
          description="+12% gegenüber letztem Monat"
        />
        <StatCard
          title="Erfolgsrate"
          value="68%"
          icon={<TrendingUp />}
          description="+2% gegenüber letztem Monat"
        />
      </div>

      {/* Aktivitäten */}
      <Card>
        <CardHeader>
          <CardTitle>Letzte Aktivitäten</CardTitle>
        </CardHeader>
        <CardContent>
          <ActivityTable activities={activities} />
        </CardContent>
      </Card>

      {/* Benutzerverwaltung */}
      <Card>
        <CardHeader>
          <CardTitle>Benutzerverwaltung</CardTitle>
        </CardHeader>
        <CardContent>
          <UsersTable 
            users={users} 
            onActivate={handleActivateUser} 
            onDeactivate={handleDeactivateUser} 
          />
        </CardContent>
      </Card>
    </div>
  );
}
