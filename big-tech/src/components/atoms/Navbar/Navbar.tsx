"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Button from "../Button/Button";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="text-white relative">
      <div className="flex items-center px-5 justify-between border-b border-gray-800">
        <div className="w-24 h-24 py-4">
          <Image
            src={"/images/logo.png"}
            alt="Logo"
            width={1000}
            height={1000}
          />
        </div>
        <div className="hidden md:flex gap-10 font-semibold">
          <p className="relative group pb-2">
            HOME
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00c4f4] transition-all duration-300 group-hover:w-full"></span>
          </p>
          <p className="relative group pb-2">
            ABOUT US
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00c4f4] transition-all duration-300 group-hover:w-full"></span>
          </p>
          <p className="relative group pb-2">
            SALES
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00c4f4] transition-all duration-300 group-hover:w-full"></span>
          </p>
          <p className="relative group pb-2">
            ROADMAP
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00c4f4] transition-all duration-300 group-hover:w-full"></span>
          </p>
          <p className="relative group pb-2">
            BLOGS
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00c4f4] transition-all duration-300 group-hover:w-full"></span>
          </p>
          <p className="relative group pb-2">
            CONTACT US
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00c4f4] transition-all duration-300 group-hover:w-full"></span>
          </p>
        </div>
        <div className="hidden md:block">
          <Button label="BUY NOW" />
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
        className={`fixed bg-[#030b15] inset-y-0 right-0 w-64 z-50 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-4 right-4"
        >
          <IoMdClose className="h-6 w-6 text-white" />
        </button>
        <div className="flex flex-col items-start py-2 px-5 mt-10">
          <p className="py-2 w-full relative group">
            HOME
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00c4f4] transition-all duration-300 group-hover:w-full"></span>
          </p>
          <p className="py-2 w-full relative group">
            ABOUT US
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00c4f4] transition-all duration-300 group-hover:w-full"></span>
          </p>
          <p className="py-2 w-full relative group">
            SALES
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00c4f4] transition-all duration-300 group-hover:w-full"></span>
          </p>
          <p className="py-2 w-full relative group">
            ROADMAP
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00c4f4] transition-all duration-300 group-hover:w-full"></span>
          </p>
          <p className="py-2 w-full relative group">
            BLOGS
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00c4f4] transition-all duration-300 group-hover:w-full"></span>
          </p>
          <p className="py-2 w-full relative group">
            CONTACT US
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00c4f4] transition-all duration-300 group-hover:w-full"></span>
          </p>
        </div>
        <div className="absolute bottom-0 w-full">
          <Button label="BUY NOW" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
