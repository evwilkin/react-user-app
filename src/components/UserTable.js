import React, { Component } from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

export default class UserTable extends Component {
  state = {
    users: []
  }

  componentDidMount = async () => {
    const data = await fetch('http://jsonplaceholder.typicode.com/users');
    const users = await data.json();
    this.setState({ users });
  }

  render () {
    return (
      <table>
        <TableHead />
        <TableBody users={this.state.users} />
      </table>
    );
  }
}
