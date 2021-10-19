import React, { Component } from 'react';
import PropType from 'prop-types';
import './Filter.css';

class Filter extends Component {
  render() {
    return (
      <>
        <h3 className="Filter__title">Find contacts by name</h3>
        <input
          className="Filter__input"
          type="text"
          name="filter"
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </>
    );
  }
}

Filter.PropType = {
  value: PropType.string,
  onChange: PropType.func.isRequired,
};

export default Filter;
