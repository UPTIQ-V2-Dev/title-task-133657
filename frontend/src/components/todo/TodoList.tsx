import { useQuery } from '@tanstack/react-query';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertCircle, CheckCircle2, ListTodo } from 'lucide-react';
import { todoService } from '@/services/todoService';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
    const {
        data: todosResponse,
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey: ['todos'],
        queryFn: todoService.getTodos
    });

    const todos = todosResponse?.results || [];
    const completedTodos = todos.filter(todo => todo.completed);
    const pendingTodos = todos.filter(todo => !todo.completed);

    if (isLoading) {
        return (
            <div className='w-full max-w-2xl mx-auto space-y-3'>
                <div className='flex items-center gap-2 mb-4'>
                    <Skeleton className='h-5 w-5' />
                    <Skeleton className='h-5 w-32' />
                </div>
                {[1, 2, 3].map(i => (
                    <Skeleton
                        key={i}
                        className='h-20 w-full'
                    />
                ))}
            </div>
        );
    }

    if (isError) {
        return (
            <div className='w-full max-w-2xl mx-auto'>
                <Alert variant='destructive'>
                    <AlertCircle className='h-4 w-4' />
                    <AlertDescription>{error?.message || 'Failed to load todos. Please try again.'}</AlertDescription>
                </Alert>
            </div>
        );
    }

    if (todos.length === 0) {
        return (
            <div className='w-full max-w-2xl mx-auto text-center py-12'>
                <ListTodo className='h-12 w-12 mx-auto text-muted-foreground mb-4' />
                <h3 className='text-lg font-medium text-muted-foreground mb-2'>No todos yet</h3>
                <p className='text-sm text-muted-foreground'>Add your first todo using the form above.</p>
            </div>
        );
    }

    return (
        <div className='w-full max-w-2xl mx-auto space-y-6'>
            {/* Summary */}
            <div className='flex items-center justify-between text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg'>
                <div className='flex items-center gap-2'>
                    <ListTodo className='h-4 w-4' />
                    <span>{todos.length} total todos</span>
                </div>
                <div className='flex items-center gap-4'>
                    <span>{pendingTodos.length} pending</span>
                    <div className='flex items-center gap-1'>
                        <CheckCircle2 className='h-4 w-4 text-green-600' />
                        <span>{completedTodos.length} completed</span>
                    </div>
                </div>
            </div>

            {/* Pending Todos */}
            {pendingTodos.length > 0 && (
                <div className='space-y-3'>
                    <h3 className='text-sm font-medium text-muted-foreground'>Pending ({pendingTodos.length})</h3>
                    <div className='space-y-2'>
                        {pendingTodos.map(todo => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Completed Todos */}
            {completedTodos.length > 0 && (
                <div className='space-y-3'>
                    <h3 className='text-sm font-medium text-muted-foreground'>Completed ({completedTodos.length})</h3>
                    <div className='space-y-2'>
                        {completedTodos.map(todo => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
