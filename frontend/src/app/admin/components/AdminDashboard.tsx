"use client";

import { useState } from "react";
import { 
  Users, 
  Activity, 
  TrendingUp,
  Settings
} from "lucide-react";

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

// Typdefinitionen für die Benutzer
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
  lastLogin: string;
}

// Dummy-Daten für Benutzer
const dummyUsers: User[] = [
  {
    id: 1,
    name: "Max Mustermann",
    email: "max@example.com",
    role: "Admin",
    status: "active",
    lastLogin: "2025-08-13 10:30:45"
  },
  {
    id: 2,
    name: "Anna Schmidt",
    email: "anna@example.com",
    role: "User",
    status: "active",
    lastLogin: "2025-08-13 09:15:22"
  },
  {
    id: 3,
    name: "Thomas Müller",
    email: "thomas@example.com",
    role: "User",
    status: "inactive",
    lastLogin: "2025-08-10 14:22:10"
  },
  {
    id: 4,
    name: "Lisa Weber",
    email: "lisa@example.com",
    role: "User",
    status: "active",
    lastLogin: "2025-08-12 16:45:33"
  },
  {
    id: 5,
    name: "Michael Becker",
    email: "michael@example.com",
    role: "User",
    status: "inactive",
    lastLogin: "2025-08-08 11:20:15"
  }
];

// Typdefinitionen für die Aktivitäten
interface Activity {
  id: number;
  user: string;
  action: string;
  timestamp: string;
  status: "success" | "pending" | "failed";
}

// Dummy-Daten für Aktivitäten
const dummyActivities: Activity[] = [
  {
    id: 1,
    user: "Max Mustermann",
    action: "Benutzer hinzugefügt",
    timestamp: "2025-08-13 10:45:12",
    status: "success"
  },
  {
    id: 2,
    user: "Anna Schmidt",
    action: "Login",
    timestamp: "2025-08-13 09:15:22",
    status: "success"
  },
  {
    id: 3,
    user: "System",
    action: "Backup erstellt",
    timestamp: "2025-08-13 08:00:00",
    status: "success"
  },
  {
    id: 4,
    user: "Thomas Müller",
    action: "Passwort zurücksetzen",
    timestamp: "2025-08-12 16:30:45",
    status: "pending"
  },
  {
    id: 5,
    user: "System",
    action: "Update fehlgeschlagen",
    timestamp: "2025-08-12 03:15:10",
    status: "failed"
  }
];

export default function AdminDashboard() {
  const [users, setUsers] = useState<User[]>(dummyUsers);
  const [activities, setActivities] = useState<Activity[]>(dummyActivities);

  // Funktion zum Aktivieren/Deaktivieren eines Benutzers
  const toggleUserStatus = (userId: number) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, status: user.status === "active" ? "inactive" : "active" } 
        : user
    ));
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      
      {/* Statistik-Karten */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Gesamtbenutzer"
          value={users.length.toString()}
          icon={<Users className="h-5 w-5" />}
          description={`${users.filter(u => u.status === "active").length} aktiv`}
        />
        <StatCard
          title="Aktivitäten heute"
          value="12"
          icon={<Activity className="h-5 w-5" />}
          description="+3 seit gestern"
        />
        <StatCard
          title="Systemauslastung"
          value="42%"
          icon={<TrendingUp className="h-5 w-5" />}
          description="Normal"
        />
        <StatCard
          title="Offene Tickets"
          value="5"
          icon={<Settings className="h-5 w-5" />}
          description="2 dringend"
        />
      </div>

      {/* Benutzer-Tabelle */}
      <div className="rounded-lg border bg-white p-4 shadow-sm">
        <h2 className="mb-4 text-xl font-bold">Benutzer</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-left">Name</th>
                <th className="py-2 text-left">E-Mail</th>
                <th className="py-2 text-left">Rolle</th>
                <th className="py-2 text-left">Status</th>
                <th className="py-2 text-left">Letzter Login</th>
                <th className="py-2 text-left">Aktionen</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="py-2 font-medium">{user.name}</td>
                  <td className="py-2">{user.email}</td>
                  <td className="py-2">{user.role}</td>
                  <td className="py-2">
                    <span className={`rounded-full px-2 py-1 text-xs font-medium ${
                      user.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}>
                      {user.status === "active" ? "Aktiv" : "Inaktiv"}
                    </span>
                  </td>
                  <td className="py-2">{user.lastLogin}</td>
                  <td className="py-2">
                    <button
                      onClick={() => toggleUserStatus(user.id)}
                      className={`rounded px-3 py-1 text-xs font-medium text-white ${
                        user.status === "active" ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
                      }`}
                    >
                      {user.status === "active" ? "Deaktivieren" : "Aktivieren"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Aktivitäten-Tabelle */}
      <div className="rounded-lg border bg-white p-4 shadow-sm">
        <h2 className="mb-4 text-xl font-bold">Letzte Aktivitäten</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-left">Benutzer</th>
                <th className="py-2 text-left">Aktion</th>
                <th className="py-2 text-left">Zeitpunkt</th>
                <th className="py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity) => (
                <tr key={activity.id} className="border-b">
                  <td className="py-2 font-medium">{activity.user}</td>
                  <td className="py-2">{activity.action}</td>
                  <td className="py-2">{activity.timestamp}</td>
                  <td className="py-2">
                    <span className={`rounded-full px-2 py-1 text-xs font-medium ${
                      activity.status === "success" ? "bg-green-100 text-green-800" : 
                      activity.status === "pending" ? "bg-yellow-100 text-yellow-800" : 
                      "bg-red-100 text-red-800"
                    }`}>
                      {activity.status === "success" ? "Erfolgreich" : 
                       activity.status === "pending" ? "Ausstehend" : 
                       "Fehlgeschlagen"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
