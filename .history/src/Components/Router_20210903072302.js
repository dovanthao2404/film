import React, { Component } from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";
import Details from './Details';

import Home from './Home';
import Search from './Search';
import TypeFilm from "./TypeFilm"
import WatchFilm from './WatchFilm';


export default class RouterApp extends Component {
  render() {
    return (

      <Switch>

        <Route path="/">
          <Home />
        </Route>

        <Home />

        <Route path="/search">
          <Search />
        </Route>
        <Route path="/:filmType/:name/:id" component={WatchFilm} />
        <Route path="/:filmType/:name" component={Details} />
        <Route path="/:filmType" component={TypeFilm} />
      </Switch>
    )
  }
}
