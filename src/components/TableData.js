import React, { Component } from 'react';

export default class TableData extends Component {
  render () {
    return <td>{this.props.children}</td>
  }
}
