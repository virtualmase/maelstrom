import { Navigation } from "@/components/Navigation";
import { MetricCard } from "@/components/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  Brain,
  Target,
  Clock,
  Zap,
  Activity,
  PieChart,
  LineChart,
  AlertCircle,
} from "lucide-react";

const analyticsMetrics = [
  {
    title: "Prediction Accuracy",
    value: "96.4%",
    change: { value: "2.3%", positive: true },
    icon: Target,
    trend: [92, 93, 94, 95, 96, 96.4],
  },
  {
    title: "Data Processing",
    value: "15.2TB",
    change: { value: "8.7%", positive: true },
    icon: Activity,
    trend: [12, 13, 14, 14.5, 15, 15.2],
  },
  {
    title: "Model Performance",
    value: "99.1%",
    change: { value: "0.5%", positive: true },
    icon: Brain,
    trend: [98, 98.5, 99, 99.1, 99.1, 99.1],
  },
  {
    title: "Real-time Insights",
    value: "847K",
    change: { value: "12.4%", positive: true },
    icon: BarChart3,
    trend: [600, 650, 700, 750, 800, 847],
  },
];

const predictionModels = [
  {
    name: "Trading Volume Prediction",
    accuracy: "96.8%",
    status: "active",
    lastTrained: "2 hours ago",
    prediction: "Volume spike expected in 4 hours",
  },
  {
    name: "User Churn Analysis",
    accuracy: "94.2%",
    status: "active",
    lastTrained: "6 hours ago",
    prediction: "0.8% churn risk identified",
  },
  {
    name: "Market Volatility Forecast",
    accuracy: "89.5%",
    status: "training",
    lastTrained: "12 hours ago",
    prediction: "High volatility window: 2-6 PM UTC",
  },
  {
    name: "Security Threat Detection",
    accuracy: "99.3%",
    status: "active",
    lastTrained: "1 hour ago",
    prediction: "No immediate threats detected",
  },
];

const dataStreams = [
  {
    name: "Market Data",
    volume: "2.4TB/day",
    latency: "12ms",
    status: "optimal",
  },
  {
    name: "User Activity",
    volume: "890GB/day",
    latency: "8ms",
    status: "optimal",
  },
  {
    name: "Security Logs",
    volume: "156GB/day",
    latency: "15ms",
    status: "good",
  },
  {
    name: "API Metrics",
    volume: "78GB/day",
    latency: "5ms",
    status: "optimal",
  },
  {
    name: "Blockchain Data",
    volume: "1.2TB/day",
    latency: "45ms",
    status: "good",
  },
];

