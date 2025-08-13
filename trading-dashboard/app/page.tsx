"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Activity,
  Settings,
  MessageSquare,
  Trash2,
  Filter,
  X,
  History,
  AlertTriangle,
  Download,
  RefreshCw,
  TrendingUp,
  Users,
  DollarSign,
  Plus,
  Edit,
  Pause,
  Play,
  Eye,
  UserX,
  UserCheck,
  Save,
  RotateCcw,
} from "lucide-react"

const liveSignals = [
  {
    id: 1,
    symbol: "XAUUSD",
    type: "BUY",
    entry: 2045.5,
    tp: 2055.0,
    sl: 2040.0,
    channel: "Gold Signals Pro",
    timestamp: "16:45:23",
    status: "active",
    usersTrading: 24,
  },
  {
    id: 2,
    symbol: "EURUSD",
    type: "SELL",
    entry: 1.0875,
    tp: 1.085,
    sl: 1.0895,
    channel: "Forex Elite",
    timestamp: "16:42:15",
    status: "active",
    usersTrading: 18,
  },
  {
    id: 3,
    symbol: "BTCUSD",
    type: "BUY",
    entry: 43250.0,
    tp: 44500.0,
    sl: 42000.0,
    channel: "BTC Master",
    timestamp: "16:38:07",
    status: "tp_hit",
    usersTrading: 12,
  },
]

const channels = [
  {
    id: 1,
    name: "Gold Signals Pro",
    username: "@goldsignalspro",
    status: "active",
    subscribers: 1250,
    signalsToday: 8,
    successRate: 78.5,
    tags: ["Gold", "Metals", "Premium"],
    lastSignal: "16:45:23",
  },
  {
    id: 2,
    name: "Forex Elite",
    username: "@forexelite",
    status: "active",
    subscribers: 890,
    signalsToday: 12,
    successRate: 82.1,
    tags: ["Forex", "Major Pairs"],
    lastSignal: "16:42:15",
  },
  {
    id: 3,
    name: "BTC Master",
    username: "@btcmaster",
    status: "paused",
    subscribers: 2100,
    signalsToday: 5,
    successRate: 75.3,
    tags: ["Crypto", "Bitcoin"],
    lastSignal: "15:30:45",
  },
  {
    id: 4,
    name: "Oil Trading Hub",
    username: "@oiltradehub",
    status: "active",
    subscribers: 650,
    signalsToday: 6,
    successRate: 71.8,
    tags: ["Oil", "Commodities"],
    lastSignal: "16:35:12",
  },
]

const trades = [
  {
    id: 1,
    symbol: "XAUUSD",
    type: "BUY",
    entry: 2045.5,
    current: 2048.2,
    tp: 2055.0,
    sl: 2040.0,
    size: 0.1,
    pnl: 27.0,
    status: "open",
    user: "john.doe@email.com",
    channel: "Gold Signals Pro",
    openTime: "2024-01-15 16:45:23",
  },
  {
    id: 2,
    symbol: "EURUSD",
    type: "SELL",
    entry: 1.0875,
    current: 1.0865,
    tp: 1.085,
    sl: 1.0895,
    size: 0.5,
    pnl: 50.0,
    status: "open",
    user: "jane.smith@email.com",
    channel: "Forex Elite",
    openTime: "2024-01-15 16:42:15",
  },
  {
    id: 3,
    symbol: "BTCUSD",
    type: "BUY",
    entry: 43250.0,
    current: 44500.0,
    tp: 44500.0,
    sl: 42000.0,
    size: 0.01,
    pnl: 125.0,
    status: "closed_tp",
    user: "mike.wilson@email.com",
    channel: "BTC Master",
    openTime: "2024-01-15 15:30:45",
    closeTime: "2024-01-15 16:38:07",
  },
]

const users = [
  {
    id: 1,
    email: "john.doe@email.com",
    name: "John Doe",
    status: "active",
    tradePercentage: 2.5,
    balance: 10000,
    totalTrades: 45,
    winRate: 78.5,
    totalPnL: 1250.5,
    lastActive: "2024-01-15 16:45:23",
    joinDate: "2023-12-01",
  },
  {
    id: 2,
    email: "jane.smith@email.com",
    name: "Jane Smith",
    status: "active",
    tradePercentage: 3.0,
    balance: 15000,
    totalTrades: 62,
    winRate: 82.1,
    totalPnL: 2100.75,
    lastActive: "2024-01-15 16:42:15",
    joinDate: "2023-11-15",
  },
  {
    id: 3,
    email: "mike.wilson@email.com",
    name: "Mike Wilson",
    status: "suspended",
    tradePercentage: 1.5,
    balance: 5000,
    totalTrades: 28,
    winRate: 65.2,
    totalPnL: -450.25,
    lastActive: "2024-01-14 14:30:15",
    joinDate: "2024-01-01",
  },
]

// ... existing code for logs and settings ...

