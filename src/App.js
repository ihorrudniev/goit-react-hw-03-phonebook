import React, { Component } from 'react';
import Form from './Components/Form';
import Filter from './Components/Filter';
import Container from './Components/Container';
import ContactsList from './Components/ContactsList';
// import initialContacts from './contacts.json';
import './App.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    if (!this.hasContacts(contact.name)) {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    } else {
      alert(`${contact.name} is already in contacts`);
    }
  };

  hasContacts = name => {
    return this.state.contacts.find(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
  };

  findContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();

    if (filter.length) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      );
    } else {
      return contacts;
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  componentDidMount() {
    console.log('App componentDidMount');

    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');

    if (this.state.contacts !== prevState.contacts) {
      console.log('Обновилось поле Контактов, записываю контакты в хранилище');

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    console.log('App render');

    const { filter } = this.state;

    return (
      <Container>
        <h1 className="App__title">Phonebook</h1>

        <Form onSubmit={this.addContact} />

        <div>
          <h1 className="App__title">Contacts</h1>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactsList
            findContact={this.findContact}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </Container>
    );
  }
}

export default App;
