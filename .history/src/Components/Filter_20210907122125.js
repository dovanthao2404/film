import React, { Component } from 'react'

class Filter extends Component {

  render() {
    return (
      <div className="container">
        <section className="filter-film rounded">
          <div className="row">
            <div className="form-group">
              <label htmlFor="type-film">Thể loại</label>
              <select defaultValue="" className="custom-select" name="type" id="type-film" //onChange={ }
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
const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop
  }
}

mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Filter)