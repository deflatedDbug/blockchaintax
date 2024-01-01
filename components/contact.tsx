import React from "react";

export default function ContactForm() {
  return (
    <div className="bg-[#28282B] min-h-screen py-4">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-around items-start">
          <div className="text-white mb-8 md:mb-0">
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-8 underline">Contact Me</h1>
            <div className="mb-4">
              <h2 className="text-2xl font-semibold">Virtual Offices:</h2>
              <p className="">7918 Jones Branch Dr Mclean VA 22102</p>
              <p className="">28 Schenck Pkwy, Asheville, NC 28803</p>
              <p className="">2730 N. Berkeley Lake Rd, Duluth, GA 30096</p>
            </div>
            <div className="mb-4">
              <h2 className="text-2xl font-semibold ">Phone Number:</h2>
              <p >571-567-4300</p>
            </div>
            <div className="mb-4">
              <h2 className="text-2xl font-semibold">Contact Email:</h2>
              <p>lebowconsulting@gmail.com</p>
            </div>
          </div>

          <form className="bg-white p-8 shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Send Me A Message</h2>

            <div className="mb-4 grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="border-2 rounded p-2"
                required
              />
              <input
                type="text"
                placeholder="Last name"
                className="border-2 rounded p-2"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                placeholder="Eg. example@email.com"
                className="border-2 w-full rounded p-2"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="tel"
                placeholder="Eg. 800-000-0000"
                className="border-2 w-full rounded p-2"
                required
              />
            </div>

            <div className="mb-6">
              <textarea
                placeholder="Leave a message"
                className="border-2 w-full rounded p-2"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