export default function Analytics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />

      <div className="lg:ml-64 p-4 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-kraken-purple via-kraken-purple-light to-kraken-purple bg-clip-text text-transparent">
                Analytics Intelligence Center
              </h1>
              <p className="text-muted-foreground mt-1">
                Advanced predictive analytics and AI-powered insights for Kraken
                digital twin
              </p>
            </div>
            <div className="mt-4 lg:mt-0 flex items-center space-x-4">
              <Badge
                variant="outline"
                className="border-kraken-purple/30 text-kraken-purple"
              >
                <Clock className="mr-1 h-3 w-3" />
                Real-time
              </Badge>
              <Badge
                variant="outline"
                className="border-success-green/30 text-success-green"
              >
                <Zap className="mr-1 h-3 w-3" />
                AI Active
              </Badge>
            </div>
          </div>
        </div>

        {/* Analytics Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {analyticsMetrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        {/* Prediction Models */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <Card className="bg-card/30 backdrop-blur-sm border-border/30">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-kraken-purple" />
                  <span>AI Prediction Models</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {predictionModels.map((model, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg border border-border/30 bg-muted/20 hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{model.name}</h4>
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              model.status === "active"
                                ? "border-success-green/30 text-success-green"
                                : "border-warning-amber/30 text-warning-amber"
                            }`}
                          >
                            {model.status}
                          </Badge>
                          <span className="text-sm font-medium text-kraken-purple">
                            {model.accuracy}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {model.prediction}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Last trained: {model.lastTrained}
                      </p>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 border-kraken-purple/30 text-kraken-purple hover:bg-kraken-purple/10"
                >
                  <Brain className="mr-2 h-4 w-4" />
                  Model Management
                </Button>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-card/30 backdrop-blur-sm border-border/30">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PieChart className="h-5 w-5 text-kraken-purple" />
                  <span>Data Processing</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="text-center p-4 rounded-lg bg-kraken-purple/10 border border-kraken-purple/20">
                    <div className="text-2xl font-bold text-kraken-purple">
                      15.2TB
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Daily Processing Volume
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 rounded-lg bg-muted/20">
                      <div className="text-lg font-semibold text-success-green">
                        847K
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Insights Generated
                      </div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-muted/20">
                      <div className="text-lg font-semibold text-kraken-purple-light">
                        12ms
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Avg Latency
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <Button
                    variant="outline"
                    className="w-full border-kraken-purple/30 text-kraken-purple hover:bg-kraken-purple/10"
                  >
                    <BarChart3 className="mr-2 h-4 w-4" />
                    View Detailed Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Data Streams */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-card/30 backdrop-blur-sm border-border/30">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <LineChart className="h-5 w-5 text-kraken-purple" />
                <span>Data Stream Status</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dataStreams.map((stream, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg border border-border/30 bg-muted/20"
                  >
                    <div>
                      <h4 className="font-medium text-sm">{stream.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        {stream.volume} • {stream.latency} latency
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className={`text-xs ${
                        stream.status === "optimal"
                          ? "border-success-green/30 text-success-green"
                          : "border-warning-amber/30 text-warning-amber"
                      }`}
                    >
                      {stream.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/30 backdrop-blur-sm border-border/30">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-kraken-purple" />
                <span>Performance Insights</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg bg-success-green/10 border border-success-green/20">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="h-4 w-4 text-success-green" />
                  <span className="text-sm font-medium text-success-green">
                    Trading Volume Surge Predicted
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  AI models predict 35% volume increase in next 4 hours based on
                  market sentiment analysis.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-warning-amber/10 border border-warning-amber/20">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertCircle className="h-4 w-4 text-warning-amber" />
                  <span className="text-sm font-medium text-warning-amber">
                    User Behavior Anomaly
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Unusual withdrawal patterns detected. Recommend enhanced
                  monitoring for affected user segments.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-kraken-purple/10 border border-kraken-purple/20">
                <div className="flex items-center space-x-2 mb-2">
                  <Brain className="h-4 w-4 text-kraken-purple" />
                  <span className="text-sm font-medium text-kraken-purple">
                    Model Optimization Complete
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Security threat detection model updated with 99.3% accuracy
                  improvement.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Items */}
        <Card className="bg-card/30 backdrop-blur-sm border-border/30">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-kraken-purple" />
              <span>Recommended Actions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Button
                variant="outline"
                className="h-auto p-4 border-kraken-purple/30 text-left justify-start hover:bg-kraken-purple/10"
              >
                <div>
                  <div className="font-medium text-kraken-purple">
                    Optimize Trading Engine
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Based on volume prediction analysis
                  </div>
                </div>
              </Button>

              <Button
                variant="outline"
                className="h-auto p-4 border-warning-amber/30 text-left justify-start hover:bg-warning-amber/10"
              >
                <div>
                  <div className="font-medium text-warning-amber">
                    Review User Segments
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Address detected behavioral anomalies
                  </div>
                </div>
              </Button>

              <Button
                variant="outline"
                className="h-auto p-4 border-success-green/30 text-left justify-start hover:bg-success-green/10"
              >
                <div>
                  <div className="font-medium text-success-green">
                    Deploy New Models
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Enhanced security detection ready
                  </div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
