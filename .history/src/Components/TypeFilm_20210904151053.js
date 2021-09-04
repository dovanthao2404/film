import axios from 'axios';
import React, { Component } from 'react'
import FilmItem from "./FilmItem"
export default class TypeFilm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataFilm: {},
      haveData: false
    }
  }

  renderFilmType = () => {
    let type = ''
    const url = this.props.match.url;
    if (url === "/phimbo") {
      type = "Phim bộ"
    } else if (url === "/phimle") {
      type = "Phim lẻ"
    } else if (url === "/phimchieurap") {
      type = "Phim chiếu rạp"
    } else if (url === "/phimhoathinh") {
      type = "Phim hoạt hình"
    } else {
      type = "Tất cả phim"
    }
    return type;
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

  renderFilm = () => {
    if (this.state.haveData) {
      const { filmType } = this.props.match.params;
      const { dataFilm } = this.state;
      let listFilm = []
      if (filmType !== "tatcaphim") {
        for (let i = 0; i < 12; i++) {
          const film = dataFilm.phim[filmType][i];
          listFilm.push(<FilmItem key={i} imageUrl={film.imageUrl} title={film.title} type={filmType} />);
        }
      } else {
        let count = 0;
        for (let type in dataFilm.phim) {
          for (let i = 0; i < 4; i++) {
            const film = dataFilm.phim[type][i];
            listFilm.push(<FilmItem key={count} imageUrl={film.imageUrl} title={film.title} type={type} />);
            count++;
          }
        }
      }
      return listFilm;
    }
  }

  render() {
    return (
      <div className="container">
        <section className="name-type">
          <h2>{this.renderFilmType()}</h2>
        </section>
        <section className="filter-film rounded">
          <div className="row">
            <div className="form-group">
              <label htmlFor="type-film">Thể loại</label>
              <select className="custom-select" name="name" id="type-film">
                <option value="">- Tất cả -</option>
                <option value="phimbo">Phim cổ trang</option>
                <option value="phimchieurap">Phim hành động</option>
                <option value="phimle">Phim tình cảm</option>
                <option value="phimhoathinh">Phim hoạt hình</option>
                <option value="phimphieuluu">Phim phiêu lưu</option>
              </select>
            </div>
          </div>
        </section>
        <div className="list-filmType mt-3">
          <div className="row">
            {this.renderFilm()}
          </div>
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item mx-1">
              <a className="btn btn-outline" href="/" aria-label="Previous">
                <span aria-hidden="true">«</span>
              </a>
            </li>
            <li className="page-item mx-1"><a className="btn btn-outline" href="/">1</a></li>
            <li className="page-item mx-1"><a className="btn btn-outline" href="/">2</a></li>
            <li className="page-item mx-1"><a className="btn btn-outline" href="/">3</a></li>
            <li className="page-item mx-1">
              <a className="btn btn-outline" href="/" aria-label="Next">
                <span aria-hidden="true">»</span>
              </a>
            </li>
          </ul>
        </nav>

      </div>

    )
  }
}
