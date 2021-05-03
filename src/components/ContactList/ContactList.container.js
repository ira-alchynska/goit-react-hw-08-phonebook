import { connect } from 'react-redux';
import { deleteContact } from '../../redux/Contacts/contacts-operations';
import { getFilteredContacts } from '../../redux/Contacts/contacts-selectors';
import ContactList from './ContactList';

const mapStateToProps = state => ({
  filteredContacts: getFilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
