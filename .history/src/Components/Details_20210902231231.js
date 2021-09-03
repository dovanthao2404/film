import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";
export default class Details extends Component {
  render() {
    return (
      <>
        <section className="carousel" style={{ height: 600, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundImage: 'url("https://www.fullphimz.net/static/5fe2d564b3fa6403ffa11d1c/60d5eaee9444ba4ccf11c156_poster-quyen-tu-luong.jpg")', backgroundPosition: 'center', position: 'relative' }}>
          <div className="overlay" />
        </section>
        <div className="container">
          <section className="name-type--detail">
            <h2>Liên quan</h2>
          </section>
        </div>
        <section className="film-details">
          <div className="container">
            <div className="row">
              <div className="col col-md-3">
                <img className="img-fluid" src="https://www.fullphimz.net/static/5fe2d564b3fa6403ffa11d1c/60d5eaee9444ba4ccf11c156_poster-quyen-tu-luong.jpg" alt="..." />
                <Link to="/a/a/a" style={{ width: '100%' }} className="btn btn-danger mt-3"><i className="fa fa-play" /> Xem phim</Link>

              </div>
              <div className="col col-md-9">
                <h2 className="film-name">Snake Eyes: G.I. Joe Origins</h2>
                <h4 className="author-name mb-4">G. I. Joe: Xà nhãn báo thù (2021)</h4>
                <p >2 giờ 1</p>
                <div>
                  <button className="btn btn-primary"><i className="fab fa-facebook" /> Chia sẻ</button>
                  <button className="btn btn-success ml-1"><i className="fa fa-plus" /> Bộ sưu tập</button>
                </div>
              </div>
            </div>
          </div></section>
        <div className="container">
          <div className="connection">
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
            </div>
          </div>
        </div>
      </>
    )
  }
}
