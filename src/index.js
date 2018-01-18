import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ContactApp from './component/ContactApp';
import contactList from './config/contacts.json';

const { contacts: contacts } = contactList;

const initialState = {
  filterText: ''
}

function reducer(state = initialState, action) {
  if(action.type === "FILTERING") {
    return {
      filterText: state.searchItem
    }
  }
  return state;
}

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <ContactApp contacts={contacts} />
  </Provider>
)

render(<App />, document.getElementById('root'));
