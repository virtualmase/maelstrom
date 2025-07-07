import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change?: {
    value: string;
    positive: boolean;
  };
  icon: LucideIcon;
  className?: string;
  trend?: number[];
}

export function MetricCard({
  title,
  value,
  change,
  icon: Icon,
  className,
  trend,
}: MetricCardProps) {
  return (
    <Card
      className={cn(
        "bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors",
        className,
      )}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {change && (
          <p
            className={cn(
              "text-xs",
              change.positive ? "text-success-green" : "text-destructive",
            )}
          >
            {change.positive ? "+" : ""}
            {change.value}
          </p>
        )}
        {trend && (
          <div className="mt-2 h-8 flex items-end space-x-1">
            {trend.map((height, i) => (
              <div
                key={i}
                className="bg-primary/20 flex-1 rounded-sm"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
