import * as z from 'zod'

const email = z.string().email({ message: "Invalid email address" })
const password = z.string().min(8, { message: "Password must be at least 8 characters long" })

export const loginSchema = z.object({ email, password })

export const signupSchema = z.object({
  email,
  password,
  confirmPassword: password,
  name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export const resetPasswordSchema = z.object({
  email
})

export type LoginFormData = z.infer<typeof loginSchema>
export type SignupFormData = z.infer<typeof signupSchema>
export type ResetPasswordData = z.infer<typeof resetPasswordSchema>

