import { Todo } from "../types";


export const todos: Todo[] =  [
    {  
      id: 1,
      title: 'Shopping',
      idColumn: 'Analysis-doing',
      user: 'Anna',
      completed: false
    },
    {
        id: 2,
        title: 'Buy sofa',
        idColumn: 'Analysis-doing',
        user: 'Marek',
        completed: false
    },
  ]

export const fetchTodos = async(query=""): Promise<Todo[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("fetched todos");

    const filteredTodos = todos.filter((todo) => 
    todo.title.toLowerCase().includes(query.toLowerCase())
    );

    console.log(filteredTodos)

    return [...filteredTodos]
}

export const addTodo = async (todo: Pick<Todo, "title">): Promise<Todo> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const newTodo = {
        id: todos.length + 1,
        title: todo.title,
        idColumn: 'Pending',
        user: 'Ola',
        completed: false,
    }

    todos.push(newTodo);

    return newTodo
}

export const deleteTodo = async (id: number): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

 
  const index = todos.findIndex((todo) => todo.id === id);
  
  if (index !== -1) {
  
    todos.splice(index, 1);
    console.log(`Todo with id ${id} deleted.`);
    return true;
  } else {
    console.error(`Todo with id ${id} not found.`);
    return false;
  }
  };