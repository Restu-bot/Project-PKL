import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';

cloudinary.config({ 
    cloud_name: 'dilzm9jdf', 
    api_key: '495778993255916', 
    api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

function bufferToStream(buffer) {
  const readable = new Readable();
  readable._read = () => {}; // No-op
  readable.push(buffer);
  readable.push(null);
  return readable;
}

export async function POST(req) {
  try {
    const formData = await req.formData(); // Get form data
    const files = formData.getAll('images'); // Get all uploaded images

    if (files.length === 0) {
      return new Response(JSON.stringify({ message: 'No images provided' }), {
        status: 400,
      });
    }

    const uploadPromises = files.map( (file,idx) => {
      return new Promise(async (resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream({ 
          folder: 'uploads',
          public_id : `thumbnail-${idx + 1}`
         }, (error, result) => {
          if (error) {
            return reject(error);
          }
          resolve(result.secure_url); // Return the uploaded image URL
        });

        const fileBuffer = Buffer.from(await file.arrayBuffer());
        bufferToStream(fileBuffer).pipe(uploadStream); // Convert file to stream and pipe to Cloudinary
      });
    });

    const results = await Promise.all(uploadPromises); // Upload all images

    return new Response(JSON.stringify({ 
      message: 'Upload successful!',
      urls: results // Return all uploaded image URLs
    }), {
      status: 200,
    });

  } catch (error) {
    console.error('Upload error:', error);
    return new Response(JSON.stringify({ 
      message: 'Upload failed', 
      error: error.message 
    }), {
      status: 500,
    });
  }
}



// (async function() {
    
    // Upload an image
    //  const uploadResult = await cloudinary.uploader
    //    .upload(
    //        'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
    //            public_id: 'shoes',
    //        }
    //    )
    //    .catch((error) => {
    //        console.log(error);
    //    });
    
    // console.log(uploadResult);
    
    // // Optimize delivery by resizing and applying auto-format and auto-quality
    // const optimizeUrl = cloudinary.url('product', {
    //     fetch_format: 'auto',
    //     quality: 'auto'
    // });
    
    // console.log(optimizeUrl);
    
    // // Transform the image: auto-crop to square aspect_ratio
    // const autoCropUrl = cloudinary.url('product', {
    //     crop: 'auto',
    //     gravity: 'auto',
    //     width: 500,
    //     height: 500,
    // });
    
    // console.log(autoCropUrl);    
// })();