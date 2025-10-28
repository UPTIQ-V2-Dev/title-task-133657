import { z } from 'zod';

export const todoFormSchema = z.object({
    title: z.string().min(1, 'Title is required').max(200, 'Title must be less than 200 characters').trim()
});

export type TodoFormData = z.infer<typeof todoFormSchema>;
