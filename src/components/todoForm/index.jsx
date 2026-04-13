import { useForm } from 'react-hook-form';
import { addTodo } from '../../redux/slices/todosSlice';
import { useDispatch } from 'react-redux';
import styles from './styles.module.css';

const TodoForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });

  const handelAddTodo = (data) => {
    dispatch(addTodo(data.text));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handelAddTodo)}>
      <div>
        <input
          {...register('text', { required: 'Поле не должно быть пустым!' })}
          type="text"
          placeholder="Enter new todo..."
        />
        <button type="submit">Add Todo</button>
      </div>
      {errors.text && <span>{errors.text.message}</span>}
    </form>
  );
};
export default TodoForm;
