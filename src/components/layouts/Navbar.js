import React, { useEffect, useState } from 'react'

import { useLocalStorage } from '../../utils/localStorage'

const Navbar = ({ pageTitle }) => {
  const SCROLL_POINT = 30
  const [scrolled, setScrolled] = useState(() => window.scrollY >= SCROLL_POINT)
  const [themeColor, setThemeColor] = useLocalStorage('color-theme', 'dark')
  const isDark = themeColor === 'dark'
  const toggleMode = () => {
    isDark ? setThemeColor('light') : setThemeColor('dark')
  }
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(themeColor)
    window.addEventListener('scroll', handleScroll)
  }, [themeColor, isDark])
  const handleScroll = () => {
    setScrolled(window.scrollY >= SCROLL_POINT)
  }
  return (
    <nav
      className={
        'flex justify-between items-center w-full mb-12 maxMd:pl-14 maxMd:pr-4 maxMd:py-4 maxMd:fixed maxMd:inset-x-0 maxMd:top-0 maxMd:bg-primary maxMd:mb-0z-20' +
        (scrolled ? ' maxMd:shadow-sb' : '')
      }>
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
    </nav>
  )
}

export default Navbar
