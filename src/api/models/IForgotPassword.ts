import{z}from"zod"
export const ForgotPasswordForm = z.object({
    email: z.string().email("Invalid email format"),
  });
 export  type IForgotPasswordForm = z.infer<typeof ForgotPasswordForm>;