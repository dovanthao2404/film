import React, { Component } from 'react'
import { connect } from 'react-redux'
// import FilmItem from "./FilmItem"
// import { v4 as uuidv4 } from 'uuid';
import RenderListFilm from './RenderListFilm';

class Filter extends Component {

  handleRenderFilmFilter = () => {
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