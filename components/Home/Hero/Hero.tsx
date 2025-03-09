import SearchBox from "@/components/Helper/SearchBox";
import Link from "next/link";
import React from "react";
import TypeWriterEffect from "./TypeWriterEffect";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-[120vh] sm:h-screen">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70"></div>
      <video
        src="/images/hero1.mp4"
        autoPlay
        muted
        loop
        preload="metadata"
        className="w-full h-full object-cover"
      ></video>

      <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="flex items-center justify-center flex-col w-full h-full mt-20 md:mt-0">
          <div data-aos="fade-up" className="text-center">
            <TypeWriterEffect />

            <p className="md:text-base text-lg text-white font-normal">
              Get the best prices on 2,000,000+ properties, World Wide
            </p>
          </div>

          <SearchBox />
          <Link
            data-aos="fade-left"
            className="rounded px-14 md:px-28 -mt-4 py-2.5 overflow-hidden group bg-rose-600 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300"
            href="#"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative font-bold">Search</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
