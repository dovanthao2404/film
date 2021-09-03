import axios from 'axios';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
  Link
} from "react-router-dom";
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFilm: {}
    }
  }

  componentDidMount = () => {
    try {
      axios({
        url: "https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST",
        method: "GET"
      }).then((resp) => {
        this.setState({ dataFilm: resp.data }, () => {
          this.renderBackgroundCarousel();
        });
      })
    } catch (err) { console.log(err) }
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

  renderBackgroundCarousel = () => {
    const { dataFilm } = this.state;
    const { name } = this.props.match.params;
    let flag = false;
    for (let type in dataFilm.phim) {
      for (let i = 0; i < dataFilm.phim[type].length; i++) {
        if (name === this.toSlug(dataFilm.phim[type][i].title)) {
          this.props.changeUrl(dataFilm.phim[type][i].imageUrl)
          flag = true;
          break;
        }
      }
      if (flag) break;
    }
  }

  // renderBackgroundCarousel = () => {

  // }

  render() {
    return (
      <>
        <section className="carousel"
          style={{
            height: 600,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundImage: 'url(' + this.props.imageUrl + ')',
            backgroundPosition: 'center', position: 'relative'
          }}>
          <div className="overlay" />
        </section>
        <section className="film-details">
          <div className="container">
            <div className="row">
              <div className="col col-md-3">
                <img className="img-fluid " src={this.props.imageUrl} alt="..." />
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
    imageUrl: state.imageUrl
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeUrl: (imageUrl) => {
      dispatch({ type: "CHANGE_URL", imageUrl })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)
