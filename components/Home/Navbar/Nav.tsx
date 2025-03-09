"use client";

import React, { useEffect, useState } from "react";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { TbAirBalloon } from "react-icons/tb";
import BookNow from "../Hero/BookNow";

const Nav = ({ openNav }: { openNav: () => void }) => {
  const [navBg, setNavBg] = useState(false);
  const [showBookNow, setShowBookNow] = useState<boolean>(false);

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [navBg]);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", showBookNow);
  }, [showBookNow]);

  return (
    <header
      className={`transition-all duration-200 h-[12vh] z-50 fixed w-full ${
        navBg ? "bg-blue-900 shadow-md" : "fixed"
      }`}
    >
      <div className="flex justify-between items-center h-full w-[90%] xl:container mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center">
            <TbAirBalloon className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl md:text-2xl text-white uppercase font-bold">
            Tripi
          </h1>
        </div>
        <div className="hidden xl:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.url}>
              <p className="relative text-white text-base font-medium w-fit after:block after:content-[''] after:absolute after:h-0.5 after:bg-yellow-300 after:w-full after:scale-x-0 after:rounded-full after:hover:scale-x-100 after:transition duration-300 after:origin-center">
                {link.label}
              </p>
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowBookNow(true)}
            className="md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white rounded-lg hover:bg-gray-300 transition-all duration-300"
          >
            Book Now
          </button>

          {showBookNow && <BookNow setShowBookNow={setShowBookNow} />}

          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white xl:hidden"
          />
        </div>
      </div>
    </header>
  );
};

export default Nav;
