import React from 'react';
import { Todo } from '../types';
import styled from 'styled-components';

interface TodoCardProps {
  todo: Todo;
}

const TodoContainer = styled.div`
	width: calc(100% - 20px);
	background-color: grey;
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
    margin-bottom: 16px;   
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
      <div>
        <h3 className="font-semibold">{todo.title}</h3>
        <p>Status: {todo.completed ? 'Completed ✅' : 'Incomplete ❌'}</p>
      </div>
      <button className="text-sm text-blue-500">Edit</button>
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