import { Todo } from "../types";

export const TodoNames: { value: string; label: string }[] = [
    { value: "Shopping", label: "Shopping" },
    { value: "Buy sofa", label: "Buy sofa" },
    { value: "Buy car", label: "Buy car" },
    { value: "Buy house", label: "Buy house" },
    { value: "Buy computer", label: "Buy computer" },
    { value: "Buy phone", label: "Buy phone" },
    { value: "Buy TV", label: "Buy TV" },
    { value: "Buy table", label: "Buy table" },
    { value: "Buy chair", label: "Buy chair" },
    { value: "Buy bed", label: "Buy bed" },
    { value: "Buy lamp", label: "Buy lamp" },
    { value: "Buy carpet", label: "Buy carpet" },
    { value: "Buy book", label: "Buy book" },
    { value: "Buy pen", label: "Buy pen" },
    { value: "Buy pencil", label: "Buy pencil" },
    { value: "Buy notebook", label: "Buy notebook" },
    { value: "Buy folder", label: "Buy folder" },
    { value: "Buy paper", label: "Buy paper" },
    { value: "Buy printer", label: "Buy printer" },
    { value: "Buy scanner", label: "Buy scanner" },
    { value: "Buy keyboard", label: "Buy keyboard" },
    { value: "Buy mouse", label: "Buy mouse" },
    { value: "Buy monitor", label: "Buy monitor" },
    { value: "Buy chair", label: "Buy chair" },
    { value: "Buy table", label: "Buy table" },
    { value: "Buy bed", label: "Buy bed" },
    { value: "Buy lamp", label: "Buy lamp" },
    { value: "Buy carpet", label: "Buy carpet" },
    { value: "Buy book", label: "Buy book" },
    { value: "Buy pen", label: "Buy pen" },
    { value: "Buy pencil", label: "Buy pencil" },
    { value: "Buy notebook", label: "Buy notebook" },
    { value: "Buy folder", label: "Buy folder" },
]


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

export const deleteTodo = async (id: number): Promise<Todo[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const updatedTodos = todos.filter((todo) => todo.id !== id);

  todos.length = 0; 
  todos.push(...updatedTodos); 

  return todos
};