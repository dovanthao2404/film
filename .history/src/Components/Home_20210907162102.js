import React, { Component } from 'react'
import Filter from './RenderFilter';
import ListType from './ListType';
import Filter from './Filter';
export default class Home extends Component {
  render() {
    return (
      <>
        <Filter></Filter>
        {null ?? <ListType></ListType>}
      </>
    )
  }
}
