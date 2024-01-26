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
      className="h-10 md:w-[30%] rounded-md shadow-lg border-2 flex items-center overflow-hidden"
    >
      <div className="h-full w-16 flex items-center justify-center">
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
