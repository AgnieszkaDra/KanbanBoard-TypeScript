import { useState } from 'react'
import './App.css'
import Board from './components/features/Board/Board'
import { tasks as initialTasks, statutes, Task } from './utils/data-tasks'


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
    <Board columns={columns} tasks={tasks}></Board>
    </>
  )
}

export default App
