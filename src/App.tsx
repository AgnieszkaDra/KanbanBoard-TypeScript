import { useState } from 'react'
import './App.css'
import Board from './components/features/Board/Board'
import { tasks as initialTasks, statutes, Task } from './utils/data-tasks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
    <QueryClientProvider client={queryClient}>
      <Board columns={columns}></Board>
    </QueryClientProvider>
  )
}

export default App
