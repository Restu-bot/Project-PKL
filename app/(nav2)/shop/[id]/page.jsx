"use client";
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import one from "@/public/persons/person_1.jpg";
import two from "@/public/persons/person_2.jpg";
import tree from "@/public/persons/person_3.jpg";
import four from "@/public/persons/person_4.jpg";

export default function Detail({ searchParams }) {
  const [form, setForm] = useState({
    quantity: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <>
      <div className="mx-auto p-4 pt-28 grid grid-cols-3 gap-x-8">
        <div>
          <Link href="/shop">
            <Icon
              icon="ion:arrow-back-circle-outline"
              className="text-3xl text-green-900"
            ></Icon>
          </Link>
          <img src={searchParams.image} />
        </div>
        <section>
          <div className="font-bold text-3xl">{searchParams.name}</div>
          <div>Sold 2.000 pieces</div>
          <div className="flex">
            <Icon
              icon="mingcute:star-fill"
              className="text-xl text-yellow-300"
            />
            <b className="pl-2">4.9 (1.364 rating)</b>
          </div>
          <div className="flex gap-4 mt-2">
            <div className="bg-green-900 text-white p-1 rounded-xl w-20 text-center">
              furniture
            </div>
            <div className="bg-green-900 text-white p-1 rounded-xl w-16 text-center">
              chairs
            </div>
          </div>
          <div className="flex gap-4 mt-2">
            {searchParams.discount && searchParams.discount !== "null" ? (
              <div className="flex gap-x-2">
                <span className="bg-green-900 text-white py-1 px-2 text-xl rounded-xl w-24 text-center line-through">
                  $ {searchParams.price}
                </span>
                <span className="bg-yellow-400 text-white py-1 px-2 text-xl rounded-xl w-24 text-center">
                  ${" "}
                  {((searchParams.price * searchParams.discount) / 100).toFixed(
                    2
                  )}{" "}
                </span>
              </div>
            ) : (
              <div className="bg-green-900 text-white py-1 px-2 text-xl rounded-xl w-24 text-center">
                $ {searchParams.price}
              </div>
            )}
          </div>
          <div className="py-4 text-justify">{searchParams.desc}</div>
        </section>
        <section className="border-green-900 border-2 rounded-xl">
          <h2 className="font-semibold text-xl text-center text-black py-4">
            Checkout here
          </h2>
          <form className="text-center">
            <input
              type={"number"}
              id="quantity"
              name="quantity"
              min={0}
              max={34}
              placeholder="Quantity"
              className="pl-2 py-1 w-80 border-green-900 border-2 rounded-full"
              onChange={handleChange}
              value={form.quantity < 34 ? form.quantity : 34}
            />
            <p className="pt-2">
              Stok avaible : {34 - (form.quantity <= 34 ? form.quantity : 34)}
            </p>
            <div className="pt-16">
              {searchParams.discount && searchParams.discount !== "null" ? (
                <span className="text-4xl font-bold">
                  ${" "}
                  {(
                    searchParams.price *
                    (searchParams.discount / 100) *
                    (form.quantity <= 34 ? form.quantity : 34)
                  ).toFixed(2)}
                </span>
              ) : (
                <span className="text-4xl font-bold">
                  ${" "}
                  {(
                    searchParams.price *
                    (form.quantity <= 34 ? form.quantity : 34)
                  ).toFixed(2)}
                </span>
              )}
            </div>
            <p className="pt-2">Subtotal</p>
            <button
              type="submit"
              className="bg-green-900 text-white py-1 px-2 mb-2 mt-16 rounded-lg w-80 text-center"
            >
              Add to cart +
            </button>
            <button
              type="submit"
              className="bg-yellow-400 text-black py-1 px-2  rounded-lg w-80 text-center"
            >
              Checkout Now +
            </button>
          </form>
        </section>
      </div>
      <div className="font-bold text-xl text-center py-2">Testimonies</div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={true}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="h-80 flex text-center"
      >
        <SwiperSlide>
          <div className="flex justify-center">
          <img src={one.src} className="w-40"/>
          </div>
          <p className="font-bold mt-2">Person 1</p>
          <p className="text-justify px-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, natus voluptatem numquam doloremque hic molestiae non
              perferendis commodi ipsa ratione facilis.</p>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex justify-center">
          <img src={two.src} className="w-40"/>
          </div>
          <p className="font-bold mt-2">Person 2</p>
          <p className="text-justify px-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, natus voluptatem numquam doloremque hic molestiae non
              perferendis commodi ipsa ratione facilis.</p>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex justify-center">
          <img src={tree.src} className="w-40"/>
          </div>
          <p className="font-bold mt-2">Person 3</p>
          <p className="text-justify px-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, natus voluptatem numquam doloremque hic molestiae non
              perferendis commodi ipsa ratione facilis.</p>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex justify-center">
          <img src={four.src} className="w-40"/>
          </div>
          <p className="font-bold mt-2">Person 4</p>
          <p className="text-justify px-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, natus voluptatem numquam doloremque hic molestiae non
              perferendis commodi ipsa ratione facilis.</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
