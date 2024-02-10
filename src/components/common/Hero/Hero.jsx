import React from 'react'
import SearchBox from './SearchBox'
import FilterDropdown from './FilterDropdown'

function Hero() {
  // px-32  xsm:px-16
  return (
    <section className='container mx-auto px-5 my-4 flex flex-col gap-5 md:flex-row md:justify-between md:my-8 md:items-center'>
        <SearchBox />
        <FilterDropdown />
    </section>
  )
}

export default Hero