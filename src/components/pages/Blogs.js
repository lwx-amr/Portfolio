import React, { useEffect } from 'react'

const Blogs = ({ NoContent, setPageTitle }) => {
  const pageTitle = 'Blogs'
  useEffect(() => {
    setPageTitle(pageTitle)
  }, [pageTitle])
  const content = false
  return <div>{content ? 'We have Content' : <NoContent />}</div>
}

export default Blogs
