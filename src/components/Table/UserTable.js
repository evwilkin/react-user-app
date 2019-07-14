import React from 'react';
import './UserTable.css';
import TableHead from './TableHead';
import TableBody from './TableBody';

 const UserTable = props => (
  <table>
    <TableHead />
    <TableBody users={props.users} />
  </table>
);

export default UserTable;