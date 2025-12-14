-- Create people_networks table
CREATE TABLE public.people_networks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  affiliation TEXT NOT NULL,
  focus TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('researcher', 'organization')),
  link TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.people_networks ENABLE ROW LEVEL SECURITY;

-- Create public read policy
CREATE POLICY "People networks are publicly readable"
ON public.people_networks FOR SELECT
USING (true);