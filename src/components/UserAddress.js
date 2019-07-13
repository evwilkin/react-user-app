import React from 'react';

const UserAddress = ({ address }) => (
  <React.Fragment>
    <p>{address.street}</p>
    <p>{address.suite}</p>
    <p>{address.city} {address.zipcode}</p>
  </React.Fragment>
);

export default UserAddress;
