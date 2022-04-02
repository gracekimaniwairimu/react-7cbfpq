import React from 'react';
import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'set dev env',
        completed: true,
      },
      {
        id: 2,
        title: 'develop website',
        completed: true,
      },

      {
        id: 3,
        title: 'deploy live server',
        completed: false,
      },
    ],
  };
  handleChange = (id) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    });
  };
  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
    console.log('deleted', id);
  };
  render() {
    return (
      <div>
        <Header />
        <InputTodo />
        <TodoList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
        />
      </div>
    );
  }
}

export default TodoContainer;
