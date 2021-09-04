import React, { Component } from 'react'

export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSearch: ""
    }
  }

  handleSearch = () => {

  }

  render() {
    return (
      <div className="container">
        <div>
          <div className="search mt-5 pt-2">
            <input type="text" className="form-control" placeholder="Nhập tên phim" onChange={this.handleSearch} />
          </div>
          <div className="list-filmFound mt-3">
            <div className="row">

            </div>
          </div>
        </div>

      </div>
    )
  }
}
