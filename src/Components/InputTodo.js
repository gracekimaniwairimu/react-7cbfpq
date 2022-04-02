import React, { Components } from 'react';

class InputTodo extends React.Component {
  state = {
    title: '',
  };
  onChange = e =>{
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  handleSubmit = e =>{
    e.preventDefault();
    console.log(this.state.title);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placehoulder="Add Todo..."
          value={this.state.title}
          name="title"
          onChange={this.onChange}
        />
        <button>submit</button>
      </form>
    );
  }
}

export default InputTodo;
