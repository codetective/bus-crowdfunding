import React from "react";

import NextImage from "next/image";

import { SEO } from "../components/seo";
import Hero from "../components/Hero";
import Donate from "../components/Donate";

const Home = () => {
  return (
    <>
      <SEO title="PANS Bus Crowdfunding" />
      <Donate />
    </>
  );
};

export default Home;
