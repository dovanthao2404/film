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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      dispatch(actionCreator)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Filter)