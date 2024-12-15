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
          {columns.map((column) => {
        const filteredTodos = todos?.filter((task) => task.idColumn === column.title);
        console.log(`Todos for column ${column.id}:`, filteredTodos);
        console.log(columns)

        return (
          <Column key={column.id}>
            <ColumnTitle>{column.title}</ColumnTitle>


            {filteredTodos?.map((filteredTodo) => (
               <div style={{ border: "2px solid red", marginBottom: "8px", padding: "10px" }}><TodoCard key={filteredTodo.id} todo={filteredTodo} /></div> 
              
            ))}
          </Column>
        );
      })}
      </BoardContainer>
    ) 
}

export default Board