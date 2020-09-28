import React from 'react'

const AlgAndDS = ({ NoContent }) => {
  console.log(NoContent)
  const content = false
  return <div>{content ? 'We have Content' : <NoContent />}</div>
}

export default AlgAndDS
