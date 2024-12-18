import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Todo } from '../../../types';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonComponent from '../../../ui/Button/ButtonComponent';
import styled from 'styled-components';
import { deleteTodo } from '../../../api';  // Ensure you have an API function to delete todo

interface TodoCardProps {
  todo: Todo;
}

const TodoContainer = styled.div`
  width: 80%;
  border: 2px solid var(--color-grey-dark);
  border-radius: 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-bottom: 0.5rem;
  padding: 10px;
`;

const TodoHeader = styled.div`
  width: 100%;
  display: flex;
  color: var(--color-grey-dark);
  font-size: 18px;
`;

const TodoId = styled.h3`
  margin-right: 1.25rem;
`;

const TodoName = styled.h3`
  margin-right: 0.25rem;
`;

const TaskUser = styled.p`
  color: #333;
  font-size: 20px;
  margin-bottom: 16px;
  text-align: center;
`;

const TodoCard: React.FC<TodoCardProps> = ({ todo }) => {
  const queryClient = useQueryClient();
  const { mutateAsync: deleteTodoMutation, isPending } = useMutation({
    mutationFn: deleteTodo, 
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => {
      console.error('Error deleting todo:', error);
    },
  });

  const handleDelete = async () => {
    const confirmed = window.confirm('Are you sure you want to delete this task?');
    if (confirmed) {
      try {
        await deleteTodoMutation(todo.id);  
      } catch (error) {
        console.error('Failed to delete todo:', error);
      }
    }
  };

  return (
    <TodoContainer>
      <TodoHeader>
        <TodoId>
          {`Task ${todo.id}`}
        </TodoId>
        <TodoName>
          {todo.title}
        </TodoName>
        <ButtonComponent onClick={handleDelete} variant={'delete'} disabled={isPending}>
          <FontAwesomeIcon icon={faTrash} />
        </ButtonComponent>
      </TodoHeader>
      <TaskUser>
        {todo.user}
      </TaskUser>
    </TodoContainer>
  );
};

export default TodoCard;