import React, { Component } from 'react';

export default class ContactListItem extends Component {
  render() {
    const { contactId, contactName, contactNumber, deleteContact } = this.props;
    return (
      <li>
        <p>{`${contactName}: `}</p>
        <span>{contactNumber}</span>
        <button
          onClick={() => deleteContact(contactId)}
          type="button"
          name={contactId}
        >
          Delete
        </button>
      </li>
    );
  }
}
