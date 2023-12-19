import React from "react";

export default function Header() {
  return (
    <nav className="fixed w-full px-4 py-3 bg-[#28282B]">
      <div className="container mx-auto flex justify-between items-center text-white">
       <div>
        <a className="text-2xl font-bold left-0" href="/">
         BLOCKCHAINTAX
        </a>
       </div>
        <div
          className="block lg:flex lg:items-center lg:w-auto"
          id="navbarLinks"
        >
          <ul className="flex flex-col lg:flex-row list-none ml-auto">
            <li className="nav-item mb-2 lg:mb-0">
              <a
                className="nav-link px-3 py-2 flex items-center text-sm uppercase font-semibold leading-snug hover:opacity-50"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item mb-2 lg:mb-0">
              <a
                className="nav-link px-3 py-2 flex items-center text-sm uppercase font-semibold leading-snug hover:opacity-50"
                href="#contact"
              >
                Contact Us
              </a>
            </li>
            <li className="nav-item mb-2 lg:mb-0">
              <a
                className="nav-link px-3 py-2 flex items-center text-sm uppercase font-semibold leading-snug hover:opacity-50"
                href="#links"
              >
                Helpful Links
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
