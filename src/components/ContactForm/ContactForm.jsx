import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export default class ContactForm extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  handleContactsInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const contact = {
      ...this.state,
      id: nanoid(),
    };

    this.props.handleAddContact(contact);

    this.setState({ id: '', name: '', number: '' });
  };

  render() {
    // const { handleInputChange } = this.props;
    // console.log(handleInputChange);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            onChange={this.handleContactsInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            required
          />
        </label>
        <label>
          Phone
          <input
            onChange={this.handleContactsInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
