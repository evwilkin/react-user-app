import React, { Component } from 'react';
import TableData from './TableData';

export default class TableRow extends Component {
  render () {
    return (
      <tr>
        {this.props.data.map((item, idx) => (
          <TableData key={idx}>
            {item}
          </TableData>
        ))}
      </tr>
    )
  }
}
