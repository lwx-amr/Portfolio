import React, { useEffect } from 'react'

const NotFound = ({ setPageTitle }) => {
  const pageTitle = 'Page not Found'
  useEffect(() => {
    setPageTitle(pageTitle)
  }, [pageTitle])
  return (
    <div className="w-1/2 mx-auto">
      <img src="/icons/404.svg" alt="404 icon" />
      <p className="text-gray-100 mt-8 text-center">
        The page you’re looking for is not found. Try going back to the previous page or hit another
        page.
      </p>
    </div>
  )
}

export default NotFound
