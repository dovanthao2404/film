import axios from 'axios';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FilmItem from "./FilmItem"
class TypeFilm extends Component {

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

  handleChangePwd = async (pwd) => {
    await this.props.updatePWD(pwd)
  }

  handleRenderPwd = () => {
    if (this.state.haveData) {
      let panigation = [];
      const row = 3;
      const { filmType } = this.props.match.params;
      const totalFilm = this.state.dataFilm.phim[filmType].length;
      const totalPages = Math.ceil(totalFilm / row);
      const { pwdPagination } = this.props;

      const listPagination = 7;
      console.log(totalPages - pwdPagination)
      if (pwdPagination <= 4) {
        for (let i = 1; i <= listPagination; i++) {
          if (i <= 5) {
            if (i !== pwdPagination) {
              panigation.push(
                <li key={i} className="page-item mx-1">
                  <button
                    className="btn btn-outline"
                    onClick={() => this.handleChangePwd(i)}>{i}</button>
                </li>
              )
            } else {
              panigation.push(
                <li key={i} className="page-item mx-1">
                  <button
                    className="btn btn-outline active"
                    onClick={() => this.handleChangePwd(i)}>{i}</button>
                </li>
              )
            }
          } else if (i === 6) {
            panigation.push(
              <li key={i} className="mx-1">...</li>
            )
          } else {
            panigation.push(
              <li key={i} className="page-item mx-1">
                <button
                  className="btn btn-outline"
                  onClick={() => this.handleChangePwd(i)}>{totalPages}</button>
              </li>)
          }
        }

      } else if (totalPages - pwdPagination <= 4) {
        console.log("dvao")
        for (let i = totalPages; i <= listPagination; i--) {
          if (totalPages - i <= 5) {
            if (i !== pwdPagination) {
              panigation.push(
                <li key={i} className="page-item mx-1">
                  <button
                    className="btn btn-outline"
                    onClick={() => this.handleChangePwd(i)}>{i}</button>
                </li>
              )
            } else {
              panigation.push(
                <li key={i} className="page-item mx-1">
                  <button
                    className="btn btn-outline active"
                    onClick={() => this.handleChangePwd(i)}>{i}</button>
                </li>
              )
            }
          } else if (totalPages - 6 === i) {
            panigation.push(
              <li key={i} className="mx-1">...</li>
            )
          } else {
            panigation.push(
              <li key={i} className="page-item mx-1">
                <button
                  className="btn btn-outline"
                  onClick={() => this.handleChangePwd(i)}>{totalPages}</button>
              </li>)
          }
        }

      }
      return panigation;
    }
  }

  render() {
    const { filmType } = this.props.match.params;

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
        {/* <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center align-items-end">
            <li className="page-item mx-1">
              <button className="btn btn-outline" onClick={this.handleChangePwd} aria-label="Previous">
                <span aria-hidden="true">«</span>
              </button>
            </li>
            <li className="page-item mx-1"><button className="btn btn-outline active" onClick={this.handleChangePwd}>1</button></li>
            <li className="mx-2">... </li>
            <li className="page-item mx-1"><button className="btn btn-outline" onClick={this.handleChangePwd}>2</button></li>
            <li className="page-item mx-1"><button className="btn btn-outline" onClick={this.handleChangePwd}>3</button></li>
            <li className="page-item mx-1"><button className="btn btn-outline" onClick={this.handleChangePwd}>4</button></li>
            <li className="page-item mx-1"><button className="btn btn-outline" onClick={this.handleChangePwd}>5</button></li>
            <li className="mx-2">... </li>
            <li className="page-item mx-1"><button className="btn btn-outline" onClick={this.handleChangePwd}>791</button></li>

            <li className="page-item mx-1">
              <button className="btn btn-outline" onClick={this.handleChangePwd} aria-label="Next">
                <span aria-hidden="true">»</span>
              </button>
            </li>
          </ul>
        </nav> */}
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center align-items-end">
            {this.handleRenderPwd()}
          </ul>
        </nav>
      </div>

    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    pwdPagination: state.pwdPagination
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    resetPWD: () => {
      dispatch({ type: "RESET_PWD" })
    },
    updatePWD: (newPwd) => {
      dispatch({ type: "UPDATE_PWD", newPwd })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TypeFilm)