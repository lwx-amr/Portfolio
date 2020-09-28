import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Sidebar from './layouts/Sidebar'
import Navbar from './layouts/Navbar'
import Subscribe from './modals/Subscribe'
import Contact from './modals/Contact'
import NotYet from './pages/NotYet'
import WhoAmI from './pages/WhoAmI'
import AlgAndDS from './pages/AlgAndDS'
import Games from './pages/Games'
import Apps from './pages/Apps'
import Blogs from './pages/Blogs'
import Tools from './pages/Tools'
import NotFound from './pages/NotFound'

const App = () => {
  const [title, setTitle] = useState(() => 'Who Am I')
  const [subscribeModal, setSubscribeModal] = useState(false)
  const [contactModal, setContactModal] = useState(false)

  const handleClick = (clickedTitle) => setTitle(clickedTitle)
  const handleSubscribe = (flag) => setSubscribeModal(flag)

  return (
    <div className="app bg-bdGray text-gray-100 h-screen">
      <Router>
        <Sidebar
          handleClick={handleClick}
          handleSubscribe={setSubscribeModal}
          handleContact={setContactModal}
        />
        <div className="content-part ml-20 px-16 pt-8">
          <div className="container">
            <Navbar pageTitle={title} />
            <Switch>
              <Route exact path={['/', '/about-me']} component={WhoAmI} />
              <Route
                exact
                path="/algorithms-data-structures"
                component={() => (
                  <AlgAndDS NoContent={() => <NotYet handleSubscribe={handleSubscribe} />} />
                )}
              />
              <Route
                exact
                path="/apps"
                component={() => (
                  <Apps NoContent={() => <NotYet handleSubscribe={handleSubscribe} />} />
                )}
              />
              <Route
                exact
                path="/games"
                component={() => (
                  <Games NoContent={() => <NotYet handleSubscribe={handleSubscribe} />} />
                )}
              />
              <Route
                exact
                path="/blogs"
                component={() => (
                  <Blogs NoContent={() => <NotYet handleSubscribe={handleSubscribe} />} />
                )}
              />
              <Route
                exact
                path="/used-tools"
                component={() => (
                  <Tools NoContent={() => <NotYet handleSubscribe={handleSubscribe} />} />
                )}
              />
              <Route path="/*" component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
      {subscribeModal ? <Subscribe handleSubscribe={setSubscribeModal} /> : null}
      {contactModal ? <Contact handleContact={setContactModal} /> : null}
    </div>
  )
}

export default App
