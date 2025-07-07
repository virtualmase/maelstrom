import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />

      <div className="lg:ml-64 p-4 lg:p-8">
        <div className="min-h-[80vh] flex items-center justify-center">
          <Card className="bg-card/30 backdrop-blur-sm border-border/30 max-w-md w-full">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="relative inline-block">
                  <AlertTriangle className="h-16 w-16 text-warning-amber" />
                  <div className="absolute inset-0 bg-warning-amber/20 blur-lg rounded-full" />
                </div>
              </div>

              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-kraken-purple to-kraken-purple-light bg-clip-text text-transparent">
                404
              </h1>

              <p className="text-xl text-muted-foreground mb-6">
                Digital Twin module not found
              </p>

              <p className="text-sm text-muted-foreground mb-8">
                The requested path{" "}
                <code className="bg-muted/50 px-2 py-1 rounded text-xs">
                  {location.pathname}
                </code>{" "}
                does not exist in the Maelstrom system.
              </p>

              <Link to="/">
                <Button className="bg-kraken-purple hover:bg-kraken-purple-dark">
                  <Home className="mr-2 h-4 w-4" />
                  Return to Dashboard
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
