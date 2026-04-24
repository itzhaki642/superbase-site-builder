
-- Fix function search path
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Strengthen contact_messages insert policy
DROP POLICY IF EXISTS "Anyone can submit contact messages" ON public.contact_messages;
CREATE POLICY "Anyone can submit contact messages"
  ON public.contact_messages FOR INSERT
  WITH CHECK (
    char_length(name) > 0 AND char_length(name) <= 100
    AND char_length(phone) > 0 AND char_length(phone) <= 30
    AND char_length(email) > 0 AND char_length(email) <= 255
    AND char_length(message) > 0 AND char_length(message) <= 2000
  );
