import { Blog, Possibility, WhatGPT3 } from "../../containers";
import { Box, styled } from "@mui/material";
import { Brand, CTA } from "../../components";
import { Footer, Header, Navbar } from "../../layouts";

import { Feature } from "../../features";

export const Home = () => {
  // const StyledBox = styled(Box)(({ theme }) => ({
  //   backgroundColor: theme.status.danger,
  // }));

  return (
    <div>
      <Box
        sx={{
          width: 300,
          height: 300,
          bgcolor: "primary.main",
          color: (theme) => theme.status.danger,
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
