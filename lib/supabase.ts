import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? 'placeholder';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ContactEnquiry = {
  id?: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  created_at?: string;
  status?: 'new' | 'contacted' | 'resolved';
};

export type Application = {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  program: string;
  qualification: string;
  experience: string;
  message?: string;
  created_at?: string;
  status?: 'pending' | 'reviewing' | 'accepted' | 'rejected';
};