const telegramLogs = [
  {
    id: 1,
    timestamp: "2024-01-15 16:45:23",
    channel: "Gold Signals Pro",
    event: "Signal Received",
    message: "XAUUSD BUY @ 2045.50 TP: 2055.00 SL: 2040.00",
    status: "success",
    usersNotified: 24,
  },
  {
    id: 2,
    timestamp: "2024-01-15 16:42:15",
    channel: "BTC Master",
    event: "Signal Processed",
    message: "BTCUSD SELL @ 43250.00 distributed to 18 users",
    status: "success",
    usersNotified: 18,
  },
  {
    id: 3,
    timestamp: "2024-01-15 16:38:07",
    channel: "Forex Elite",
    event: "Connection Error",
    message: "Failed to connect to channel - retrying in 30s",
    status: "error",
    usersNotified: 0,
  },
  {
    id: 4,
    timestamp: "2024-01-15 16:35:12",
    channel: "Oil Trading Hub",
    event: "Signal Received",
    message: "USOIL BUY @ 72.45 TP: 74.00 SL: 71.00",
    status: "success",
    usersNotified: 12,
  },
  {
    id: 5,
    timestamp: "2024-01-15 16:30:45",
    channel: "System",
    event: "Listener Started",
    message: "Telegram listener service started successfully",
    status: "info",
    usersNotified: 0,
  },
]

const errorLogs = [
  {
    id: 1,
    timestamp: "2024-01-15 16:38:07",
    level: "error",
    component: "Telegram Listener",
    message: "Failed to connect to channel @forexelite",
    details: "Connection timeout after 30 seconds",
    resolved: false,
  },
  {
    id: 2,
    timestamp: "2024-01-15 15:22:18",
    level: "warning",
    component: "Broker API",
    message: "Rate limit approaching for trading API",
    details: "95% of hourly rate limit used",
    resolved: true,
  },
  {
    id: 3,
    timestamp: "2024-01-15 14:15:33",
    level: "error",
    component: "Trade Execution",
    message: "Failed to execute trade for user john.doe@email.com",
    details: "Insufficient account balance",
    resolved: true,
  },
  {
    id: 4,
    timestamp: "2024-01-15 13:45:22",
    level: "warning",
    component: "Database",
    message: "High connection pool usage detected",
    details: "85% of database connections in use",
    resolved: true,
  },
  {
    id: 5,
    timestamp: "2024-01-15 12:30:15",
    level: "info",
    component: "System",
    message: "Daily backup completed successfully",
    details: "Backup size: 2.3GB, Duration: 45 minutes",
    resolved: true,
  },
]

const auditLogs = [
  {
    id: 1,
    timestamp: "2024-01-15 16:20:45",
    user: "admin@tradingsystem.com",
    action: "Updated User Settings",
    target: "john.doe@email.com",
    details: "Changed trade percentage from 2.0% to 2.5%",
    ipAddress: "192.168.1.100",
  },
  {
    id: 2,
    timestamp: "2024-01-15 15:45:12",
    user: "admin@tradingsystem.com",
    action: "Added Channel",
    target: "Oil Trading Hub",
    details: "Added new Telegram channel @oiltradehub",
    ipAddress: "192.168.1.100",
  },
  {
    id: 3,
    timestamp: "2024-01-15 14:30:33",
    user: "admin@tradingsystem.com",
    action: "Suspended User",
    target: "mike.wilson@email.com",
    details: "User suspended due to excessive losses",
    ipAddress: "192.168.1.100",
  },
  {
    id: 4,
    timestamp: "2024-01-15 13:15:28",
    user: "admin@tradingsystem.com",
    action: "Modified Trade Settings",
    target: "System Settings",
    details: "Updated default TP from 1.8% to 2.0%",
    ipAddress: "192.168.1.100",
  },
  {
    id: 5,
    timestamp: "2024-01-15 12:00:15",
    user: "admin@tradingsystem.com",
    action: "System Login",
    target: "Dashboard",
    details: "Admin logged into system dashboard",
    ipAddress: "192.168.1.100",
  },
]

const currentSettings = {
  tradeParameters: {
    defaultTpPercent: 2.0,
    defaultSlPercent: 1.5,
    maxTradePercent: 10.0,
    riskLimit: 5000,
    autoTrade: true,
    requireConfirmation: false,
  },
  notifications: {
    emailAlerts: true,
    pushNotifications: true,
    signalAlerts: true,
    tradeAlerts: true,
    systemAlerts: true,
    adminEmail: "admin@tradingsystem.com",
  },
  system: {
    telegramBotToken: "1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    telegramSessionString: "1BVtsOKcAA...",
    brokerApiKey: "sk_live_abcdef123456",
    brokerApiSecret: "••••••••••••••••",
    webhookUrl: "https://api.tradingsystem.com/webhook",
    maxConcurrentTrades: 50,
    systemMaintenance: false,
  },
}

const systemStatus = {
  listener: "running",
  telegram: "connected",
  brokerApi: "active",
  database: "online",
}

