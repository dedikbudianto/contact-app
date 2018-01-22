import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleUserInput } from '../redux/actions';
import { SearchBar } from './SearchBar';
import { ContactList } from './ContactList';

class ContactApp extends Component {

  static propTypes = {
    filterText: PropTypes.string.isRequired,
    handleUserInput: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    return(
      <div>
        {/* SearchBar component will receive the filterText as a prop and set the input field value to this prop */}
        <SearchBar
          filterText={this.props.filterText}
          onUserInput={this.props.handleUserInput}
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

const mapStateToProps = (state) => {
  return {
    filterText: state.filterText
  }
}

// the mapDispatchToProps() receives the dispatch function from the store
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    handleUserInput: handleUserInput
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactApp);

// Main (stateful) component.
// Renders a SearchBar and a ContactList
// Passes down filterText state and handleUserInput callback as props
// SearchBar component will use filter text as value for the input field and the ContactList will use it to filter the contacts
