import React from "react";
import DotComponent from "./Dot";
import hero from "../../assets/Images/Home/hero.webp";
function Hero() {
  return (
    <div className="relative w-full h-[70vh] md:h-[40vh] lg:h-screen lg:text-white ">
      <img
        src={hero}
        alt="hero-img"
        className="absolute w-full h-full object-cover -z-10 hidden lg:block"
      />

      <div
        className="container w-full px-6 lg:px-10 absolute lg:bottom-20"
        style={{ width: "90%", top:'50%',left:'50%',transform:'translate(-50%,-50%)' }}
      >
        <h2 className="text-left section-heading text-3xl md:text-4xl font-semibold mb-4  leading-tight">
          Building Future-Ready Apps, Software & IoT Solutions for SMBs in the
          USA, UK, Middle East & India
          {/* <DotComponent /> */}
        </h2>
        <p className="lg:w-3xl text-xl text-text-secondary">
          At Appopoleis, we partner with small and mid-sized businesses to
          design and deliver custom mobile apps, scalable web platforms, and IoT
          integrations that drive growth, streamline operations, and delight end
          users—whether you're in New York, London, Dubai or Bangalore.
        </p>

        <div className="flex gap-4 mt-4">
          <button className="bg-[#23c1cb] text-lg px-10 py-2 font-medium text-white">
            Get a Free Consultation
          </button>
          <button className="bg-[#23c1cb] text-lg px-10 py-2 font-medium text-white">
            Explore Case Studies
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
