import React, { Component } from 'react';
import TableRow from './TableRow';

export default class TableHead extends Component {
  state = {
    headers: ['Name', 'Username', 'E-mail', 'Address']
  }

  render () {
    return (
      <thead>
        <TableRow data={this.state.headers} />
      </thead>
    )
  }
}
