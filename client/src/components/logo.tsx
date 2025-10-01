import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  variant?: "default" | "white";
}

export function Logo({ 
  className, 
  width = 220, 
  height = 80, 
  variant = "default"
}: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <img 
        src="/images/snowytop-logo.png" 
        alt="SnowyTop Safaris Logo" 
        style={{ 
          width: 'auto',
          height: height,
          // We don't manipulate the colors anymore since we're using the logo with transparent background
          // The logo already has the right colors for both light and dark backgrounds
        }}
        className={cn(
          "object-contain"
        )}
      />
    </div>
  );
}