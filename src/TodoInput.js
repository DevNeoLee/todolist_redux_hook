import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add_todo_action } from './redux';
import { v4 } from 'uuid';


const TodoInput = () => {
  const [todo, setTodo] = useState("");

  const changeTodo = (e) => {
    setTodo(e.target.value);
  };

  const dispatch = useDispatch();
  const addTodo = (todo) => {
    dispatch(add_todo_action(todo));
  };

  const submitTodo = (e) => {
    e.preventDefault();

    if (todo.trim() === "") return;

    addTodo({
      id: v4(),
      name: todo,
      complete: false,
    });

    setTodo("");
  };

  return (
    <div>
      <form onSubmit={submitTodo}>
        <input
          type="text"
          onChange={changeTodo}
          placeholder="add todo"
          value={todo}
        />
        <input type="submit" />
     
      </form>
    </div>
  );
};

export default TodoInput;
