import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Sidebar from './layouts/Sidebar'
import Navbar from './layouts/Navbar'
import NotYet from './NotYet'
import WhoAmI from './WhoAmI'
import Subscribe from './Subscribe'

const App = () => {
  const [title, setTitle] = useState(() => 'Who Am I')
  const [subscribeModal, setSubscribeModal] = useState(false)

  const handleClick = (clickedTitle) => setTitle(clickedTitle)
  const handleSubscribe = (flag) => setSubscribeModal(flag)

  return (
    <div className="app bg-bdGray text-gray-100 h-screen">
      <Router>
        <Sidebar handleClick={handleClick} handleSubscribe={setSubscribeModal} />
        <div className="content-part ml-20 px-16 pt-8">
          <div className="container">
            <Navbar pageTitle={title} />
            <Switch>
              <Route exact path={['/', '/about-me']} component={WhoAmI} />
              <Route path="/*" component={() => <NotYet handleSubscribe={handleSubscribe} />} />
            </Switch>
          </div>
        </div>
      </Router>
      {subscribeModal ? <Subscribe handleSubscribe={setSubscribeModal} /> : null}
    </div>
  )
}

export default App
