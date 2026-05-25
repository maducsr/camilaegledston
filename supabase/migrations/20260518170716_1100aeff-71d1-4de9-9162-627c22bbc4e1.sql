
DROP POLICY "Public can reserve gifts" ON public.gifts;
CREATE POLICY "Public can reserve unreserved gifts" ON public.gifts 
  FOR UPDATE USING (reserved = false) WITH CHECK (reserved = true);
