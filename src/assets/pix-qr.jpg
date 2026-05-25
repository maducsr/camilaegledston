import pixQrImg from "@/assets/pix-qr.jpg";
import { useState } from "react";
import { toast } from "sonner";
import { X, Copy } from "lucide-react";

const PIX_KEY = "62993260000";

type Gift = {
  id: number;
  name: string;
  category: string;
  price: string;
  photo: string;
};

const CATEGORIES = [
  "Cozinha e Utilidades",
  "Cama, Mesa e Banho",
  "Organização e Decoração",
  "Área Gourmet e Recepção",
];

const GIFTS: Gift[] = [
  { id:1, name:"Jogo de panelas antiaderente", category:"Cozinha e Utilidades", price:"R$ 280", photo:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop" },
  { id:2, name:"Air fryer digital", category:"Cozinha e Utilidades", price:"R$ 350", photo:"https://images.unsplash.com/photo-1648462735497-af4b63bca47e?w=400&h=300&fit=crop" },
  { id:3, name:"Cafeteira expresso", category:"Cozinha e Utilidades", price:"R$ 420", photo:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop" },
  { id:4, name:"Batedeira planetária", category:"Cozinha e Utilidades", price:"R$ 350", photo:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop" },
  { id:5, name:"Jogo de cama queen (400 fios)", category:"Cama, Mesa e Banho", price:"R$ 220", photo:"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop" },
  { id:6, name:"Jogo de toalhas premium", category:"Cama, Mesa e Banho", price:"R$ 180", photo:"https://images.unsplash.com/photo-1600369671854-5faf0c2f3a64?w=400&h=300&fit=crop" },
  { id:7, name:"Colcha de casal", category:"Cama, Mesa e Banho", price:"R$ 260", photo:"https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop" },
  { id:8, name:"Porta-retratos trio", category:"Organização e Decoração", price:"R$ 120", photo:"https://images.unsplash.com/photo-1584445584400-32a3562e9c80?w=400&h=300&fit=crop" },
  { id:9, name:"Luminária de mesa elegante", category:"Organização e Decoração", price:"R$ 180", photo:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop" },
  { id:10, name:"Vaso decorativo", category:"Organização e Decoração", price:"R$ 130", photo:"https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=300&fit=crop" },
  { id:11, name:"Quadro personalizado do casal", category:"Organização e Decoração", price:"R$ 150", photo:"https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400&h=300&fit=crop" },
  { id:12, name:"Conjunto de taças de cristal", category:"Área Gourmet e Recepção", price:"R$ 200", photo:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" },
  { id:13, name:"Aparelho de jantar 20 peças", category:"Área Gourmet e Recepção", price:"R$ 380", photo:"https://images.unsplash.com/photo-1584346133934-a3afd2a33e4b?w=400&h=300&fit=crop" },
  { id:14, name:"Tábua de frios com utensílios", category:"Área Gourmet e Recepção", price:"R$ 220", photo:"https://images.unsplash.com/photo-1567360425618-1594206637d2?w=400&h=300&fit=crop" },
  { id:15, name:"Conjunto de xícaras de porcelana", category:"Área Gourmet e Recepção", price:"R$ 150", photo:"https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop" },
];

export function Gifts() {
  const [active, setActive] = useState<string>(CATEGORIES[0]);
  const [selected, setSelected] = useState<Gift | null>(null);

  const items = GIFTS.filter((g) => g.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-4 py-2 text-xs uppercase tracking-luxe border transition-colors ${
              active === c
                ? "border-gold text-foreground bg-champagne"
                : "border-border text-muted-foreground hover:border-gold/60"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border/60 border border-border/60">
        {items.map((g) => (
          <div
            key={g.id}
            className="bg-card flex flex-col group cursor-pointer"
            onClick={() => setSelected(g)}
          >
            <div className="overflow-hidden">
              <img
                src={g.photo}
                alt={g.name}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <div className="font-serif text-lg text-foreground leading-snug">{g.name}</div>
                <div className="mt-2 text-[11px] uppercase tracking-luxe text-gold">{g.price}</div>
              </div>
              <button className="mt-4 text-xs uppercase tracking-luxe text-foreground border-b border-gold/60 pb-1 self-start hover:text-gold transition-colors">
                Presentear
              </button>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm flex items-center justify-center p-4 fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-background max-w-md w-full p-8 relative border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              aria-label="Fechar"
            >
              <X size={18} />
            </button>
            <div className="text-center">
              <div className="text-[10px] uppercase tracking-luxe text-gold">Presente</div>
              <h3 className="font-serif text-2xl mt-2 text-foreground">{selected.name}</h3>
              <div className="mt-1 text-[11px] uppercase tracking-luxe text-gold">{selected.price}</div>
              <div className="gold-rule my-6" />
              <p className="text-sm text-muted-foreground">
                Envie o valor diretamente via PIX para os noivos. O que vier do coração é bem-vindo!
              </p>
              <div className="mt-6 bg-champagne/60 p-6 flex flex-col items-center gap-3">
                <img src={pixQrImg} alt="QR Code PIX" className="w-44 h-44 object-contain" />
                <div className="text-[10px] uppercase tracking-luxe text-muted-foreground mt-2">
                  Chave PIX (telefone)
                </div>
                <div className="flex items-center gap-2">
                  <code className="text-sm font-serif">{PIX_KEY}</code>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(PIX_KEY);
                      toast.success("Chave copiada!");
                    }}
                    className="text-muted-foreground hover:text-gold"
                    aria-label="Copiar chave"
                  >
                    <Copy size={14} />
                  </button>
                </div>
                <p className="text-xs text-muted-foreground text-center mt-1">
                  Titular: Camila Caetano
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
