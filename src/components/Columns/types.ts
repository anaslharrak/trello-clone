export type Column = {
    id: number;
    title: string;
    tasks: Task[];
}

type Task = {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
}