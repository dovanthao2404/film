import React, { Component } from 'react'
import RenderFilter from './RenderFilter';
import ListType from './ListType';
import { connect } from 'react-redux';
import RenderListFilm from "./RenderListFilm"
import Pagination from "./Pagination"
class Home extends Component {

  handleRenderHome = () => {
    return this.props.filter ?
      <div className="container">
        <RenderListFilm url={""} />
      </div> :
      <ListType />;
  }
  render() {
    return (
      <>
        <div className="container">
          <RenderFilter></RenderFilter>
        </div>
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