import React from 'react';

const UserItemContainer = props => {
  return (
    <div className="list-group-item-container container-fluid hidden">
      { props.children }
    </div>
  )
}

export default UserItemContainer;
