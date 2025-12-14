-- Add placement column to people_networks table
ALTER TABLE public.people_networks 
ADD COLUMN placement integer NOT NULL DEFAULT 1;

-- Update placement values for existing records
UPDATE public.people_networks SET placement = 1 WHERE name = 'Dr. Mohsen Malekinejad';
UPDATE public.people_networks SET placement = 2 WHERE name = 'Dr. Brenda Miao';
UPDATE public.people_networks SET placement = 3 WHERE name = 'Dr. Oommen John';
UPDATE public.people_networks SET placement = 4 WHERE name = 'J-PAL';
UPDATE public.people_networks SET placement = 5 WHERE name = 'Digital Square';
UPDATE public.people_networks SET placement = 6 WHERE name = 'Transform Health';