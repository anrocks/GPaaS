import { z } from 'zod'

export const RegisterForm = z
  .object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    email: z.string().email('Invalid email format'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    repeatpassword: z
      .string()
      .min(6, 'Repeat Password must be at least 6 characters'),
  })
  .refine((data) => data.repeatpassword === data.password, {
    message: "Passwords don't match",
    path: ['repeatpassword'],
  })

export type dRegisterForm = z.infer<typeof RegisterForm>
