import React, { Component } from 'react'
import { connect } from 'react-redux'




class Pagination extends Component {


  totalFilm = () => {

    let total = 0;
    for (let type in this.props.database.phim) {
      total += this.props.database.phim[type].length;
    }

    return total;

  }


  handleChangePwd = async (pwd) => {
    await this.props.updatePWD(pwd)
  }

  handleRenderPwdMid = (panigation, pwdPagination, totalPages) => {

    panigation.push(<li key={1} className="page-item mx-1"><button className="btn btn-outline" onClick={() => this.handleChangePwd(1)}>1</button></li>)

    panigation.push(<li key={pwdPagination - 3} className="mx-2">... </li>)

    panigation.push(<li key={pwdPagination - 2} className="page-item mx-1"><button className="btn btn-outline" onClick={() => this.handleChangePwd(pwdPagination - 2)}>{pwdPagination - 2}</button></li>)

    panigation.push(<li key={pwdPagination - 1} className="page-item mx-1"><button className="btn btn-outline" onClick={() => this.handleChangePwd(pwdPagination - 1)}>{pwdPagination - 1}</button></li>)

    panigation.push(<li key={pwdPagination} className="page-item mx-1"><button className="btn btn-outline active" onClick={() => this.handleChangePwd(pwdPagination)}>{pwdPagination}</button></li>)

    panigation.push(<li key={pwdPagination + 1} className="page-item mx-1"><button className="btn btn-outline" onClick={() => this.handleChangePwd(pwdPagination + 1)}>{pwdPagination + 1}</button></li>)

    panigation.push(<li key={pwdPagination + 2} className="page-item mx-1"><button className="btn btn-outline" onClick={() => this.handleChangePwd(pwdPagination + 2)}>{pwdPagination + 2}</button></li>)

    panigation.push(<li key={pwdPagination + 3} className="mx-2">... </li>)

    panigation.push(<li key={totalPages} className="page-item mx-1"><button className="btn btn-outline" onClick={() => this.handleChangePwd(totalPages)}>{totalPages}</button></li>)
  }

  handleRenderPwd = () => {
    const url = document.URL;
    const urls = url.split("/");
    let panigation = [];
    const row = 3;
    const typeFilm = urls[3]
    console.log(filmDetailCurrent.typeFilm)
    const { pwdPagination, database } = this.props;
    if (database) {
      console.log(database.phim)
      const totalFilm = database.phim[filmDetailCurrent.typeFilm]?.length || this.totalFilm();
      console.log(totalFilm)
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
          this.handleRenderPwdMid(panigation, pwdPagination, totalPages)
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
      <>
        {this.handleRenderPwd()}
      </>
    )
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
const mapStateToProps = (state) => {
  return {
    filmDetailCurrent: state.filmDetailCurrent,
    database: state.database,
    pwdPagination: state.pwdPagination
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)