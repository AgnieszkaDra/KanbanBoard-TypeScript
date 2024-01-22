import TaskCard from '../Task/TaskCard';

import styled from 'styled-components';
const BoardContainer = styled.div`
	width: 100%;
    display: flex;
    flex-direction: row;
	
	margin: 10px;
	padding: 10px
	`
const Column = styled.div`
    width: 200px;
    background-color: pink;
	margin: 10px;
	padding: 10px
`

const ColumnTitle = styled.h2`
    color: red;     
    font-size: 24px;       
    margin-bottom: 16px;   
    text-align: center;
`
const Board = ({columns}) => {
    return (
      <BoardContainer>
         {columns.map((column) => (
        <Column>
        <ColumnTitle>{column.title}</ColumnTitle>
          {column.tasks.map((task) => (
              <TaskCard 
              id={task.id}
              name={task.name}
              user={task.user}
              />
            ))}   
        </Column>
        ))}
      </BoardContainer>
    ) 
}

export default Board