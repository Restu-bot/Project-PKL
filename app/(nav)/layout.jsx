"use client";
import React, { useState } from "react";
// import Link from 'next/link'
// import { useRouter } from 'next/navigation'
import logo from "@/public/assets/logo-furni-1.png";
import { Icon } from "@iconify/react";

export default function Home({ children }) {
  // const router = useRouter()
  // const listMenu = [
  //   {
  //     name : "Home",
  //     path : "#home",
  //   },
  //   {
  //     name : "Product",
  //     path : "#products",
  //   },
  //   {
  //     name : "About Us",
  //     path : "#about-us",
  //   },
  //   {
  //     name : "Services",
  //     path : "#services",
  //   },
  // ]
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="w-full min-h-screen">
      <header className="container mx-auto h-20 px-40 flex justify-between items-center bg-green-800 fixed top-0 rounded-b-[6rem] z-50">
        <div className="py-16">
          <a href="#home">
            <img src={logo.src} alt="Logo Furni" width={70} />{" "}
          </a>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#home"
                className=" hover:border-b-4 border-b-yellow-500 text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="hover:border-b-4 border-b-yellow-500 text-white"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="#about-us"
                className="hover:border-b-4 border-b-yellow-500 text-white"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:border-b-4 border-b-yellow-500 text-white"
              >
                Services
              </a>
            </li>
          </ul>
        </nav>
        <button className="bg-transparent border border-white py-1 px-4 rounded-full hover:bg-yellow-400 hover:text-green-800 text-white">
          Login
        </button>
      </header>
      {children}
      <footer className="container mx-auto px-40 flex justify-between items-center bg-green-800 rounded-t-[6rem]">
        <div>
          <h3 className="text-md font-semibold my-2 flex items-center text-white">
            <Icon icon="bi:envelope" className="text-white text-xl mr-2" />
            Subscribe Our Newsletter
          </h3>
          <form className="flex space-x-4">
            {/* <span className='bg-secondary py-1 px-2 min-h-8'>Nilai name :{form.name}</span>
            <span className='bg-secondary py-1 px-2 min-h-8'>Nilai email :{form.email}</span> */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleInputChange}
              value={form.name}
              className="bg-transparent bg-white rounded-full py-2 px-3 w-20 focus:outline-none focus:border-yellow-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              value={form.email}
              className="bg-transparent bg-white rounded-full py-2 px-3 focus:outline-none focus:border-yellow-500"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-green-800 py-2 px-3 rounded-full hover:bg-yellow-500 font-bold "
            >
              <Icon icon="bi:send" className="text-white text-xl" />
            </button>
          </form>
          <div className="flex space-x-4 my-2">
            <Icon icon="logos:facebook" className="text-white text-2xl" />
            <Icon icon="logos:instagram" className="text-white text-2xl" />
            <Icon icon="logos:twitter" className="text-white text-2xl" />
          </div>
          <p className="text-white">Furni@Copyright 2024</p>
        </div>
        <div className="text-right flex space-x-8 pt-8 text-sm">
          <div className="text-white text-left">
            <p className="mb-4">About us</p>
            <p className="mb-4">Suport</p>
            <p className="mb-4">Our team</p>
            <p className="mb-4">Knuzo Aero</p>
          </div>
          <div className="text-white text-left">
            <p className="mb-4">Services</p>
            <p className="mb-4">Knowedge base</p>
            <p className="mb-4">Leadership</p>
            <p className="mb-4">Ergonomic Char</p>
          </div>
          <div className="text-white text-left">
            <p className="mb-4">Blog</p>
            <p className="mb-4">Live chat</p>
            <p className="mb-4">Privacy Policy</p>
          </div>
          <div className="text-white text-left">
            <p className="mb-4">Contact us</p>
            <p className="mb-4">Jobs</p>
            <p className="mb-4">Nordic Chair</p>
          </div>
        </div>
      </footer>
    </section>
  );
}
