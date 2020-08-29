import React from 'react';
import './App.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import { store } from './redux';

function App() {
  return (
    <Provider store={store}>
      <TodoInput />
      <TodoList />
    </Provider>
  );
}

export default App;

