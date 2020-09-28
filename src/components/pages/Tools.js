import React from 'react'

const Tools = ({ NoContent }) => {
  const content = false
  return <div>{content ? 'We have Content' : <NoContent />}</div>
}

export default Tools
