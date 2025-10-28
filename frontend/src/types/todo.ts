export interface Todo {
    id: string;
    title: string;
    description?: string;
    completed: boolean;
    createdAt: string;
}

export interface CreateTodoRequest {
    title: string;
    description?: string;
}

export interface UpdateTodoRequest {
    title?: string;
    description?: string;
    completed?: boolean;
}

export interface TodoFormData {
    title: string;
    description?: string;
}
