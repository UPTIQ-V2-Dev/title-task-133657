import { api } from '@/lib/api';
import type { PaginatedResponse } from '@/types/api';
import type { Todo, CreateTodoRequest, UpdateTodoRequest } from '@/types/todo';
import { mockTodos, mockPaginatedTodos } from '@/data/mockData';

export const todoService = {
    // Get all todos
    getTodos: async (): Promise<PaginatedResponse<Todo>> => {
        if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
            return Promise.resolve(mockPaginatedTodos);
        }

        const response = await api.get<PaginatedResponse<Todo>>('/api/todos');
        return response.data;
    },

    // Get a single todo by ID
    getTodoById: async (id: string): Promise<Todo> => {
        if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
            const todo = mockTodos.find(t => t.id === id);
            if (!todo) {
                throw new Error('Todo not found');
            }
            return Promise.resolve(todo);
        }

        const response = await api.get<Todo>(`/api/todos/${id}`);
        return response.data;
    },

    // Create a new todo
    createTodo: async (data: CreateTodoRequest): Promise<Todo> => {
        if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
            const newTodo: Todo = {
                id: Math.random().toString(36).substr(2, 9),
                title: data.title,
                completed: false,
                createdAt: new Date().toISOString()
            };
            return Promise.resolve(newTodo);
        }

        const response = await api.post<Todo>('/api/todos', data);
        return response.data;
    },

    // Update a todo
    updateTodo: async (id: string, data: UpdateTodoRequest): Promise<Todo> => {
        if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
            const existingTodo = mockTodos.find(t => t.id === id);
            if (!existingTodo) {
                throw new Error('Todo not found');
            }

            const updatedTodo: Todo = {
                ...existingTodo,
                ...data
            };
            return Promise.resolve(updatedTodo);
        }

        const response = await api.put<Todo>(`/api/todos/${id}`, data);
        return response.data;
    },

    // Delete a todo
    deleteTodo: async (id: string): Promise<void> => {
        if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
            return Promise.resolve();
        }

        await api.delete(`/api/todos/${id}`);
    },

    // Toggle todo completion
    toggleTodo: async (id: string): Promise<Todo> => {
        if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
            const existingTodo = mockTodos.find(t => t.id === id);
            if (!existingTodo) {
                throw new Error('Todo not found');
            }

            const updatedTodo: Todo = {
                ...existingTodo,
                completed: !existingTodo.completed
            };
            return Promise.resolve(updatedTodo);
        }

        const existingTodo = await todoService.getTodoById(id);
        return todoService.updateTodo(id, { completed: !existingTodo.completed });
    }
};
