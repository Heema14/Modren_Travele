import React from "react";
import DestinationSlider from "./DestinationSlider";
import SectionHeader from "@/components/Helper/SectionHeader";

const Destination = () => {
  return (
    <section id="destination" className="py-20">
      <SectionHeader title="Exploring Popular Destination" />

      <div className="mt-14 w-[80%] mx-auto">
        <DestinationSlider />
      </div>
    </section>
  );
};

export default Destination;
