import React from 'react';

const ShowUser = props => {
  const userId = Number(props.match.params.id);
  const user = props.users.filter(user => user.id === userId)[0];
  return <h1>{ JSON.stringify(user) }</h1>;
}

export default ShowUser;
