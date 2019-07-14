import React, { Component } from 'react';
import UserItemHeader from './UserItemHeader/UserItemHeader';
import UserItemContainer from './UserItemContainer';

export default class ToggleWrapper extends Component {
  state = {
    isExpanded: false
  }

  toggleVisibility = () => {
    this.setState({ isExpanded: !this.state.isExpanded })
  }

  render() {
    const { objKey, obj, getKey, nestedObject, buildNestedTable } = this.props;
    return (
      <div className="list-group-item">
        <UserItemHeader
          objKey={objKey}
          obj={obj}
          isNestedObject={true}
          key={getKey()}
          toggle={this.toggleVisibility}
          isExpanded={this.state.isExpanded}
        />
        <UserItemContainer
          key={getKey()}
          isVisible={this.state.isExpanded}
        >
          { Object.keys(nestedObject).map(nestedKey => buildNestedTable(nestedObject, nestedKey)) }
        </UserItemContainer>
      </div>
    )
  }
}
