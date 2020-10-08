import React, { useEffect } from 'react'

const NotFound = ({ setPageTitle }) => {
  const pageTitle = 'Page not Found'
  useEffect(() => {
    setPageTitle(pageTitle)
  })
  return (
    <div className="w-1/2 mx-auto maxSm:mt-12 maxSm:text-a maxSm:w-56 maxSm:max-w-full">
      <img src="/icons/404.svg" alt="404 icon" />
      <p className="text-secondary mt-8 text-center font-medium maxSm:text-sm">
        The page you’re looking for is not found. Try going back to the previous page or hit another
        page.
      </p>
    </div>
  )
}

export default NotFound
