import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CryptoPriceProps {
  symbol: string;
  name: string;
  price: string;
  change: number;
  volume: string;
  className?: string;
}

export function CryptoPrice({
  symbol,
  name,
  price,
  change,
  volume,
  className,
}: CryptoPriceProps) {
  const isPositive = change >= 0;

  return (
    <Card
      className={cn(
        "bg-card/30 backdrop-blur-sm border-border/30 hover:border-primary/50 transition-all duration-200",
        className,
      )}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center justify-between">
          <div>
            <span className="text-foreground">{symbol}</span>
            <span className="text-muted-foreground ml-2 text-xs">{name}</span>
          </div>
          <div
            className={cn(
              "text-xs px-2 py-1 rounded-full",
              isPositive
                ? "bg-success-green/20 text-success-green"
                : "bg-destructive/20 text-destructive",
            )}
          >
            {isPositive ? "+" : ""}
            {change.toFixed(2)}%
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-lg font-bold text-foreground">{price}</div>
        <div className="text-xs text-muted-foreground">Vol: {volume}</div>
      </CardContent>
    </Card>
  );
}
