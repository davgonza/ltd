import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.REACT_APP_STYTCH_PROJECT_ID;
const supabaseKey = import.meta.env.REACT_APP_STYTCH_SECRET;

export const supabase = createClient(supabaseUrl, supabaseKey);
