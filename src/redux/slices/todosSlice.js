import createSlice from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) todo.completed = !todo.completed;
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        todo.id !== action.payload;
      });
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
