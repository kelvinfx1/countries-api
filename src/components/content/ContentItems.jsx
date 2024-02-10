import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";

function ContentItems() {
  const {filteredCountries, darkMode} = useContext(MyContext);
 

  return (
    // px-32 xsm:px-16
    <section className="container mx-auto px-5 grid gap-14 xsm:grid-cols-2 xsm:gap-10 md:grid-cols-3 lg:grid-cols-4">
      {/*   md:justify-between justify-center lg:bg-red-300 */}
      {filteredCountries.map((country) => (
        <div className="overflow-hidden shadow-2xl rounded-lg bg-white dark:bg-darkModeBg dark:text-white" key={country.name}>
          {/* sm:w-96 md:w-72   */}
          {/* Flag inmages👇 */}
          <div className="sm:h-60 md:h-44">
            <img src={country.flags.png} alt="" className="h-full w-full object-cover" />
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
