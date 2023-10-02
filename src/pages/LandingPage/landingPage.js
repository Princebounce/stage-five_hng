import React from "react";
import Header from "../../components/Header";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Footer from "../../components/Footer";
import Banner from "./Banner";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default LandingPage;
