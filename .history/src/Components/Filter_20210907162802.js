import React, { Component } from 'react'
import { connect } from 'react-redux'
import FilmItem from "./FilmItem"


class Filter extends Component {
  render() {
    return (
      <>

        <div className="container">
          <section className="listType-film">
            <FilmItem></FilmItem>
            <FilmItem></FilmItem>
            <FilmItem></FilmItem>
            <FilmItem></FilmItem>
            <FilmItem></FilmItem>
            <FilmItem></FilmItem>
            <FilmItem></FilmItem>
          </section>
        </div>

      </>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    filter: state.filter,
    database: state.database,
  }
}

export default connect(mapStateToProps, null)(Filter)