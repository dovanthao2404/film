import React, { Component } from 'react'
import { connect } from 'react-redux'


class Filter extends Component {

  handleRenderFilmFilter = () => {
    const { database } = this.props
    let listType = []
    if (database) {
      for (let type in database.phim) {
        for (let i = 0; i < database.phim[type].length; i++) {
          listType.push(database.phim[type][i].category);
        }
      }
    }
    const removeDuplicates = (listType) => [...new Set(listType)];
    console.log(removeDuplicates(listType))

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
    listTypeFilmFilter: state.listTypeFilmFilter
  }
}

export default connect(mapStateToProps, null)(Filter)