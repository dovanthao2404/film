import React, { Component } from 'react'

export default class TypeFilm extends Component {

  renderFilmType = () => {
    let type = "a";
    if (this.props) {
      console.log(this.props)
    }
    return type;
  }
  render() {
    return (
      <div className="container">
        <section className="name-type">
          <h2>{this.renderFilmType()}</h2>
        </section>
        <section className="filter-film rounded">
          <div className="row">
            <div className="form-group">
              <label htmlFor="type-film">Thể loại</label>
              <select className="custom-select" name="name" id="type-film">
                <option value="">- Tất cả -</option>
                <option value="phimbo">Phim cổ trang</option>
                <option value="phimchieurap">Phim hành động</option>
                <option value="phimle">Phim tình cảm</option>
                <option value="phimhoathinh">Phim hoạt hình</option>
                <option value="phimphieuluu">Phim phiêu lưu</option>
              </select>
            </div>
          </div>
        </section>
        <div className="list-filmType mt-3">
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

    )
  }
}
