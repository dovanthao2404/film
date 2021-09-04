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


  toSlug = (str) => {
    if (str) {
      // Chuyển hết sang chữ thường
      str = str.toLowerCase();

      // xóa dấu
      str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
      str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
      str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
      str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
      str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
      str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
      str = str.replace(/(đ)/g, 'd');

      // Xóa ký tự đặc biệt
      str = str.replace(/([^0-9a-z-\s])/g, '');

      // Xóa khoảng trắng thay bằng ký tự -
      str = str.replace(/(\s+)/g, '-');

      // xóa phần dự - ở đầu
      str = str.replace(/^-+/g, '');

      // xóa phần dư - ở cuối
      str = str.replace(/-+$/g, '');

      // return
      return str;
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
    const { typeFilm, index, title, url } = this.props.filmDetailCurrent;
    if (this.props.filmDetailCurrent.index !== undefined && this.state.haveData) {
      let listEpisode = this.state.dataFilm.phim[typeFilm][index].episode;
      const totalEpisode = listEpisode.length;
      if (totalEpisode > 1) {
        for (let i = 0; i < totalEpisode; i++) {
          if (listEpisode.url !== url) {
            episode.push(<Link key={i}
              to={"/" + typeFilm + "/" + this.toSlug(title) + "/" + index}
              onClick={this.handleClickEpisode}
              className="btn btn-success mr-1 mt-1">Tập {i + 1}</Link>)
          } else {
            episode.push(<Link key={i}
              to={"/" + typeFilm + "/" + this.toSlug(title) + "/" + index}
              onClick={this.handleClickEpisode}
              className="btn btn-success mr-1 mt-1" disabled>Tập {i + 1}</Link>)
          }
        }
      }

    }
    return episode;
  }
  render() {
    const { url, typeFilm, imageUrl, type, title } = this.props.filmDetailCurrent;
    console.log(url)
    return (
      <>
        <section className="film-video">
          <iframe title="This is a title" width="100%" height="100%" src={url} frameBorder={0} allow="autoplay" allowFullScreen />
        </section>
        <section className="description mt-5">
          <div className="container">
            <h2>{title}</h2>
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
    changeIndex: (index) => {
      dispatch({ type: "CHANGE_INDEX", index })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchFilm)