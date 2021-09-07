import React, { Component } from 'react'
import { connect } from 'react-redux'



class Filter extends Component {
  render() {
    return (
      <>

        div className="container">
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

      </>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    filter: state.filter,
    database: state.database,
  }
}

export default connect(mapStateToProps, null)(Filter)