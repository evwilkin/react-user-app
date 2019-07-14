import React from 'react';
import ExpandArrow from './ExpandArrow';

const UserItemHeader = props => {
  const { objKey, obj, isNestedObject } = props;

  return (
    <div className="list-group-item-header">

      {/* Only show if subitems */}
      { isNestedObject &&
        <ExpandArrow />
      }

      <div className="list-view-pf-main-info">
        <div className="list-view-pf-body">
          <div className="list-view-pf-description">
            <div className="list-group-item-heading">
              {objKey}
            </div>

            {/*  Only show if no subitems */}
            { !isNestedObject &&
              <div className="list-group-item-text">
                {obj[objKey]}
              </div>
            }

          </div>
        </div>
      </div>

    </div>
  )
};

export default UserItemHeader;
