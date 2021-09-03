import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class FilmItem extends Component {
  render() {
    return (
      <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
        <div className="film-item">
          <div className="card">
            <Link to="/a/b" className="data-film"><img src="https://www.fullphimz.net/static/5fe2d564b3fa6403ffa11d1c/60de6d7faa1bb691e514b6d4_poster-anh-la-mua-xuan-cua-em.jpg" className="card-img-top img-fluid rounded" alt="..." />
              <div className="card-body p-0 mt-3">
                <h5>G. I. Joe: Xà nhãn báo thù</h5>
                <span>Snake Eyes: G.I. Joe Origins
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
