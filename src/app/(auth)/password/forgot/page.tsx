"use client"

import React from 'react'
import AuthPage from '../../auth'
import { Logo } from '@/constants/Logo'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { ResetPasswordData, resetPasswordSchema } from '@/schemas/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import API from '@/config/apiClient'
import { Icons } from '@/constants/GoogleIcon'
import Link from 'next/link'

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ResetPasswordData>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(resetPasswordSchema),
  })

  const resetPasswordHandler = async (data: ResetPasswordData) => {
    const res = await API.post("/auth/password/forgot", data)
    console.log(res)
  }

  const { mutate: resetPassword, isPending, isSuccess, isError } = useMutation({
    mutationFn: resetPasswordHandler,
  })

  const onSubmitHandler = async (data: ResetPasswordData) => {
    resetPassword(data)
  }

  return (
    <AuthPage>
      <div className="space-y-6">
        <div className="space-y-2">
          <div className='mb-4'>
            <Logo />
          </div>
          <h1 className="text-2xl font-bold">
            Reset your password
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Continue your journey with Chalo Adventure
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="akhil@chaloadventure.com"
              {...register('email')}
            />
          </div>
          {isError &&
            <p className='text-red-600'>
              Invalid email
            </p>
          }
          {errors.email &&
            <p className="text-sm text-red-500">
              {errors.email.message}
            </p>
          }
          {isSuccess &&
            <p className="text-sm text-green-600">
              Email sent! Check your Inbox
            </p>
          }
          <Button
            className="w-full"
            type="submit"
            disabled={isPending}
          >
            {isPending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            Reset Password
          </Button>
        </div>
      </form>


      <p className="text-center text-sm text-gray-600">
        Don't have an account? {" "}
        <Link
          href={"/sign-up"}
          className="text-green-600 hover:underline"
        >
          Sign Up
        </Link>
      </p>
    </AuthPage>
  )
}

export default ResetPassword
