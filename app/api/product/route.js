import { createClient } from ' '
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_BASE_URL, process.env.NEXT_PUBLIC_SUPABASE_API_KEYS)

export async function POST(req){
  try {
    const payload = await req.json()
    const {error} = await supabase.from('products').insert({
      ...payload,
    })
  
    if(error) {
      throw error
    }
    
    return new Response(JSON.stringify({
        status: 200,
        message: "Success create product",
        data,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
    
  } catch (error) {
     return new Response({
      status : 400,
      message : "Failed create product",
    })
  }
}

export async function GET(req,res){
  try {
    const {error,data } = await supabase.from('products').select()
    if(error) {
      throw error
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
    console.log(error)
     return new Response({
      status : 400,
      message : "Failed get product",
    })
  }
}

export async function PUT(req,res) {
  try {
    const payload = await req.json()
    // console.log(payload)
  const {error} = await supabase.from('products')
    .update({
      ...payload,
    }).eq("id", payload.id)

  if(error) {
    throw error
  }
  
  return new Response(
    JSON.stringify({
      status : 200,
      message : "Success update product",
     })
    )
  } catch (error) {
    throw error
  }
  
}
