import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchTodos } from '../../../api';
import { Todo } from '../../../types';
import TodoCard from '../Todo/TodoCard';
import { statutes, ColumnTypes } from '../../../types'
import styled from 'styled-components';


// const BoardContainer = styled.div`
// 	display: flex;
//   flex-direction: column;
//   flex-wrap: nowrap; /* Prevents wrapping on larger screens */

//   gap: 16px; /* Adds space between columns */


//   /* Adjust margins and paddings for better spacing */
//   margin: 10px;
//   padding: 10px;

//    /* Styling for larger screens */
//   @media (min-width: 1024px) {
//     justify-content: space-around; /* Distribute columns evenly */
  
//     flex-wrap: nowrap; /* Allow wrapping for large displays */
//     flex-direction: row;
   
    
//   }

//   /* Styling for tablets */
//   @media (max-width: 1024px) {
//     justify-content: center; /* Align columns to the left */
//     flex-wrap: nowrap;
//     flex-direction: row;
    
//     margin-right: 10%;
//     margin-left: 10%
//   }

//   /* Styling for mobile screens */
//   @media (max-width: 768px) {
//     flex-direction: column; /* Stack columns vertically */
//     gap: 12px; /* Smaller gap for mobile */
//   }
// 	`

const ColumnsContainer = styled.div`
    margin-top: 30px;
    display: grid;
    color: var(--color-font);
 
    @media (min-width: 1024px) {
      width: 90vw;
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr); 
    }
 
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      width: 100%;
    }
`

const Column = styled.div`
    width: 100%;
    background-color: var(--color-white-dark);
`

interface ColumnTitleProps {
    isLast?: boolean;
  }
  
const ColumnTitle = styled.div<ColumnTitleProps>`
    font-size: 18px;       
    text-align: center;
    padding: 1rem;
    border-right: ${({ isLast }) => (isLast ? "none" : "2px solid var(--color-grey-dark)")};
    border-bottom: 2px solid var(--color-grey-dark);
    @media (min-width: 1024px) {
        text-align: start;
    }
`;


const Board = () => {
    const queryKey = ["todos"] as const;
    const queryOptions: UseQueryOptions<Todo[], Error> = {
        queryFn: () => fetchTodos(),
        queryKey,
        staleTime: Infinity, 
       };
    const { data: todos} = useQuery(queryOptions);
    const columns: ColumnTypes[] = statutes.map((status, index) => ({
        id: index + 1,
        title: status,
    }));

    return (
     <ColumnsContainer>
          {columns.map((column, index) => {
            const filteredTodos = todos?.filter((task) => task.idColumn === column.title);
            
            return (
            <Column key={column.id}>
                <ColumnTitle isLast={ index === columns.length - 1}>{column.title}</ColumnTitle>
                {filteredTodos?.map((filteredTodo) => (
                <div style={{marginBottom: "8px", padding: "10px" }}
                >
                    <TodoCard key={filteredTodo.id} todo={filteredTodo} />
                </div> 
                ))}
            </Column>
        );
      })}
     </ColumnsContainer>
   
    
    ) 
}

export default Board