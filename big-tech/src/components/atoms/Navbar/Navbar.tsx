"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="text-white relative">
      <div className="flex items-center px-5 justify-between border-b border-gray-800">
        <div className="w-24 h-24 py-4">
          <Image src={"/images/logo.png"} alt="Logo" width={1000} height={1000} />
        </div>
        <div className="hidden md:flex gap-5 font-semibold">
          <p>HOME</p>
          <p>ABOUT US</p>
          <p>SALES</p>
          <p>ROADMAP</p>
          <p>BLOGS</p>
          <p>CONTACT US</p>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <IoMdClose className="h-6 w-6 text-white" />
            ) : (
              <IoMenuSharp className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-#030b15 bg-opacity-75 z-50 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-4 right-4">
          <IoMdClose className="h-6 w-6 text-white" />
        </button>
        <div className="flex flex-col items-start py-2 px-5 mt-10">
          <p className="py-2 hover:text-[#00c4f4] w-full">HOME</p>
          <p className="py-2 w-full">ABOUT US</p>
          <p className="py-2 w-full">SALES</p>
          <p className="py-2 w-full">ROADMAP</p>
          <p className="py-2 w-full">BLOGS</p>
          <p className="py-2 w-full">CONTACT US</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
