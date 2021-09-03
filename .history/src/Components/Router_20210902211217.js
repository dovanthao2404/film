import React, { Component } from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";
import Footer from './Footer';
import Home from './Home';
import Nav from './Nav';


export default class RouterApp extends Component {
  render() {
    return (
      <>
        <Nav></Nav>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
        <Footer></Footer>
      </>
    )
  }
}
