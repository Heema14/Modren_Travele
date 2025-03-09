"use client";
import SectionHeader from "@/components/Helper/SectionHeader";
import { useState } from "react";
import { CgClose } from "react-icons/cg";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? 0 : index);
  };

  const sections = [
    {
      title: "Top Destinations",
      content:
        "Explore the most beautiful places in the world, from tropical beaches to stunning mountain landscapes. Visit famous locations such as the Maldives, Santorini, and the Swiss Alps, where nature meets luxury for an unforgettable experience.",
    },
    {
      title: "Travel Tips",
      content:
        "Get expert travel advice on packing, budgeting, and making the most of your journey. Learn how to travel light, find the best flight deals, and adapt to different cultures while ensuring safety and comfort along the way.",
    },
    {
      title: "Exclusive Deals",
      content:
        "Find the best travel deals on flights, hotels, and vacation packages to make your dream trip affordable. From last-minute getaways to early-bird discounts, discover the best ways to save money and experience more for less.",
    },
    {
      title: "Hello travel",
      content:
        "Find the best travel deals on flights, hotels, and vacation packages to make your dream trip affordable. From last-minute getaways to early-bird discounts, discover the best ways to save money and experience more for less.",
    },
    {
      title: "Go to nice life",
      content:
        "Find the best travel deals on flights, hotels, and vacation packages to make your dream trip affordable. From last-minute getaways to early-bird discounts, discover the best ways to save money and experience more for less.",
    },
  ];

  return (
    <section
      id="accordion"
      data-aos="fade-up"
      className="w-[80%] mx-auto py-20"
    >
      <SectionHeader title="Accordion" />

      <div className="space-y-3 mt-7">
        {sections.map((section, index) => (
          <div key={index}>
            <button
              onClick={() => toggleSection(index)}
              className="w-full text-left p-4 accordion hover:bg-blue-800 duration-200 text-white font-bold rounded-md flex justify-between items-center"
            >
              <span>{section.title}</span>
              <div className="w-6 h-6 border-gray-200 rounded-full border flex items-center justify-center">
                {openIndex === index ? (
                  <CgClose className="rotate-45 duration-200" />
                ) : (
                  <CgClose className="duration-200" />
                )}
              </div>
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-40 p-4 bg-gray-100 border border-gray-300 rounded-md mt-1"
                  : "max-h-0"
              }`}
            >
              {openIndex === index && section.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
