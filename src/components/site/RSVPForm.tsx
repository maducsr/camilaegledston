import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const schema = z.object({
  full_name: z.string().trim().min(3, "Informe seu nome completo").max(120),
  phone: z.string().trim().min(8, "Telefone inválido").max(30),
  attending: z.enum(["yes", "no"]),
  message: z.string().trim().max(500).optional(),
});

function normalize(s: string) {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

export function RSVPForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      full_name: fd.get("full_name"),
      phone: fd.get("phone"),
      attending: fd.get("attending"),
      message: fd.get("message") || undefined,
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message || "Verifique os campos");
      return;
    }
    setLoading(true);
    try {
      // Validate against guest list (fuzzy: typed name must contain a listed name)
      const typed = normalize(parsed.data.full_name);
      const typedTokens = typed.split(" ").filter(Boolean);

      const { data: allGuests } = await supabase
        .from("guests")
        .select("normalized_name");

      const list = allGuests ?? [];
      const matched = list.length === 0 || list.some((g) => {
        const name = g.normalized_name;
        if (!name) return false;
        if (name === typed) return true;
        const tokens = name.split(/\s+/).filter(Boolean);
        // Contiguous substring match (handles "Maria Eduarda" inside a full name)
        if ((` ${typed} `).includes(` ${tokens.join(" ")} `)) return true;
        // All tokens present in typed name (handles middle names / surnames added)
        return tokens.every((t) => typedTokens.includes(t));
      });

      if (!matched) {
        toast.error("Seu nome não foi encontrado na lista de convidados. Confira a grafia ou entre em contato com os anfitriões.");
        setLoading(false);
        return;
      }

      const { error } = await supabase.from("rsvps").insert({
        full_name: parsed.data.full_name,
        phone: parsed.data.phone,
        attending: parsed.data.attending === "yes",
        message: parsed.data.message ?? null,
      });
      if (error) throw error;
      setDone(true);
      toast.success("Confirmação registrada. Obrigado!");
    } catch {
      toast.error("Não foi possível registrar agora. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div className="text-center py-12 fade-up">
        <div className="font-serif text-3xl text-foreground">Obrigado.</div>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto">
          Sua resposta foi recebida com carinho. Será uma alegria celebrar este momento.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-5 max-w-xl mx-auto bg-card border border-border/60 p-8 sm:p-10"
    >
      <Field label="Nome completo">
        <input
          name="full_name"
          required
          maxLength={120}
          className="input"
          placeholder="Seu nome como cadastrado"
        />
      </Field>
      <Field label="Telefone (WhatsApp)">
        <input name="phone" required maxLength={30} className="input" placeholder="(62) 99999-9999" />
      </Field>
      <Field label="Você poderá comparecer?">
        <div className="flex gap-6 pt-1">
          <label className="flex items-center gap-2 text-sm">
            <input type="radio" name="attending" value="yes" defaultChecked className="accent-[color:var(--gold)]" />
            Sim, estarei presente
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="radio" name="attending" value="no" className="accent-[color:var(--gold)]" />
            Não poderei ir
          </label>
        </div>
      </Field>
      <Field label="Mensagem aos noivos (opcional)">
        <textarea name="message" rows={4} maxLength={500} className="input resize-none" />
      </Field>
      <p className="text-xs text-muted-foreground">
        Confirmação somente para convidados cadastrados. Não é permitido acompanhante. Confirme até 1 mês antes do evento.
      </p>
      <button
        type="submit"
        disabled={loading}
        className="mt-2 bg-foreground text-primary-foreground py-3 uppercase tracking-luxe text-xs hover:bg-gold transition-colors disabled:opacity-60"
      >
        {loading ? "Enviando…" : "Confirmar Presença"}
      </button>
      <style>{`.input{background:transparent;border:0;border-bottom:1px solid var(--color-border);padding:.6rem .1rem;font-size:.95rem;color:var(--color-foreground);outline:none;transition:border-color .3s}.input:focus{border-color:var(--gold)}`}</style>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[10px] uppercase tracking-luxe text-muted-foreground mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}
