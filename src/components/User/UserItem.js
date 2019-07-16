import React, { Component } from 'react';
import ToggleWrapper from './ToggleWrapper';
import UserItemHeader from './UserItemHeader/UserItemHeader';
import PropTypes from 'prop-types';

export default class UserItem extends Component {
  render () {
    const { user, objKey } = this.props;
    let n = 0;
    const getKey = () => `${Date.now()}-${n++}`;
    const buildNestedTable  = (obj, objKey) => {
      const isNestedObject = typeof obj[objKey] === 'object';

      if (isNestedObject) {
        const nestedObject = obj[objKey];
        return (
          <ToggleWrapper
            objKey={objKey}
            obj={obj}
            nestedObject={nestedObject}
            buildNestedTable={buildNestedTable}
            key={getKey()}
          />
        )
      } else {
        return (
          <div key={getKey()} className="list-group-item">
            <UserItemHeader
              objKey={objKey}
              obj={obj}
              isNestedObject={false}
            />
          </div>
        )
      }
    }

    const userItems = buildNestedTable(user, objKey);

    return userItems;
  }
}

UserItem.propTypes = {
  objKey: PropTypes.string,
  user: PropTypes.object
}