export default function TradingDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isAddChannelOpen, setIsAddChannelOpen] = useState(false)
  const [newChannelName, setNewChannelName] = useState("")
  const [newChannelUsername, setNewChannelUsername] = useState("")
  const [newChannelTags, setNewChannelTags] = useState("")

  // State for settings management
  const [settings, setSettings] = useState(currentSettings)
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)

  // State for filtering
  const [tradeFilters, setTradeFilters] = useState({
    status: "all",
    channel: "all",
    user: "all",
    symbol: "",
  })

  const [userFilters, setUserFilters] = useState({
    status: "all",
    search: "",
  })

  // State for log filtering
  const [logFilters, setLogFilters] = useState({
    telegramLevel: "all",
    errorLevel: "all",
    auditUser: "all",
    dateFrom: "",
    dateTo: "",
  })

  // Function to handle settings changes
  const handleSettingChange = (section: string, key: string, value: any) => {
    setSettings((prev) => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [key]: value,
      },
    }))
    setHasUnsavedChanges(true)
  }

  // Function to save settings
  const handleSaveSettings = () => {
    console.log("Saving settings:", settings)
    setHasUnsavedChanges(false)
  }

  // Function to reset settings
  const handleResetSettings = () => {
    setSettings(currentSettings)
    setHasUnsavedChanges(false)
  }

  // Functions for log management
  const handleExportLogs = (logType: string) => {
    console.log(`Exporting ${logType} logs`)
  }

  const handleClearLogs = (logType: string) => {
    console.log(`Clearing ${logType} logs`)
  }

  const handleRefreshLogs = () => {
    console.log("Refreshing logs")
  }

  // Function to filter logs
  const filteredTelegramLogs = telegramLogs.filter((log) => {
    if (logFilters.telegramLevel !== "all" && log.status !== logFilters.telegramLevel) return false
    return true
  })

  const filteredErrorLogs = errorLogs.filter((log) => {
    if (logFilters.errorLevel !== "all" && log.level !== logFilters.errorLevel) return false
    return true
  })

  const filteredAuditLogs = auditLogs.filter((log) => {
    if (logFilters.auditUser !== "all" && log.user !== logFilters.auditUser) return false
    return true
  })

  const filteredTrades = trades.filter((trade) => {
    if (tradeFilters.status !== "all" && trade.status !== tradeFilters.status) return false
    if (tradeFilters.channel !== "all" && trade.channel !== tradeFilters.channel) return false
    if (tradeFilters.user !== "all" && trade.user !== tradeFilters.user) return false
    if (tradeFilters.symbol && !trade.symbol.toLowerCase().includes(tradeFilters.symbol.toLowerCase())) return false
    return true
  })

  const filteredUsers = users.filter((user) => {
    if (userFilters.status !== "all" && user.status !== userFilters.status) return false
    if (
      userFilters.search &&
      !user.name.toLowerCase().includes(userFilters.search.toLowerCase()) &&
      !user.email.toLowerCase().includes(userFilters.search.toLowerCase())
    )
      return false
    return true
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Trading Signal Dashboard</h1>
              <p className="text-muted-foreground">Telegram Signal Management System</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={systemStatus.listener === "running" ? "default" : "destructive"}>
                <Activity className="w-3 h-3 mr-1" />
                Listener {systemStatus.listener}
              </Badge>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Übersicht</TabsTrigger>
            <TabsTrigger value="channels">Channels</TabsTrigger>
            <TabsTrigger value="trades">Trades</TabsTrigger>
            <TabsTrigger value="users">Nutzer</TabsTrigger>
            <TabsTrigger value="settings">Einstellungen</TabsTrigger>
            <TabsTrigger value="logs">Logs</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Dashboard Übersicht</h2>
              <p className="text-muted-foreground">Live-Signale, Trade-Status und System-Statistiken</p>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Aktive Signale</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{liveSignals.filter((s) => s.status === "active").length}</div>
                  <p className="text-xs text-muted-foreground">
                    {liveSignals.reduce((sum, s) => sum + s.usersTrading, 0)} Nutzer handeln
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Aktive Channels</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{channels.filter((c) => c.status === "active").length}</div>
                  <p className="text-xs text-muted-foreground">von {channels.length} Channels</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Aktive Nutzer</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{users.filter((u) => u.status === "active").length}</div>
                  <p className="text-xs text-muted-foreground">
                    {users.filter((u) => u.status === "suspended").length} gesperrt
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Tages P&L</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-500">+$2,847.25</div>
                  <p className="text-xs text-muted-foreground">78.5% Erfolgsrate</p>
                </CardContent>
              </Card>
            </div>

            {/* Live Signals */}
            <Card>
              <CardHeader>
                <CardTitle>Live Signale</CardTitle>
                <CardDescription>Aktuelle Trading-Signale von überwachten Channels</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Symbol</TableHead>
                      <TableHead>Typ</TableHead>
                      <TableHead>Entry</TableHead>
                      <TableHead>TP</TableHead>
                      <TableHead>SL</TableHead>
                      <TableHead>Channel</TableHead>
                      <TableHead>Zeit</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Nutzer</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {liveSignals.map((signal) => (
                      <TableRow key={signal.id}>
                        <TableCell className="font-medium">{signal.symbol}</TableCell>
                        <TableCell>
                          <Badge variant={signal.type === "BUY" ? "default" : "secondary"}>{signal.type}</Badge>
                        </TableCell>
                        <TableCell>{signal.entry}</TableCell>
                        <TableCell className="text-green-500">{signal.tp}</TableCell>
                        <TableCell className="text-red-500">{signal.sl}</TableCell>
                        <TableCell>{signal.channel}</TableCell>
                        <TableCell className="font-mono text-sm">{signal.timestamp}</TableCell>
                        <TableCell>
                          <Badge variant={signal.status === "active" ? "default" : "secondary"}>
                            {signal.status === "active"
                              ? "Aktiv"
                              : signal.status === "tp_hit"
                                ? "TP erreicht"
                                : signal.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{signal.usersTrading}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card>
              <CardHeader>
                <CardTitle>System Status</CardTitle>
                <CardDescription>Status aller wichtigen System-Komponenten</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Telegram Listener</p>
                      <p className="text-xs text-muted-foreground">Signal Empfang</p>
                    </div>
                    <Badge variant={systemStatus.listener === "running" ? "default" : "destructive"}>
                      {systemStatus.listener === "running" ? "Läuft" : "Gestoppt"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Telegram API</p>
                      <p className="text-xs text-muted-foreground">Bot Verbindung</p>
                    </div>
                    <Badge variant={systemStatus.telegram === "connected" ? "default" : "destructive"}>
                      {systemStatus.telegram === "connected" ? "Verbunden" : "Getrennt"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Broker API</p>
                      <p className="text-xs text-muted-foreground">Trading Interface</p>
                    </div>
                    <Badge variant={systemStatus.brokerApi === "active" ? "default" : "destructive"}>
                      {systemStatus.brokerApi === "active" ? "Aktiv" : "Inaktiv"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Datenbank</p>
                      <p className="text-xs text-muted-foreground">Datenspeicher</p>
                    </div>
                    <Badge variant={systemStatus.database === "online" ? "default" : "destructive"}>
                      {systemStatus.database === "online" ? "Online" : "Offline"}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="channels" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Telegram Channels</h2>
                <p className="text-muted-foreground">Verwaltung der überwachten Signal-Channels</p>
              </div>
              <Dialog open={isAddChannelOpen} onOpenChange={setIsAddChannelOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Channel hinzufügen
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Neuen Channel hinzufügen</DialogTitle>
                    <DialogDescription>Fügen Sie einen neuen Telegram Channel zur Überwachung hinzu.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        value={newChannelName}
                        onChange={(e) => setNewChannelName(e.target.value)}
                        className="col-span-3"
                        placeholder="Channel Name"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Username
                      </Label>
                      <Input
                        id="username"
                        value={newChannelUsername}
                        onChange={(e) => setNewChannelUsername(e.target.value)}
                        className="col-span-3"
                        placeholder="@channelname"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="tags" className="text-right">
                        Tags
                      </Label>
                      <Input
                        id="tags"
                        value={newChannelTags}
                        onChange={(e) => setNewChannelTags(e.target.value)}
                        className="col-span-3"
                        placeholder="Forex, Gold, Premium"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" onClick={() => setIsAddChannelOpen(false)}>
                      Channel hinzufügen
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            {/* Channel Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Gesamt Channels</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{channels.length}</div>
                  <p className="text-xs text-muted-foreground">
                    {channels.filter((c) => c.status === "active").length} aktiv
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Signale heute</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{channels.reduce((sum, c) => sum + c.signalsToday, 0)}</div>
                  <p className="text-xs text-muted-foreground">
                    Ø {(channels.reduce((sum, c) => sum + c.signalsToday, 0) / channels.length).toFixed(1)} pro Channel
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Subscriber</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {channels.reduce((sum, c) => sum + c.subscribers, 0).toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">Gesamt Reichweite</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Ø Erfolgsrate</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {(channels.reduce((sum, c) => sum + c.successRate, 0) / channels.length).toFixed(1)}%
                  </div>
                  <p className="text-xs text-muted-foreground">Alle Channels</p>
                </CardContent>
              </Card>
            </div>

            {/* Channels Table */}
            <Card>
              <CardHeader>
                <CardTitle>Channel Übersicht</CardTitle>
                <CardDescription>Alle überwachten Telegram Channels mit Statistiken</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Channel</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Subscriber</TableHead>
                      <TableHead>Signale heute</TableHead>
                      <TableHead>Erfolgsrate</TableHead>
                      <TableHead>Tags</TableHead>
                      <TableHead>Letztes Signal</TableHead>
                      <TableHead>Aktionen</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {channels.map((channel) => (
                      <TableRow key={channel.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{channel.name}</div>
                            <div className="text-sm text-muted-foreground">{channel.username}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={channel.status === "active" ? "default" : "secondary"}>
                            {channel.status === "active" ? "Aktiv" : "Pausiert"}
                          </Badge>
                        </TableCell>
                        <TableCell>{channel.subscribers.toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{channel.signalsToday}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <span
                              className={
                                channel.successRate >= 75
                                  ? "text-green-500"
                                  : channel.successRate >= 60
                                    ? "text-yellow-500"
                                    : "text-red-500"
                              }
                            >
                              {channel.successRate}%
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            {channel.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell className="font-mono text-sm">{channel.lastSignal}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              {channel.status === "active" ? (
                                <Pause className="w-4 h-4" />
                              ) : (
                                <Play className="w-4 h-4" />
                              )}
                            </Button>
                            <Button variant="outline" size="sm">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trades" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Trade Management</h2>
                <p className="text-muted-foreground">Alle Trades mit Filterung und manueller Kontrolle</p>
              </div>
            </div>

            {/* Trade Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Offene Trades</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{trades.filter((t) => t.status === "open").length}</div>
                  <p className="text-xs text-muted-foreground">Aktiv gehandelt</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Tages P&L</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-500">
                    +${trades.reduce((sum, t) => sum + t.pnl, 0).toFixed(2)}
                  </div>
                  <p className="text-xs text-muted-foreground">Unrealisiert + Realisiert</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Erfolgsrate</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">78.5%</div>
                  <p className="text-xs text-muted-foreground">Gewinnende Trades</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Volumen</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$125,450</div>
                  <p className="text-xs text-muted-foreground">Heute gehandelt</p>
                </CardContent>
              </Card>
            </div>

            {/* Trade Filters */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Trade Filter
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="space-y-2">
                    <Label>Status</Label>
                    <Select
                      value={tradeFilters.status}
                      onValueChange={(value) => setTradeFilters({ ...tradeFilters, status: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Alle</SelectItem>
                        <SelectItem value="open">Offen</SelectItem>
                        <SelectItem value="closed_tp">TP erreicht</SelectItem>
                        <SelectItem value="closed_sl">SL erreicht</SelectItem>
                        <SelectItem value="closed_manual">Manuell geschlossen</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Channel</Label>
                    <Select
                      value={tradeFilters.channel}
                      onValueChange={(value) => setTradeFilters({ ...tradeFilters, channel: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Alle Channels</SelectItem>
                        {channels.map((channel) => (
                          <SelectItem key={channel.id} value={channel.name}>
                            {channel.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Nutzer</Label>
                    <Select
                      value={tradeFilters.user}
                      onValueChange={(value) => setTradeFilters({ ...tradeFilters, user: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Alle Nutzer</SelectItem>
                        {users.map((user) => (
                          <SelectItem key={user.id} value={user.email}>
                            {user.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Symbol</Label>
                    <Input
                      placeholder="XAUUSD, EURUSD..."
                      value={tradeFilters.symbol}
                      onChange={(e) => setTradeFilters({ ...tradeFilters, symbol: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2 flex flex-col justify-end">
                    <Button
                      variant="outline"
                      onClick={() =>
                        setTradeFilters({
                          status: "all",
                          channel: "all",
                          user: "all",
                          symbol: "",
                        })
                      }
                    >
                      <X className="w-4 h-4 mr-2" />
                      Filter löschen
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trades Table */}
            <Card>
              <CardHeader>
                <CardTitle>Alle Trades ({filteredTrades.length})</CardTitle>
                <CardDescription>Übersicht aller Trades mit Filterung und Kontrollfunktionen</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Symbol</TableHead>
                      <TableHead>Typ</TableHead>
                      <TableHead>Entry</TableHead>
                      <TableHead>Aktuell</TableHead>
                      <TableHead>TP/SL</TableHead>
                      <TableHead>Size</TableHead>
                      <TableHead>P&L</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Nutzer</TableHead>
                      <TableHead>Channel</TableHead>
                      <TableHead>Zeit</TableHead>
                      <TableHead>Aktionen</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTrades.map((trade) => (
                      <TableRow key={trade.id}>
                        <TableCell className="font-medium">{trade.symbol}</TableCell>
                        <TableCell>
                          <Badge variant={trade.type === "BUY" ? "default" : "secondary"}>{trade.type}</Badge>
                        </TableCell>
                        <TableCell>{trade.entry}</TableCell>
                        <TableCell>{trade.current}</TableCell>
                        <TableCell>
                          <div className="text-xs">
                            <div className="text-green-500">TP: {trade.tp}</div>
                            <div className="text-red-500">SL: {trade.sl}</div>
                          </div>
                        </TableCell>
                        <TableCell>{trade.size}</TableCell>
                        <TableCell>
                          <span className={trade.pnl >= 0 ? "text-green-500" : "text-red-500"}>
                            ${trade.pnl.toFixed(2)}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              trade.status === "open"
                                ? "default"
                                : trade.status === "closed_tp"
                                  ? "secondary"
                                  : "destructive"
                            }
                            className={
                              trade.status === "closed_tp"
                                ? "bg-green-500"
                                : trade.status === "open"
                                  ? "bg-blue-500"
                                  : ""
                            }
                          >
                            {trade.status === "open"
                              ? "Offen"
                              : trade.status === "closed_tp"
                                ? "TP erreicht"
                                : trade.status === "closed_sl"
                                  ? "SL erreicht"
                                  : "Geschlossen"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div className="font-medium">{trade.user.split("@")[0]}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">{trade.channel}</div>
                        </TableCell>
                        <TableCell>
                          <div className="text-xs">
                            <div>Eröffnet: {trade.openTime.split(" ")[1]}</div>
                            {trade.closeTime && <div>Geschlossen: {trade.closeTime.split(" ")[1]}</div>}
                          </div>
                        </TableCell>
                        <TableCell>
                          {trade.status === "open" && (
                            <div className="flex items-center gap-1">
                              <Button variant="outline" size="sm">
                                <X className="w-3 h-3" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Edit className="w-3 h-3" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Pause className="w-3 h-3" />
                              </Button>
                            </div>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Nutzer Management</h2>
                <p className="text-muted-foreground">Nutzerverwaltung mit Trade-Prozentsätzen und Historie</p>
              </div>
            </div>

            {/* User Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Aktive Nutzer</CardTitle>
                  <UserCheck className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{users.filter((u) => u.status === "active").length}</div>
                  <p className="text-xs text-muted-foreground">Handeln aktiv</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Gesperrte Nutzer</CardTitle>
                  <UserX className="h-4 w-4 text-red-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-500">
                    {users.filter((u) => u.status === "suspended").length}
                  </div>
                  <p className="text-xs text-muted-foreground">Temporär gesperrt</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Gesamt Balance</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    ${users.reduce((sum, u) => sum + u.balance, 0).toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">Alle Nutzer-Konten</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Ø Erfolgsrate</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {(users.reduce((sum, u) => sum + u.winRate, 0) / users.length).toFixed(1)}%
                  </div>
                  <p className="text-xs text-muted-foreground">Alle aktiven Nutzer</p>
                </CardContent>
              </Card>
            </div>

            {/* User Filters */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Nutzer Filter
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Status</Label>
                    <Select
                      value={userFilters.status}
                      onValueChange={(value) => setUserFilters({ ...userFilters, status: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Alle</SelectItem>
                        <SelectItem value="active">Aktiv</SelectItem>
                        <SelectItem value="suspended">Gesperrt</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Suche</Label>
                    <Input
                      placeholder="Name oder E-Mail..."
                      value={userFilters.search}
                      onChange={(e) => setUserFilters({ ...userFilters, search: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2 flex flex-col justify-end">
                    <Button
                      variant="outline"
                      onClick={() =>
                        setUserFilters({
                          status: "all",
                          search: "",
                        })
                      }
                    >
                      <X className="w-4 h-4 mr-2" />
                      Filter löschen
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Users Table */}
            <Card>
              <CardHeader>
                <CardTitle>Nutzer Übersicht ({filteredUsers.length})</CardTitle>
                <CardDescription>
                  Alle registrierten Nutzer mit Trade-Statistiken und Kontrollfunktionen
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nutzer</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Trade %</TableHead>
                      <TableHead>Balance</TableHead>
                      <TableHead>Trades</TableHead>
                      <TableHead>Erfolgsrate</TableHead>
                      <TableHead>Gesamt P&L</TableHead>
                      <TableHead>Letzte Aktivität</TableHead>
                      <TableHead>Beigetreten</TableHead>
                      <TableHead>Aktionen</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-muted-foreground">{user.email}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={user.status === "active" ? "default" : "destructive"}>
                            {user.status === "active" ? "Aktiv" : "Gesperrt"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{user.tradePercentage}%</Badge>
                        </TableCell>
                        <TableCell>${user.balance.toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{user.totalTrades}</Badge>
                        </TableCell>
                        <TableCell>
                          <span
                            className={
                              user.winRate >= 75
                                ? "text-green-500"
                                : user.winRate >= 60
                                  ? "text-yellow-500"
                                  : "text-red-500"
                            }
                          >
                            {user.winRate}%
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className={user.totalPnL >= 0 ? "text-green-500" : "text-red-500"}>
                            ${user.totalPnL.toFixed(2)}
                          </span>
                        </TableCell>
                        <TableCell className="font-mono text-sm">{user.lastActive.split(" ")[1]}</TableCell>
                        <TableCell className="text-sm">{user.joinDate}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Button variant="outline" size="sm">
                              <Edit className="w-3 h-3" />
                            </Button>
                            <Button variant="outline" size="sm">
                              {user.status === "active" ? (
                                <UserX className="w-3 h-3" />
                              ) : (
                                <UserCheck className="w-3 h-3" />
                              )}
                            </Button>
                            <Button variant="outline" size="sm">
                              <Eye className="w-3 h-3" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">System Einstellungen</h2>
                <p className="text-muted-foreground">Trade-Parameter, Benachrichtigungen und System-Konfiguration</p>
              </div>
              <div className="flex items-center gap-2">
                {hasUnsavedChanges && <Badge variant="secondary">Ungespeicherte Änderungen</Badge>}
                <Button variant="outline" onClick={handleResetSettings}>
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Zurücksetzen
                </Button>
                <Button onClick={handleSaveSettings}>
                  <Save className="w-4 h-4 mr-2" />
                  Speichern
                </Button>
              </div>
            </div>

            {/* Trade Parameters */}
            <Card>
              <CardHeader>
                <CardTitle>Trade Parameter</CardTitle>
                <CardDescription>Standard-Einstellungen für automatische Trades</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Standard Take Profit (%)</Label>
                    <Input
                      type="number"
                      step="0.1"
                      value={settings.tradeParameters.defaultTpPercent}
                      onChange={(e) =>
                        handleSettingChange("tradeParameters", "defaultTpPercent", Number.parseFloat(e.target.value))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Standard Stop Loss (%)</Label>
                    <Input
                      type="number"
                      step="0.1"
                      value={settings.tradeParameters.defaultSlPercent}
                      onChange={(e) =>
                        handleSettingChange("tradeParameters", "defaultSlPercent", Number.parseFloat(e.target.value))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Max Trade Prozent (%)</Label>
                    <Input
                      type="number"
                      step="0.1"
                      value={settings.tradeParameters.maxTradePercent}
                      onChange={(e) =>
                        handleSettingChange("tradeParameters", "maxTradePercent", Number.parseFloat(e.target.value))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Risiko Limit ($)</Label>
                    <Input
                      type="number"
                      value={settings.tradeParameters.riskLimit}
                      onChange={(e) =>
                        handleSettingChange("tradeParameters", "riskLimit", Number.parseInt(e.target.value))
                      }
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={settings.tradeParameters.autoTrade}
                    onCheckedChange={(checked) => handleSettingChange("tradeParameters", "autoTrade", checked)}
                  />
                  <Label>Automatisches Trading aktiviert</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={settings.tradeParameters.requireConfirmation}
                    onCheckedChange={(checked) =>
                      handleSettingChange("tradeParameters", "requireConfirmation", checked)
                    }
                  />
                  <Label>Bestätigung vor Trade-Ausführung erforderlich</Label>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle>Benachrichtigungen</CardTitle>
                <CardDescription>E-Mail und Push-Benachrichtigungen konfigurieren</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Admin E-Mail</Label>
                  <Input
                    type="email"
                    value={settings.notifications.adminEmail}
                    onChange={(e) => handleSettingChange("notifications", "adminEmail", e.target.value)}
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={settings.notifications.emailAlerts}
                      onCheckedChange={(checked) => handleSettingChange("notifications", "emailAlerts", checked)}
                    />
                    <Label>E-Mail Benachrichtigungen</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={settings.notifications.pushNotifications}
                      onCheckedChange={(checked) => handleSettingChange("notifications", "pushNotifications", checked)}
                    />
                    <Label>Push Benachrichtigungen</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={settings.notifications.signalAlerts}
                      onCheckedChange={(checked) => handleSettingChange("notifications", "signalAlerts", checked)}
                    />
                    <Label>Signal-Benachrichtigungen</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={settings.notifications.tradeAlerts}
                      onCheckedChange={(checked) => handleSettingChange("notifications", "tradeAlerts", checked)}
                    />
                    <Label>Trade-Benachrichtigungen</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={settings.notifications.systemAlerts}
                      onCheckedChange={(checked) => handleSettingChange("notifications", "systemAlerts", checked)}
                    />
                    <Label>System-Benachrichtigungen</Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* System Configuration */}
            <Card>
              <CardHeader>
                <CardTitle>System Konfiguration</CardTitle>
                <CardDescription>API-Schlüssel und System-Parameter</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Telegram Bot Token</Label>
                    <Input
                      type="password"
                      value={settings.system.telegramBotToken}
                      onChange={(e) => handleSettingChange("system", "telegramBotToken", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Telegram Session String</Label>
                    <Input
                      type="password"
                      value={settings.system.telegramSessionString}
                      onChange={(e) => handleSettingChange("system", "telegramSessionString", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Broker API Key</Label>
                    <Input
                      type="password"
                      value={settings.system.brokerApiKey}
                      onChange={(e) => handleSettingChange("system", "brokerApiKey", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Broker API Secret</Label>
                    <Input
                      type="password"
                      value={settings.system.brokerApiSecret}
                      onChange={(e) => handleSettingChange("system", "brokerApiSecret", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Webhook URL</Label>
                    <Input
                      value={settings.system.webhookUrl}
                      onChange={(e) => handleSettingChange("system", "webhookUrl", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Max gleichzeitige Trades</Label>
                    <Input
                      type="number"
                      value={settings.system.maxConcurrentTrades}
                      onChange={(e) =>
                        handleSettingChange("system", "maxConcurrentTrades", Number.parseInt(e.target.value))
                      }
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={settings.system.systemMaintenance}
                    onCheckedChange={(checked) => handleSettingChange("system", "systemMaintenance", checked)}
                  />
                  <Label>System-Wartungsmodus</Label>
                </div>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card>
              <CardHeader>
                <CardTitle>System Status</CardTitle>
                <CardDescription>Aktueller Status aller System-Komponenten</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Telegram Listener</p>
                      <p className="text-xs text-muted-foreground">Signal Empfang</p>
                    </div>
                    <Badge variant={systemStatus.listener === "running" ? "default" : "destructive"}>
                      {systemStatus.listener === "running" ? "Läuft" : "Gestoppt"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Telegram API</p>
                      <p className="text-xs text-muted-foreground">Bot Verbindung</p>
                    </div>
                    <Badge variant={systemStatus.telegram === "connected" ? "default" : "destructive"}>
                      {systemStatus.telegram === "connected" ? "Verbunden" : "Getrennt"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Broker API</p>
                      <p className="text-xs text-muted-foreground">Trading Interface</p>
                    </div>
                    <Badge variant={systemStatus.brokerApi === "active" ? "default" : "destructive"}>
                      {systemStatus.brokerApi === "active" ? "Aktiv" : "Inaktiv"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Datenbank</p>
                      <p className="text-xs text-muted-foreground">Datenspeicher</p>
                    </div>
                    <Badge variant={systemStatus.database === "online" ? "default" : "destructive"}>
                      {systemStatus.database === "online" ? "Online" : "Offline"}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ... existing logs content ... */}
          <TabsContent value="logs" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Logs & Monitoring</h2>
                <p className="text-muted-foreground">System-Logs, Fehlerprotokoll und Audit-Trail</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" onClick={handleRefreshLogs}>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Aktualisieren
                </Button>
              </div>
            </div>

            {/* Log Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Telegram Events</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{telegramLogs.length}</div>
                  <p className="text-xs text-muted-foreground">
                    {telegramLogs.filter((l) => l.status === "success").length} erfolgreich
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Fehler</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-500">
                    {errorLogs.filter((l) => l.level === "error").length}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {errorLogs.filter((l) => l.level === "error" && !l.resolved).length} ungelöst
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Warnungen</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-500">
                    {errorLogs.filter((l) => l.level === "warning").length}
                  </div>
                  <p className="text-xs text-muted-foreground">letzte 24h</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Admin Aktionen</CardTitle>
                  <History className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{auditLogs.length}</div>
                  <p className="text-xs text-muted-foreground">heute</p>
                </CardContent>
              </Card>
            </div>

            {/* Log Filters */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Log Filter
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="space-y-2">
                    <Label>Telegram Level</Label>
                    <Select
                      value={logFilters.telegramLevel}
                      onValueChange={(value) => setLogFilters({ ...logFilters, telegramLevel: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Alle</SelectItem>
                        <SelectItem value="success">Erfolgreich</SelectItem>
                        <SelectItem value="error">Fehler</SelectItem>
                        <SelectItem value="info">Info</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Fehler Level</Label>
                    <Select
                      value={logFilters.errorLevel}
                      onValueChange={(value) => setLogFilters({ ...logFilters, errorLevel: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Alle</SelectItem>
                        <SelectItem value="error">Fehler</SelectItem>
                        <SelectItem value="warning">Warnung</SelectItem>
                        <SelectItem value="info">Info</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Von Datum</Label>
                    <Input
                      type="date"
                      value={logFilters.dateFrom}
                      onChange={(e) => setLogFilters({ ...logFilters, dateFrom: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Bis Datum</Label>
                    <Input
                      type="date"
                      value={logFilters.dateTo}
                      onChange={(e) => setLogFilters({ ...logFilters, dateTo: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2 flex flex-col justify-end">
                    <Button
                      variant="outline"
                      onClick={() =>
                        setLogFilters({
                          telegramLevel: "all",
                          errorLevel: "all",
                          auditUser: "all",
                          dateFrom: "",
                          dateTo: "",
                        })
                      }
                    >
                      <X className="w-4 h-4 mr-2" />
                      Filter löschen
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Telegram Listener Logs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Telegram Listener Logs ({filteredTelegramLogs.length})
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleExportLogs("telegram")}>
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleClearLogs("telegram")}>
                      <Trash2 className="w-4 h-4 mr-2" />
                      Löschen
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>
                  Protokoll aller Telegram-Ereignisse: Signale empfangen, verarbeitet und verteilt
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Zeitstempel</TableHead>
                      <TableHead>Channel</TableHead>
                      <TableHead>Ereignis</TableHead>
                      <TableHead>Nachricht</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Nutzer</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTelegramLogs.map((log) => (
                      <TableRow key={log.id}>
                        <TableCell className="font-mono text-sm">{log.timestamp}</TableCell>
                        <TableCell>
                          <div className="font-medium">{log.channel}</div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{log.event}</div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">{log.message}</div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              log.status === "success"
                                ? "default"
                                : log.status === "error"
                                  ? "destructive"
                                  : "secondary"
                            }
                            className={
                              log.status === "success" ? "bg-green-500" : log.status === "info" ? "bg-blue-500" : ""
                            }
                          >
                            {log.status === "success" ? "Erfolg" : log.status === "error" ? "Fehler" : "Info"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {log.usersNotified > 0 ? (
                            <Badge variant="outline">{log.usersNotified} Nutzer</Badge>
                          ) : (
                            <span className="text-muted-foreground">-</span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Error Logs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Fehler & Warnungen ({filteredErrorLogs.length})
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleExportLogs("error")}>
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleClearLogs("error")}>
                      <Trash2 className="w-4 h-4 mr-2" />
                      Löschen
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>System-Fehler, API-Probleme und Warnmeldungen</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Zeitstempel</TableHead>
                      <TableHead>Level</TableHead>
                      <TableHead>Komponente</TableHead>
                      <TableHead>Nachricht</TableHead>
                      <TableHead>Details</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredErrorLogs.map((log) => (
                      <TableRow key={log.id}>
                        <TableCell className="font-mono text-sm">{log.timestamp}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              log.level === "error" ? "destructive" : log.level === "warning" ? "secondary" : "default"
                            }
                            className={
                              log.level === "warning" ? "bg-yellow-500" : log.level === "info" ? "bg-blue-500" : ""
                            }
                          >
                            {log.level === "error" ? "Fehler" : log.level === "warning" ? "Warnung" : "Info"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{log.component}</div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">{log.message}</div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm text-muted-foreground">{log.details}</div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={log.resolved ? "default" : "destructive"}
                            className={log.resolved ? "bg-green-500" : ""}
                          >
                            {log.resolved ? "Gelöst" : "Offen"}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Audit Logs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <History className="h-5 w-5" />
                    Audit Trail ({filteredAuditLogs.length})
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleExportLogs("audit")}>
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleClearLogs("audit")}>
                      <Trash2 className="w-4 h-4 mr-2" />
                      Löschen
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>Protokoll aller Admin-Aktionen und Systemänderungen</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Zeitstempel</TableHead>
                      <TableHead>Benutzer</TableHead>
                      <TableHead>Aktion</TableHead>
                      <TableHead>Ziel</TableHead>
                      <TableHead>Details</TableHead>
                      <TableHead>IP-Adresse</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredAuditLogs.map((log) => (
                      <TableRow key={log.id}>
                        <TableCell className="font-mono text-sm">{log.timestamp}</TableCell>
                        <TableCell>
                          <div className="font-medium">{log.user}</div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{log.action}</div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">{log.target}</div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm text-muted-foreground">{log.details}</div>
                        </TableCell>
                        <TableCell className="font-mono text-sm">{log.ipAddress}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
