import SectionHeader from "@/components/Helper/SectionHeader";
import { hotelsData } from "@/data/Data";
import React from "react";
import HotelCard from "./HotelCard";

const Hotel = () => {
  return (
    <section id="hotel" className="py-10">
      <SectionHeader title="Recommended Hotels" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center mt-16">
        {hotelsData.map((data, i) => {
          return (
            <div
              key={data.id}
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 100}`}
            >
              <HotelCard hotel={data} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hotel;
