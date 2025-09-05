import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long')
});

export const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  confirmPassword: z.string(),
  role: z.enum(['student', 'faculty', 'donor']),
  studentId: z.string().optional(),
  department: z.string().optional()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

export const createCampaignSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters long').max(100, 'Title cannot exceed 100 characters'),
  shortDescription: z.string().min(10, 'Short description must be at least 10 characters long').max(200, 'Short description cannot exceed 200 characters'),
  description: z.string().min(50, 'Description must be at least 50 characters long').max(5000, 'Description cannot exceed 5000 characters'),
  goal: z.number().min(100, 'Goal must be at least $100').max(1000000, 'Goal cannot exceed $1,000,000'),
  deadline: z.string().min(1, 'Deadline is required'),
  categoryId: z.string().min(1, 'Category is required'),
  tags: z.array(z.string()).min(1, 'At least one tag is required').max(10, 'Cannot have more than 10 tags')
});

export const donationSchema = z.object({
  amount: z.number().min(5, 'Minimum donation amount is $5').max(50000, 'Maximum donation amount is $50,000'),
  donorName: z.string().min(2, 'Donor name must be at least 2 characters long'),
  donorEmail: z.string().email('Please enter a valid email address'),
  message: z.string().max(500, 'Message cannot exceed 500 characters').optional(),
  anonymous: z.boolean(),
  paymentMethod: z.enum(['card', 'university_account'])
});

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters long'),
  message: z.string().min(10, 'Message must be at least 10 characters long').max(1000, 'Message cannot exceed 1000 characters')
});

export const updateCampaignSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters long').max(100, 'Title cannot exceed 100 characters'),
  content: z.string().min(10, 'Content must be at least 10 characters long').max(2000, 'Content cannot exceed 2000 characters')
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type CreateCampaignFormData = z.infer<typeof createCampaignSchema>;
export type DonationFormData = z.infer<typeof donationSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;
export type UpdateCampaignFormData = z.infer<typeof updateCampaignSchema>;