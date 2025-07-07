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
  Activity,
  Clock,
  Zap,
  Eye,
  FileX,
  Smartphone,
} from "lucide-react";

export default function Security() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />

      <div className="lg:ml-64 p-4 lg:p-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="2FA Adoption"
            value="94.2%"
            change={{ value: "2.1%", positive: true }}
            icon={Smartphone}
            trend={[88, 90, 92, 93, 94, 94]}
          />
          <MetricCard
            title="Threat Detection"
            value="99.7%"
            change={{ value: "0.3%", positive: true }}
            icon={Eye}
            trend={[97, 98, 99, 99, 99, 99]}
          />
          <MetricCard
            title="Cold Storage"
            value="95%"
            change={{ value: "0%", positive: true }}
            icon={Lock}
            trend={[95, 95, 95, 95, 95, 95]}
          />
          <MetricCard
            title="Security Score"
            value="98.5"
            change={{ value: "1.2%", positive: true }}
            icon={Shield}
            trend={[96, 97, 98, 98, 98, 98]}
          />
        </div>

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
                    &lt;1s
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
    </div>
  );
}
