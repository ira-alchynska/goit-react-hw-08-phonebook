import React from 'react';
import ContactList from '../components/ContactList/ContactList.container';
import Filter from '../components/Filter';
import ContactForm from '../components/ContactForm';

function PhonebookView() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default PhonebookView;
