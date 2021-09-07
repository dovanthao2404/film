import React, { Component } from 'react'
import { connect } from 'react-redux'

class Filter extends Component {
  handleGetValue = (e) => {
    console.log(e.target.value)
    // this.props.getValueFilter(e.target.value);
  }
  render() {
    return (
      <div className="container">
        <section className="filter-film rounded">
          <div className="row">
            <div className="form-group">
              <label htmlFor="type-film">Thể loại</label>
              <select defaultValue="" className="custom-select" name="type" id="type-film" onChange={this.handleGetValue}
              >
                <option value=''>- Tất cả -</option>
                <option value="phimbo">Phim cổ trang</option>
                <option value="phimchieurap">Phim hành động</option>
                <option value="phimle">Phim tình cảm</option>
                <option value="phimhoathinh">Phim hoạt hình</option>
                <option value="phimphieuluu">Phim phiêu lưu</option>
              </select>
            </div>
          </div>
        </section></div>

    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getValueFilter: (valueFilter) => {
      dispatch({ type: "FILTER", valueFilter })
    }
  }
}

export default connect(null, mapDispatchToProps)(Filter)