"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import API from '@/config/apiClient'
import { Icons } from '@/constants/GoogleIcon'
import { Logo } from '@/constants/Logo'
import { ResetPasswordData, resetPasswordSchema } from '@/schemas/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'

const ResetPasswordForm = ({ code }: { code: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ResetPasswordData>({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(resetPasswordSchema),
  })

  const resetPasswordHandler = async (data: ResetPasswordData) => {
    await API.post(
      "/auth/password/reset",
      { verificationCode: code, password: data.password }
    )
  }
  const { mutate: resetUserPassword, isSuccess, isPending } = useMutation({
    mutationFn: resetPasswordHandler,
    onSuccess: () => console.log('reste onSuccess'),
  })

  const onSubmitHandler = (data: ResetPasswordData) => {
    try {
      resetUserPassword(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      {isSuccess
        ?
        <div className='flex flex-col justify-center items-center gap-4'>
          <p className="text-center text-xl">
            Password changed successfully !
          </p>
          <Button asChild className='bg-green-600'>
            <Link href={"/sign-in"}>
              Sign In
            </Link>
          </Button>
        </div>
        :
        <>
          <div className="space-y-2">
            <div className='mb-4'>
              <Logo />
            </div>
            <h1 className="text-2xl font-bold">
              Reset your Password
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Continue to change your password
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className='space-y-4'
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">New Password</Label>
                <Input
                  id="password"
                  type="text"
                  {...register('password')}
                />
                {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  {...register('confirmPassword')}
                />
                {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>}
              </div>
              <Button
                className="w-full"
                type="submit"
                disabled={isPending}
              >
                {isPending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                Change Password
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
        </>
      }
    </>
  )
}

export default ResetPasswordForm
