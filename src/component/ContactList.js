import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';

export class ContactList extends Component {

  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    filterText: PropTypes.string.isRequired
  }

  render() {

    // ContactList component filters the data to show based on the filterText prop
    const filteredContacts = this.props.contacts.filter((contact) =>
      contact.name.indexOf(this.props.filterText) !== -1
    );

    return (
      <ul>
        {filteredContacts.map((contact) =>
          <ContactItem
            key={contact.email}
            name={contact.name}
            email={contact.email}
          />
        )}
      </ul>
    )
  }
}

// Pure component that receives both contacts and filterText as props
// The component is responsible for actualy filtering the contacts before displaying them
// It's considered a pure component because given the same contacts and filterText props the output will always be the same
