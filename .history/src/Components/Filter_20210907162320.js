import React, { Component } from 'react'
import { connect } from 'react-redux'

class Filter extends Component {
  render() {
    if (this.props.filter) {
      return (
        <div>

        </div>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    filter: state.filter
  }
}

export default connect(mapStateToProps, null)(Filter)