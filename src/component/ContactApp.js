import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SearchBar } from './SearchBar';
import { ContactList } from './ContactList';

class ContactApp extends Component {

  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
  }

  handleUserInput = (searchItem) => {
    this.props.dispatch({type: "FILTERING"});
  }

  render() {
    return(
      <div>
        {/* SearchBar component will receive the filterText as a prop and set the input field value to this prop */}
        <SearchBar
          filterText={this.props.filterText}
          onUserInput={this.handleUserInput}
        />
        {/* ContactList component also receives filterText as a prop and filters the contacts to show based on its value */}
        <ContactList
          contacts={this.props.contacts}
          filterText={this.props.filterText}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    filterText: state.filterText
  }
}

export default connect(mapStateToProps)(ContactApp);

// Main (stateful) component.
// Renders a SearchBar and a ContactList
// Passes down filterText state and handleUserInput callback as props
// SearchBar component will use filter text as value for the input field and the ContactList will use it to filter the contacts
