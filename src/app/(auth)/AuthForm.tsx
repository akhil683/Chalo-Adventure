"use client"

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from '@/constants/GoogleIcon'
import { loginSchema, signupSchema, LoginFormData, SignupFormData } from '@/schemas/auth'
import Link from 'next/link'
import { Logo } from '@/constants/Logo'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import API from '@/config/apiClient'

interface AuthFormProps {
  mode: 'login' | 'signup'
}

export function AuthForm({ mode }: AuthFormProps) {

  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData | SignupFormData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(mode === 'login'
      ? loginSchema
      : signupSchema
    ),
  })

  const loginHandler = async (data: LoginFormData | SignupFormData) => {
    await API.post("/auth/login", data)
  }
  const signUpHandler = async (data: LoginFormData | SignupFormData) => {
    await API.post("/auth/register", data)
  }

  const { mutate: auth, isPending, isError } = useMutation({
    mutationFn: mode === "signup" ? signUpHandler : loginHandler,
    onSuccess: () => router.replace("/"),
  })

  const onSubmitHandler = async (data: LoginFormData | SignupFormData) => {
    console.log("onsubmit")
    auth(data)
    try {
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className='mb-4'>
          <Logo />
        </div>
        <h1 className="text-2xl font-bold">
          {mode === "login"
            ? "Login to Your Account"
            : "Register Your Account"
          }
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          {mode === 'login'
            ? 'Continue your journey with Chalo Adventure'
            : 'Start your Adventure with Chalo Adventure'
          }
        </p>
      </div>
      <div className="space-y-4">

        {/* Google Sign In */}
        <Button variant="outline" disabled={isPending} className="w-full">
          <Icons.google className="mr-2 h-4 w-4" />
          {mode === 'login' ? 'Sign in' : 'Sign up'} with Google
        </Button>

        {/* OR Separator */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>
        {isError && <p className='text-red-600'>Invalid email or password</p>}
        {/* Authentication Form */}
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="space-y-4">
            {mode === 'signup' && (
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Akhil Palsra" {...register('name')} />
                {/* {errors.name && <p className="text-sm text-red-500">{errors?.name?.message}</p>} */}
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="akhil@chaloadventure.com" type="email" {...register('email')} />
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" {...register('password')} />
              {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            </div>
            {mode === 'signup' && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" type="password" {...register('confirmPassword')} />
                {/* {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>} */}
              </div>
            )}
            <div className='space-y-2'>
              <Link href={"/password/forgot"} className='text-sm text-green-600 fontsemi'>Forgot Password ?</Link>
            </div>
            <Button
              className="w-full"
              type="submit"
              disabled={isPending}
            >
              {isPending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
              {mode === 'login' ? 'Sign In' : 'Sign Up'}
            </Button>
          </div>
        </form>


        {/* Sign / Signin Link */}
        <p className="text-center text-sm text-gray-600">
          {mode === 'login'
            ? "Don't have an account? "
            : "Already have an account? "
          }
          {" "}
          <Link
            href={mode === 'login' ? '/sign-up' : '/sign-in'}
            className="text-green-600 hover:underline"
          >
            {mode === 'login'
              ? 'Sign up'
              : 'Sign in'
            }
          </Link>
        </p>

      </div>
    </div>
  )
}
