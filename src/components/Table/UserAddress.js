import React, { Component } from 'react';
import zipcodes from 'zipcodes';
import PropTypes from 'prop-types';

class UserAddress extends Component {
  state = {
    state: false
  }

  componentDidMount = async () => {
    try {
      const zip = this.props.address.zipcode.substr(0,5);
      const zipLookup = await zipcodes.lookup(zip);
      if (zipLookup) {
        const state = zipLookup.state;
        this.setState({ state });
      }
    } catch (err) {
      console.log(err);
    }
  }

  render () {
    const { address } = this.props;
    return (
      <React.Fragment>
        <p>{address.street}</p>
        <p>{address.suite}</p>
        <p>{address.city}{this.state.state ? `, ${this.state.state}` : null} {address.zipcode}</p>
      </React.Fragment>
    );
  }
}

UserAddress.propTypes = {
  address: PropTypes.object
}

export default UserAddress;
