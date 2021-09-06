import React, { Component } from 'react'
import {
  BrowserRouter as Router
} from "react-router-dom";
import RouterApp from "./Router"
import Footer from './Footer';
import Nav from './Nav';
import axios from 'axios';
import { connect } from 'react-redux';

class Film extends Component {

  componentWillMount = async () => {
    try {
      await axios({
        url: "https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST",
        method: "GET"
      }).then((resp) => {
        this.props.setDatabase(resp.data)
      })
    } catch (err) { console.log(err) }
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setDatabase: (data) => {
      dispatch({ type: "SET_DB", data })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Film)