import { Button } from "@/components/ui/button"
import AuthPage from "../../auth"
import ResetPasswordForm from "./ResetPasswordForm"
import Link from "next/link"

interface PropsType {
  searchParams: Promise<{
    code: string,
    exp: string,
  }>
}

const ResetPasswordPage = async ({ searchParams }: PropsType) => {
  const { code, exp } = await searchParams // searchParams are string
  const now = Date.now()
  const isValidLink = code && exp && Number(exp) > now

  return (
    <AuthPage>
      <div className="space-y-6">
        {isValidLink
          ? <ResetPasswordForm code={code} />
          : <div className='flex flex-col justify-center items-center gap-4'>
            <p className="text-center text-xl">
              Invalid Link ! Please try again.
            </p>
            <Button asChild className='bg-green-600'>
              <Link href={"/password/forgot"}>
                Forgot Password
              </Link>
            </Button>
          </div>
        }
      </div>
    </AuthPage>
  )
}

export default ResetPasswordPage
