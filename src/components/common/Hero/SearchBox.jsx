import React, { useContext, useEffect, useState } from "react";
import serachIcon from "../../../assets/searchIcon.svg";
import { MyContext } from "../../../App";

function SearchBox() {
  const {
    isDark,
    countries,
    setCountries,
    filteredCountries,
    setfilteredCountries,
  } = useContext(MyContext);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue === "") {
      setfilteredCountries(countries);
    } else {
      const newFilterItems = countries.filter((item) => {
        return item.name.toLowerCase().includes(inputValue.toLowerCase());
      });

      setfilteredCountries(newFilterItems)
    }
  }, [inputValue]);

  return (
    <form
      action=""
      className="h-10 md:w-[30%] rounded-lg shadow-inner flex items-center overflow-hidden"
      style={{backgroundColor: isDark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'}}
    >
      <div className="h-full w-16 flex items-center justify-center bg-inherit">
        <img src={serachIcon} alt="" />
      </div>

      <input
        type="text"
        placeholder="Search for a country..."
        className="h-full w-full outline-none text-xl bg-inherit"
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
      />
    </form>
  );
}

export default SearchBox;
