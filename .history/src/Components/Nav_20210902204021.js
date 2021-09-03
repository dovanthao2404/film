import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Nav extends Component {
  render() {
    return (

      <div class="header fixed-top">
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="#">XemPhim</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#film-navbar"
            aria-controls="film-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="film-navbar">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="search.html"><i class="fa fa-search"></i>Tìm kiếm</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="filmType.html">Phim lẻ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Phim bộ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Phim chiếu rạp</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Phim hoạt hình</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Tất cả phim</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">FAQ</a>
              </li>
            </ul>
            <form class="form-inline ">
              <button class="btn btn-danger my-2 my-sm-0" type="submit">Đăng nhập</button>
            </form>
          </div>
        </nav>
      </div>
    )
  }
}
