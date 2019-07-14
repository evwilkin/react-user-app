import React from 'react';

const UserItemContainer = props => {
  let className = "list-group-item-container container-fluid";
  if (!props.isVisible) {
    className += " hidden";
  }

  return (
    <div className={className}>
      { props.children }
    </div>
  )
}

export default UserItemContainer;
