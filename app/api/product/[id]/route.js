import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_BASE_URL, process.env.NEXT_PUBLIC_SUPABASE_API_KEYS)

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    return new Response(
      JSON.stringify({
        status: 200,
        message: "Success get product",
        data,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.log(error);
    
    return new Response(
      JSON.stringify({
        status: 400,
        message: "Failed to get product",
        error: error.message,
      }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const payload = await req.json(); 

    if (payload.status == null) {
      return new Response(
        JSON.stringify({
          status: 400,
          message: "Status field is required",
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { data, error } = await supabase
      .from('products')
      .update({ status: payload.status })
      .eq('id', id);
    if (error) {
      throw error;
    }

    return new Response(
      JSON.stringify({
        status: 200,
        message: "Success update product status",
        data,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.log(error);
    
    return new Response(
      JSON.stringify({
        status: 400,
        message: "Failed to update product status",
        error: error.message,
      }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function DELETE(req,{params}) {
  try {
    const { id } = params; 

    const { data, error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);

    if (error) {
      throw error;
    }

    return new Response(
      JSON.stringify({
        status: 200,
        message: "Success delete product",
        data,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.log(error);
    
    return new Response(
      JSON.stringify({
        status: 400,
        message: "Failed to delete product",
        error: error.message,
      }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
}