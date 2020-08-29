import { createStore } from 'redux';
import { v4 } from 'uuid';

const initialState = {
    todos : [
        {
            id: v4(),
            name: 'first todo list',
            comeplete: false
        }
    ]
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
        return ({ ...state, todos: [...state.todos, action.payload] });
    case "DELETE_TODO":
        return {...state, todos: state.todos.filter(todo=> todo.id !== action.payload)}
    case "TOGGLE_TODO":
        return {...state, todos: state.todos.map(todo => todo.id === action.payload ? {...todo, complete: !todo.complete} : todo )}
    default:
        return state;
  }
};

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export const add_todo_action = (todo) => (
    {
        type: "ADD_TODO",
        payload: todo
    }
)

export const delete_todo_action = (todo_id) => (
    {
        type: "DELETE_TODO",
        payload: todo_id
    }
)
   
export const toggle_todo_action = (todo_id) => ({
  type: "TOGGLE_TODO",
  payload: todo_id,
});



