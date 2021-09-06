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
        <Switch>
          <Route path="/" component={Home} />
          <Route path="home" component={Home} />
        </Switch>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/:filmType/:name/:index/:episode" component={WatchFilm} />
        <Route path="/:filmType/:name" component={Details} />
        <Route path="/:filmType" component={TypeFilm} />
      </Switch>
    )
  }
}
