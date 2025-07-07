import { Navigation } from "@/components/Navigation";
import { MetricCard } from "@/components/MetricCard";
import { StatusIndicator } from "@/components/StatusIndicator";
import { CryptoPrice } from "@/components/CryptoPrice";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Activity,
  Users,
  DollarSign,
  Shield,
  TrendingUp,
  Server,
  Clock,
  AlertTriangle,
  CheckCircle,
  Zap,
  Globe,
  Database,
} from "lucide-react";
import { useEffect, useState } from "react";

const mockCryptoData = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: "$67,234.50",
    change: 2.34,
    volume: "$12.4B",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: "$3,456.78",
    change: -1.23,
    volume: "$8.9B",
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: "$198.45",
    change: 5.67,
    volume: "$2.1B",
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    price: "$1.00",
    change: 0.01,
    volume: "$4.3B",
  },
];

const recentActivities = [
  {
    id: 1,
    type: "trade",
    message: "High-volume BTC trade executed successfully",
    time: "2 minutes ago",
    status: "success",
  },
  {
    id: 2,
    type: "security",
    message: "2FA verification spike detected",
    time: "5 minutes ago",
    status: "warning",
  },
  {
    id: 3,
    type: "system",
    message: "API response time optimized",
    time: "12 minutes ago",
    status: "success",
  },
  {
    id: 4,
    type: "user",
    message: "New user registration from 15 countries",
    time: "18 minutes ago",
    status: "info",
  },
];

export default function Index() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />

      {/* Main content */}
      <div className="lg:ml-64 p-4 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-kraken-purple via-kraken-purple-light to-kraken-purple bg-clip-text text-transparent">
                Digital Twin Control Center
              </h1>
              <p className="text-muted-foreground mt-1">
                Real-time monitoring and simulation of Kraken cryptocurrency
                exchange
              </p>
            </div>
            <div className="mt-4 lg:mt-0 flex items-center space-x-4">
              <Badge
                variant="outline"
                className="border-primary/30 text-primary"
              >
                <Clock className="mr-1 h-3 w-3" />
                {currentTime.toLocaleTimeString()}
              </Badge>
              <Badge
                variant="outline"
                className="border-success-green/30 text-success-green"
              >
                <Zap className="mr-1 h-3 w-3" />
                Live Sync
              </Badge>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Platform Health"
            value="99.8%"
            change={{ value: "0.2%", positive: true }}
            icon={Activity}
            trend={[60, 70, 85, 90, 95, 88, 92, 99]}
          />
          <MetricCard
            title="Active Users"
            value="1.2M"
            change={{ value: "5.3%", positive: true }}
            icon={Users}
            trend={[45, 52, 61, 68, 75, 82, 79, 85]}
          />
          <MetricCard
            title="Trading Volume"
            value="$24.7B"
            change={{ value: "12.4%", positive: true }}
            icon={DollarSign}
            trend={[30, 45, 55, 70, 85, 90, 88, 95]}
          />
          <MetricCard
            title="Security Score"
            value="98.5"
            change={{ value: "1.2%", positive: true }}
            icon={Shield}
            trend={[85, 88, 90, 92, 95, 97, 96, 98]}
          />
        </div>

        {/* Market Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <Card className="bg-card/30 backdrop-blur-sm border-border/30">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span>Live Market Data</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mockCryptoData.map((crypto) => (
                    <CryptoPrice key={crypto.symbol} {...crypto} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-card/30 backdrop-blur-sm border-border/30">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Server className="h-5 w-5 text-primary" />
                  <span>System Status</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <StatusIndicator status="online" label="Trading Engine" />
                <StatusIndicator status="online" label="API Gateway" />
                <StatusIndicator status="warning" label="Security Monitor" />
                <StatusIndicator status="online" label="Data Pipeline" />
                <StatusIndicator status="online" label="Cold Storage" />
                <div className="pt-2 border-t border-border/50">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Uptime</span>
                    <span className="text-success-green font-medium">
                      99.8%
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Response Time</span>
                    <span className="text-primary font-medium">45ms</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Digital Twin Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-kraken-purple/10 to-kraken-purple/5 border-kraken-purple/30 hover:border-kraken-purple/50 transition-colors cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-kraken-purple/20 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-kraken-purple" />
                </div>
                <div>
                  <h3 className="font-semibold">Trading Module</h3>
                  <p className="text-sm text-muted-foreground">
                    Spot, margin & futures
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-kraken-purple-light/10 to-kraken-purple-light/5 border-kraken-purple-light/30 hover:border-kraken-purple-light/50 transition-colors cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-kraken-purple-light/20 rounded-lg">
                  <Shield className="h-6 w-6 text-kraken-purple-light" />
                </div>
                <div>
                  <h3 className="font-semibold">Security Module</h3>
                  <p className="text-sm text-muted-foreground">
                    2FA, passkeys & threats
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30 hover:border-accent/50 transition-colors cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">User Experience</h3>
                  <p className="text-sm text-muted-foreground">
                    Journeys & interactions
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-kraken-purple-dark/10 to-kraken-purple-dark/5 border-kraken-purple-dark/30 hover:border-kraken-purple-dark/50 transition-colors cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-kraken-purple-dark/20 rounded-lg">
                  <Database className="h-6 w-6 text-kraken-purple-dark" />
                </div>
                <div>
                  <h3 className="font-semibold">Analytics</h3>
                  <p className="text-sm text-muted-foreground">
                    Predictions & insights
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="bg-card/30 backdrop-blur-sm border-border/30">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-primary" />
              <span>Real-time Activity Feed</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center space-x-3 p-3 rounded-lg border border-border/30 bg-muted/20"
                >
                  <div className="flex-shrink-0">
                    {activity.status === "success" && (
                      <CheckCircle className="h-4 w-4 text-success-green" />
                    )}
                    {activity.status === "warning" && (
                      <AlertTriangle className="h-4 w-4 text-warning-amber" />
                    )}
                    {activity.status === "info" && (
                      <Activity className="h-4 w-4 text-primary" />
                    )}
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm font-medium">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              className="w-full mt-4 border-primary/30 text-primary hover:bg-primary/10"
            >
              View All Activities
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
