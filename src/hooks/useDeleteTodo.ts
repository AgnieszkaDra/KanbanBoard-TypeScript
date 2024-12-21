import { deleteTodo } from '../api';
import useTodoMutation from './useTodoMutation';

const useDeleteTodo = () => {
  const { mutateAsync: deleteTodoMutation, isPending, error, setError } = useTodoMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      console.log('Todo deleted successfully!');
    },
    onError: (error) => {
      console.error('Error deleting todo:', error);
    },
  });

  return { deleteTodoMutation, isPending, error, setError };
};

export default useDeleteTodo;