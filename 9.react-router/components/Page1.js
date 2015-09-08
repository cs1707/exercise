import React, { Component, PropTypes } from 'react';
import Router, { Route, RouteHandler, Link } from 'react-router';

export default class Page1 extends Component {
  render() {
    return (
      <div>
        <h1>Page1</h1>
        <p>This is page1!</p>
      </div>
    );
  }
}
