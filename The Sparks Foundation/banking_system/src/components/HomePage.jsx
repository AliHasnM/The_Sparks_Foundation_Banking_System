import React from "react";
import bgImg from "../assets/bgImg.jpg";
import SimpleSlider from "./SimpleSlider";
import AboutUs from "./AboutUs";
import Services from "./Services";
import ContactUs from "./ContactUs";

function HomePage() {
  return (
    <>
      <div className="bg-cover" style={{ backgroundImage: `url(${bgImg})` }}>
        <SimpleSlider />
      </div>
      <AboutUs />
      <Services />
      <ContactUs />
    </>
  );
}

export default HomePage;
