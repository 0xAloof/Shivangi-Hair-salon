import { createClient } from '@supabase/supabase-js';

const hasMetaEnv = typeof import.meta !== 'undefined' && Boolean(import.meta.env);

const supabaseUrl =
  (hasMetaEnv ? import.meta.env.VITE_SUPABASE_URL : undefined) ||
  'https://placeholder-project.supabase.co';
const supabaseAnonKey =
  (hasMetaEnv ? import.meta.env.VITE_SUPABASE_ANON_KEY : undefined) ||
  'placeholder-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

