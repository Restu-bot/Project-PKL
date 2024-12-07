const thumbnails = ["product-1","product-2","product-3"]

export const products = [...Array(30)].map((_, i) => {
  const hasDiscount = Math.random() > 0.5 && i + 1 > 5; // 50% chance to apply discount
  return {
    // image : thumbnails[(i + 3) % 3],
    image : `/assets/${thumbnails[(i + 3) % 3]}.png`,
    id : `product-${i + 1}`,
    name : `Data local ${i +1}`,
    price : `${(Math.random() * (200 - 20) + 20).toFixed(2)}`,
    top_product : i + 1 <= 5,
    discount : hasDiscount ? Math.floor(Math.random() * 70 ) : null,
    desc : "Constructed from premium solid oak wood, known for its strength and durability, the frame exudes natural beauty with its rich, warm grain patterns. The chair's base is expertly carved using precision milling techniques, ensuring a flawless finish that speaks to the artisanal quality of its production. The seat and backrest are upholstered in the finest Italian leather, offering a buttery-soft texture that complements the chair's modern silhouette." }
})