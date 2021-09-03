import React, { Component } from 'react'
import {
  Switch,
  Route,

} from "react-router-dom";

import Home from './Home';
import Search from './Search';
import TypeFilm from "./TypeFilm"

export default class RouterApp extends Component {
  render() {
    return (

      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/:filmType/:filmName/:id">
          <TypeFilm />
        </Route>

      </Switch>

    )
  }
}
