import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class FilmItem extends Component {
  render() {
    return (
      <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
        <div className="film-item">
          <div className="card">
            <Link to="/a/b" className="data-film">
              <img src={this.props.imageUrl} className="card-img-top img-fluid rounded" alt="..." />
              <div className="card-body p-0 mt-3">
                <h5>{this.props.title}</h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
