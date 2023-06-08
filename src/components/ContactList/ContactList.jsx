import React from 'react';
import PropTypes from 'prop-types';
import {ContactWriper, ContactItem, ContactButton } from './ContactList.style';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ContactWriper>
    {contacts.map(contact => (
      <ContactItem key={contact.id}>
        {contact.name + ' : ' + contact.number}
        {
          // Кнопка видалення контакту
          <ContactButton
            type="button"
            name="delete"
            onClick={() => onDeleteContact(contact.id)}
          >
            delete
          </ContactButton>
        }
      </ContactItem>
    ))}
  </ContactWriper>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;