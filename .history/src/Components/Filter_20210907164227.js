import React, { Component } from 'react'
import { connect } from 'react-redux'
import FilmItem from "./FilmItem"


class Filter extends Component {

  handleRenderFilmFilter = () => {
    const { valueFilter, database } = this.props
    // console.log(database)
    let listType = []
    if (database) {
      for (let type in database.phim) {
        for (let i = 0; i < database.phim[type].length; i++) {
          listType.push(database.phim[type][i].category);
        }
      }
    }
    // console.log(_.uniq(listType))
    const remove = (listType) => [...new Set(listType)]
    return <p> Xin chao</p>
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