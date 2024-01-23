import React, { useEffect } from "react";
import { useState, createContext, useContext } from "react"; 
import Home from "./pages/Home";

export const MyContext = createContext();

function App() {
  const [isDark, setIsDark] = useState(false);
  function handleToggle() {
    setIsDark(!isDark);
  }

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {setCountries(data)})
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="bg-lightModeBg" style={{backgroundColor: isDark && 'hsl(207, 26%, 17%)', color: isDark && 'white'}}>
      <MyContext.Provider value={{
        isDark,
        handleToggle,
        countries,
        setCountries
      }}>
        <Home />
      </MyContext.Provider>
    </section>
  );
}

export default App;

// Context steps follow what they have in w3schools, but them pay attention to some specific parts, expecially if you are passing more than one item
// 1. import { createContext, useContext } from "react";
// 2. export const DarkModeContext = createContext();
// 3. Wrap child components in the Context Provider and supply the state value, this value can actually be an object as against the single one that is on w3schools
