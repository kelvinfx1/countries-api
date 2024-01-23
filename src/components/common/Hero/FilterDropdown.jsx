import React from "react";
import { useState } from "react";

function FilterDropdown() {
  

  return (
    <details className="dropdown">
      <summary className="m-1 btn rounded-md hover:white bg-white ">Filter by Region</summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-md w-36">
        <li>
          <a>Africa</a>
        </li>
        <li>
          <a>America</a>
        </li>
        <li>
          <a>Asia</a>
        </li>
        <li>
          <a>Europe</a>
        </li>
        <li>
          <a>Ocenia</a>
        </li>
      </ul>
    </details>
  );
}

export default FilterDropdown;
