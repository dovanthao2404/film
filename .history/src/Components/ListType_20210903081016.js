import React, { Component } from 'react'
import FilmItem from './FilmItem';
import axios from 'axios';

export default class ListType extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataFilm: {}
    }
  }

  componentDidMount = () => {
    try {
      axios({
        url: "https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST",
        method: "GET"
      }).then((resp) => {
        this.setState({ dataFilm: resp.data });
      })
    } catch (err) { console.log(err) }

  }


  renderFilm = (_type, quantity) => {
    let listFilm = [];
    const { dataFilm } = this.state;
    let i = 0;
    for (let type in dataFilm.phim) {

      if (type === _type) {
        for (let i = 0; i < quantity; i++) {
          listFilm.push(<FilmItem key={i} imageUrl={dataFilm.phim[type][i].imageUrl} title={dataFilm.phim[type][i].title} />)
        }

      } else if (_type === "all") {
        listFilm.push(
          <FilmItem key={i} imageUrl={dataFilm.phim[type][i].imageUrl} title={dataFilm.phim[type][i].title} />
        )
      }


      i++;
    }
    return listFilm;
  }

  render() {
    return (
      <div className="container">
        <section className="listType-film">
          <div className="nominated-movie">
            <div className="listType-header">
              <h3>Phim đề cử</h3>
            </div>
            <div className="row">
              {this.renderFilm("all")}
            </div>
          </div>
          <div className="odd-movie">
            <div className="listType-header">
              <h3>Phim lẻ mới cập nhật</h3>
            </div>
            <div className="row">
              {this.renderFilm("phimle", 8)}
            </div>
          </div>
          <div className="series-movie">
            <div className="listType-header">
              <h3>Phim bộ mới cập nhật</h3>
            </div>
            <div className="row">
              {this.renderFilm("phimbo", 4)}
            </div>
          </div>
        </section>
      </div>

    )
  }
}
