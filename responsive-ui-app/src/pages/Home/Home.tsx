import { Blog, Possibility, WhatGPT3 } from "../../containers";
import { Brand, CTA } from "../../components";
import { Footer, Header, Navbar } from "../../layouts";

import { Box } from "@mui/material";
import { Feature } from "../../features";

export const Home = () => {
  return (
    <div>
      <Box
        sx={{
          width: 300,
          height: 300,
          color: "secondary.main",
          bgcolor: "primary.main",
        }}
      >
        <Navbar />
        <Header />
      </Box>
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
