import React, { Component } from 'react'
import RenderFilter from './RenderFilter';
import ListType from './ListType';
import Filter from './Filter';
import { connect } from 'react-redux';

class Home extends Component {

  handleRenderHome = () => {

  }
  render() {
    return (
      <>
        <RenderFilter></RenderFilter>
        {this.handleRenderHome()}
      </>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)