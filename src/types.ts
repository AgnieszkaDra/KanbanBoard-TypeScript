// Status type
export type Status = 'Pending' | 'Analysis-doing' | 'Analysis-done';

// ColumnTypes interface
export type ColumnTypes = {
  id: number;
  title: Status;
};

// Statutes array
export const statutes: Status[] = ['Pending', 'Analysis-doing', 'Analysis-done'];

export interface Todo {
    id: number;
    title: string;
    idColumn: string,
    user: string
    completed: boolean;
}