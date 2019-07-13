import React from 'react';
import TableData from './TableData';
import UserEmail from './UserEmail';
import UserAddress from './UserAddress';

const UserRow = props => {
  const { name, username, email, address } = props.user;
  return (
    <tr>
      <TableData>
        {name}
      </TableData>
      <TableData>
        {username}
      </TableData>
      <TableData>
        <UserEmail email={email} />
      </TableData>
      <TableData>
        <UserAddress address={address} />
      </TableData>
    </tr>
  );
}

export default UserRow;
