import React from 'react'

const Apps = ({ NoContent }) => {
  const content = false
  return <div>{content ? 'We have Content' : <NoContent />}</div>
}

export default Apps
