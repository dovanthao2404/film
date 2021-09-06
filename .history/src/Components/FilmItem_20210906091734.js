import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class FilmItem extends Component {
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

  handleClickFilmItem = () => {
    console.log(this.props)
    // this.props.changeImageUrl(this.props.imageUrl)
    // this.props.changeTitle(this.props.title)
    // this.props.changeType(this.props.typeFilm)


    //   this.props.changeUrl(this.props.url)

    // this.props.changeIndex(this.props.index)
    // this.props.changeEpisode(0)
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
        <div className="film-item">
          <div className="card">
            <Link
              onClick={this.handleClickFilmItem}
              to={"/" + this.toSlug(this.props.type) + "/" + this.toSlug(this.props.title)}
              className="data-film">
              <img src={this.props.imageUrl} className="card-img-top img-fluid rounded" alt="..." />
              <div className="card-body p-0 mt-3">
                <h5>{this.props.title}</h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
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
    changeEpisode: (episode) => {
      dispatch({ type: "CHANGE_EPISODE", episode })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FilmItem)