import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
  Link
} from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="header fixed-top">
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" to="/home">XemPhim</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#film-navbar" aria-controls="film-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="film-navbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" onClick={this.props.resetPWD} to="/search"><i className="fa fa-search" />Tìm kiếm</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={this.props.resetPWD} to="/phimbo">Phim bộ</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={this.props.resetPWD} to="/phimle">Phim lẻ</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={this.props.resetPWD} to="/phimchieurap">Phim chiếu rạp</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={this.props.resetPWD} to="/phimhoathinh">Phim hoạt hình</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={this.props.resetPWD} to="/tatcaphim">Tất cả phim</Link>
              </li>
            </ul>
            <form className="form-inline ">
              <button className="btn btn-danger my-2 my-sm-0" type="submit">Đăng nhập</button>
            </form>
          </div>
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
    changType: (typeFilm) => {
      dispatch({ type: "CHANGE_TYPE", typeFilm })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav)