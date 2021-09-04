import axios from 'axios';
import React, { Component } from 'react'
import { connect } from 'react-redux'

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



  handleSearch = async (e) => {
    const dataSearch = e.target.value;
    await this.props.changeDataSearch(dataSearch)
    const filmSearched = [];
    if (this.state.haveData) {
      const nameSearch = this.props.dataSearch;
      const { dataFilm } = this.state
      for (let typeFilm in dataFilm.phim) {
        for (let i = 0; i < dataFilm.phim[typeFilm].length; i++) {
          const nameCurrent = dataFilm.phim[typeFilm][i].title;
          if (nameCurrent.toLowerCase().includes(nameSearch.toLowerCase())) {

          }
        }
      }
    }
  }

  render() {
    return (
      <div className="container">
        <div>
          <div className="search mt-5 pt-2">
            <input type="text" className="form-control" placeholder="Nhập tên phim" onChange={this.handleSearch} />
          </div>
          <div className="list-filmFound mt-3">
            <div className="row">

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