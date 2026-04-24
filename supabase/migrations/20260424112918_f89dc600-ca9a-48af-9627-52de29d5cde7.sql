
-- Replace broad SELECT policy with a more restrictive one
-- Public buckets serve files via direct URL even without a SELECT policy on storage.objects.
-- Removing the listing policy prevents anonymous clients from enumerating all files.
DROP POLICY IF EXISTS "Anyone can view product images" ON storage.objects;

-- Only admins can list/inspect storage objects metadata (regular users still get the files via direct CDN URL)
CREATE POLICY "Admins can list product images"
  ON storage.objects FOR SELECT
  TO authenticated
  USING (
    bucket_id = 'product-images'
    AND public.has_role(auth.uid(), 'admin')
  );
