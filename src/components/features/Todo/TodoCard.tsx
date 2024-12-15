import React from 'react';
import { Todo } from '../../../types';
import styled from 'styled-components';

interface TodoCardProps {
  todo: Todo;
}

const TodoContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
	width: 80%;
	border: 2px solid var(--color-grey-dark);
	padding: 10px;
    margin-bottom: 10px
	`

const TaskID = styled.h3`
    color: #333;     
    font-size: 24px;       
    margin-bottom: 16px;   
    text-align: center;
	`

const TaskName = styled.p`
    color: #333;     
    font-size: 24px;       
    margin: 0;   
    text-align: center;
  `

const TaskUser = styled.p`
    color: #333;     
    font-size: 20px;       
    margin-bottom: 16px;   
    text-align: center;
	`

const TodoCard: React.FC<TodoCardProps> = ({ todo }) => {
  return (
    <div className="border p-2 rounded mb-2 flex justify-between items-center">
      <TodoContainer>
        <TaskID>
          {`Task${todo.id}`}
        </TaskID>
        <TaskName>
          {todo.title}
        </TaskName>
        <TaskUser>
          {todo.user}
        </TaskUser>
      </TodoContainer>
    </div>
  );
};

export default TodoCard;