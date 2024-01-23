import React, { useContext } from 'react'
import moonLight from '../../../assets/moonLight.svg'
import moonDark from '../../../assets/moonDark.svg' 
import { MyContext } from '../../../App'

function ThemeSwitch() {
  const {isDark, handleToggle} = useContext(MyContext)
 

  return (
    <div className='flex justify-between items-center gap-5 font-normal cursor-pointer' onClick={handleToggle}>
      {!isDark && <img src={moonLight} alt="moon icon" />}
      {isDark && <img src={moonDark} alt="moon icon" />}
      <p className='text-xl' style={{color: isDark && "white"}}> Dark Mode  </p>
    </div>
  )
}

export default ThemeSwitch

// Accessing the user Context in all components:
// 1. import the context
// 2. destructure the object and then make use of it..
