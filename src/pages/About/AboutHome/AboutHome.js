import React from "react";
import Footer from "../../shared/Footer/Footer";
import Navigation from "../../shared/Navigation/Navigation";
import About from "../About/About";
import AboutTop from "../AboutTop/AboutTop";

const AboutHome = () => {
  return (
    <>
      <Navigation></Navigation>
      <AboutTop></AboutTop>
      <About></About>
      <Footer></Footer>
    </>
  );
};

export default AboutHome;
