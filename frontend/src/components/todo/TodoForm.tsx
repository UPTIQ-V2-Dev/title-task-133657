import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Plus } from 'lucide-react';
import { todoService } from '@/services/todoService';
import { todoFormSchema, type TodoFormData } from '@/utils/todoValidation';

interface TodoFormProps {
    onSuccess?: () => void;
}

export const TodoForm = ({ onSuccess }: TodoFormProps) => {
    const queryClient = useQueryClient();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<TodoFormData>({
        resolver: zodResolver(todoFormSchema),
        defaultValues: {
            title: ''
        }
    });

    const createTodoMutation = useMutation({
        mutationFn: todoService.createTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
            reset();
            onSuccess?.();
        }
    });

    const onSubmit = (data: TodoFormData) => {
        createTodoMutation.mutate(data);
    };

    return (
        <div className='w-full max-w-md mx-auto'>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='space-y-4'
            >
                <div className='space-y-2'>
                    <Label htmlFor='title'>Todo Title</Label>
                    <Input
                        id='title'
                        placeholder='Enter your todo...'
                        {...register('title')}
                        disabled={createTodoMutation.isPending}
                    />
                    {errors.title && <p className='text-sm text-red-600'>{errors.title.message}</p>}
                </div>

                <Button
                    type='submit'
                    disabled={createTodoMutation.isPending}
                    className='w-full'
                >
                    {createTodoMutation.isPending ? (
                        <>
                            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                            Adding Todo...
                        </>
                    ) : (
                        <>
                            <Plus className='mr-2 h-4 w-4' />
                            Add Todo
                        </>
                    )}
                </Button>

                {createTodoMutation.isError && (
                    <Alert variant='destructive'>
                        <AlertDescription>
                            {createTodoMutation.error?.message || 'Failed to create todo. Please try again.'}
                        </AlertDescription>
                    </Alert>
                )}
            </form>
        </div>
    );
};
