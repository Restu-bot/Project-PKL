"use client";
// import Image from 'next/image'
// import React from 'react';
// import satu from "@/public/assets/product-1.png"
// import dua from "@/public/assets/product-2.png"
// import tiga from "@/public/assets/product-3.png"
import { products } from "@/app/constants/products";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

// const product = [
//     {
//       id: 1,
//       name: 'Data local 1',
//       price: 170.60,
//       imageUrl: satu.src,
//     },
//     {
//       id: 2,
//       name: 'Data local 2',
//       price: 180.08,
//       imageUrl: dua.src,
//     },
//     {
//       id: 3,
//       name: 'Data local 3',
//       price: 180.08,
//       imageUrl: tiga.src,
//     },
//     {
//         id: 1,
//         name: 'Data local 1',
//         price: 170.60,
//         imageUrl: satu.src,
//       },
//       {
//         id: 2,
//         name: 'Data local 2',
//         price: 180.08,
//         imageUrl: dua.src,
//       },
//       {
//         id: 3,
//         name: 'Data local 3',
//         price: 180.08,
//         imageUrl: tiga.src,
//       },
//       {
//         id: 1,
//         name: 'Data local 1',
//         price: 170.60,
//         imageUrl: satu.src,
//       },
//       {
//         id: 2,
//         name: 'Data local 2',
//         price: 180.08,
//         imageUrl: dua.src,
//       },
//       {
//         id: 3,
//         name: 'Data local 3',
//         price: 180.08,
//         imageUrl: tiga.src,
//       },
//       {
//         id: 1,
//         name: 'Data local 1',
//         price: 170.60,
//         imageUrl: satu.src,
//       },
//       {
//         id: 2,
//         name: 'Data local 2',
//         price: 180.08,
//         imageUrl: dua.src,
//       },
//       {
//         id: 3,
//         name: 'Data local 3',
//         price: 180.08,
//         imageUrl: tiga.src,
//       },
//       {
//         id: 1,
//         name: 'Data local 1',
//         price: 170.60,
//         imageUrl: satu.src,
//       },
//       {
//         id: 2,
//         name: 'Data local 2',
//         price: 180.08,
//         imageUrl: dua.src,
//       },
//       {
//         id: 3,
//         name: 'Data local 3',
//         price: 180.08,
//         imageUrl: tiga.src,
//       },
//   ];

export default function ShopPage() {
  const router = useRouter();
  const toDetail = (product) => {
    let queryString = "";
    Object.keys(product).forEach((el, i) => {
      if (i == 0) {
        queryString += `?${el}=${product[el]}`;
      } else {
        queryString += `&${el}=${product[el]}`;
      }
    });
    router.push(`/shop/${product.id}${queryString}`);
  };

  return (
    <>
      <div className="container mx-auto p-4 py-20">
        <h1 className="text-xl font-bold my-4 px-2">Furni's Catalogue</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="shadow-lg bg-white rounded-lg overflow-hidden transition duration-900 hover:scale-110 transform"
              onClick={() => {
                toDetail(product);
              }}
            >
              {product.top_product ? (
                <div className="absolute top-0 right-0 bg-gray-800 w-10 flex justify-center rounded-bl-xl text-white">
                  {product.top_product}
                  <Icon icon="mingcute:star-fill" className="text-xl" />
                </div>
              ) : null}
              {product.discount ? (
                <div className="absolute top-0 right-0 bg-yellow-400 w-10 text-center rounded-bl-xl text-white">
                  {product.discount}%
                </div>
              ) : null}
              <img
                src={product.image}
                alt={product.name}
                className="w-full pt-4"
              />
              <p className="text-lg font-bold text-center">{product.name}</p>
              <p className="text-gray-600 text-center pb-4">${product.price}</p>
              {product.top_product ? (
                <div className="absolute bottom-0 left-0 bg-gray-800 w-10 flex justify-center rounded-tr-xl text-white">
                  {product.top_product}
                  <Icon icon="mingcute:star-fill" className="text-xl" />
                </div>
              ) : null}
              {product.discount ? (
                <div className="absolute bottom-0 left-0 bg-yellow-400 w-10 text-center rounded-tr-xl text-white">
                  {product.discount}%
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
