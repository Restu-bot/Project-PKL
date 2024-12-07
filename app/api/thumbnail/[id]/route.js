import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_BASE_URL, process.env.NEXT_PUBLIC_SUPABASE_API_KEYS)

export async function GET(req,{params}) {
  try {
    const { id } = params;
    const { data, error } = await supabase
      .from('thumbnails')
      .select('*')
      .eq('productId', id)
      .single();

    if (error) {
      throw error;
    }

    return new Response(
      JSON.stringify({
        status: 200,
        message: "Success get thumnails",
        data,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.log(error);
    
    return new Response(
      JSON.stringify({
        status: 400,
        message: "Failed to get thumbnails",
        error: error.message,
      }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
}