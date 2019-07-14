import React from 'react';

const ExpandArrow = props => {
  const className = (props.isExpanded)
    ? "fa fa-angle-right fa-angle-down"
    : "fa fa-angle-right";

  return (
    <div className="list-view-pf-expand">
      <span className={className}></span>
    </div>
  );
}

export default ExpandArrow;
