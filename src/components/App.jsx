import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container, Title, SubTitle } from './App.style'
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

    componentDidMount() {
    const contactsLS = JSON.parse(localStorage.getItem("contacts"));
    if (contactsLS) {
      this.setState({ contacts: contactsLS }); 
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts && contacts.length > 0) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }

  // Додавання нового контакту в список контактів
  formSubmitHandler = data => {
    const { name } = data;
    const { contacts } = this.state;

    const isContactExists = contacts.some(contact => contact.name === name);

    if (isContactExists) {
      alert(`${name} is already in contacts`);
    } else {
      // Додавання нового контакта
      const newContact = { id: nanoid(), ...data };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  // Зміна значення фільтра
  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  // Отримання відфільтрованих контактів
  getFilterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // Видалення контакту зі списку
  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const filterContacts = this.getFilterContacts();
    const { filter } = this.state;
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <SubTitle>Contacts</SubTitle>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <ContactList
          contacts={filterContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
