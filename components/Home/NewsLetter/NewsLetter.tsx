import React from "react";
import { BsEnvelopePaper } from "react-icons/bs";

const NewsLetter = () => {
  return (
    <section
      id="newsLetter"
      className="bg-black py-16 flex items-center justify-center w-full flex-col"
    >
      <BsEnvelopePaper className="w-16 h-16 text-white" />
      <div className="mt-8">
        <h1 className="text-lg sm:text-xl md:text-2xl text-white font-semibold tracking-widest">
          Your Travel Journey Starts Here
        </h1>
        <p className="mt-3 text-white text-center text-xs sm:text-sm">
          Sign up and well send the best deals to you
        </p>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full"
        method="post"
      >
        <input
          type="text"
          placeholder="Name.."
          className="px-6 py-3.5 bg-white mt-8 w-[95%] sm:w-[80%] md:w-[60%] lg:w-1/2 block mx-auto rounded-lg outline-none"
        />
        <input
          type="number"
          placeholder="Phone.."
          className="px-6 py-3.5 bg-white my-3 w-[95%] sm:w-[80%] md:w-[60%] lg:w-1/2 block mx-auto rounded-lg outline-none"
        />
        <input
          type="email"
          placeholder="Email.."
          className="px-6 py-3.5 bg-white  w-[95%] sm:w-[80%] md:w-[60%] lg:w-1/2 block mx-auto rounded-lg outline-none"
        />
        <button
          type="submit"
          className="px-6 py-3.5 bg-blue-900 text-white hover:bg-blue-950 transition-all duration-200 mt-3 w-[95%] sm:w-[80%] md:w-[60%] lg:w-1/2 block mx-auto rounded-lg outline-none"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsLetter;
