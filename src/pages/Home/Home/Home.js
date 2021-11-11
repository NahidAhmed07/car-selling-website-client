import React from "react";
import useAuth from "../../../hook/useAuth";
import AllProduct from "../../Products/AllProduct/AllProduct";
import Navigation from "../../shared/Navigation/Navigation";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Hero></Hero>
      <AllProduct></AllProduct>
    </div>
  );
};

export default Home;
