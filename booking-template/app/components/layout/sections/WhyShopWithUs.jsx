import React from "react";
// components/WhyShopWithUs.jsx
export default function WhyShopWithUs() {
  const features = [
    {
      icon: "🕒",
      title: "Same-Day Delivery",
      desc: "Order before 6pm and get it delivered the same day.",
    },
    {
      icon: "🥗",
      title: "100% Fresh",
      desc: "Handpicked fresh items delivered to your doorstep.",
    },
    {
      icon: "💰",
      title: "Affordable Prices",
      desc: "Daily deals and discounts on top grocery products.",
    },
    {
      icon: "📦",
      title: "Easy Returns",
      desc: "Hassle-free returns within 24 hours of delivery.",
    },
  ];

  return (
    <section className="py-16 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Why Shop With Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-xl shadow-sm"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-600 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
