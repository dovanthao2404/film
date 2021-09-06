import React, { Component } from 'react'
import {
  BrowserRouter as Router
} from "react-router-dom";
import RouterApp from "./Router"
import Footer from './Footer';
import Nav from './Nav';
import { connect } from 'react-redux';
import { CallApi } from './../Api/CallApi'
class Film extends Component {

  componentWillMount = async () => {
    if (!this.props.database) {
      CallApi()
    }
  }


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

const mapStateToProps = (state, ownProps) => {
  return {
    database: state.database
  }
}


export default connect(mapStateToProps)(Film)