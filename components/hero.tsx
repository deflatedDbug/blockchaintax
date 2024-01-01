"use client";
import React from "react";

export default function Hero() {
  const handleClick = () => {
    window.open("https://calendly.com/subinlebow");
  };
  return (
    <section id="/">
      <div
        style={{
          backgroundImage: `url('/hero.jpg')`, // Corrected image path
          backgroundSize: "cover", // Ensure the image covers the entire div
          backgroundPosition: "center", // Center the image
          height: "100vh", // Set a height for your hero section, e.g., full viewport height
        }}
        className="flex items-center justify-center text-center text-white"
      >
        <div>
          <h1 className="text-6xl font-extrabold mb-3">
            TAX PRO YOU CAN TRUST
          </h1>
          <p className="text-xl mb-5">
            Get started with a <span className="italic">free</span>{" "}
            <span className="font-bold underline">Tax Consultation</span>
          </p>
          <button
            className="bg-[#28282B] text-white font-bold py-4 px-8 rounded hover:scale-110"
            onClick={handleClick}
          >
            BOOK TODAY
          </button>
        </div>
      </div>
    </section>
  );
}
