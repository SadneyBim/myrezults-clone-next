import { cn } from "@/lib/utils";

interface GlowingStarProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
}

export const GlowingStar = ({ 
  className, 
  size = "md", 
  variant = "primary" 
}: GlowingStarProps) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10", 
    lg: "w-16 h-16"
  };

  const variantClasses = {
    primary: "text-primary",
    secondary: "text-accent"
  };

  return (
    <div className={cn(
      "relative inline-block animate-glow-pulse",
      sizeClasses[size],
      className
    )}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn(
          "w-full h-full transition-glow",
          variantClasses[variant]
        )}
      >
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2" />
      </svg>
      <div className="absolute inset-0 blur-sm opacity-50">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={cn(
            "w-full h-full",
            variantClasses[variant]
          )}
        >
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2" />
        </svg>
      </div>
    </div>
  );
};