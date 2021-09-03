import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './Footer';
import Home from './Home';
import Nav from './Nav';
import Search from './Search';

export default class RouterApp extends Component {
  render() {
    return (
      <>

        <Nav />
        <Router >
          <Switch>
            <Route path='/' component={Home} />
            <Route path='/search' component={Search} />
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}
