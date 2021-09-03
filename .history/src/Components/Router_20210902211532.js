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
        <Nav />

        <Route path='/' component={Home} />
        <Route path='/search' component={Search} />

        <Footer />
      </>
    )
  }
}
