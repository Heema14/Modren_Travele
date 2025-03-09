"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Destination from "./Destination/Destination";
import Hotel from "./Hotel/Hotel";
import WhyChoose from "./WhyChoose/WhyChoose";
import Review from "./Reviews/Review";
import News from "./News/News";
import NewsLetter from "./NewsLetter/NewsLetter";
import Accordion from "./Accordion/Accordion";

import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: "ease",
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <main className="overflow-hidden">
      <Hero />
      <Destination />
      <Hotel />
      <WhyChoose />
      <Review />
      <Accordion />
      <News />
      <NewsLetter />
    </main>
  );
};

export default Home;
