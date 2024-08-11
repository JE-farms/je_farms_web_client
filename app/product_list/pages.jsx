"use client";
import React from "react";
import Image from "next/image";


export default function Home() {
  const products = [
    {
      name: "Butterfly Pea Flower Tea",
      price: "$10.00",
      image: "/images/tea1.jpg",
    },
    { name: "Valerian Tea", price: "$15.00", image: "/assets/images/king.png" },
    {
      name: "Calendula Tea",
      price: "$20.00",
      image: "/assets/images/indonesia.png",
    },
    {
      name: "Bamboo Leaf Tea",
      price: "$25.00",
      image: "/assets/images/Dwarf.png",
    },
    {
      name: "Lime Flower Tea",
      price: "$30.00",
      image: "/assets/images/j1.png",
    },
    {
      name: "Asian Bamboo FOP Tea",
      price: "$35.00",
      image: "/assets/images/j2.png",
    },
    {
      name: "Delightful Jasmine Tea",
      price: "$40.00",
      image: "/assets/images/j3.png",
    },
    {
      name: "Green Tea Supreme",
      price: "$45.00",
      image: "/assets/images/j3.png",
    },
  ];

  return (
    <div className="bg-gray-50">
      <header className="bg-white py-4 shadow">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-2xl font-bold">HERBYO</div>
          <nav className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Shop Now
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              OUR PRODUCTS
            </a>
          </nav>
        </div>
      </header>

      <main className="bg-gray-50">
        <section className="text-center py-12 bg-green-100">
          <h1 className="text-4xl font-bold text-gray-800">
            Organic Green Tea
          </h1>
          <p className="mt-4 text-gray-600">
            Our job is to fill your tummy with delicious healthy food and fast
            free delivery.
          </p>
          <button className="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
            Shop Now
          </button>
        </section>

        <section className="container mx-auto py-12 px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Our Best Seller
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-white p-4 rounded shadow hover:shadow-lg transition"
              >
                <img
                  src={assets / images / king.png}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded"
                />
                <h3 className="mt-4 text-xl font-bold text-gray-800">
                  {product.name}
                </h3>
                <p className="mt-2 text-green-600">{product.price}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
