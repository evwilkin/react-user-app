import React from 'react';
import PropTypes from 'prop-types';

const UserEmail = ({ email }) => <a href={ `mailto:${email}` }>{email}</a>;

UserEmail.propTypes = {
  email: PropTypes.string
}

export default UserEmail;
