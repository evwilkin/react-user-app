import React from 'react';
import './UserTable.css';
import TableHead from './TableHead';
import TableBody from './TableBody';
import PropTypes from 'prop-types';

 const UserTable = props => (
  <table>
    <TableHead />
    <TableBody users={props.users} />
  </table>
);

UserTable.propTypes = {
  users: PropTypes.array
}

export default UserTable;
