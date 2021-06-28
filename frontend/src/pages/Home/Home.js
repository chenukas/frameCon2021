import React from "react";
import Hero from "../../components/Landing/Hero/Hero";
import Timeline from "../../components/Landing/Timeline/Timeline";
import AboutUs from "../../components/Landing/AboutUs/AboutUs";
import Speakers from "../../components/Landing/Speakers/Speakers";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Speakers />
      <Timeline />
    </>
  );
};

export default Home;
