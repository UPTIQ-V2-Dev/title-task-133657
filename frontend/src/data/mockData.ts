import type { PaginatedResponse } from '@/types/api';
import type { AuthResponse, User } from '@/types/user';
import type { Todo } from '@/types/todo';

export const mockUser: User = {
    id: 1,
    email: 'user@example.com',
    name: 'John Doe',
    role: 'USER',
    isEmailVerified: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
};

export const mockAdminUser: User = {
    id: 2,
    email: 'admin@example.com',
    name: 'Jane Smith',
    role: 'ADMIN',
    isEmailVerified: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
};

export const mockUsers: User[] = [mockUser, mockAdminUser];

export const mockAuthResponse: AuthResponse = {
    user: mockUser,
    tokens: {
        access: {
            token: 'mock-access-token',
            expires: new Date(Date.now() + 15 * 60 * 1000).toISOString()
        },
        refresh: {
            token: 'mock-refresh-token',
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
        }
    }
};

export const mockPaginatedUsers: PaginatedResponse<User> = {
    results: mockUsers,
    page: 1,
    limit: 10,
    totalPages: 1,
    totalResults: 2
};

export const mockTodos: Todo[] = [
    {
        id: '1',
        title: 'Learn React',
        completed: false,
        createdAt: new Date().toISOString()
    },
    {
        id: '2',
        title: 'Build a todo app',
        completed: true,
        createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: '3',
        title: 'Deploy the application',
        completed: false,
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
    }
];

export const mockPaginatedTodos: PaginatedResponse<Todo> = {
    results: mockTodos,
    page: 1,
    limit: 10,
    totalPages: 1,
    totalResults: 3
};
