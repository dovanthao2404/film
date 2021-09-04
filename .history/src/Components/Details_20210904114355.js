import axios from 'axios';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import FilmItem from "./FilmItem"
import {
  Link
} from "react-router-dom";
class Details extends Component {
  constructor(props) {
    super(props);
    this.isComponentMounted = false;
    this.state = {
      dataFilm: {},
      haveData: false
    }
  }

  componentDidMount = async () => {
    this.isComponentMounted = true;
    try {
      let resp = await axios({
        url: "https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST",
        method: "GET"
      })
      this.setState({ dataFilm: resp.data, haveData: true }, () => {
        this.getDataFilmCurrent()
      });
    } catch (err) { console.log(err) }
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  toSlug = (str) => {
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

  getDataFilmCurrent = () => {
    if (this.state.haveData) {
      const { dataFilm } = this.state;
      const { name, filmType } = this.props.match.params;

      if (dataFilm.phim) {
        for (let i = 0; i < dataFilm.phim[filmType].length; i++) {
          const filmCurrent = dataFilm.phim[filmType][i]

          if (name === this.toSlug(filmCurrent.title)) {
            this.props.changeUrl(filmCurrent.imageUrl)
            this.props.changeTitle(filmCurrent.title)
            this.props.changeType(filmType)
            break;

          }
        }
      }
    }
  }


  renderFilmConnection = () => {
    const listFilmConnection = [];
    if (this.state.haveData) {
      const { dataFilm } = this.state;
      const { filmType, name } = this.props.match.params;
      let LENGTH_CONNECTION = 8;

      for (let j = 0; j < LENGTH_CONNECTION; j++) {

        const filmCurrent = dataFilm.phim[filmType][j];
        if (name !== this.toSlug(filmCurrent.title)) {
          listFilmConnection.push(<FilmItem key={j} imageUrl={filmCurrent.imageUrl}
            title={filmCurrent.title}
            type={filmType}
          />)

        } else {
          LENGTH_CONNECTION++;
        }
      }
    }
    return listFilmConnection;
  }


  render() {
    const { filmDetailCurrent } = this.props;

    return (
      <>
        <section className="carousel"
          style={{
            height: 600,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundImage: 'url(' + filmDetailCurrent.imageUrl + ')',
            backgroundPosition: 'center', position: 'relative'
          }}>
          <div className="overlay" />
        </section>
        <section className="film-details">
          <div className="container">
            <div className="row">
              <div className="col col-md-3">
                <img className="filmCurrent-detail img-fluid rounded" src={filmDetailCurrent.imageUrl} alt="..." />
                <Link to="/a/a/a" style={{ width: '100%' }} className="btn btn-danger mt-3"><i className="fa fa-play" /> Xem phim</Link>

              </div>
              <div className="col col-md-7">
                <h2 className="film-name">{filmDetailCurrent.title}</h2>

                <div className="mb-5">
                  <button className="btn btn-primary"><i className="fab fa-facebook" /> Chia sẻ</button>
                  <button className="btn btn-success ml-1"><i className="fa fa-plus" /> Bộ sưu tập</button>
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
              {this.renderFilmConnection()}
            </div>
          </div>
        </div>
      </>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    filmDetailCurrent: state.filmDetailCurrent,
    listFilmConnection: state.listFilmConnection,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeUrl: (imageUrl) => {
      dispatch({ type: "CHANGE_IMAGE_URL", imageUrl })
    },
    changeTitle: (title) => {
      dispatch({ type: "CHANGE_TITLE", title })
    },
    changeType: (typeFilm) => {
      dispatch({ type: "CHANGE_TYPE", typeFilm })
    },
    addFilmConnection: (filmAdd) => {
      dispatch({ type: "ADD", filmAdd })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)
