import React from "react";
import AllProduct from "../../Products/AllProduct/AllProduct";
import Navigation from "../../shared/Navigation/Navigation";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Hero></Hero>
      <AllProduct apiPath="home"></AllProduct>
    </div>
  );
};

export default Home;
