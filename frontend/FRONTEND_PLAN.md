# Todo App - Frontend Implementation Plan

## Tech Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- **shadcn/ui** components
- **Tailwind CSS v4** for styling
- **React Hook Form** with Zod validation
- **Axios** for API calls
- **React Query** for state management

## Application Overview

Simple todo app with a single form containing only a title field for creating todos.

## Page-by-Page Implementation Plan

### 1. Main Todo Page (`/`)

**Components:**

- `TodoApp` (main container component)
- `TodoForm` (form with title input)
- `TodoList` (displays all todos)
- `TodoItem` (individual todo item with delete/toggle)

**Utils:**

- `todoValidation.ts` (Zod schema for form validation)
- `todoHelpers.ts` (utility functions for todo operations)

**Types:**

- `Todo` interface (id, title, completed, createdAt)
- `CreateTodoRequest` type
- `TodoFormData` type

**API Endpoints:**

- `GET /api/todos` (fetch all todos)
- `POST /api/todos` (create new todo)
- `PUT /api/todos/:id` (update todo)
- `DELETE /api/todos/:id` (delete todo)

**Hooks:**

- `useTodos` (React Query hook for todo CRUD operations)
- `useTodoForm` (React Hook Form integration)

### 2. Common Components & Layout

**Layout Components:**

- `Layout` (main app layout wrapper)
- `Header` (app title/branding)

**Common UI Components:**

- Use existing shadcn components:
    - `Button` for form submit and todo actions
    - `Input` for title field
    - `Card` for todo items
    - `Checkbox` for todo completion status
    - `Alert` for error/success messages

### 3. Services & API Layer

**Services:**

- `todoService.ts` (API calls using Axios)
- `queryClient.ts` (React Query configuration)

**Types:**

- `api.ts` (API response types)
- `todo.ts` (Todo domain types)

### 4. State Management

**React Query Queries:**

- `useTodosQuery` (fetch todos)
- `useCreateTodoMutation` (create todo)
- `useUpdateTodoMutation` (update todo)
- `useDeleteTodoMutation` (delete todo)

### 5. Styling & Theme

**Styles:**

- Use existing Tailwind v4 setup
- Utilize existing theme configurations
- Responsive design for mobile/desktop

## Implementation Phases

### Phase 1: Core Setup

1. Update `App.tsx` with basic layout
2. Create Todo types and interfaces
3. Setup API service structure

### Phase 2: Todo Form

1. Create `TodoForm` component
2. Implement form validation with Zod
3. Add form submission handling

### Phase 3: Todo List Display

1. Create `TodoList` and `TodoItem` components
2. Implement todo rendering
3. Add basic styling

### Phase 4: CRUD Operations

1. Implement Create todo functionality
2. Add Update (toggle completion) functionality
3. Add Delete todo functionality

### Phase 5: Polish & Enhancement

1. Add error handling and loading states
2. Implement responsive design
3. Add animations/transitions
4. Testing and optimization

## File Structure

```
src/
├── components/
│   ├── todo/
│   │   ├── TodoApp.tsx
│   │   ├── TodoForm.tsx
│   │   ├── TodoList.tsx
│   │   └── TodoItem.tsx
│   └── layout/
│       ├── Layout.tsx
│       └── Header.tsx
├── hooks/
│   ├── useTodos.ts
│   └── useTodoForm.ts
├── services/
│   ├── todoService.ts
│   └── queryClient.ts
├── types/
│   └── todo.ts
├── utils/
│   ├── todoValidation.ts
│   └── todoHelpers.ts
└── App.tsx
```

## Key Features

- Simple form with title input only
- Real-time todo list updates
- Todo completion toggle
- Todo deletion
- Form validation
- Responsive design
- Loading and error states
