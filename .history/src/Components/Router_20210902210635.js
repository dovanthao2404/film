import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Filter from './Filter';
import Footer from './Footer';
import ListType from './ListType';
import Nav from './Nav';


export default class RouterApp extends Component {
  render() {
    return (
      <>
        <Nav></Nav>
        <Switch>
          <Route path='/' component={Filter} />


        </Switch>
        <Footer></Footer>
      </>
    )
  }
}
