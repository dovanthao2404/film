import React, { Component } from 'react'
import FilmItem from './FilmItem';
import axios from 'axios';

export default class ListType extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount = () => {
    axios({
      url: "https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR3nNQbiyDA7SrJJAJcrkobDdDP7JZPFm0Ls9yKxMz2gMpwERh8HYxHXVAI",
      method: "GET"
    })
  }



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
