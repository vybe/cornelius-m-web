import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer",
        variant === "primary" &&
          "bg-[hsl(var(--bg-button-primary))] text-[hsl(var(--text-inverse))] hover:opacity-90",
        variant === "secondary" &&
          "bg-[hsl(var(--bg-button-secondary))] text-[hsl(var(--text-primary))] border border-[hsl(var(--border-subtle))] hover:bg-[hsl(var(--bg-card-hover))]",
        variant === "ghost" &&
          "text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text-primary))]",
        size === "sm" && "px-4 py-2 text-sm rounded-[var(--radius-md)]",
        size === "md" && "px-6 py-3 text-base rounded-[var(--radius-lg)]",
        size === "lg" && "px-8 py-4 text-lg rounded-[var(--radius-lg)]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
