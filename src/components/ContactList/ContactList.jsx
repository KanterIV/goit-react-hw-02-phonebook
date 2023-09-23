import ContactListItem from 'components/ContactListItem/ContactListItem';
import React, { Component } from 'react';

export default class ContactList extends Component {
  render() {
    const { contactsArr, deleteContact } = this.props;
    return (
      <ul>
        {contactsArr.map(contact => {
          const { id, name, number } = contact;
          return (
            <ContactListItem
              key={id}
              contactId={id}
              contactName={name}
              contactNumber={number}
              deleteContact={deleteContact}
            />
          );
        })}
      </ul>
    );
  }
}
