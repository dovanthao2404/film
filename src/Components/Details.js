import React, { Component } from "react";
import { connect } from "react-redux";
import FilmItem from "./FilmItem";
import { Link } from "react-router-dom";
class Details extends Component {
  toSlug = (str) => {
    if (str) {
      // Chuyển hết sang chữ thường
      str = str.toLowerCase();

      // xóa dấu
      str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
      str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
      str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
      str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
      str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
      str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
      str = str.replace(/(đ)/g, "d");

      // Xóa ký tự đặc biệt
      str = str.replace(/([^0-9a-z-\s])/g, "");

      // Xóa khoảng trắng thay bằng ký tự -
      str = str.replace(/(\s+)/g, "-");

      // xóa phần dự - ở đầu
      str = str.replace(/^-+/g, "");

      // xóa phần dư - ở cuối
      str = str.replace(/-+$/g, "");

      // return
      return str;
    }
  };

  componentWillMount = () => {
    this.getDataFilmCurrent();
  };
  componentDidUpdate = (prevProps) => {
    if (prevProps.database !== this.props.database) {
      this.getDataFilmCurrent();
    }
  };

  getDataFilmCurrent = () => {
    const { database } = this.props;
    const { name, filmType } = this.props.match.params;

    if (database) {
      for (let i = 0; i < database.phim[filmType].length; i++) {
        const filmCurrent = database.phim[filmType][i];

        if (name === this.toSlug(filmCurrent.title)) {
          this.props.changeImageUrl(filmCurrent.imageUrl);
          this.props.changeTitle(filmCurrent.title);
          this.props.changeType(filmType);
          if (filmCurrent?.episode?.length > 0) {
            this.props.changeUrl(filmCurrent.episode[0].url);
          } else {
            this.props.changeUrl(filmCurrent.url);
          }
          this.props.changeIndex(i);
          this.props.changeEpisode(0);
          break;
        }
      }
    }
  };

  renderFilmConnection = () => {
    const listFilmConnection = [];
    const { database } = this.props;
    const { filmType, name } = this.props.match.params;

    let LENGTH_CONNECTION = 8;
    if (database) {
      for (let j = 0; j < LENGTH_CONNECTION; j++) {
        const filmCurrent = database.phim[filmType][j];
        if (name !== this.toSlug(filmCurrent.title)) {
          listFilmConnection.push(
            <FilmItem
              key={j}
              imageUrl={filmCurrent.imageUrl}
              title={filmCurrent.title}
              type={filmType}
            />
          );
        } else {
          LENGTH_CONNECTION++;
        }
      }
      return listFilmConnection;
    }
  };

  render() {
    const { filmDetailCurrent } = this.props;

    const { filmType } = this.props.match.params;
    return (
      <>
        <section
          className="carousel"
          style={{
            height: 600,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage: "url(" + filmDetailCurrent.imageUrl + ")",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <div className="overlay" />
        </section>
        <section className="film-details">
          <div className="container">
            <div className="row">
              <div className="col col-md-3">
                <img
                  className="filmCurrent-detail img-fluid rounded"
                  src={filmDetailCurrent.imageUrl}
                  alt="..."
                />
                <Link
                  to={
                    "/" +
                    filmType +
                    "/" +
                    this.toSlug(filmDetailCurrent.title) +
                    "/" +
                    filmDetailCurrent.index +
                    "/" +
                    0
                  }
                  style={{ width: "100%" }}
                  className="btn btn-danger mt-3"
                >
                  <i className="fa fa-play" /> Xem phim
                </Link>
              </div>
              <div className="col col-md-7">
                <h2 className="film-name">{filmDetailCurrent.title}</h2>

                <div className="mb-5">
                  <button className="btn btn-primary">
                    <i className="fab fa-facebook" /> Chia sẻ
                  </button>
                  <button className="btn btn-success ml-1">
                    <i className="fa fa-plus" /> Bộ sưu tập
                  </button>
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
            <div className="row">{this.renderFilmConnection()}</div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    filmDetailCurrent: state.filmDetailCurrent,
    database: state.database,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeImageUrl: (imageUrl) => {
      dispatch({ type: "CHANGE_IMAGE_URL", imageUrl });
    },
    changeTitle: (title) => {
      dispatch({ type: "CHANGE_TITLE", title });
    },
    changeType: (typeFilm) => {
      dispatch({ type: "CHANGE_TYPE", typeFilm });
    },
    changeUrl: (url) => {
      dispatch({ type: "CHANGE_URL", url });
    },
    changeIndex: (index) => {
      dispatch({ type: "CHANGE_INDEX", index });
    },
    changeEpisode: (episode) => {
      dispatch({ type: "CHANGE_EPISODE", episode });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
