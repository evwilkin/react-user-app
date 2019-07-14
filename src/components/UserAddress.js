import React, { Component } from 'react';
import zipcodes from 'zipcodes';

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
    return (
      <React.Fragment>
        <p>{this.props.address.street}</p>
        <p>{this.props.address.suite}</p>
        <p>{this.props.address.city}{this.state.state ? `, ${this.state.state}` : null} {this.props.address.zipcode}</p>
      </React.Fragment>
    );
  }
}

export default UserAddress;
