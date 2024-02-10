import React, { useEffect } from "react";
import { useState, createContext, useContext } from "react";
import Home from "./pages/Home";

export const MyContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);
  function handleToggle() {
    setDarkMode(!darkMode);
  }

  // const dataPath = '/data.json';

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setfilteredCountries(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [filteredCountries, setfilteredCountries] = useState(countries);


  return (
    <section className={`${darkMode && "dark"}`}>
      <MyContext.Provider
        value={{
          darkMode,
          handleToggle,
          countries,
          filteredCountries,
          setfilteredCountries,
          setCountries,
        }}
      >
        
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
