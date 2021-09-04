import axios from 'axios';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import FilmItem from "./FilmItem"
class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataFilm: {},
      haveData: false,
    }
  }

  componentDidMount = () => {
    try {
      axios({
        url: "https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST",
        method: "GET"
      }).then((resp) => {
        this.setState({ dataFilm: resp.data, haveData: true });
      })
    } catch (err) { console.log(err) }
  }



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
      // type={type}
      />
    })
  }

  render() {
    const filmSearched = [];
    if (this.state.haveData) {
      const nameSearch = this.props.dataSearch;
      const { dataFilm } = this.state
      for (let typeFilm in dataFilm.phim) {
        for (let i = 0; i < dataFilm.phim[typeFilm].length; i++) {
          const nameCurrent = dataFilm.phim[typeFilm][i].title;
          if (nameCurrent.toLowerCase().includes(nameSearch.toLowerCase())) {
            filmSearched.push(dataFilm.phim[typeFilm][i])
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
    dataSearch: state.dataSearch
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