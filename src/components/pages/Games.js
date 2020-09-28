import React from 'react'

const Games = ({ NoContent }) => {
  const content = false
  return <div>{content ? 'We have Content' : <NoContent />}</div>
}

export default Games
