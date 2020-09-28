import React from 'react'

const NotYet = ({ handleSubscribe }) => {
  return (
    <div className="main-part text-center">
      <h4 className="text-2xl font-semibold text-gray-100 relative">Coming Soon</h4>
      <div className="w-12 h-1 bg-green-200 mx-auto my-2"></div>
      <p className="text-gray-200 my-4">There is no published work yet in this section.</p>
      <p className="text-gray-200 mb-16">
        Hit the subscribe button to get notified when a new work is published.
      </p>
      <button onClick={() => handleSubscribe(true)}>
        <div className="flex items-center bg-green-200 py-2 px-8 shadow-btn">
          <h3 className="text-2xl mr-3 font-medium">Subscribe</h3>
          <img src="/icons/subscribe-w.svg" className="w-8" alt="Subscribe icon" />
        </div>
      </button>
    </div>
  )
}

export default NotYet
