import React, { useContext } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { MyContext } from "../../../App";

function Header() {
  const { darkMode } = useContext(MyContext);
  // px-32
  return (
    <section className="shadow-lg max-w-full bg-lightModeBg dark:bg-darkModeBg">
      <div
        className="container mx-auto px-5 py-3 font-medium md:py-6 flex justify-between whitespace-nowrap"
        
      >
        <p className="md:text-xl dark:text-white">Where in the world?</p>
        <ThemeSwitch />
      </div>
    </section>
  );
}

export default Header;
// bg-headLight
// dark:headDark
