import { createClient } from '@supabase/supabase-js';
import { subbase } from '../utils/settings';
export const client = createClient(
  process.env.REACT_APP_SUPABASE_URL || subbase.URL,
  process.env.REACT_APP_SUPABASE_KEY || subbase.KEY
);

export function checkError({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}
