
-- Deny UPDATE on contact_messages
CREATE POLICY "No updates on contact messages"
ON public.contact_messages
FOR UPDATE
TO public
USING (false)
WITH CHECK (false);

-- Deny DELETE on contact_messages
CREATE POLICY "No deletes on contact messages"
ON public.contact_messages
FOR DELETE
TO public
USING (false);
