CREATE TABLE public.summit_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  track TEXT NOT NULL CHECK (track IN ('startup','enterprise','sponsor')),
  organization TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  contact_role TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  website TEXT,
  city TEXT,
  sector TEXT,
  team_size TEXT,
  support_type TEXT,
  description TEXT,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.summit_applications TO anon;
GRANT INSERT ON public.summit_applications TO authenticated;
GRANT ALL ON public.summit_applications TO service_role;

ALTER TABLE public.summit_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a summit application"
  ON public.summit_applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);