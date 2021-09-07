import React, { Component } from 'react'
import Filter from './Filter';
import ListType from './ListType';

export default class Home extends Component {
  render() {
    return (
      <>
        <Filter></Filter>
        {null && <ListType></ListType>}
      </>
    )
  }
}
