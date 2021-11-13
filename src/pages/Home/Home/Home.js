import React from "react";
import AllProduct from "../../Products/AllProduct/AllProduct";
import Footer from "../../shared/Footer/Footer";
import Navigation from "../../shared/Navigation/Navigation";
import Hero from "../Hero/Hero";
import Reviews from "../Reviews/Reviews";
import SubBanner from "../SubBanner/SubBanner";
import TopSellerCar from "../TopSellerCar/TopSellerCar";
import NewsLetter from "../NewsLetter/NewsLetter";
import BlogPost from "../BlogPost/BlogPost";
const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <AllProduct apiPath="home" />
      <SubBanner></SubBanner>
      <TopSellerCar />
      <Reviews />
      <BlogPost></BlogPost>
      <NewsLetter></NewsLetter>
      <Footer />
    </div>
  );
};

export default Home;
