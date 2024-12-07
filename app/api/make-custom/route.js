export async function POST(req) {
    const { material, quantity, color, mark } = await req.json();
    // Validation example
    if (!material || !quantity || !color || !mark) {
      return new Response(JSON.stringify({
        message : "Please make sure input is complete!"
      }), {
        status : 400,
      });
    }


    return new Response(JSON.stringify({ message: 'Data received successfully',
      data: {
        material,
        quantity,
        color,
        mark,
      },
      status : 200,
      code : 1,
    }), {
      status: 200,
    });
}