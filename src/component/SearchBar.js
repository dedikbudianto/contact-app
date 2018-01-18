import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SearchBar extends Component {

  static propTypes = {
    onUserInput: PropTypes.func.isRequired,
    filterText: PropTypes.string.isRequired
  }

  handleChange = (event) => {
    this.props.onUserInput(event.target.value)
  }

  render() {
    console.log(this.props.onUserInput);
    return <input
      type="search"
      placeholder="search"
      value={this.props.filterText}
      onChange={this.handleChange}
    />
  }
}

// Pure component that receives 2 props from the parent
// filterText (string) and onUserInput (callback function)
