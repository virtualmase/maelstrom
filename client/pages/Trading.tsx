import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Activity, Clock, Zap } from "lucide-react";

export default function Trading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />

      <div className="lg:ml-64 p-4 lg:p-8">
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-kraken-purple via-kraken-purple-light to-kraken-purple bg-clip-text text-transparent">
                Trading Module
              </h1>
              <p className="text-muted-foreground mt-1">
                Comprehensive trading engine simulation and monitoring
              </p>
            </div>
            <div className="mt-4 lg:mt-0 flex items-center space-x-4">
              <Badge
                variant="outline"
                className="border-primary/30 text-primary"
              >
                <Clock className="mr-1 h-3 w-3" />
                Real-time
              </Badge>
              <Badge
                variant="outline"
                className="border-success-green/30 text-success-green"
              >
                <Zap className="mr-1 h-3 w-3" />
                Active
              </Badge>
            </div>
          </div>
        </div>

        <Card className="bg-card/30 backdrop-blur-sm border-border/30">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span>Trading Simulation Engine</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="py-12">
            <div className="text-center">
              <div className="mb-6">
                <div className="relative inline-block">
                  <Activity className="h-16 w-16 text-primary animate-pulse" />
                  <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Advanced Trading Module
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-6">
                This module will include comprehensive trading engine
                simulation, order book visualization, margin trading scenarios,
                and real-time execution monitoring.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className="p-4 rounded-lg border border-border/30 bg-muted/20">
                  <h4 className="font-medium text-primary">Spot Trading</h4>
                  <p className="text-sm text-muted-foreground">
                    Real-time order matching
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-border/30 bg-muted/20">
                  <h4 className="font-medium text-accent">Margin Trading</h4>
                  <p className="text-sm text-muted-foreground">
                    Up to 5x leverage simulation
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-border/30 bg-muted/20">
                  <h4 className="font-medium text-cyber-teal">Futures</h4>
                  <p className="text-sm text-muted-foreground">
                    Derivatives up to 50x
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
