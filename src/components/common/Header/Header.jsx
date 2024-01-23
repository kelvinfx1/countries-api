import React, { useContext } from 'react'
import ThemeSwitch from './ThemeSwitch'
import { MyContext } from '../../../App'

function Header() {
  const {isDark} = useContext(MyContext)
  return (
    <section className='bg-lightModeBg px-32 py-5 flex justify-between border-b-2 font-bold' style={{ backgroundColor: isDark && ' hsl(209, 23%, 22%)'}}>
      <p className='text-xl dark:text-white'>Where in the world?</p>
      <ThemeSwitch />
    </section>
  )
}

export default Header
// bg-headLight
// dark:headDark