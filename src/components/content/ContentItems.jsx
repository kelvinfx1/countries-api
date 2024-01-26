import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";

function ContentItems() {
  const {filteredCountries} = useContext(MyContext);
 

  return (
    // px-32
    <section className="container mx-auto px-5 xsm:px-16 flex flex-wrap md:justify-between gap-y-14 justify-center">
      {filteredCountries.map((country) => (
        <div className="xsm:w-72 sm:w-96 md:w-72 rounded-lg overflow-hidden shadow-2xl">
          <div className="smh-60 md:h-44">
            <img src={country.flags.svg} alt="" className="h-full w-full object-cover" />
          </div>

          <div className="px-4 py-3">
            <p className="text-xl font-semibold mb-3">{country.name}</p>
            <p><span className="font-medium">Poupulation:</span> { country.population }</p>
            <p><span className="font-medium">Region:</span> { country.region }</p>
            <p><span className="font-medium">Capital:</span> { country.capital }</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ContentItems;
