import { useForm } from 'react-hook-form';
import { addTodo } from '../../redux/slices/todosSlice';
import { useDispatch } from 'react-redux';

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
          {...register('text', { required: 'Поле не должно быть пустым' })}
          type="text"
          placeholder="Enter new todo..."
        />
        {errors.text && <span>{errors.text.message}</span>}
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};
export default TodoForm;
