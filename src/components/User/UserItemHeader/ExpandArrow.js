import React from 'react';

const ExpandArrow = props => {
  const className = (props.isExpanded)
    ? "fa fa-angle-right fa-angle-down"
    : "fa fa-angle-right";
  const style={
    paddingLeft: '5px',
    paddingRight: '15px'
  }

  return (
    <div className="list-view-pf-expand" style={style}>
      <span className={className}></span>
    </div>
  );
}

export default ExpandArrow;
