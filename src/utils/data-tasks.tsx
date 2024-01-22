export type Status = 'Pending' | 'Analysis-doing' | 'Analysis-done'
export type Task = {
    id: number,
    name: string, 
    idColumn: Status,
    user: string,
}
export type Column = {
  id: number,
  name: Status, 
  limit: number,
}
export const statutes: Status[] = ['Pending', 'Analysis-doing', 'Analysis-done']
export const tasks: Task[] =  [
    {  
      id: 1,
      name: 'Shopping',
      idColumn: 'Analysis-doing',
      user: 'Anna',
    },
    {
    id: 2,
        name: 'Buy sofa',
        idColumn: 'Analysis-doing',
        user: 'Marek',
    },
  ]

  export const initialColumns: Column[] = [
    { id: 1, name: 'Pending', limit: 6 },
    { id: 2, name: 'Analysis-doing', limit: 4 },
    { id: 3, name: 'Analysis-doing', limit: 3 },
    { id: 4, name: 'Analysis-done', limit: 2 },
    { id: 5, name: 'Analysis-done', limit: 2 },
  ];

