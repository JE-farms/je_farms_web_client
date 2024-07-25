"use client";
import React from "react";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";

export default function () {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="w-full flex flex-col items-center relative justify-center py-8 px-2 sm:py-40 bg-[url(/assets/images/hero/hero_image.png)] bg-cover bg-center">
        {/* overlay */}
        <div className="bg-slate-900/50 z-1 w-full h-full absolute"></div>

        {/* hero text */}
        <div className="flex flex-col items-center gap-2.5 z-10">
          <h2 className="text-xl  text-white font-bold">Services</h2>
          <button className="bg-lime-400/40 text-white px-4 py-2 rounded-lg mt-4 w-1/3">
            Shop Now
          </button>
        </div>
      </div>
      <section className="mt-8 text-center">
        <p className="text-lg">
          JE Farm operates 24 hours on daily basis, including weekends.
        </p>
      </section>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold">Contact Us On</h3>
          <p className="mt-4">📞 Phone: +233 20 048 9723</p>
          <p>📞 +233 50 727 2700</p>
          <p className="mt-2">📧 Email: hayahayatibrahim71@gmail.com</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold">Location</h3>
          <p className="mt-4">Lomnava - Sowutuom</p>
          <Image
            src="/assets/images/map.png"
            alt="Map"
            width={300}
            height={200}
            className="mx-auto mt-4"
          />
        </div>
      </section>
    </div>
  );
}
