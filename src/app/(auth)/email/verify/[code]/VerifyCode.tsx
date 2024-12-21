'use client'
import API from "@/config/apiClient"
import { Icons } from "@/constants/GoogleIcon"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"

const VerifyCode = ({ code }: { code: string }) => {

  const verifyEmail = async (verificationCode: string) => {
    const res = API.get(`/auth/email/verify/${verificationCode}`)
    return res
  }

  const { isPending, isSuccess, isError } = useQuery({
    queryKey: ["emailVerification", code],
    queryFn: () => verifyEmail(code)
  })

  return (
    <>
      {isPending
        ? <Icons.spinner className="md:mt-12 mt-8 h-8 w-8 animate-spin" />
        :
        <div>
          <p className='text-lg text-center'>
            {isSuccess && "Email is now Verified"}
            {isError && "The link is either invalid or expired"}
          </p>
          <div className="flex flex-col mt-4 justify-center items-center">
            <Link href={"/password/forgot"} className="text-blue-600 text-xl">Try Again</Link>
            <Link href={"/"} className="text-blue-600 text-xl">Back to Home</Link>
          </div>
        </div>
      }
    </>
  )
}

export default VerifyCode
