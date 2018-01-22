import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { contactReducer } from '../src/redux/reducer';
import ContactApp from './component/ContactApp';
import contactList from './config/contacts.json';

const { contacts: contact } = contactList;

const store = createStore(contactReducer);

const App = () => (
  <Provider store={store}>
    <ContactApp contacts={contact} />
  </Provider>
)

render(<App />, document.getElementById('root'));
