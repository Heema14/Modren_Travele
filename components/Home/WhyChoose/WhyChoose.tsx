import SectionHeader from "@/components/Helper/SectionHeader";
import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {
  return (
    <section id="whyChoose" className="pt-14 pb-16">
      <SectionHeader title="Why Choose Us" />
      <div className="grid mx-auto w-[80%] gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 place-items-center items-center">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <WhyChooseCard image="/images/c1.svg" title="Best Price Guarantee" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
        >
          <WhyChooseCard image="/images/c2.svg" title="Easy & Quick Booking" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <WhyChooseCard image="/images/c3.svg" title="Customer Care 24/7" />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
