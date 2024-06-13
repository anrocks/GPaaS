import { z } from 'zod'

export const ResetForm = z
  .object({
    newPassword: z.string().min(6, 'Password must be at least 6 characters'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
  })
  .refine((data) => data.password === data.newPassword, {
    message: "Passwords don't match",
    path: ['password'],
  })

export type ResetPForm = z.infer<typeof ResetForm>
