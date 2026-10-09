import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bhbjdapsitmciauaffvh.supabase.co";

const supabaseKey = "sb_publishable_Hrlq0XWVu6p2G588O-YYZA_Mh6XmDcd";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
