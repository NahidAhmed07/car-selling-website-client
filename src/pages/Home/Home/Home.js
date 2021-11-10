import React from "react";
import useAuth from "../../../hook/useAuth";
import Navigation from "../../shared/Navigation/Navigation";
import Hero from "../Hero/Hero";

const Home = () => {
  const { user, googleSignIn } = useAuth();
  return (
    <div>
      <Navigation></Navigation>
      <Hero></Hero>
      <h1>{user.displayName}</h1>
      <button onClick={googleSignIn}>google</button>
    </div>
  );
};

export default Home;
