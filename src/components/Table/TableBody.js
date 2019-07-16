import React from 'react';
import UserRow from './UserRow';
import PropTypes from 'prop-types';

const TableBody = props => (
  <tbody>
    {props.users.map(user => {
      return <UserRow user={user} key={user.id} />
    })}
  </tbody>
);

TableBody.propTypes = {
  users: PropTypes.array
}

export default TableBody;
