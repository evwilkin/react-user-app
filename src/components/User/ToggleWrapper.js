import React, { Component } from 'react';
import UserItemHeader from './UserItemHeader/UserItemHeader';
import UserItemContainer from './UserItemContainer';
import PropTypes from 'prop-types';

export default class ToggleWrapper extends Component {
  state = {
    isExpanded: false
  }

  toggleVisibility = () => {
    this.setState({ isExpanded: !this.state.isExpanded })
  }

  render() {
    const { objKey, obj, nestedObject, buildNestedTable } = this.props;
    return (
      <div className="list-group-item">
        <UserItemHeader
          objKey={objKey}
          obj={obj}
          isNestedObject={true}
          toggle={this.toggleVisibility}
          isExpanded={this.state.isExpanded}
        />
        <UserItemContainer isVisible={this.state.isExpanded}>
          { Object.keys(nestedObject).map(nestedKey => buildNestedTable(nestedObject, nestedKey)) }
        </UserItemContainer>
      </div>
    )
  }
}

ToggleWrapper.propTypes = {
  objKey: PropTypes.string,
  obj: PropTypes.object,
  nestedObject: PropTypes.object,
  buildNestedTable: PropTypes.func
}
