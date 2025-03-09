import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypeWriterEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "Lets Enjoy The Nature",
        1000,
        "Feel the magic of nature",
        1000,
        "Connect with nature",
        1000,
        "Let's embrace nature",
        1000,
      ]}
      wrapper="span"
      speed={40}
      className="txtBG text-2xl mb-4 md:mb-3 md:text-4xl lg:text-[45px] tracking-[0.5rem] text-white uppercase font-bold"
      repeat={Infinity}
    />
  );
};

export default TypeWriterEffect;
