import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Sidebar from './layouts/Sidebar'
import Navbar from './layouts/Navbar'
import Subscribe from './modals/Subscribe'
import Contact from './modals/Contact'
import NotYet from './partial/NotYet'
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

  return (
    <div className="app bg-primary text-primary min-h-screen">
      <Router>
        <Sidebar handleSubscribe={setSubscribeModal} handleContact={setContactModal} />
        <div className="content-part ml-20 px-16 pt-8">
          <div className="container">
            <Navbar pageTitle={title} />
            <Switch>
              <Route
                exact
                path={['/', '/about-me']}
                component={() => <WhoAmI setPageTitle={setTitle} />}
              />
              <Route
                exact
                path="/algorithms-data-structures"
                component={() => (
                  <AlgAndDS
                    setPageTitle={setTitle}
                    NoContent={() => <NotYet handleSubscribe={setSubscribeModal} />}
                  />
                )}
              />
              <Route
                exact
                path="/apps"
                component={() => (
                  <Apps
                    setPageTitle={setTitle}
                    NoContent={() => <NotYet handleSubscribe={setSubscribeModal} />}
                  />
                )}
              />
              <Route
                exact
                path="/games"
                component={() => (
                  <Games
                    setPageTitle={setTitle}
                    NoContent={() => <NotYet handleSubscribe={setSubscribeModal} />}
                  />
                )}
              />
              <Route
                exact
                path="/blogs"
                component={() => (
                  <Blogs
                    setPageTitle={setTitle}
                    NoContent={() => <NotYet handleSubscribe={setSubscribeModal} />}
                  />
                )}
              />
              <Route
                exact
                path="/used-tools"
                component={() => (
                  <Tools
                    setPageTitle={setTitle}
                    NoContent={() => <NotYet handleSubscribe={setSubscribeModal} />}
                  />
                )}
              />
              <Route component={() => <NotFound setPageTitle={setTitle} />} />
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
