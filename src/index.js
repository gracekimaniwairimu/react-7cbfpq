import React from 'react';
import ReactDOM from 'react-dom';

import TodoContainer from './Components/TodoContainer';

const element = <h1>Hello react</h1>;

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root')
);
