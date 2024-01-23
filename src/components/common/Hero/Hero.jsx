import React from 'react'
import SearchBox from './SearchBox'
import FilterDropdown from './FilterDropdown'

function Hero() {
  return (
    <section className='px-32 py-8 flex justify-between'>
        <SearchBox />
        <FilterDropdown />
    </section>
  )
}

export default Hero