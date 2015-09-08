import React, { Component } from 'react';
import Router, { Route, RouteHandler, Link } from 'react-router';
import Page1 from './Page1.js';
import Page2 from './Page2.js';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="page1">Page 1</Link>
          </li>
          <li>
            <Link to="page2">Page 2</Link>
          </li>
        </ul>
        <RouteHandler key={name} />
      </div>
    );
  }
}

let routes = (
  <Route handler={App}>
    <Route name="page1" handler={Page1} />
    <Route name="page2" handler={Page2} />
  </Route>
)

export default routes;
