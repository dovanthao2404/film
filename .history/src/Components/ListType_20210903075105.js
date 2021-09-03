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

  componentDidMount = async () => {
    try {
      await axios({
        url: "https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST",
        method: "GET"
      }).then((resp) => {
        this.setState({ dataFilm: resp.data });
      })
    } catch (err) { console.log(err) }

  }


  renderFilm = (_type, quantity) => {
    let listFilm = [];
    const { listFilm } = this.state.dataFilm.phim;
    let i = 0;
    for (let type in listFilm) {
      if (i > quantity)
        if (type === _type) {
          listFilm.push(<FilmItem imageUrl={listFilm.type[i].imageUrl} title={listFilm.type[i].title} />)
        } else {

        }
    }

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
              {/* {this.renderFilm()} */}
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
              <FilmItem></FilmItem>
              <FilmItem></FilmItem>
              <FilmItem></FilmItem>
              <FilmItem></FilmItem>
            </div>
          </div>
        </section>
      </div>

    )
  }
}
