import React, { Component } from 'react';
import ToggleWrapper from './ToggleWrapper';
import UserItemHeader from './UserItemHeader';

export default class UserItem extends Component {
  state = {
    isVisible: false
  }

  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible })
  }

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
            getKey={getKey}
            nestedObject={nestedObject}
            buildNestedTable={buildNestedTable}
          />
        )
      } else {
        return (
          <div className="list-group-item">
            <UserItemHeader
              objKey={objKey}
              obj={obj}
              isNestedObject={false}
              key={getKey()}
            />
          </div>
        )
      }
    }

    const userItems = buildNestedTable(user, objKey);

    return userItems;
  }
}
