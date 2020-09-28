import React, { useEffect } from 'react'

const NotFound = ({ setPageTitle }) => {
  const pageTitle = 'Page not Found'
  useEffect(() => {
    setPageTitle(pageTitle)
  }, [pageTitle])
  return <div>404 Not Found</div>
}

export default NotFound
