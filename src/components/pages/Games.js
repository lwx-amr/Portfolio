import React, { useEffect } from 'react'

const Games = ({ NoContent, setPageTitle }) => {
  const pageTitle = 'Games'
  useEffect(() => {
    setPageTitle(pageTitle)
  })
  const content = false
  return <div>{content ? 'We have Content' : <NoContent />}</div>
}

export default Games
