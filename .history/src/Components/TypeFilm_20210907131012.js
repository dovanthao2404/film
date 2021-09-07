import React, { Component } from 'react'
import { connect } from 'react-redux';
import FilmItem from "./FilmItem"
import Filter from "./Filter"
class TypeFilm extends Component {
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


  totalFilm = () => {

    let total = 0;
    for (let type in this.props.database.phim) {
      total += this.props.database.phim[type].length;
    }

    return total;

  }

  renderFilm = () => {

    const { pwdPagination, database } = this.props;
    const { filmType } = this.props.match.params;
    if (database) {
      const totalFilm = database.phim[filmType]?.length || this.totalFilm();
      const row = 3;
      var startPage = (pwdPagination - 1) * row * 4;
      var endPage = startPage + 12;
      endPage = endPage > totalFilm ? totalFilm : endPage;
      let listFilm = []
      if (filmType !== "tatcaphim") {
        for (let i = startPage; i < endPage; i++) {

          const film = database.phim[filmType][i];
          listFilm.push(<FilmItem key={i} imageUrl={film.imageUrl} title={film.title} type={filmType} />);
        }
      } else {

        let count = 0;
        let temp = []
        for (let type in database.phim) {
          for (let i = 0; i < database.phim[type].length; i++) {
            const film = database.phim[type][i];
            film.type = type;
            temp.push(film);
          }
        }

        for (let i = startPage; i < endPage; i++) {
          listFilm.push(<FilmItem key={count} imageUrl={temp[i].imageUrl} title={temp[i].title} type={temp[i].type} />)
          count++;
        }
      }
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
      return listFilm;

    }
  }

  handleChangePwd = async (pwd) => {
    await this.props.updatePWD(pwd)
  }

  handleRenderPwdMid = () => {

  }

  handleRenderPwd = () => {

    let panigation = [];
    const row = 3;
    const { filmType } = this.props.match.params;
    const { pwdPagination, database } = this.props;
    if (database) {
      const totalFilm = database.phim[filmType]?.length || this.totalFilm();
      const totalPages = Math.ceil(totalFilm / row / 4);
      const listPagination = 7;
      if (totalPages > 7) {
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
                    onClick={() => this.handleChangePwd(totalPages)}>{totalPages}</button>
                </li>)
            }
          }

        } else if (totalPages - pwdPagination < 4) {
          for (let i = totalPages - listPagination; i <= totalPages; i++) {
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
              i++
            } else {
              panigation.push(
                <li key={i} className="page-item mx-1">
                  <button
                    className="btn btn-outline"
                    onClick={() => this.handleChangePwd(1)}>{1}</button>
                </li>)
            }
          }

        } else {



        }
      } else {
        for (let i = 1; i <= totalPages; i++) {
          if (i !== pwdPagination) {
            panigation.push(
              <li key={i} className="page-item mx-1">
                <button
                  className="btn btn-outline"
                  onClick={() => this.handleChangePwd(i)}>{i}</button>
              </li>)
          } else {
            panigation.push(
              <li key={i} className="page-item mx-1">
                <button
                  className="btn btn-outline active"
                  onClick={() => this.handleChangePwd(i)}>{i}</button>
              </li>)
          }
        }
      }
      return panigation;

    }
  }



  render() {
    return (
      <div className="container">
        <section className="name-type">
          <h2>{this.renderFilmType()}</h2>
        </section>
        <Filter></Filter>
        <div className="list-filmType mt-3">
          <div className="row">
            {this.renderFilm()}
          </div>
        </div>
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
    pwdPagination: state.pwdPagination,
    database: state.database
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