import React, { Component } from 'react'
import { connect } from 'react-redux'
import FilmItem from "./FilmItem"
import { v4 as uuidv4 } from 'uuid';
import RenderListFilm from './RenderListFilm';

class Filter extends Component {

  handleRenderFilmFilter = () => {
    const { database } = this.props
    let listFilmFilter = []
    if (database) {
      for (let type in database.phim) {
        for (let i = 0; i < database.phim[type].length; i++) {
          if (this.props.filter === database.phim[type][i].category) {
            listFilmFilter.push(
              database.phim[type][i]
            )
          }
        }
      }
    }
    this.props.initialFilter(listFilmFilter)
  }

  render() {
    return (
      <>
        <div className="container">
          <section className="listType-film">
            <div className="row">
              <RenderListFilm></RenderListFilm>
            </div>
          </section>
        </div>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initialFilter: (data) => {
      dispatch({ type: "INIT", data })
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    filter: state.filter,
    database: state.database,
    listTypeFilmFilter: state.listTypeFilmFilter
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)