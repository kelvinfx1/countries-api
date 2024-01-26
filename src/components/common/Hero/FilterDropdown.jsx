import React from "react";
import { useState } from "react";

function FilterDropdown() {
  return (
    // value={sortBy} onChange={(e) => setSortBy(e.target.value)}
    <select>
      <option value="input"><li className="p-12">Africa</li></option>
      <option value="description">America</option>
      <option value="packed">Asia</option>
      <option value="packed">Europe</option>
      <option value="packed">Ocenia</option>
    </select>
    // <details className="dropdown">
    //   <summary className="m-1 btn rounded-md hover:white bg-white ">Filter by Region</summary>
    //   <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-md w-36">
    //     <li>
    //       <a></a>
    //     </li>
    //     <li>
    //       <a></a>
    //     </li>
    //     <li>
    //       <a></a>
    //     </li>
    //     <li>
    //       <a>e</a>
    //     </li>
    //     <li>
    //       <a></a>
    //     </li>
    //   </ul>
    // </details>
  );
}

export default FilterDropdown;
