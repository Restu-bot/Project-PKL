"use client";
// import Image from 'next/image'
import React from "react";
import sofa from "@/public/assets/couch.png";
import us from "@/public/assets/choose-us.jpg";
import ser from "@/public/assets/services.jpg";
import satu from "@/public/assets/product-1.png";
import dua from "@/public/assets/product-2.png";
import tiga from "@/public/assets/product-3.png";
import Link from "next/link";
import { Icon } from "@iconify/react";

const chairs = [
  {
    id: 1,
    name: "Kursi 1",
    price: 50.0,
    image: satu.src,
  },
  {
    id: 2,
    name: "Kursi 2",
    price: 55.0,
    image: dua.src,
  },
  {
    id: 3,
    name: "Kursi 3",
    price: 54.6,
    image: tiga.src,
  },
];

export default function Home() {
  return (
    <>
      <div id="home"></div>
      <div className="bg-green-800 min-h-screen text-white font-sans">
        <main className="container mx-auto py-16 px-40 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h2 className="text-5xl font-bold leading-tight mb-4">
              Modern Interior <br /> Design Studio
            </h2>
            <p className="text-gray-300 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, natus voluptatem numquam doloremque hic molestiae non
              perferendis commodi ipsa ratione facilis.
            </p>
            <div className="flex space-x-4">
              <Link href="/shop">
                <button className="bg-yellow-400 text-green-800 py-2 px-5 rounded-full font-bold">
                  Shop Now
                </button>
              </Link>
              <Link href="/shop">
                <button className="bg-transparent border border-white py-2 px-5 rounded-full">
                  Explore
                </button>
              </Link>
            </div>
          </div>
          <div className="py-16">
            <img src={sofa.src} alt="Modern Sofa" width={500} height={300} />
          </div>
        </main>
      </div>

      <div id="products"></div>
      <div className="container mx-auto px-40 py-40 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">
              Crafted With <br /> Excellent Material
            </h2>
            <p className="mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, facilis asdkpaodk aksmdlad.
            </p>
            <Link href="/shop">
              <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                Explore
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 md:col-span-2 ">
            {chairs.map((chair) => (
              <div key={chair.id} className="text-center">
                <img
                  src={chair.image}
                  alt={chair.name}
                  className="mx-auto transition duration-900 hover:scale-110"
                />
                <h3 className="text-lg font-medium mt-4">{chair.name}</h3>
                <p className="text-gray-600">${chair.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="about-us"></div>
      <div className="container mx-auto px-40 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="text-left">
            <h2 className="text-3xl font-bold">Why Choose Us</h2>
            <h3 className="text-md font-semibold">
              Lorem ipsum dolor sit amet, consectetur adispisicing elit.
              Adipisci, dicta, ducimus consequuntur eaque doluta blanditiis.
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
              <div>
                <div className="items-left">
                  <Icon
                    icon="mdi:truck-outline"
                    fontSize={45}
                    className="mb-2"
                  />
                  <h3 className="text-md font-semibold">
                    Fast & Free Shipping
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. lure
                  aliquam similique sed tenetur exercitationem debitis quis.
                </p>
              </div>

              <div>
                <div className="items-left">
                  <Icon icon="tdesign:shop" fontSize={45} className="mb-2" />
                  <h3 className="text-md font-semibold ">Easy to Shop</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. lure
                  aliquam similique sed tenetur exercitationem debitis quis.
                </p>
              </div>

              <div>
                <div className="items-left">
                  <Icon
                    icon="ic:outline-support"
                    fontSize={45}
                    className="mb-2"
                  />
                  <h3 className="text-md font-semibold">24/7 Support</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. lure
                  aliquam similique sed tenetur exercitationem debitis quis.
                </p>
              </div>

              <div>
                <div className="items-left">
                  <Icon icon="tabler:refresh" fontSize={45} className="mb-2" />
                  <h3 className="text-md font-semibold">Hassle Free Returns</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. lure
                  aliquam similique sed tenetur exercitationem debitis quis.
                </p>
              </div>
            </div>
          </div>

          <div>
            <img src={us.src} />
          </div>
        </div>
      </div>

      <div id="services"></div>
      <div className="container mx-auto px-40 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={ser.src} />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-4">
              We Help You Make Modern Interior Design
            </h1>

            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Adipisci, dicta, ducimus consequuntur eaque soluta blanditiis.
              Lorem ipsum dolor sit amet..
            </p>

            <ul className="grid grid-cols-2 list-disc pl-4 mb-6">
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
            </ul>

            <Link href="/form">
              <button className="bg-green-900 text-yellow-400 px-6 py-2 w-40 rounded-full">
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
