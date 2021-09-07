import React, { Component } from 'react'
import FilmItem from './FilmItem';
import { connect } from 'react-redux';

class ListType extends Component {


  renderFilm = (_type, quantity) => {
    const { database } = this.props;
    if (database) {
      let listFilm = [];
      let i = 0;
      for (let type in database.phim) {

        if (type === _type) {
          for (let i = 0; i < quantity; i++) {
            listFilm.push(
              <FilmItem
                key={i}
                imageUrl={database.phim[type][i].imageUrl}
                title={database.phim[type][i].title}
                type={type}
              />
            )
          }

        } else if (_type === "all") {
          listFilm.push(
            <FilmItem
              key={i}
              imageUrl={database.phim[type][i].imageUrl}
              title={database.phim[type][i].title}
              type={type}
            />
          )
        }
        i++;
      }

      return listFilm;
    }
  }

  render() {
    console.log(this.props.filter)
    if (this.props.filter === "") {
      return (
        <div className="container">
          <section className="listType-film">
            <div className="nominated-movie">
              <div className="listType-header">
                <h3>Phim đề cử</h3>
              </div>
              <div className="row">
                {this.renderFilm("all")}
              </div>
            </div>
            <div className="odd-movie">
              <div className="listType-header">
                <h3>Phim lẻ mới cập nhật</h3>
              </div>
              <div className="row">
                {this.renderFilm("phimle", 8)}
              </div>
            </div>
            <div className="series-movie">
              <div className="listType-header">
                <h3>Phim bộ mới cập nhật</h3>
              </div>
              <div className="row">
                {this.renderFilm("phimbo", 4)}
              </div>
            </div>
            <div className="theaters-movie">
              <div className="listType-header">
                <h3>Phim chiếu rạp mới cập nhật</h3>
              </div>
              <div className="row">
                {this.renderFilm("phimchieurap", 8)}
              </div>
            </div>
            <div className="cartoon-movie">
              <div className="listType-header">
                <h3>Phim hoạt hình mới cập nhật</h3>
              </div>
              <div className="row">
                {this.renderFilm("phimhoathinh", 4)}
              </div>
            </div>
          </section>
        </div>

      )
    } else {
      return (
        <div className="container">

        </div>
      )
    }
  }

}




const mapStateToProps = (state, ownProps) => {
  return {
    database: state.database,
    filter: state.filter
  }
}


export default connect(mapStateToProps)(ListType)