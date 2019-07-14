import React, { Component } from 'react';
import UserItemHeader from './UserItemHeader';
import UserItemContainer from './UserItemContainer';

export default class UserItem extends Component {
  render () {
    const { user, objKey } = this.props;

    const buildNestedTable  = (obj, objKey, idx) => {
      const isNestedObject = typeof obj[objKey] !== 'string';

      if (isNestedObject) {
        const nestedObject = obj[objKey];

        return (
          <div className="list-group-item">
            <UserItemHeader objKey={objKey} obj={obj} isNestedObject={true} key={idx} />
            <UserItemContainer key={ `${idx}b` } >
              { Object.keys(nestedObject).map((nestedKey, idx) => buildNestedTable(nestedObject, nestedKey, idx)) }
            </UserItemContainer>
          </div>
        )
      } else {
        return (
          <div className="list-group-item">
            <UserItemHeader objKey={objKey} obj={obj} isNestedObject={false} key={Date.now()} />
          </div>
        )
      }
    }

    const userItems = buildNestedTable(user, objKey);

    return userItems;
  }
}
