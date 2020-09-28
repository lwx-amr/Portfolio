import React, { useEffect } from 'react'

const Apps = ({ NoContent, setPageTitle }) => {
  const pageTitle = 'Apps'
  useEffect(() => {
    setPageTitle(pageTitle)
  }, [pageTitle])
  const content = false
  return <div>{content ? 'We have Content' : <NoContent />}</div>
}

export default Apps
