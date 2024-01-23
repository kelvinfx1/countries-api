import React, { useState } from "react";
import Header from "../components/common/Header/Header";
import Hero from "../components/common/Hero/Hero";
import ContentItems from "../components/content/ContentItems";

function Home() {
  
  return (
    <section>
      <Header />
      <Hero />
      <ContentItems />
    </section>
  );
}

export default Home;
