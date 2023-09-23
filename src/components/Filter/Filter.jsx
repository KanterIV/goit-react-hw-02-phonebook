import React, { Component } from 'react';

export default class Filter extends Component {
  render() {
    const { handleInputChange } = this.props;
    return (
      <>
        <p>Fined contacts by name</p>
        <input onChange={handleInputChange} type="text" name="filter" />
      </>
    );
  }
}
