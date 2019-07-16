import React from 'react';
import './UserItemHeader.css';
import ExpandArrow from './ExpandArrow';
import PropTypes from 'prop-types';

const UserItemHeader = props => {
  const { objKey, obj, isNestedObject, toggle } = props;

  return (
    <div className="list-group-item-header" onClick={toggle}>

      {/* Only show if subitems */}
      { isNestedObject &&
        <ExpandArrow isExpanded={props.isExpanded} />
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

UserItemHeader.defaultProps = {
  isExpanded: false
}

UserItemHeader.propTypes = {
  isNestedObject: PropTypes.bool,
  obj: PropTypes.object,
  objKey: PropTypes.string,
  toggle: PropTypes.func
}

export default UserItemHeader;
