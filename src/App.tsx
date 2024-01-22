import { useState } from 'react'
import './App.css'
import TaskCard from './components/features/Task/TaskCard'
import { tasks as initialTasks, statutes, Task } from './utils/data-tasks'

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  return (
    <>
     {tasks.map((task: { id: any; name: any; user: any }) => (
            <TaskCard 
              id={task.id}
              name={task.name}
              user={task.user}
            />
          ))}
    </>
  )
}

export default App
