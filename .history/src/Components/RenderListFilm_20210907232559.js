import React, { Component } from 'react'
import { connect } from 'react-redux'
import FilmItem from './FilmItem';

class RenderListFilm extends Component {


  totalFilm = () => {

    let total = 0;
    for (let type in this.props.database.phim) {
      total += this.props.database.phim[type].length;
    }
    return total;
  }

  renderFilm = () => {
    const { pwdPagination, database, filter } = this.props;
    const urls = this.props.url?.split("/")
    const filmType = urls[3];
    const row = 3;
    var startPage = (pwdPagination - 1) * row * 4;
    var endPage = startPage + 12;

    if (filter) {
      const listTypeFilmFilter = []

      for (let type in database.phim) {
        for (let i = 0; i < database.phim[type].length; i++) {
          const film = database.phim[type][i];
          if (film.category === filter) {
            listTypeFilmFilter.push(film)
          }
        }
      }

      const totalFilm = listTypeFilmFilter.length;
      endPage = endPage > totalFilm ? totalFilm : endPage;
      const listFilm = []
      for (let i = startPage; i < endPage; i++) {

        const film = listTypeFilmFilter[i];
        listFilm.push(<FilmItem key={i} imageUrl={film.imageUrl} title={film.title} type={film.type} />);
      }
      return listFilm;

    } else if (database) {

      const totalFilm = database.phim[filmType]?.length || this.totalFilm();
      endPage = endPage > totalFilm ? totalFilm : endPage;

      let listFilm = []
      if (filmType !== "tatcaphim") {
        for (let i = startPage; i < endPage; i++) {

          const film = database.phim[filmType][i];
          listFilm.push(<FilmItem key={i} imageUrl={film.imageUrl} title={film.title} type={filmType} />);
        }
      } else {

        let count = 0;
        let temp = []
        for (let type in database.phim) {
          for (let i = 0; i < database.phim[type].length; i++) {
            const film = database.phim[type][i];
            film.type = type;
            temp.push(film);
          }
        }

        for (let i = startPage; i < endPage; i++) {
          listFilm.push(<FilmItem key={count} imageUrl={temp[i].imageUrl} title={temp[i].title} type={temp[i].type} />)
          count++;
        }
      }
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
      return listFilm;

    }
  }


  render() {
    return (
      <>
        {this.renderFilm()}
      </>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    database: state.database,
    pwdPagination: state.pwdPagination,
    filter: state.filter,
    filmDetailCurrent: state.filmDetailCurrent,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changType: (typeFilm) => {
      dispatch({ type: "CHANGE_TYPE", typeFilm })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RenderListFilm)
