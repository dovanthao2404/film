import React, { Component } from 'react'
import { connect } from 'react-redux'

class RenderFilter extends Component {
  handleGetValue = (e) => {
    this.props.getValueFilter(e.target.value);
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
                <option value="">- Tất cả -</option><option value="Phim tình cảm">Phim tình cảm</option><option value="Phim hành động">Phim hành động</option><option value="Phim hoạt hình">Phim hoạt hình</option><option value="Phim cổ trang">Phim cổ trang</option><option value="TV SHOW">TV SHOW</option><option value="Hài Hước">Hài Hước</option><option value="Phim phiêu lưu">Phim phiêu lưu</option><option value="Phim kinh dị">Phim kinh dị</option>
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