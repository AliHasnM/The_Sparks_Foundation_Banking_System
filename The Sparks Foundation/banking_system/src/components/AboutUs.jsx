import React, { useRef } from "react";
import AboutImg from "../assets/aboutImg.jpg";

const AboutUs = () => {
  const aboutRef = useRef(null);

  return (
    <div ref={aboutRef} className="px-20">
      <div className="flex flex-col items-center py-12 gap-2">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-2xl">
          Empowering your financial journey, one transaction at a time
        </p>
      </div>
      <div className="flex gap-4">
        <div className="w-1/2">
          <img className="rounded-md" src={AboutImg} alt="" />
        </div>
        <div className="w-1/2 space-y-4">
          <p className="text-xl text-center">
            Welcome to our bank, where we strive to provide exceptional banking
            solutions tailored to your needs. With a focus on innovation and
            customer satisfaction, we aim to simplify your banking experience.
          </p>
          <p className="text-xl text-center">
            Our dedicated team is committed to ensuring your financial
            well-being and security. Whether you're saving for the future,
            shopping online, or managing transactions with ease, we're here to
            help you every step of the way. Join us and experience banking that
            puts you first.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
