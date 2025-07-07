import { cn } from "@/lib/utils";

interface StatusIndicatorProps {
  status: "online" | "warning" | "error" | "maintenance";
  label: string;
  className?: string;
}

const statusConfig = {
  online: {
    color: "bg-success-green",
    text: "text-success-green",
    label: "Operational",
  },
  warning: {
    color: "bg-warning-amber",
    text: "text-warning-amber",
    label: "Warning",
  },
  error: {
    color: "bg-destructive",
    text: "text-destructive",
    label: "Error",
  },
  maintenance: {
    color: "bg-muted-foreground",
    text: "text-muted-foreground",
    label: "Maintenance",
  },
};

export function StatusIndicator({
  status,
  label,
  className,
}: StatusIndicatorProps) {
  const config = statusConfig[status];

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <div className={cn("w-2 h-2 rounded-full animate-pulse", config.color)} />
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className={cn("text-xs font-medium", config.text)}>
        {config.label}
      </span>
    </div>
  );
}
