"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Logo } from "@/constants/Logo"
import AuthPage from "../../auth"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import API from "@/config/apiClient"

interface PropsType {
  searchParams: Promise<{
    code: string,
    exp: string,
  }>
}

const ResetPasswordPage = async ({ searchParams }: PropsType) => {
  const { code, exp } = await searchParams
  const router = useRouter()

  const resetPasswordHandler = async () => {
    await API.post("/auth/password/reset")
  }
  const { mutate: resetPassword, isError, isPending } = useMutation({
    mutationFn: resetPasswordHandler,
    onSuccess: () => router.replace("/sign-in")
  })

  return (
    <AuthPage>
      <div className="space-y-6">
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

        <div className="space-y-4">
          {/* Authentication Form */}
          <form
          // onSubmit={handleSubmit(onSubmitHandler)}
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">New Password</Label>
                <Input
                  id="password"
                  type="email"
                />
                {/* {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>} */}
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                />
                {/* {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>} */}
              </div>
              <Button
                className="w-full"
                type="submit"
              // disabled={isPending}
              >
                {/* {isPending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />} */}
                Change Password
              </Button>
            </div>
          </form>
        </div>
      </div>
    </AuthPage>
  )
}

export default ResetPasswordPage
