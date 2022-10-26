import React, { Component } from 'react';
import { nanoid } from 'nanoid'

import Form from './components/AddContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList';
import Filter  from './components/SearchFilter/Filter';

export class App extends Component {
state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
}


addContact = ({name, number}) => {

    const id = nanoid();
    const contact = {
      id,
      name,
      number,

    };

    const { contacts } = this.state;

    if (contacts.find(contact => contact.name === name)) {
      alert(`This ${name} is already in the contact list.Please name the contact something else.`)
      return;
    }

    this.setState(({contacts}) => ({
      contacts: [contact, ...contacts]
    }));

  }

  deleteContact = contactId => {
     this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  }

  filterContacts = event => {
     this.setState({ filter: event.currentTarget.value });
  }

  getFilterContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
);
   }

  render() {
    const { filter} = this.state;

    const visibleContact = this.getFilterContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter
          value={filter }
          onChange={this.filterContacts} />
        <ContactList
          contacts={visibleContact}
          onDeleteContact={this.deleteContact}
        />
      </div>

    );

  };

};
