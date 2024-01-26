import React, { useContext } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { MyContext } from "../../../App";

function Header() {
  const { isDark } = useContext(MyContext);
  // px-32
  return (
    <section className="shadow-lg max-w-full"
    style={{ backgroundColor: isDark && " hsl(209, 23%, 22%)" }}
    >
      <div
        className="container mx-auto px-10 py-5 flex justify-between font-bold whitespace-nowrap"
        
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
