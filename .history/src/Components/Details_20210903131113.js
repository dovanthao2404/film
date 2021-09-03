import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";
class Details extends Component {

  renderBackgroundCarousel = () => {

  }

  render() {
    console.log(this.props)
    return (
      <>
        <section className="carousel"
          style={{
            height: 600,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundImage: 'url(' + this.renderBackgroundCarousel() + ')',
            backgroundPosition: 'center', position: 'relative'
          }}>
          <div className="overlay" />
        </section>
        <section className="film-details">
          <div className="container">
            <div className="row">
              <div className="col col-md-3">
                <img className="img-fluid" src="https://www.fullphimz.net/static/5fe2d564b3fa6403ffa11d1c/60d5eaee9444ba4ccf11c156_poster-quyen-tu-luong.jpg" alt="..." />
                <Link to="/a/a/a" style={{ width: '100%' }} className="btn btn-danger mt-3"><i className="fa fa-play" /> Xem phim</Link>

              </div>
              <div className="col col-md-7">
                <h2 className="film-name">Snake Eyes: G.I. Joe Origins</h2>
                <h4 className="author-name mb-4">G. I. Joe: Xà nhãn báo thù (2021)</h4>
                <p >2 giờ 1</p>
                <div>
                  <button className="btn btn-primary"><i className="fab fa-facebook" /> Chia sẻ</button>
                  <button className="btn btn-success ml-1"><i className="fa fa-plus" /> Bộ sưu tập</button>
                </div>
                <div className="episode  mt-4 ">
                  <h2>Tập</h2>
                  <div>
                    <button className="mr-1 mt-1 btn btn-success">1</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <section className="name-type--detail listType-header">
            <h3>Liên quan</h3>
          </section>
        </div>
        <div className="container">
          <div className="connection">
            <div className="row">

            </div>
          </div>
        </div>
      </>
    )
  }

}
const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeUrl: () => {
      dispatch(actionCreator)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Details)