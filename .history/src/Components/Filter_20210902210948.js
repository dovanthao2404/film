import React, { Component } from 'react'

export default class Filter extends Component {
  render() {
    return (
      <div classname="container">
        <section classname="filter-film rounded">
          <div classname="row">
            <div classname="form-group">
              <label htmlfor="type-film">Thể loại</label>
              <select classname="custom-select" name id="type-film">
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
