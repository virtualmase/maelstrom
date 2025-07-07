import { Navigation } from "@/components/Navigation";
import { MetricCard } from "@/components/MetricCard";
import { StatusIndicator } from "@/components/StatusIndicator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Key,
  Lock,
  AlertTriangle,
  CheckCircle,
  Users,
  Activity,
  Clock,
  Zap,
  Eye,
  FileX,
  Smartphone,
} from "lucide-react";

const securityMetrics = [
  {
    title: "2FA Adoption",
    value: "94.2%",
    change: { value: "2.1%", positive: true },
    icon: Smartphone,
    trend: [88, 90, 92, 93, 94, 94.2],
  },
  {
    title: "Threat Detection",
    value: "99.7%",
    change: { value: "0.3%", positive: true },
    icon: Eye,
    trend: [97, 98, 99, 99.5, 99.6, 99.7],
  },
  {
    title: "Cold Storage",
    value: "95%",
    change: { value: "0%", positive: true },
    icon: Lock,
    trend: [95, 95, 95, 95, 95, 95],
  },
  {
    title: "Security Score",
    value: "98.5",
    change: { value: "1.2%", positive: true },
    icon: Shield,
    trend: [96, 97, 97.5, 98, 98.2, 98.5],
  },
];

const securityAlerts = [
  {
    id: 1,
    type: "warning",
    title: "Unusual Login Pattern Detected",
    description: "Multiple login attempts from new geographic location",
    time: "5 minutes ago",
    severity: "medium",
  },
  {
    id: 2,
    type: "success",
    title: "Passkey Verification Successful",
    description: "New passkey successfully registered for user authentication",
    time: "12 minutes ago",
    severity: "info",
  },
  {
    id: 3,
    type: "error",
    title: "Phishing Attempt Blocked",
    description: "Suspicious email campaign targeting user credentials detected",
    time: "18 minutes ago",
    severity: "high",
  },
  {
    id: 4,
    type: "info",
    title: "Cold Storage Integrity Check",
    description: "Routine verification of offline storage systems completed",
    time: "1 hour ago",
    severity: "low",
  },
];

export default function Security() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />

      <div className="lg:ml-64 p-4 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-kraken-purple via-kraken-purple-light to-kraken-purple bg-clip-text text-transparent">
                Security Control Center
              </h1>
              <p className="text-muted-foreground mt-1">
                Advanced security monitoring and threat detection for Kraken
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
                Protected
              </Badge>
            </div>
          </div>
        </div>

        {/* Security Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {securityMetrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        {/* Security Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <Card className="bg-card/30 backdrop-blur-sm border-border/30">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-kraken-purple" />
                  <span>Security Infrastructure Status</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium text-sm text-kraken-purple-light">
                      Authentication Systems
                    </h4>
                    <StatusIndicator status="online" label="2FA Gateway" />
                    <StatusIndicator status="online" label="Passkey Service" />
                    <StatusIndicator status="warning" label="SMS Backup" />
                    <StatusIndicator status="online" label="Biometric Auth" />
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium text-sm text-kraken-purple-light">
                      Protection Systems
                    </h4>
                    <StatusIndicator status="online" label="DDoS Protection" />
                    <StatusIndicator status="online" label="Firewall" />
                    <StatusIndicator status="online" label="Intrusion Detection" />
                    <StatusIndicator status="online" label="Encryption Layer" />
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success-green">
                        15M+
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Protected Users
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-kraken-purple">
                        99.7%
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Threat Detection
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-warning-amber">
                        24/7
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Monitoring
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-kraken-purple-light">
                        <1s
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Response Time
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-card/30 backdrop-blur-sm border-border/30">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Key className="h-5 w-5 text-kraken-purple" />
                  <span>Access Control</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Active Sessions
                    </span>
                    <span className="text-sm font-medium">1,247,853</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      2FA Enabled
                    </span>
                    <span className="text-sm font-medium text-success-green">
                      94.2%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Passkeys Active
                    </span>
                    <span className="text-sm font-medium text-kraken-purple">
                      2.1M
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Failed Attempts
                    </span>
                    <span className="text-sm font-medium text-warning-amber">
                      12,345
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <Button
                    variant="outline"
                    className="w-full border-kraken-purple/30 text-kraken-purple hover:bg-kraken-purple/10"
                  >
                    <Lock className="mr-2 h-4 w-4" />
                    Security Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Security Alerts */}
        <Card className="bg-card/30 backdrop-blur-sm border-border/30">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-warning-amber" />
              <span>Security Alerts & Events</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {securityAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className="flex items-start space-x-3 p-4 rounded-lg border border-border/30 bg-muted/20 hover:bg-muted/30 transition-colors"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    {alert.type === "success" && (
                      <CheckCircle className="h-4 w-4 text-success-green" />
                    )}
                    {alert.type === "warning" && (
                      <AlertTriangle className="h-4 w-4 text-warning-amber" />
                    )}
                    {alert.type === "error" && (
                      <FileX className="h-4 w-4 text-destructive" />
                    )}
                    {alert.type === "info" && (
                      <Activity className="h-4 w-4 text-kraken-purple" />
                    )}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">{alert.title}</h4>
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          alert.severity === "high"
                            ? "border-destructive/30 text-destructive"
                            : alert.severity === "medium"
                              ? "border-warning-amber/30 text-warning-amber"
                              : alert.severity === "low"
                                ? "border-muted-foreground/30 text-muted-foreground"
                                : "border-kraken-purple/30 text-kraken-purple"
                        }`}
                      >
                        {alert.severity}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {alert.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {alert.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              className="w-full mt-4 border-kraken-purple/30 text-kraken-purple hover:bg-kraken-purple/10"
            >
              View All Security Events
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}