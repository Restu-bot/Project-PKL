"use client";
import React from "react";
import ft from "@/public/assets/why-choose-us-img.jpg";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function ShopPage() {
  const [form, setForm] = useState({
    material: "",
    quantity: "",
    color: "#000000",
    customMark: "",
    image: "",
  });

  const [preview, setPreview] = useState(null);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUplodImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const dataPreview = new FileReader();
      dataPreview.onload = () => {
        setPreview(dataPreview.result);
        setForm((prev) => ({
          ...prev,
          image: dataPreview.result,
        }));
      };
      dataPreview.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(form);

    const { material, quantity, color, customMark } = form;
    try {
      const saveData = await fetch("/api/make-custom", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          material,
          quantity,
          color,
          mark: customMark,
        }),
      });

      const data = await saveData.json();
      if (!saveData.ok) {
        throw new Error(data.error || data.message);
      }
      console.log("Success:", data);
      if (data.status == 200) {
        alert(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="min-h-full flex w-full px-20 pt-28 pb-14">
        <div className="container mx-auto px-10">
          <img src={ft.src} />
        </div>
        <div className="border-dashed border-black border-2 w-full rounded-xl">
          <h2 className="font-semibold text-xl text-center text-black py-4">
            Custom your own furnitures!
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="px-6 grid xl:grid-cols-2 gap-4">
              <input
                type="text"
                id="material"
                name="material"
                placeholder="Material"
                onChange={handleInputChange}
                value={form.material}
                className="pl-2 py-1 border-green-900 border-2 rounded-full "
              />
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                placeholder="Quantity"
                onChange={handleInputChange}
                value={form.quantity}
                className="pl-2 py-1 border-green-900 border-2 rounded-full"
              />
              <div>
                <label className="pl-4">Color</label>
                <input
                  type="color"
                  id="color"
                  name="color"
                  onChange={handleInputChange}
                  value={form.color}
                  className="px-2 py-1 border-green-900 border-2 rounded-full w-full h-9"
                />
              </div>
              <input
                type="text"
                id="customMark"
                name="customMark"
                placeholder="Custom Mark"
                onChange={handleInputChange}
                value={form.customMark}
                className="pl-2 py-1 mt-6 border-green-900 border-2 rounded-full"
              />
            </div>
            <div className="text-center mt-4 my-2">
              <p>Feel free to upload your reference / sketch</p>
            </div>
            <div className="border-slate-400 border-dashed border-2 rounded-xl mx-20">
              <div className="w-full h-32 grid grid-cols-1">
                {preview ? (
                  <img
                    src={preview}
                    className="object-cover w-full max-h-64 rounded-xl"
                  />
                ) : (
                  <p className="text-center">
                    "Drag and drop an image, or to select"
                  </p>
                )}
              </div>
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                className="opacity-0 h-32"
                onChange={handleUplodImage}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-yellow-600 text-white rounded-full w-48 py-1 my-4"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
