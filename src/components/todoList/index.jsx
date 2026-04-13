import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import TodoItem from '../todoItem';
import { deleteTodo, toggleTodo } from '../../redux/slices/todosSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handelDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handelToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      {todos.map((todo) => {
        return (
          <ul style={{ listStyle: 'none' }} key={todo.id}>
            <li>
              <TodoItem text={todo.text} completed={todo.completed} />
              <div>
                <button onClick={() => handelToggleTodo(todo.id)}>
                  {todo.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => handelDeleteTodo(todo.id)}>Delete</button>
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
export default TodoList;
