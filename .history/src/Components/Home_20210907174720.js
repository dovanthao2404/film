import React, { Component } from 'react'
import RenderFilter from './RenderFilter';
import ListType from './ListType';
import Filter from './Filter';
import { connect } from 'react-redux';

class Home extends Component {

  handleRenderHome = () => {
    console.log(filter)
    return this.props.filter ? <Filter /> : <ListType />;
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

const mapStateToProps = (state,) => {
  return {
    filter: state.filter
  }
}
export default connect(mapStateToProps, null)(Home)