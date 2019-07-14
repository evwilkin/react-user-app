import React from 'react';

const UserItemContainer = props => {
  const style={ paddingLeft: '38px' };
  let className = "list-group-item-container container-fluid";
  if (!props.isVisible) {
    className += " hidden";
  }

  return (
    <div className={className} style={style}>
      { props.children }
    </div>
  )
}

export default UserItemContainer;
