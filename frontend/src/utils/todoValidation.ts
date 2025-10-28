import { z } from 'zod';

export const todoFormSchema = z.object({
    title: z.string().min(1, 'Title is required').max(200, 'Title must be less than 200 characters').trim(),
    description: z.string().max(500, 'Description must be less than 500 characters').trim().optional()
});

export type TodoFormData = z.infer<typeof todoFormSchema>;
