import React, { Component } from 'react'
import { connect } from 'react-redux'
import FilmItem from "./FilmItem"


class Filter extends Component {
  render() {
    return (
      <>
        <div className="container">
          <section className="listType-film">
            <div className="row">
              <FilmItem
                key={"a"}
                imageUrl={"https://www.fullphimz.net/static/5fe2d564b3fa6403ffa11d1c/60de6d7faa1bb691e514b6d4_poster-anh-la-mua-xuan-cua-em.jpg"}
                title={"Anh Là Mùa Xuân Của Em - You Are My Spring (2021)"}
                type={"phimbo"}
              />
              <FilmItem
                key={"a"}
                imageUrl={"https://www.fullphimz.net/static/5fe2d564b3fa6403ffa11d1c/60de6d7faa1bb691e514b6d4_poster-anh-la-mua-xuan-cua-em.jpg"}
                title={"Anh Là Mùa Xuân Của Em - You Are My Spring (2021)"}
                type={"phimbo"}
              />
              <FilmItem
                key={"a"}
                imageUrl={"https://www.fullphimz.net/static/5fe2d564b3fa6403ffa11d1c/60de6d7faa1bb691e514b6d4_poster-anh-la-mua-xuan-cua-em.jpg"}
                title={"Anh Là Mùa Xuân Của Em - You Are My Spring (2021)"}
                type={"phimbo"}
              />
              <FilmItem
                key={"a"}
                imageUrl={"https://www.fullphimz.net/static/5fe2d564b3fa6403ffa11d1c/60de6d7faa1bb691e514b6d4_poster-anh-la-mua-xuan-cua-em.jpg"}
                title={"Anh Là Mùa Xuân Của Em - You Are My Spring (2021)"}
                type={"phimbo"}
              />
              <FilmItem
                key={"a"}
                imageUrl={"https://www.fullphimz.net/static/5fe2d564b3fa6403ffa11d1c/60de6d7faa1bb691e514b6d4_poster-anh-la-mua-xuan-cua-em.jpg"}
                title={"Anh Là Mùa Xuân Của Em - You Are My Spring (2021)"}
                type={"phimbo"}
              />
              <FilmItem
                key={"a"}
                imageUrl={"https://www.fullphimz.net/static/5fe2d564b3fa6403ffa11d1c/60de6d7faa1bb691e514b6d4_poster-anh-la-mua-xuan-cua-em.jpg"}
                title={"Anh Là Mùa Xuân Của Em - You Are My Spring (2021)"}
                type={"phimbo"}
              />
              <FilmItem
                key={"a"}
                imageUrl={"https://www.fullphimz.net/static/5fe2d564b3fa6403ffa11d1c/60de6d7faa1bb691e514b6d4_poster-anh-la-mua-xuan-cua-em.jpg"}
                title={"Anh Là Mùa Xuân Của Em - You Are My Spring (2021)"}
                type={"phimbo"}
              />
              <FilmItem
                key={"a"}
                imageUrl={"https://www.fullphimz.net/static/5fe2d564b3fa6403ffa11d1c/60de6d7faa1bb691e514b6d4_poster-anh-la-mua-xuan-cua-em.jpg"}
                title={"Anh Là Mùa Xuân Của Em - You Are My Spring (2021)"}
                type={"phimbo"}
              />
              <FilmItem
                key={"a"}
                imageUrl={"https://www.fullphimz.net/static/5fe2d564b3fa6403ffa11d1c/60de6d7faa1bb691e514b6d4_poster-anh-la-mua-xuan-cua-em.jpg"}
                title={"Anh Là Mùa Xuân Của Em - You Are My Spring (2021)"}
                type={"phimbo"}
              />
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