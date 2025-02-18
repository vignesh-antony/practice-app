export interface TodoType {
    id: string;
    title: string;
    description?: string;
    createdAt?: Date;
    markAsCompleted?: boolean;
}

export interface TodoState {
    todos: TodoType[];
}
