import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import { TodoForm } from '@/components/todo/TodoForm';
import { TodoList } from '@/components/todo/TodoList';
import { CheckSquare } from 'lucide-react';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false
        }
    }
});

export const TodoPage = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <div className='min-h-screen bg-background'>
                <div className='container mx-auto px-4 py-8'>
                    {/* Header */}
                    <div className='text-center mb-8'>
                        <div className='flex items-center justify-center gap-3 mb-4'>
                            <div className='p-2 bg-primary/10 rounded-lg'>
                                <CheckSquare className='h-8 w-8 text-primary' />
                            </div>
                            <h1 className='text-3xl font-bold tracking-tight'>Todo App</h1>
                        </div>
                        <p className='text-muted-foreground'>Simple and efficient task management</p>
                    </div>

                    {/* Main Content */}
                    <div className='max-w-4xl mx-auto space-y-8'>
                        {/* Add Todo Form */}
                        <div className='bg-card border rounded-lg p-6'>
                            <h2 className='text-lg font-semibold mb-4'>Add New Todo</h2>
                            <TodoForm />
                        </div>

                        {/* Todo List */}
                        <div className='bg-card border rounded-lg p-6'>
                            <h2 className='text-lg font-semibold mb-4'>Your Todos</h2>
                            <TodoList />
                        </div>
                    </div>
                </div>
                <Toaster />
            </div>
        </QueryClientProvider>
    );
};
