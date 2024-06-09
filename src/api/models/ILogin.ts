import { z } from 'zod'

export const LoginForm = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export type ILoginForm = z.infer<typeof LoginForm>
