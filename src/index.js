import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ContactApp from './component/ContactApp';
import contactList from './config/contacts.json';

const { contacts: contact } = contactList;

const initialState = {
  filterText: ''
}

function reducer(state = initialState, action) {
  if(action.type === 'FILTERING') {
    return{
      filterText: action.searchItem // access searchItem in reducer by the key ('searchItem')
    }
  }
  return state;
}

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <ContactApp contacts={contact} />
  </Provider>
)

render(<App />, document.getElementById('root'));
