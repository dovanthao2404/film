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
    filter: state.filter
  }
}

export default connect(mapStateToProps, null)(Filter)