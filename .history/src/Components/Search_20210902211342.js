import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div className="container">
        <div class="search mt-5 pt-2">
          <input type="text" class="form-control" placeholder="Nhập tên phim">
      </div>
          <div class="list-filmFinded mt-3">
            <div class="row">
              <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="film-item">
                  <div class="card">
                    <div data-href="#" class="data-film"><img
                      src="https://www.fullphimz.net/static/5fe2d564b3fa6403ffa11d1c/60de6d7faa1bb691e514b6d4_poster-anh-la-mua-xuan-cua-em.jpg"
                      class="card-img-top img-fluid rounded" alt="...">
                      <div class="card-body p-0 mt-3">
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
          )
  }
}
