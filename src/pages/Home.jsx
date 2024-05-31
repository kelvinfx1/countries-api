import React, { useEffect, useState } from "react";
import Header from "../components/common/Header/Header";
import Hero from "../components/common/Hero/Hero";
import ContentItems from "../components/content/ContentItems";
import SpalshScreen from "../components/common/SplashScreen";

function Home() {
  const [showSplash, setshowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setshowSplash(false);
    }, 5000);
    // return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {showSplash ? (
        <SpalshScreen />
      ) : ( 
        <section className="bg-lightModeBg dark:bg-darkModeBg h-full">
          <Header />
          <Hero />
          <ContentItems />
        </section>
       )} 
    </>
  );
}

export default Home;
