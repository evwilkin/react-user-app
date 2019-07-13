import React, { Component } from 'react';
import TableRow from './TableRow';

export default class TableBody extends Component {
  render () {
    return (
      <tbody>
        {this.props.users.map(user => {
          const userData = [user.name, user.username, user.email];
          console.log(userData);
          return <TableRow data={userData} key={user.id} />
        })}
      </tbody>
    )
  }
}
