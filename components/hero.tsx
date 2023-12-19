"use client";
import React from "react";

export default function Hero() {
  const handleClick = () => {
    window.open("https://calendly.com/subinlebow");
  }
  return (
    <section id="/">
      <div
        style={{ 
          backgroundImage: `url('/hero-image.jpg')`, // Corrected image path
          backgroundSize: 'cover', // Ensure the image covers the entire div
          backgroundPosition: 'center', // Center the image
          height: '100vh', // Set a height for your hero section, e.g., full viewport height

        }}
        className="flex items-center justify-center text-center text-white"
      >
        <div>
          <h1 className="text-4xl font-bold mb-3">I'm Hee Jung Lebow</h1>
          <p className="text-xl mb-5"> 
          A {" "}
          <span className="font-semibold">Tax Professional</span> that <span className="underline"> You can Trust</span>
          
          </p>
          <button className="bg-[#28282B] hover:opacity-80 text-white font-bold py-2 px-4 rounded"
          onClick={handleClick}>
            Book a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
