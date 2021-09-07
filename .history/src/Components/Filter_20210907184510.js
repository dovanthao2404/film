import React, { Component } from 'react'
import { connect } from 'react-redux'
import FilmItem from "./FilmItem"

class Filter extends Component {

  handleRenderFilmFilter = () => {
    const { database } = this.props
    let listFilmFilter = []
    if (database) {
      for (let type in database.phim) {
        for (let i = 0; i < database.phim[type].length; i++) {
          if (this.props.listTypeFilmFilter.includes(database.phim[type][i])) {
            <FilmItem
              key={i}
              imageUrl={database.phim[type][i].imageUrl}
              title={database.phim[type][i].title}
              type={type}
            />
          }
        }
      }
    }
    return listFilmFilter;
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
    listTypeFilmFilter: state.listTypeFilmFilter
  }
}

export default connect(mapStateToProps, null)(Filter)