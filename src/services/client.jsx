import { createClient } from '@supabase/supabase-js';

console.log('LOOK HERER~!', process.env.REACT_APP_SUPABASE_URL);
export const client = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

export function checkError({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}
