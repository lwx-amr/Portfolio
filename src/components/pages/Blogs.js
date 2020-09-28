import React from 'react'

const Blogs = ({ NoContent }) => {
  const content = false
  return <div>{content ? 'We have Content' : <NoContent />}</div>
}

export default Blogs
