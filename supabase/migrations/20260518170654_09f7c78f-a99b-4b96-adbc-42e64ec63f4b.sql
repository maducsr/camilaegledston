
-- Guests allowed to RSVP
CREATE TABLE public.guests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  normalized_name text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.guests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read guests" ON public.guests FOR SELECT USING (true);

-- RSVPs
CREATE TABLE public.rsvps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  phone text NOT NULL,
  attending boolean NOT NULL,
  message text,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.rsvps ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit RSVP" ON public.rsvps FOR INSERT WITH CHECK (true);

-- Gifts
CREATE TABLE public.gifts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL,
  reserved boolean NOT NULL DEFAULT false,
  reserved_by text,
  reserved_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.gifts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read gifts" ON public.gifts FOR SELECT USING (true);
CREATE POLICY "Public can reserve gifts" ON public.gifts FOR UPDATE USING (true) WITH CHECK (true);
