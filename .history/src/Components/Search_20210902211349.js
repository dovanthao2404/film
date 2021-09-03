import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <div className="search mt-5 pt-2">
            <input type="text" className="form-control" placeholder="Nhập tên phim" />
          </div>
          <div className="list-filmFinded mt-3">
            <div className="row">
              <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="film-item">
                  <div className="card">
                    <div data-href="#" className="data-film"><img src="https://www.fullphimz.net/static/5fe2d564b3fa6403ffa11d1c/60de6d7faa1bb691e514b6d4_poster-anh-la-mua-xuan-cua-em.jpg" className="card-img-top img-fluid rounded" alt="..." />
                      <div className="card-body p-0 mt-3">
                        <h5>G. I. Joe: Xà nhãn báo thù</h5>
                        <span>Snake Eyes: G.I. Joe Origins
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
