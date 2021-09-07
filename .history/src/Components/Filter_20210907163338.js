import React, { Component } from 'react'
import { connect } from 'react-redux'
import FilmItem from "./FilmItem"


class Filter extends Component {

  handleRenderFilmFilter = () => {
    const { valueFilter, database } = this.props

  }

  render() {
    return (
      <>
        <div className="container">
          <section className="listType-film">
            <div className="row">
              {this.handleRenderFilmFilter()}
            </div>
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