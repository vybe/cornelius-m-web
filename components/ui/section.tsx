import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-[var(--section-padding-mobile)] md:py-[var(--section-padding-desktop)]",
        className
      )}
    >
      {children}
    </section>
  );
}
