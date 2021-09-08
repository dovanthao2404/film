import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
  Link
} from "react-router-dom";

class Nav extends Component {
  resetValue = async () => {
    this.props.resetPWD()
    // await this.props.resetFilter(Math.random())
    await this.props.resetFilter("")
  }
  render() {
    return (
      <div className="header fixed-top">
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" to="/home" onClick={() => this.props.resetFilter("")}>XemPhim</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#film-navbar" aria-controls="film-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="film-navbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" onClick={this.resetValue} to="/search"><i className="fa fa-search" />Tìm kiếm</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={this.resetValue} to="/phimbo">Phim bộ</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={this.resetValue} to="/phimle">Phim lẻ</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={this.resetValue} to="/phimchieurap">Phim chiếu rạp</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={this.resetValue} to="/phimhoathinh">Phim hoạt hình</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={this.resetValue} to="/tatcaphim">Tất cả phim</Link>
              </li>
            </ul>
            <form className="form-inline ">
              <button className="btn btn-danger my-2 my-sm-0" type="submit">Đăng nhập</button>
            </form>
          </div>
        </nav>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    pwdPagination: state.pwdPagination
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    resetPWD: () => {
      dispatch({ type: "RESET_PWD" })
    },
    updatePWD: (newPwd) => {
      dispatch({ type: "UPDATE_PWD", newPwd })
    },
    resetFilter: (valueFilter) => {
      dispatch({ type: "FILTER", valueFilter })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav)