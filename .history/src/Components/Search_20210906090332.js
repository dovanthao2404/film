
import React, { Component } from 'react'
import { connect } from 'react-redux'
import FilmItem from "./FilmItem"
class Search extends Component {



  getDataChange = async (e) => {
    const dataSearch = e.target.value;
    await this.props.changeDataSearch(dataSearch)
  }

  renderFilmSearch = (list) => {
    return list.map((film, key) => {
      return <FilmItem
        key={key}
        imageUrl={film.imageUrl}
        title={film.title}
        type={film.type}
      />
    })
  }

  componentWillUnmount = () => {
    this.props.changeDataSearch("")
  }

  render() {
    const filmSearched = [];
    console.log(this.state.haveData)
    if (this.state.haveData && this.props.dataSearch !== "") {
      const nameSearch = this.props.dataSearch;
      const { dataFilm } = this.state

      for (let typeFilm in dataFilm.phim) {
        for (let i = 0; i < dataFilm.phim[typeFilm].length; i++) {
          const nameCurrent = dataFilm.phim[typeFilm][i].title;

          if (nameCurrent.toLowerCase().includes(nameSearch.toLowerCase())) {
            const filmPush = dataFilm.phim[typeFilm][i];
            filmPush.type = typeFilm;
            filmSearched.push(filmPush)
          }
        }
      }
    }
    return (
      <div className="container">
        <div>
          <div className="search mt-5 pt-2">
            <input type="text" className="form-control" placeholder="Nhập tên phim" onChange={this.getDataChange} />
          </div>
          <div className="list-filmFound mt-3">
            <div className="row">
              {this.renderFilmSearch(filmSearched)}
            </div>
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    dataSearch: state.dataSearch,
    database: state.database
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeDataSearch: (dataSearch) => {
      dispatch({ type: "SET_DATA_SEARCH", dataSearch })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)