import { FastForwardOutlined } from "@mui/icons-material";
import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-[#28282B] text-neutral-200 py-10 pt-12 px-5">
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="text-3xl font-semibold pt-4 mb-4">About Me</h3>
        <p className="text-xl max-w-3xl mx-auto">
          I am a <span className="font-bold"> tax accountant</span> assisting{" "}
          <span className="italic">individuals </span> and{" "}
          <span className="italic">companies</span> with{" "}
          <span className="underline">tax matters</span>. <br /> With the advent
          of{" "}
          <span className="font-bold">
            cryptocurrency, blockchain technology
          </span>
          , and the upcoming{" "}
          <span className="font-bold">digital-metaverse</span>, I have shifted
          my focus to helping clients overcome the many{" "}
          <span className="italic">obstacles</span> they will face as they
          pursue new opportunities in this exciting industry.
        </p>
      </div>
    </section>
  );
}
FastForwardOutlined