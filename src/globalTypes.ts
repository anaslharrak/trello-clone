export type Column = {
    id: number;
    title: string;
    tasks: Task[];
}

export type Task = {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}