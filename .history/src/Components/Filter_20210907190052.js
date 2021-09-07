import React, { Component } from 'react'
import { connect } from 'react-redux'
import FilmItem from "./FilmItem"
import { v4 as uuidv4 } from 'uuid';

class Filter extends Component {

  handleRenderFilmFilter = () => {
    const { database } = this.props
    let listFilmFilter = []
    if (database) {
      for (let type in database.phim) {
        for (let i = 0; i < database.phim[type].length; i++) {
          if (this.props.filter === database.phim[type][i].category) {
            listFilmFilter.push(
              <FilmItem
                key={uuidv4()
                }
                imageUrl={database.phim[type][i].imageUrl}
                title={database.phim[type][i].title}
                type={type}
              />)
          }
        }
      }
    }
    console.log(listFilmFilter)
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