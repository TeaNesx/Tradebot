"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Activity {
  id: number;
  user: string;
  action: string;
  timestamp: string;
  status: "success" | "pending" | "error";
}

interface ActivityTableProps {
  activities: Activity[];
}

export function ActivityTable({ activities }: ActivityTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Benutzer</TableHead>
          <TableHead>Aktion</TableHead>
          <TableHead>Zeitpunkt</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {activities.map((activity) => (
          <TableRow key={activity.id}>
            <TableCell className="font-medium">{activity.user}</TableCell>
            <TableCell>{activity.action}</TableCell>
            <TableCell>{activity.timestamp}</TableCell>
            <TableCell>
              <Badge
                variant={
                  activity.status === "success"
                    ? "default"
                    : activity.status === "pending"
                    ? "outline"
                    : "destructive"
                }
              >
                {activity.status === "success"
                  ? "Erfolgreich"
                  : activity.status === "pending"
                  ? "Ausstehend"
                  : "Fehler"}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
