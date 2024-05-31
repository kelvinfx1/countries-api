import React, { useContext } from "react";
import { useState } from "react";
import { MyContext } from "../../../App";
import chevronUp from "../../../assets/chevron-up.svg";
import chevronDown from "../../../assets/chevron-down.svg";
import chevronUpLight from "../../../assets/chevron-upLight.svg";
import chevronDownLight from "../../../assets/chevron-downLight.svg";

function FilterDropdown() {
  const {
    darkMode,
    countries,
    setCountries,
    filteredCountries,
    setfilteredCountries,
  } = useContext(MyContext);

  const [isOpen, setIsOpen] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("All");

  // 👇To open and close the drop down
  function handleIsOpen() {
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  // 👇Array of all the continents
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  // 👇this function handles filtration of the countries(default state) by their "region" which is a property of each of the countries coming from the json data(file in the public folder) also "region" parameter is from the mapping(holds all the regions array items. So if region is equivalent to all countries state(holds the original countries data) is displayed. Else a newFilter variable is created to filter countries(default state) and making a copy of it as obj object, with which we now assign the region(map) to the obj property called region.
  function filterByRegion(region) {
    if (region === "All") {
      setfilteredCountries(countries);
    } else {
      const newFilter = countries.filter((obj) => {
        return region === obj.region;
      });

      console.log(newFilter);
      setfilteredCountries(newFilter);
    }
    // 👇currentFilter sate which is originally set to "All" to be update with the value of region 
    setCurrentFilter(region); 
    // 👇this closes the drop down onClick
    setIsOpen(false);
  }


  return (
    <section className="relative text-xl ">
      <div
        className="bg-lightModeBg dark:bg-darkModeElements h-12 w-56 translate-x-52 lg:translate-x-1 lg:w-96 px-5 flex items-center justify-between rounded-lg shadow-xl cursor-pointer"
        onClick={handleIsOpen}
      >
        {/* 👇If current filter is equal to All display "Filter by Region" otherwise display the value of the currentFilter state */}
        <p className="text-black dark:text-white">{currentFilter === "All" ? "Filter by Region" : currentFilter}</p>
        <div>
          {!isOpen && <img src={chevronDownLight} alt="chevron icon" />}
          {isOpen && <img src={chevronUpLight} alt="chevron icon" />}
        </div>
      </div>

      {/* 👇regions array mapped and used as key also since all the region have uniqe names. region is also passed to the  filterByRegion function */}
      {isOpen && (
        <ul className="w-56 lg:w-full lg:translate-x-1 translate-x-52 absolute bg-darkModeBg dark:bg-lightModeBg rounded-lg shadow-xl mt-2">
          {regions.map((region) => (
            <li key={region} onClick={() => filterByRegion(region)} className="cursor-pointer py-3 pl-5 text-white dark:text-black font-semibold">
              {region}
            </li>
          ))}
        </ul>
      )}

    </section>
  );
}

export default FilterDropdown;