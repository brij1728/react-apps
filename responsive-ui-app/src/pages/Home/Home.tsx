import "./HomeElement.ts";

import { Blog, Possibility, WhatGPT3 } from "../../containers";
import { Brand, CTA } from "../../components";
import { Footer, Header, Navbar } from "../../layouts";
import { HomeSection, NavHeader } from "./HomeElement";

import { Features } from "../../features";

export const Home = () => {
  return (
    <HomeSection>
      <NavHeader>
        <Navbar />
        <Header />
      </NavHeader>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </HomeSection>
  );
};
