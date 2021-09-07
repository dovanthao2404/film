import React, { Component } from 'react'
import RenderFilter from './RenderFilter';
import ListType from './ListType';
import Filter from './Filter';
import { connect } from 'react-redux';

export default class Home extends Component {

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
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(component)