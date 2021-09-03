import React, { Component } from 'react'
import {
  Switch,
  Route,

} from "react-router-dom";
import Footer from './Footer';
import Home from './Home';
import Nav from './Nav';
import Search from './Search';

export default class RouterApp extends Component {
  render() {
    return (
      <>
        <Switch>
          <Nav />
          {/* <Route path="/">
            <Home />
          </Route> */}
          <Route path="/search">
            <Search />
          </Route>
          <Footer />
        </Switch>
      </>
    )
  }
}
