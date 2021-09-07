import React, { Component } from 'react'
import { connect } from 'react-redux'

class RenderFilter extends Component {
  handleGetValue = (e) => {
    this.props.getValueFilter(e.target.value);
  }
  handleRenderOption = () => {

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
                {this.handleRenderOption()}
              </select>
            </div>
          </div>
        </section></div>

    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    database: state.database
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