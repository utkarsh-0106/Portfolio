/*
# Create messages table (single-tenant, no auth)

1. New Tables
- `messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's name
  - `email` (text, not null) — sender's email, for replies
  - `subject` (text, not null) — message subject
  - `message` (text, not null) — the body of the message
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `messages`.
- This is a public contact form on a portfolio with no sign-in, so the
  data is intentionally insertable by anyone (anon + authenticated).
- SELECT/UPDATE/DELETE are NOT granted to anon — only the owner reads
  messages privately (via the service role key in a protected context).
  Only INSERT is open to anon so visitors can submit the contact form.
*/

CREATE TABLE IF NOT EXISTS messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon + authenticated) to INSERT contact messages.
DROP POLICY IF EXISTS "anon_insert_messages" ON messages;
CREATE POLICY "anon_insert_messages" ON messages FOR INSERT
TO anon, authenticated WITH CHECK (true);
