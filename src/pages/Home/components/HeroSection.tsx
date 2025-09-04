import React from "react";
import { Header } from "../../../components/Header";
import { Paragraph } from "../../../components/Paragraph";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for darkening video */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20 text-white">
        {/* <h1 className="text-3xl md:text-6xl font-bold leading-tight max-w-2xl"> */}
          <Header variant="supertitle" className=" max-w-2xl" color="#fff">
            Powering Global Healthcare Access
          </Header>
          <Paragraph variant="small" className="max-w-2xl mt-4" color="text-white">Building the Largest Healthtech Infrastructure for the Next 1 billion
          Africans Creating Trust, Leading Excellent Health Innovations</Paragraph>
     
      </div>
    </section>
  );
};

export default HeroSection;
