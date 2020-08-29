import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delete_todo_action, toggle_todo_action } from './redux'
import { v4 } from 'uuid';

const TodoList = () => {
    const todos = useSelector((state)=> state.todos);

    const dispatch = useDispatch();
    const deleteTodo = (todoId) => dispatch(delete_todo_action(todoId));
    const toggleTodo = (todoId) => dispatch(toggle_todo_action(todoId));

    return (
      <ul>
        {todos.map((todo) => (
          <li style={{ textDecoration: todo.complete ? "line-through" : "none" }} key={ v4() }>
            <span>{todo.name}</span>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={toggleTodo.bind(null, todo.id)}
            />
            <span onClick={ deleteTodo.bind(null, todo.id) }> (x) </span>
          </li>
        ))}
      </ul>
    );
}

export default TodoList;

//   return (
//     <ul className="todo-list">
//       {todos.map((todo) => (
//         <li key={todo.id}>
//           <input
//             type="checkbox"
//             checked={todo.complete}
//             onChange={toggleTodo.bind(null, todo.id)}
//           />
//           <span
//             style={{ textDecoration: todo.complete ? "line-through" : "none" }}
//           >
//             {todo.name}
//           </span>
//           <span
//             className="delete-button"
//             onClick={deleteTodo.bind(null, todo.id)}
//           >
//             delete
//           </span>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default TodoList;