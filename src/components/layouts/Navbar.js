import React, { useEffect } from 'react'

import { useLocalStorage } from '../../utils/localStorage'

const Navbar = ({ pageTitle }) => {
  const [themeColor, setThemeColor] = useLocalStorage('color-theme', 'dark')
  const isDark = themeColor === 'dark'
  const toggleMode = () => {
    isDark ? setThemeColor('light') : setThemeColor('dark')
  }
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(themeColor)
  }, [themeColor, isDark])
  return (
    <nav className="flex mb-12 maxSm:mb-2 maxMd:mt-2">
      <button className="mr-4 hidden maxMd:block rounded-lg rounded-lg focus:outline-none focus:shadow-outline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-align-left">
          <line x1="17" y1="10" x2="3" y2="10"></line>
          <line x1="21" y1="6" x2="3" y2="6"></line>
          <line x1="21" y1="14" x2="3" y2="14"></line>
          <line x1="17" y1="18" x2="3" y2="18"></line>
        </svg>
      </button>
      <div className="flex justify-between items-center w-full">
        <h3 className="text-3xl font-semibold maxSm:text-xl sm:text-2xl md:text-2xl mr-2">
          {pageTitle}
        </h3>
        <div className="dark-mode flex items-center flex-shrink-0">
          <span className="leading-none maxSm:hidden">{isDark ? 'Dark' : 'Light'} Mode</span>
          <button onClick={toggleMode} className="focus:outline-none">
            <div className="dark-btn mx-4 flex items-center relative">
              <div
                className={
                  'transition duration-100 w-10 h-5 rounded-full ' +
                  (isDark ? 'bg-green-300' : 'bg-gray-600')
                }></div>
              <div
                className={
                  'transition duration-100 w-6 h-6 rounded-full absolute ' +
                  (isDark ? 'bg-green-200 right-0' : 'bg-gray-400 left-0')
                }></div>
            </div>
          </button>
          <img src={isDark ? '/icons/dark.svg' : '/icons/light.svg'} alt="mode icon" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
