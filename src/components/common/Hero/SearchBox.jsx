import React, { useContext, useState } from "react";
import serachIcon from '../../../assets/searchIcon.svg'
import { MyContext } from "../../../App";

function SearchBox() {
  const{ isDark, countries, setCountries }= useContext(MyContext)

  const [inputValue, setInputValue] = useState("");


  return (
    <form action="" className="h-10 w-96 rounded-sm shadow-inner border-2 flex items-center">
      <div className="h-full w-16 flex items-center justify-center"> <img src={serachIcon} alt="" /> </div>
      
      <input
        type="text"
        placeholder="Search for a country..."
        className="h-full w-full outline-none"
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
      />
    </form>
  );
}

export default SearchBox;
