"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserCheck, UserX } from "lucide-react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
  registeredDate: string;
}

interface UsersTableProps {
  users: User[];
  onActivate?: (id: number) => void;
  onDeactivate?: (id: number) => void;
}

export function UsersTable({ users, onActivate, onDeactivate }: UsersTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>E-Mail</TableHead>
          <TableHead>Rolle</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Registriert am</TableHead>
          <TableHead>Aktionen</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>
              <Badge
                variant={user.status === "active" ? "default" : "outline"}
              >
                {user.status === "active" ? "Aktiv" : "Inaktiv"}
              </Badge>
            </TableCell>
            <TableCell>{user.registeredDate}</TableCell>
            <TableCell>
              <div className="flex space-x-2">
                {user.status === "active" ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onDeactivate && onDeactivate(user.id)}
                  >
                    <UserX className="h-4 w-4 mr-1" />
                    Deaktivieren
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onActivate && onActivate(user.id)}
                  >
                    <UserCheck className="h-4 w-4 mr-1" />
                    Aktivieren
                  </Button>
                )}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
