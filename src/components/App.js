import React from 'react'

import Sidebar from './layouts/Sidebar'
import Navbar from './layouts/Navbar'
function App() {
  return (
    <div className="app bg-bdGray text-gray-100 h-screen">
      <Sidebar />
      <div className="content-part ml-20 px-16 pt-8">
        <div className="container">
          <Navbar pageTitle="Who Am I" />
          <div className="main-part">This is main part</div>
        </div>
      </div>
    </div>
  )
}

export default App
