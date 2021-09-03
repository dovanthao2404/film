import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <div className="header fixed-top">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="#">XemPhim</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#film-navbar" aria-controls="film-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="film-navbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="search.html"><i className="fa fa-search" />Tìm kiếm</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="filmType.html">Phim lẻ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Phim bộ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Phim chiếu rạp</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Phim hoạt hình</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Tất cả phim</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">FAQ</a>
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
