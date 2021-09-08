import React, { Component } from 'react'
import { connect } from 'react-redux'

class RenderFilter extends Component {
  handleGetValue = (e) => {
    const value = e.target.value
    this.props.getValueFilter(value);
  }

  /**
  handleRenderOption = () => {
    // const { database } = this.props
    // let listType = []
    // if (database) {
    //   for (let type in database.phim) {
    //     for (let i = 0; i < database.phim[type].length; i++) {
    //       listType.push(database.phim[type][i].category);
    //     }
    //   }
    // }
    // const removeDuplicates = (listType) => [...new Set(listType)]
    // const listCategory = removeDuplicates(listType)


    const listCategory = ['Phim tình cảm', 'Phim hành động', 'Phim hoạt hình', 'Phim cổ trang', 'TV SHOW', 'Hài Hước', 'Phim phiêu lưu', 'Phim kinh dị']
    let listCategoryRender = [<option key={-1} value="">- Tất cả -</option>]
    listCategory.forEach((value, key) => {
      listCategoryRender.push(<option key={key} value={value}>{value}</option>)
    })
    return listCategoryRender;
  }*/


  render() {
    console.log(this.props.filter)
    return (
      <>
        <section className="filter-film rounded">
          <div className="row">
            <div className="form-group">
              <label htmlFor="type-film">Thể loại</label>
              <select defaultValue={this.props.filter} className="custom-select" name="type" id="type-film" onChange={this.handleGetValue}
              >
                <option value="">- Tất cả -</option>
                <option value="Phim tình cảm">Phim tình cảm</option>
                <option value="Phim hành động">Phim hành động</option>
                <option value="Phim hoạt hình">Phim hoạt hình</option>
                <option value="Phim cổ trang">Phim cổ trang</option>
                <option value="TV SHOW">TV SHOW</option>
                <option value="Hài Hước">Hài Hước</option>
                <option value="Phim phiêu lưu">Phim phiêu lưu</option>
                <option value="Phim kinh dị">Phim kinh dị</option>
              </select>

              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown button
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item">Action</a>
                  <a className="dropdown-item">Another action</a>
                  <a className="dropdown-item">Something else here</a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </>

    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    filter: state.filter,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getValueFilter: (valueFilter) => {
      dispatch({ type: "FILTER", valueFilter })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderFilter)