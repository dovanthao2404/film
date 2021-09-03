import React, { Component } from 'react'

export default class WatchFilm extends Component {
  render() {
    return (
      <>
        <section class="film-video">
          <iframe width="100%" height="100%" src="https://ok.ru/videoembed/2391306930885" frameborder="0" allow="autoplay"
            allowfullscreen></iframe>
        </section>
        <section class="description mt-5">
          <div class="container">
            <h2>Anh là mùa xuân của em (phần 1)</h2>
            <h5>You Are My Spring (season 1) (2021)</h5>
            <button class="btn btn-primary mt-3"><i class="fab fa-facebook-square"></i> Chia sẻ</button>
            <div class="episode mt-4">
              <button class="btn btn-success  ml-1">Tập 1</button>
              <button class="btn btn-success  ml-1">Tập 2</button>
            </div>
          </div>
        </section>
      </>
    )
  }
}
