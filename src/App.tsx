import { useState } from 'react'
import './App.css'
import Board from './components/features/Board/Board'
import { tasks as initialTasks, statutes, Task } from './utils/data-tasks'
import { QueryClient, useQueryClient, QueryClientProvider, useQuery, UseQueryOptions } from '@tanstack/react-query';
import Demo from './Demo';
import { fetchTodos } from "./api";
import { Todo } from './entities/Todo';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});


function App() {
  const [tasks] = useState<Task[]>(initialTasks)
  const columns = statutes.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.idColumn === status)
    return {
      title: status,
      tasks: tasksInColumn
    }
  })
 
  
  
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Board columns={columns}></Board>
    
    </QueryClientProvider>
  </>
  )
}

export default App
