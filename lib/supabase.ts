import { createClient } from "@supabase/supabase-js";
import { Database } from "@lib/database.types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const client = createClient<Database>(supabaseUrl, supabaseKey);

const supabase = () => client;

export default supabase;
