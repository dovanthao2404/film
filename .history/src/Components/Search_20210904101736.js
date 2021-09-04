import React, { Component } from 'react'
import { connect } from 'react-redux'

class Search extends Component {



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

const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: (dataSearch) => {
      dispatch({ dataSearch })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)