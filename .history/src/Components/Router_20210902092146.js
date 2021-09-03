import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class RouterApp extends Component {
  render() {
    return (
      <Switch>
        <nav class="nav justify-content-center">
          <a class="nav-link active" href="#">Active link</a>
          <a class="nav-link" href="#">Link</a>
          <a class="nav-link disabled" href="#">Disabled link</a>
        </nav>
      </Switch>
    )
  }
}
