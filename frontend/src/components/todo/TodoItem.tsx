import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import { Trash2, Loader2 } from 'lucide-react';
import { todoService } from '@/services/todoService';
import type { Todo } from '@/types/todo';

interface TodoItemProps {
    todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
    const queryClient = useQueryClient();

    const toggleTodoMutation = useMutation({
        mutationFn: () => todoService.toggleTodo(todo.id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        }
    });

    const deleteTodoMutation = useMutation({
        mutationFn: () => todoService.deleteTodo(todo.id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        }
    });

    const handleToggle = () => {
        toggleTodoMutation.mutate();
    };

    const handleDelete = () => {
        deleteTodoMutation.mutate();
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <Card className='w-full'>
            <CardContent className='p-4'>
                <div className='flex items-center justify-between gap-3'>
                    <div className='flex items-center gap-3 flex-1 min-w-0'>
                        <Checkbox
                            checked={todo.completed}
                            onCheckedChange={handleToggle}
                            disabled={toggleTodoMutation.isPending}
                            className='flex-shrink-0'
                        />
                        <div className='flex-1 min-w-0'>
                            <p
                                className={`text-sm font-medium truncate ${
                                    todo.completed ? 'line-through text-muted-foreground' : 'text-foreground'
                                }`}
                            >
                                {todo.title}
                            </p>
                            {todo.description && (
                                <p
                                    className={`text-sm mt-1 ${
                                        todo.completed ? 'line-through text-muted-foreground' : 'text-muted-foreground'
                                    }`}
                                >
                                    {todo.description}
                                </p>
                            )}
                            <p className='text-xs text-muted-foreground mt-1'>{formatDate(todo.createdAt)}</p>
                        </div>
                    </div>

                    <Button
                        variant='ghost'
                        size='sm'
                        onClick={handleDelete}
                        disabled={deleteTodoMutation.isPending}
                        className='flex-shrink-0 text-red-600 hover:text-red-700 hover:bg-red-50'
                    >
                        {deleteTodoMutation.isPending ? (
                            <Loader2 className='h-4 w-4 animate-spin' />
                        ) : (
                            <Trash2 className='h-4 w-4' />
                        )}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};
