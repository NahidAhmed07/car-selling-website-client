import React from "react";
import AllProduct from "../../Products/AllProduct/AllProduct";
import Navigation from "../../shared/Navigation/Navigation";
import Hero from "../Hero/Hero";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Hero></Hero>
      <AllProduct apiPath="home"></AllProduct>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
