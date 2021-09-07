import React, { Component } from 'react'
import { connect } from 'react-redux'

class Filter extends Component {
  render() {

    return (
      <div>

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
    dispatch1: () => {
      dispatch({ type: "" })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Filter)