import React, { useEffect } from 'react'

const Tools = ({ NoContent, setPageTitle }) => {
  const pageTitle = 'Used Tools'
  useEffect(() => {
    setPageTitle(pageTitle)
  }, [pageTitle])
  const content = false
  return <div>{content ? 'We have Content' : <NoContent />}</div>
}

export default Tools
