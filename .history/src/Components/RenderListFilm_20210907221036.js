import React, { Component } from 'react'
import { connect } from 'react-redux'

class RenderListFilm extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    database: state.database
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RenderListFilms)
