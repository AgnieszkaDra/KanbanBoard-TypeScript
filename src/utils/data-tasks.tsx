export type Status = 'Pending' | 'Analysis-doing' | 'Analysis-done'
export type Task = {
    id: number,
    name: string, 
    idColumn: Status,
    user: string,
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