import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";
import FilmItem from './FilmItem';

export default class ListType extends Component {
  render() {
    return (<div>
      <div className="container">
        <section className="listType-film">
          <div className="nominated-movie">
            <div className="listType-header">
              <h3>Phim đề cử</h3>
            </div>
            <div className="row">
              <FilmItem></FilmItem>
              <FilmItem></FilmItem>
              <FilmItem></FilmItem>
              <FilmItem></FilmItem>
            </div>
          </div>
          <div className="odd-movie">
            <div className="listType-header">
              <h3>Phim lẻ mới cập nhật</h3>
            </div>
            <div className="row">
              <FilmItem></FilmItem>
              <FilmItem></FilmItem>
              <FilmItem></FilmItem>
              <FilmItem></FilmItem>
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
    </div>
    )
  }
}
