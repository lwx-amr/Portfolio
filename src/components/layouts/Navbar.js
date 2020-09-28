import React from 'react'

import { useLocalStorageBool } from '../../utils/localStorage'

const Navbar = ({ pageTitle }) => {
  const [darkMode, setDarkMode] = useLocalStorageBool('darkMode')
  const handleClick = () => {
    setDarkMode(!darkMode)
  }
  return (
    <nav className="flex justify-between items-center mb-12">
      <h3 className="text-3xl font-semibold">{pageTitle}</h3>
      <div className="dark-mode flex items-center">
        <span className="leading-none">{darkMode ? 'Dark' : 'Light'} Mode</span>
        <button onClick={handleClick} className="focus:outline-none">
          <div className="dark-btn mx-4 flex items-center relative">
            <div
              className={
                'transition duration-100 w-10 h-5 rounded-full ' +
                (darkMode ? 'bg-green-300' : 'bg-gray-600')
              }></div>
            <div
              className={
                'transition duration-100 w-6 h-6 rounded-full absolute ' +
                (darkMode ? 'bg-green-200 right-0' : 'bg-gray-400 left-0')
              }></div>
          </div>
        </button>
        <img src={darkMode ? '/icons/dark.svg' : '/icons/light.svg'} alt="mode icon" />
      </div>
    </nav>
  )
}

export default Navbar
