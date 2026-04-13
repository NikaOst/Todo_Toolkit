import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import TodoItem from '../todoItem';
import { deleteTodo, toggleTodo } from '../../redux/slices/todosSlice';
import styles from './styles.module.css';

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
    <div className={styles.todosContainer}>
      <h1>Todo List</h1>
      <ul style={{ listStyle: 'none' }}>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <TodoItem text={todo.text} completed={todo.completed} />
              <div className={styles.btnContainer}>
                <button onClick={() => handelToggleTodo(todo.id)}>
                  {todo.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => handelDeleteTodo(todo.id)}>Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TodoList;
