import React, { Component } from 'react';

export default class ContactListItem extends Component {
  render() {
    const { contactName, contactNumber } = this.props;
    return (
      <li>
        <p>{`${contactName}: `}</p>
        <span>{contactNumber}</span>
      </li>
    );
  }
}
