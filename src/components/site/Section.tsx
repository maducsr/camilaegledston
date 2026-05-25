import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-5 text-gold uppercase text-[10px] tracking-luxe">
      <span className="h-px w-10 bg-gold/50" />
      {children}
      <span className="h-px w-10 bg-gold/50" />
    </div>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-7 font-serif text-4xl sm:text-5xl md:text-6xl text-espresso text-center leading-[1.05]">
      {children}
    </h2>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-28 sm:py-36 px-6 sm:px-10 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
