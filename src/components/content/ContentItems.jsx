import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";

function ContentItems() {
  const {countries} = useContext(MyContext);
 

  return (
    <section className="flex flex-wrap justify-between gap-y-14  px-32">
      {countries.map((country) => (
        <div className="w-72 bg-white rounded-lg overflow-hidden shadow-2xl">
          <div className="h-44">
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
