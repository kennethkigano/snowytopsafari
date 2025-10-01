import { cn } from "@/lib/utils";
import * as React from "react";

interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "shield" | "pattern";
}

const sizeClasses = {
  sm: "w-6 h-6",
  md: "w-10 h-10",
  lg: "w-16 h-16"
};

export function Loading({ 
  size = "md", 
  variant = "default",
  className,
  ...props 
}: LoadingProps) {
  const sizeClass = sizeClasses[size];

  if (variant === "shield") {
    return (
      <div className={cn("animate-in fade-in", className)} {...props}>
        <svg
          className={cn("animate-spin", sizeClass)}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Kenyan Shield Pattern */}
          <path
            d="M50 5 L95 30 L95 70 L50 95 L5 70 L5 30 Z"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            className="text-brand-orange"
          />
          <path
            d="M50 15 L85 35 L85 65 L50 85 L15 65 L15 35 Z"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="60,30"
            className="text-brand-navy"
          />
        </svg>
      </div>
    );
  }

  if (variant === "pattern") {
    return (
      <div className={cn("animate-in fade-in", className)} {...props}>
        <svg
          className={cn("animate-spin", sizeClass)}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Maasai Pattern */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="4"
            strokeDasharray="30,15"
            className="text-brand-orange"
          />
          <circle
            cx="50"
            cy="50"
            r="35"
            stroke="currentColor"
            strokeWidth="4"
            strokeDasharray="20,10"
            className="text-brand-navy"
          />
          <circle
            cx="50"
            cy="50"
            r="25"
            stroke="currentColor"
            strokeWidth="4"
            strokeDasharray="10,5"
            className="text-brand-navy/60"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={cn("animate-in fade-in", className)} {...props}>
      <svg
        className={cn("animate-spin", sizeClass)}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Default Spinner with Kenyan Colors */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="8"
          className="text-brand-navy/30"
        />
        <path
          d="M50 5 A45 45 0 0 1 95 50"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          className="text-brand-orange"
        />
      </svg>
    </div>
  );
}
