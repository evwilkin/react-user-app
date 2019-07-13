import React from 'react';

const UserEmail = ({ email }) => <a href={ `mailto:${email}` }>{email}</a>;

export default UserEmail;
