import { addTodo } from '../api';
import useTodoMutation from './useTodoMutation';

const useAddTodo = () => {
  const { mutateAsync: addTodoMutation, isPending, error, setError } = useTodoMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      console.log('Todo added successfully!');
    },
  });

  return { addTodoMutation, isPending, error, setError };
};

export default useAddTodo;