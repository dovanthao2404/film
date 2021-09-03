import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RouterApp from "./Router"
export default class Film extends Component {
  render() {
    return (
      <Router>
        <RouterApp></RouterApp>
      </Router>
    )
  }
}
