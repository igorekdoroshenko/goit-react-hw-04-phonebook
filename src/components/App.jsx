import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Container, Title, SubTitle } from './App.style';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  // Додавання нового контакту в список контактів
  const formSubmitHandler = data => {
    const { name } = data;
    
    const isContactExists = contacts.some(contact => contact.name === name);

    if (isContactExists) {
      alert(`${name} is already in contacts`);
    } else {
      // Додавання нового контакта
      const newContact = { id: nanoid(), ...data };
      setContacts(prevContacts => [...prevContacts, newContact]);
    }
  };

  // Зміна значення фільтра
  const changeFilter = e => {
    setFilter(e.target.value);
  };

  // Отримання відфільтрованих контактів
  const getFilterContacts = () => {
      const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // Видалення контакту зі списку
  const deleteContact = contactId => {
    setContacts(prevContacts => prevContacts.filter(({ id }) => id !== contactId));
  };

  const filterContacts = getFilterContacts();

  useEffect(() => {
    const contactsLS = JSON.parse(localStorage.getItem('contacts'));
    if (contactsLS) {
      setContacts(contactsLS);
    } else {
      setContacts([
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]);
    }
  }, []);

  useEffect(() => {
    if (contacts && contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={formSubmitHandler} />

      <SubTitle>Contacts</SubTitle>
      <Filter value={filter} onChangeFilter={changeFilter} />
      <ContactList contacts={filterContacts} onDeleteContact={deleteContact} />
    </Container>
  );
}
