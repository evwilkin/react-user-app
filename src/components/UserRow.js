import React from 'react';
import TableData from './TableData';
import UserEmail from './UserEmail';
import UserAddress from './UserAddress';

import { Link } from 'react-router-dom';

const UserRow = props => {
  const { id, name, username, email, address } = props.user;
  return (
    <tr>
      <TableData>
        <Link to={`/${id}`}>
          {name}
        </Link>
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
