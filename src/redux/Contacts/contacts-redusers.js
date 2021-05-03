import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filteredContact,
} from './contacts-actions';

const INITIAL_CONTACTS = [];

const itemsReducer = createReducer(INITIAL_CONTACTS, {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],

  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [filteredContact]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [deleteContactRequest]: () => true,
  [fetchContactsRequest]: () => true,

  [addContactSuccess]: () => false,
  [deleteContactSuccess]: () => false,
  [fetchContactsSuccess]: () => false,

  [addContactError]: () => false,
  [deleteContactError]: () => false,
  [fetchContactsError]: () => false,
});

const error = createReducer(null, {
  [fetchContactsRequest]: () => null,
  [fetchContactsError]: (_, action) => action.payload,
  [addContactRequest]: () => null,
  [addContactError]: (_, action) => action.payload,
  [deleteContactRequest]: () => null,
  [deleteContactError]: (_, action) => action.payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading,
  error,
});
