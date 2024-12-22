import React from 'react'
import VerifyCode from './VerifyCode'

interface PropsType {
  params: Promise<{
    code: string
  }>
}
const VerifyEmail = async ({ params }: PropsType) => {
  const { code } = await params

  return (
    <section className='mt-12 flex justify-center items-center'>
      <VerifyCode code={code} />
    </section>
  )
}

export default VerifyEmail

