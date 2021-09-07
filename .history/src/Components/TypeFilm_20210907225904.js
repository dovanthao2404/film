import React, { Component } from 'react'
import { connect } from 'react-redux';
import FilmItem from "./FilmItem"
import RenderFilter from "./RenderFilter"
import Pagination from './Pagination';
import RenderListFilm from './RenderListFilm';
import Filter from './Filter';
class TypeFilm extends Component {
  renderFilmType = () => {
    let type = ''
    const url = this.props.match.url;
    if (url === "/phimbo") {
      type = "Phim bộ"
    } else if (url === "/phimle") {
      type = "Phim lẻ"
    } else if (url === "/phimchieurap") {
      type = "Phim chiếu rạp"
    } else if (url === "/phimhoathinh") {
      type = "Phim hoạt hình"
    } else {
      type = "Tất cả phim"
    }
    return type;
  }


  render() {
    const url = document.URL;
    return (
      <div className="container">
        <section className="name-type">
          <h2>{this.renderFilmType()}</h2>
        </section>
        <RenderFilter></RenderFilter>
        <div className="list-filmType mt-3">
          <div className="row">
            <Filter url={url} />
          </div>
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center align-items-end">
            <Pagination></Pagination>
          </ul>
        </nav>
      </div>

    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    pwdPagination: state.pwdPagination,
    database: state.database
  }
}
export default connect(mapStateToProps)(TypeFilm)