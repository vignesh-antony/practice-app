export interface TodoType {
    id: string;
    title: string;
    description?: string;
    createdAt?: string;
    markAsCompleted?: boolean;
}

export interface TodoState {
    todos: TodoType[];
}
