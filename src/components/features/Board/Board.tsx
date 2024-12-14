import TodoCard from '../../TodoCard';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { fetchTodos } from '../../../api';

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
  const queryKey = ["todos"] as const;

  const queryOptions: UseQueryOptions<Todo[], Error> = {
      queryFn: () => fetchTodos(),
      queryKey,
      staleTime: Infinity, 
      cacheTime: 0
    };

    const { data: todos} = useQuery(queryOptions
    );
    return (
      <BoardContainer>
         {columns.map((column) => (
        <Column>
        <ColumnTitle>{column.title}</ColumnTitle>
       
        </Column>
))} 
{todos?.map((task) => {
                return <TodoCard key={task.id} todo={task}/>
            })}  
      </BoardContainer>
    ) 
}

export default Board