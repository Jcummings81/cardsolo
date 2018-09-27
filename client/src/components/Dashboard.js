import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NoMatch from './components/NoMatch'
import NavBar from './components/NavBar'
import Card from './components/Card'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <ProtectedRoute exact path="/cards/:id" component={Card} />
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
)

export default App
