import React, { Component } from 'react'
import { connect } from 'react-redux'

class RenderFilter extends Component {
  handleGetValue = (e) => {
    console.log(e.target.value)
    this.props.getValueFilter(e.target.value);
  }
  render() {
    return (
      <div className="container">
        <section className="filter-film rounded">
          <div className="row">
            <div className="form-group">
              <label htmlFor="type-film">Thể loại</label>
              <select className="custom-select" name="type" id="type-film" onChange={this.handleGetValue}
              >
                <option value=''>- Tất cả -</option>
                <option value="phimcotrang">Phim cổ trang</option>
                <option value="phimhanhdong">Phim hành động</option>
                <option value="phimtinhcam">Phim tình cảm</option>
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