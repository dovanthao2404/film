import React, { Component } from 'react'
import { connect } from 'react-redux'

class RenderFilter extends Component {
  handleGetValue = (e) => {
    this.props.getValueFilter(e.target.value);
  }

  handleRenderOption = () => {
    /**
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
     */


    const listCategory = ['Phim tình cảm', 'Phim hành động', 'Phim hoạt hình', 'Phim cổ trang', 'TV SHOW', 'Hài Hước', 'Phim phiêu lưu', 'Phim kinh dị']
    let listCategoryRender = [<option key={-1} value="">- Tất cả -</option>]
    listCategory.forEach((value, key) => {
      listCategoryRender.push(<option key={key} value={value}>{value}</option>)
    })
    return listCategoryRender;
  }
  render() {
    return (
      <>
        <section className="filter-film rounded">
          <div className="row">
            <div className="form-group">
              <label htmlFor="type-film">Thể loại</label>
              <select defaultValue={this.props.filter} className="custom-select" name="type" id="type-film" onChange={this.handleGetValue}
              >
                {this.handleRenderOption()}
              </select>
            </div>
          </div>
        </section>
      </>

    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    database: state.database,
    filter: state.filter
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