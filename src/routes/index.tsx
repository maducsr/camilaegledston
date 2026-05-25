import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/site/Nav";
import { Countdown } from "@/components/site/Countdown";
import { Section, SectionLabel, SectionTitle } from "@/components/site/Section";
import { RSVPForm } from "@/components/site/RSVPForm";
import { Gifts } from "@/components/site/Gifts";
import { MapPin, Phone } from "lucide-react";
import heroImg from "@/assets/hero-couple.jpg";
import storyImg from "@/assets/story.jpg";
import ringsImg from "@/assets/rings.jpg";
import eventImg from "@/assets/event.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    "Villagio São Bento, Rua Barão de Macaúbas, Quadra HJ2, Lote 3, Sítios de Recreio Mansões do Campus, Goiânia - GO, 74691-100",
  );

function Home() {
  return (
    <div id="top" className="bg-background text-foreground">
      <Toaster position="top-center" />
      <Nav />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-espresso">
        <img
          src={heroImg}
          alt="Gledston e Camila"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-95"
        />
        {/* refined dual overlay: soft top vignette + warm bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/55 via-espresso/25 to-espresso/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.35)_100%)]" />

        <div className="relative z-10 text-center px-6 pt-28 pb-20 max-w-3xl">
          <div className="fade-up delay-1 text-ivory/80 uppercase tracking-luxe text-[10px]">
            Bodas de Prata &nbsp;•&nbsp; 25 Anos
          </div>

          <div className="mt-10 fade-up delay-2">
            <span className="hair-rule block w-16 mx-auto mb-10 opacity-70" />
            <h1 className="font-serif text-ivory leading-[0.95]">
              <span className="block text-6xl sm:text-7xl md:text-[5.5rem]">Gledston</span>
              <span className="block font-script text-gold text-3xl sm:text-4xl my-4 sm:my-5">
                &amp;
              </span>
              <span className="block text-6xl sm:text-7xl md:text-[5.5rem]">Camila</span>
            </h1>
            <span className="hair-rule block w-16 mx-auto mt-10 opacity-70" />
          </div>

          <p className="mt-10 font-serif italic text-lg sm:text-xl text-ivory/85 max-w-lg mx-auto fade-up delay-3">
            “25 anos de amor, parceria e gratidão.”
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-[10px] uppercase tracking-luxe text-ivory/75 fade-up delay-4">
            <span>05 de Julho de 2026</span>
            <span className="hidden sm:inline h-px w-6 bg-ivory/40" />
            <span>Villagio São Bento &nbsp;•&nbsp; Goiânia</span>
          </div>

          <div className="mt-14 flex flex-col sm:flex-row gap-3 justify-center fade-up delay-5">
            <a
              href="#rsvp"
              className="bg-ivory text-espresso px-10 py-4 uppercase tracking-luxe text-[10px] hover:bg-gold hover:text-ivory transition-colors duration-500"
            >
              Confirmar Presença
            </a>
            <a
              href="#presentes"
              className="border border-ivory/70 text-ivory px-10 py-4 uppercase tracking-luxe text-[10px] hover:border-gold hover:text-gold transition-colors duration-500"
            >
              Lista de Presentes
            </a>
          </div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/60 text-[9px] uppercase tracking-luxe fade-in delay-5">
          <span className="block">role</span>
          <span className="mt-3 block w-px h-10 bg-ivory/40 mx-auto" />
        </div>
      </section>

      {/* COUNTDOWN */}
      <section className="py-20 px-6 bg-champagne/50 border-y border-border/40">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>Contagem Regressiva</SectionLabel>
          <div className="mt-12">
            <Countdown />
          </div>
        </div>
      </section>


      {/* HISTÓRIA */}
      <Section id="historia">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <SectionLabel>Nossa História</SectionLabel>
            <h2 className="mt-5 font-serif text-3xl sm:text-5xl leading-tight">
              Uma caminhada construída <span className="font-script text-gold">com fé e tempo.</span>
            </h2>
            <div className="gold-rule my-8 max-w-[120px]" />
            <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Nossa história começou em um evento da igreja, quando Gledston pediu o telefone de
                Camila e iniciaram uma amizade cheia de conversas e descobertas.
              </p>
              <p>
                No começo, Camila não imaginava que aquela aproximação se transformaria em amor,
                principalmente pela diferença de idade. Mas Gledston acreditou no encontro dos dois
                e seguiu conquistando espaço com carinho, presença e persistência.
              </p>
              <p>
                Entre partidas de futebol da igreja — ele com os homens do time e ela entre as
                meninas — nasceu um convite especial. Depois de um desses jogos, veio o pedido de
                namoro, e Camila disse sim.
              </p>
              <p>
                Nossa caminhada aconteceu de forma intensa e muito especial: namoramos, noivamos e
                nos casamos em apenas um ano e um mês.
              </p>
              <p>
                Hoje celebramos 25 anos de casamento, marcados por amor, parceria, fé e pela alegria
                de construir uma família. Entre todas as bênçãos recebidas, o nascimento dos nossos
                filhos permanece como um dos maiores presentes que Deus nos concedeu.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <img
              src={storyImg}
              alt="Caminhada do casal"
              loading="lazy"
              width={1200}
              height={1500}
              className="w-full h-[60vh] md:h-[78vh] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-background border border-border p-5 max-w-[180px]">
              <div className="text-[10px] uppercase tracking-luxe text-gold">Desde</div>
              <div className="font-serif text-3xl mt-1">2001</div>
              <div className="text-xs text-muted-foreground mt-1">Um amor que floresce com o tempo</div>
            </div>
          </div>
        </div>
      </Section>

      {/* EVENTO */}
      <Section id="evento" className="bg-champagne/40 border-y border-border/50">
        <div className="text-center">
          <SectionLabel>Informações do Evento</SectionLabel>
          <SectionTitle>A Celebração</SectionTitle>
          <div className="gold-rule mx-auto my-8 max-w-[120px]" />
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-stretch mt-12">
          <img
            src={eventImg}
            alt="Recepção elegante"
            loading="lazy"
            width={1400}
            height={900}
            className="w-full h-full object-cover min-h-[300px]"
          />
          <div className="bg-background border border-border p-8 sm:p-12">
            <Info label="Data" value="05 de Julho de 2026" />
            <Info label="Horário" value="16h00" />
            <Info label="Local" value="Villagio São Bento" />
            <Info
              label="Endereço"
              value={
                <>
                  Rua Barão de Macaúbas, Quadra HJ2, Lote 3, s/n
                  <br />
                  Sítios de Recreio Mansões do Campus
                  <br />
                  Goiânia – GO · CEP 74691-100
                </>
              }
            />
            <Info label="Dress Code" value="Esporte fino" last />
            <a
              href={MAP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 border border-gold text-foreground px-6 py-3 uppercase tracking-luxe text-xs hover:bg-gold hover:text-primary-foreground transition-colors"
            >
              <MapPin size={14} /> Abrir no mapa
            </a>
          </div>
        </div>
      </Section>

      {/* RSVP */}
      <Section id="rsvp">
        <div className="text-center mb-12">
          <SectionLabel>Confirmação de Presença</SectionLabel>
          <SectionTitle>Sua presença é o nosso presente</SectionTitle>
          <div className="gold-rule mx-auto my-8 max-w-[120px]" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Pedimos a gentileza de confirmar até 1 mês antes da celebração.
          </p>
        </div>
        <RSVPForm />
      </Section>

      {/* PRESENTES */}
      <Section id="presentes" className="bg-champagne/40 border-y border-border/50">
        <div className="text-center mb-6">
          <SectionLabel>Lista de Presentes</SectionLabel>
          <SectionTitle>Uma lembrança simbólica</SectionTitle>
          <div className="gold-rule mx-auto my-8 max-w-[120px]" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Celebrar 25 anos ao lado de pessoas tão especiais já é o maior presente que poderíamos
            receber. Para quem desejar nos presentear, deixamos algumas sugestões com carinho —
            mas o que mais importa é a alegria de compartilhar esse dia com você. ✨
          </p>
        </div>
        <div className="my-10 flex justify-center">
          <img
            src={ringsImg}
            alt="Alianças"
            loading="lazy"
            width={1200}
            height={900}
            className="w-full max-w-xl h-56 object-cover"
          />
        </div>
        <Gifts />
      </Section>

      {/* CONTATO */}
      <Section id="contato">
        <div className="text-center">
          <SectionLabel>Contato</SectionLabel>
          <SectionTitle>Fale conosco</SectionTitle>
          <div className="gold-rule mx-auto my-8 max-w-[120px]" />
          <p className="text-muted-foreground max-w-md mx-auto">
            Para qualquer dúvida sobre o evento, fique à vontade para entrar em contato.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-3 gap-px bg-border max-w-3xl mx-auto border border-border">
          <Contact name="Camila" phone="62993260000" />
          <Contact name="Gledston" phone="62999128194" />
          <Contact name="Maria Eduarda" phone="629831004085" />
        </div>
      </Section>

      <footer className="py-12 px-6 text-center border-t border-border bg-background">
        <div className="font-script text-2xl text-gold">G &amp; C</div>
        <p className="mt-3 text-xs uppercase tracking-luxe text-muted-foreground">
          25 anos · 2001 — 2026
        </p>
      </footer>
    </div>
  );
}

function Info({
  label,
  value,
  last = false,
}: {
  label: string;
  value: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div className={`py-4 ${!last ? "border-b border-border/60" : ""}`}>
      <div className="text-[10px] uppercase tracking-luxe text-gold">{label}</div>
      <div className="mt-2 font-serif text-lg text-foreground leading-snug">{value}</div>
    </div>
  );
}

function Contact({ name, phone }: { name: string; phone: string }) {
  const formatted = phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  return (
    <div className="bg-background p-8 text-center">
      <div className="text-[10px] uppercase tracking-luxe text-gold mb-3">WhatsApp</div>
      <div className="font-serif text-xl text-foreground">{name}</div>
      <a
        href={`https://wa.me/55${phone}`}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
      >
        <Phone size={14} /> {formatted}
      </a>
    </div>
  );
}
