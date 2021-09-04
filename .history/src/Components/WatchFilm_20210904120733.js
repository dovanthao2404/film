import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class WatchFilm extends Component {
  renderEpisode = () => {
    let episode = [];

    //   <div>
    //   <Link to="/a/a/a" className="btn btn-success">Tập 1</Link>
    //   <Link to="/a/a/a" className="btn btn-success ml-1">Tập 2</Link>
    // </div>

    return episode;
  }
  render() {
    console.log(this.props)
    return (
      <>
        <section className="film-video">
          <iframe title="This is a title" width="100%" height="100%" src="https://ok.ru/videoembed/2391306930885" frameBorder={0} allow="autoplay" allowFullScreen />
        </section>
        <section className="description mt-5">
          <div className="container">
            <h2>Anh là mùa xuân của em (phần 1)</h2>
            <h5>You Are My Spring (season 1) (2021)</h5>
            <button className="btn btn-primary mt-3"><i className="fab fa-facebook-square" /> Chia sẻ</button>
            <div className="episode mt-4">
              {this.renderEpisode()}
            </div>
          </div>
        </section>
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
    dispatch1: () => {
      dispatch(actionCreator)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(WatchFilm)