import axios from 'axios';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class WatchFilm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFilm: {},
      haveData: false,
    }
  }

  componentDidMount = () => {
    try {
      axios({
        url: "https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST",
        method: "GET"
      }).then((resp) => {
        this.setState({ dataFilm: resp.data, haveData: true });
      })
    } catch (err) { console.log(err) }
  }

  renderEpisode = () => {
    let episode = [];
    const { filmDetailCurrent } = this.props;
    if (filmDetailCurrent) {
      //   <div>
      //   <Link to="/a/a/a" className="btn btn-success">Tập 1</Link>
      //   <Link to="/a/a/a" className="btn btn-success ml-1">Tập 2</Link>
      // </div>

    }

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
    filmDetailCurrent: state.filmDetailCurrent,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeImageUrl: (imageUrl) => {
      dispatch({ type: "CHANGE_IMAGE_URL", imageUrl })
    },
    changeTitle: (title) => {
      dispatch({ type: "CHANGE_TITLE", title })
    },
    changeType: (typeFilm) => {
      dispatch({ type: "CHANGE_TYPE", typeFilm })
    },
    changeUrl: (url) => {
      dispatch({ type: "CHANGE_URL", url })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchFilm)