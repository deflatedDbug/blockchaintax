"use client";
import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    {isOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-25 z-10"
        onClick={() => setIsOpen(false)}
     />  
    )}
    <nav className="fixed w-full px-4 py-3 bg-[#28282B] z-20">
      <div className="container mx-auto flex justify-between items-center text-white">
        <a className="text-xl sm:text-2xl font-bold" href="/">
          BLOCKCHAIN<span className="text-red-500">TAX</span>
        </a>
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon style={{ fontSize: '2rem' }}/>
        </button>

        <div className={`${isOpen ? 'block ': 'hidden '} absolute lg:relative lg:block top-full left-0 w-full bg-[#28282B] lg-bg-transparent lg:w-auto transition-transform duration-300 ease-in-out z-20`} id="navbarLinks">
          <ul className="flex flex-col lg:flex-row list-none ml-auto space-y-4 lg-space-y-0 items-center justify-center">
            <li className="nav-item mb-2 lg:mb-0">
            <Link href="#home" className="nav-link px-3 mt-4 flex items-center text-sm uppercase font-semibold leading-snug hover:opacity-50" scroll={false}>
                Home
              </Link>
            </li>
            <li className="nav-item mb-2 lg:mb-0">
            <Link href="#contact" className="nav-link px-3 py-2 flex items-center text-sm uppercase font-semibold leading-snug hover:opacity-50" scroll={false}>
                Contact Us
              </Link>
            </li>
            <li className="nav-item mb-2 lg:mb-0">
              <Link href="#helplinks" className="nav-link px-3 py-2 flex items-center text-sm uppercase font-semibold leading-snug hover:opacity-50" scroll={false}>
                Helpful Links
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}
