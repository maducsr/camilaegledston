import { useEffect, useState } from "react";

const TARGET = new Date("2026-07-05T16:00:00-03:00").getTime();

function diff() {
  const ms = Math.max(0, TARGET - Date.now());
  const d = Math.floor(ms / 86400000);
  const h = Math.floor((ms / 3600000) % 24);
  const m = Math.floor((ms / 60000) % 60);
  const s = Math.floor((ms / 1000) % 60);
  return { d, h, m, s };
}

export function Countdown() {
  const [t, setT] = useState<{ d: number; h: number; m: number; s: number } | null>(null);
  useEffect(() => {
    setT(diff());
    const i = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(i);
  }, []);
  const items: [string, number][] = [
    ["Dias", t?.d ?? 0],
    ["Horas", t?.h ?? 0],
    ["Minutos", t?.m ?? 0],
    ["Segundos", t?.s ?? 0],
  ];
  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-xl mx-auto">
      {items.map(([label, val]) => (
        <div key={label} className="text-center">
          <div className="font-serif text-3xl sm:text-5xl text-foreground tabular-nums">
            {String(val).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-luxe text-muted-foreground">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
