const TodoItem = ({ text, completed }) => {
  return completed ? (
    <p style={{ color: 'gray', textDecoration: 'line-through' }}>{text}</p>
  ) : (
    <p>{text}</p>
  );
};
export default TodoItem;
