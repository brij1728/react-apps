import { Blog, Possibility, WhatGPT3 } from "../../containers";
import { Route, Routes } from "react-router-dom";

import { Features } from "../../features";
import { Home } from "../../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="whatgpt3" element={<WhatGPT3 />} />
      <Route path="possibility" element={<Possibility />} />
      <Route path="features" element={<Features />} />
      <Route path="blog" element={<Blog />} />
    </Routes>
  );
};
