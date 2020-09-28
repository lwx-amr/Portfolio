import React, { useEffect } from 'react'

const WhoAmI = ({ setPageTitle }) => {
  const pageTitle = 'Who Am I'
  useEffect(() => {
    setPageTitle(pageTitle)
  }, [pageTitle])
  return <div className="main-part">Who am I component</div>
}

export default WhoAmI
