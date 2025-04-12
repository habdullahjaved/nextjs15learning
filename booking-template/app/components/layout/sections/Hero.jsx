// components/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-100 to-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 leading-tight mb-4">
            Best Activities <br />
            Delivered to Your Doorstep
          </h1>
          <p className="text-gray-700 text-lg mb-6 max-w-xl">
            Shop organic fruits, vegetables, dairy, and more — all handpicked
            for your health and delivered fast.
          </p>
          <Link
            href="/shop"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition"
          >
            Shop Now
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <Image
            src="/grocery-hero.png"
            alt="Fresh groceries"
            width={500}
            height={500}
            className="w-full max-w-md mx-auto drop-shadow-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
