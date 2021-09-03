import React, { Component } from 'react'
import {
  BrowserRouter as Router
} from "react-router-dom";
import RouterApp from "./Router"
import Footer from './Footer';
import Nav from './Nav';

export default class Film extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <RouterApp></RouterApp>
        <Footer />
      </Router>
    )
  }
}
