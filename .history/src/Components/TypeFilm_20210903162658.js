import axios from 'axios';
import React, { Component } from 'react'

export default class TypeFilm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataFilm: {}
    }
  }

  renderFilmType = () => {
    let type = ''
    const url = this.props.match.url;
    console.log(url)
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
        this.setState({ dataFilm: resp.data });
      })
    } catch (err) { console.log(err) }
  }

  renderFilm = () => {
    const { dataFilm } = this.state;
    const { filmType } = this.props.match.params;
    let listFilm = []
    for (let i = 0; i < 8; i++) {
      const film = dataFilm.phim[filmType][i];
      listFilm.push(film)
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
      </div>

    )
  }
}
