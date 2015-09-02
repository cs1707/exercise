import React, { Component, PropTypes } from 'react';
import Todo from './Todo.jsx';

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) =>
                              <Todo {...todo}
                                  key={index}
                                  onClick={() => this.props.onTodoClick(index)} />
                             )}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};
