import React from 'react';
import UserRow from './UserRow';

const TableBody = props => (
  <tbody>
    {props.users.map(user => {
      return <UserRow user={user} key={user.id} />
    })}
  </tbody>
);

export default TableBody;
