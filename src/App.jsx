import React, { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleAddContact = contactData => {
    const hasContactDuplicate = this.state.contacts.some(
      contact => contact.name === contactData.name
    );

    if (hasContactDuplicate) {
      alert(`${contactData.name} is already in contacts`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contactData],
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleAddContact={this.handleAddContact}></ContactForm>
        <h2>Contacts</h2>
        <ContactList contactsArr={this.state.contacts}></ContactList>
      </div>
    );
  }
}
