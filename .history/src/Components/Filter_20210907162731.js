import React, { Component } from 'react'
import { connect } from 'react-redux'



class Filter extends Component {
  render() {
    return (
      <>

        <div className="container">
          <section className="listType-film">

          </section>
        </div>

      </>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    filter: state.filter,
    database: state.database,
  }
}

export default connect(mapStateToProps, null)(Filter)