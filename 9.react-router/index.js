import React from 'react';
import routes from './components/App.js';
import Router from 'react-router';

Router.run(routes, function(Handler) {
  React.render(<Handler />, document.body);
})
