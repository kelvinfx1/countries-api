import React, { useContext } from 'react'
import sunIcon from '../../../assets/sunIcon.svg'
import moonIcon from '../../../assets/moonIcon.svg' 
import { MyContext } from '../../../App'

function ThemeSwitch() {
  const {darkMode, handleToggle} = useContext(MyContext)
 

  return (
    <div className='xsm:text-sm flex items-center gap-1 md:gap-5 font-normal cursor-pointer' onClick={handleToggle}>
      {!darkMode && <img src={moonIcon} alt="moon icon" />}
      {darkMode && <img src={sunIcon} alt="moon icon" />}
      <p className='md:text-xl dark:text-white'> {!darkMode ? 'Dark Mode' : 'Light Mode'}  </p>
    </div>
  )
}

export default ThemeSwitch

// Accessing the user Context in all components:
// 1. import the context
// 2. destructure the object and then make use of it..
