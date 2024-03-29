import { Database } from "@lib/schema";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";

interface SupabaseResult {
  data?: { count: number };
}

const getViews = async (slug: string): Promise<number> => {
  const session = useSession();
  const supabase = createClientComponentClient<Database>({
    isSingleton: false,
  });
  const { data: views, error }: SupabaseResult = await supabase
    .from("views")
    .select(`count`)
    .match({ slug: slug })
    .single();
  if (error && error.details.includes(`0 rows`)) {
    const { data, error }: SupabaseResult = await supabase
      .from(`views`)
      .insert({ slug: slug, count: 1 }, { returning: `representation` })
      .single();
    return data.count;
  }
  if (!views) {
    return 0;
  }
  return views.count;
};
///
const registerView = async (slug: string): Promise<void> => {
  const { data, error } = await supabase.rpc("increment", {
    slug_text: slug,
  });
};
export { getViews, registerView };