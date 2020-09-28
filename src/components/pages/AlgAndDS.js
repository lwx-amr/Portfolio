import React, { useEffect } from 'react'

const AlgAndDS = ({ NoContent, setPageTitle }) => {
  const pageTitle = 'Algorithms and Data Structures'
  useEffect(() => {
    setPageTitle(pageTitle)
  }, [pageTitle])
  const content = false
  return <div>{content ? 'We have Content' : <NoContent />}</div>
}

export default AlgAndDS
