import "./HomeElement.ts";

import { Blog, Possibility, WhatGPT3 } from "../../containers";
import { Brand, CTA } from "../../components";
import { Footer, Header } from "../../layouts";

import { Features } from "../../features";
import { HomeSection } from "./HomeElement";

export const Home = () => {
  return (
    <HomeSection>
      <Header />
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
