import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[var(--container-max)] px-[var(--container-padding)]",
        className
      )}
    >
      {children}
    </div>
  );
}
