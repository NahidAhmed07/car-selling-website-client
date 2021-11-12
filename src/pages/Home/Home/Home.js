import React from "react";
import AllProduct from "../../Products/AllProduct/AllProduct";
import Footer from "../../shared/Footer/Footer";
import Navigation from "../../shared/Navigation/Navigation";
import Hero from "../Hero/Hero";
import Reviews from "../Reviews/Reviews";
import TopSellerCar from "../TopSellerCar/TopSellerCar";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <AllProduct apiPath="home" />
      <TopSellerCar />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
