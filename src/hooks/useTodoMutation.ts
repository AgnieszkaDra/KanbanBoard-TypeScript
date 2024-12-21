import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../queryClient'; 
import { useState } from 'react';

interface UseTodoMutationProps<T> {
  mutationFn: (data: T) => Promise<unknown>; 
  onSuccess?: () => void;             
  onError?: (error: unknown) => void;  
}

const useTodoMutation = <T>({ mutationFn, onSuccess, onError }: UseTodoMutationProps<T>) => {
  const [error, setError] = useState<string | null>(null);

  const { mutateAsync, status } = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
      onSuccess?.();
    },
    onError: (err) => {
      setError('An error occurred. Please try again.');
      console.error(err);
      onError?.(err);
    },
  });

  return { mutateAsync, isPending: status === 'pending', error, setError };
};

export default useTodoMutation;
