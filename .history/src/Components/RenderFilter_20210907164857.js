import React, { Component } from 'react'
import { connect } from 'react-redux'

class RenderFilter extends Component {
  handleGetValue = (e) => {
    this.props.getValueFilter(e.target.value);
  }

  handleRenderOption = () => {
    const { valueFilter, database } = this.props
    let listType = []
    if (database) {
      for (let type in database.phim) {
        for (let i = 0; i < database.phim[type].length; i++) {
          listType.push(database.phim[type][i].category);
        }
      }
    }
    // console.log(_.uniq(listType))
    const removeDuplicates = (listType) => [...new Set(listType)]
    const listCategory = removeDuplicates(listType)
    return listCategory.map((value, key) => {
      return <option key={key} value={value}></option>
    })
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