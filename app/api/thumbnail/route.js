import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_BASE_URL, process.env.NEXT_PUBLIC_SUPABASE_API_KEYS)

export async function POST(req){
  try {
    const payload = await req.json()
    const {error} = await supabase.from('thumbnails').insert({
      ...payload,
    })
  
    if(error) {
      throw error
    }
    
    return new Response(JSON.stringify({
        status: 200,
        message: "Success save thumbnails",
        data,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
    
  } catch (error) {
     return new Response({
      status : 400,
      message : "Failed save thumbnails",
    })
  }
}