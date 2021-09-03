import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";
export default class Nav extends Component {
  render() {
    return (
      <div className="header fixed-top">
        <nav className="navbar navbar-expand-lg">
          <Link to="/">XemPhim</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#film-navbar" aria-controls="film-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="film-navbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/search"><i className="fa fa-search" />Tìm kiếm</Link>
              </li>
              <li className="nav-item">
                <Link to="/">Phim lẻ</Link>
              </li>
              <li className="nav-item">
                <Link to="/">Phim bộ</Link>
              </li>
              <li className="nav-item">
                <Link to="/">Phim chiếu rạp</Link>
              </li>
              <li className="nav-item">
                <Link to="/">Phim hoạt hình</Link>
              </li>
              <li className="nav-item">
                <Link to="/">Tất cả phim</Link>
              </li>
              <li className="nav-item">
                <Link to="/">FAQ</Link>
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
