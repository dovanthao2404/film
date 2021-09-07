import React, { Component } from 'react'
import RenderFilter from './RenderFilter';
import ListType from './ListType';
import Filter from './Filter';
export default class Home extends Component {
  render() {
    return (
      <>
        <RenderFilter></RenderFilter>
        {<Filter></Filter> ?? <ListType></ListType>}
      </>
    )
  }
}
