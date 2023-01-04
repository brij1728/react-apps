import "./Home.css";

import { Blog, Possibility, WhatGPT3 } from "../../containers";
import { Brand, CTA } from "../../components";
import { Footer, Header, Navbar } from "../../layouts";

import { Feature } from "../../features";

export const Home = () => {
  return (
    <div>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};
