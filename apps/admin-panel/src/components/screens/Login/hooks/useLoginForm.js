import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useLogin } from 'auth-service-hooks'
import { useAuth } from 'auth-context'

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required()
})

export default function useLoginForm() {
  const { execLogin, isLoading } = useLogin()
  const { startSession } = useAuth()

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(loginSchema)
  })

  const onSubmit = async (data) => {
    try {
      const response = await execLogin(data)
      startSession(response.accessToken)
    } catch (err) {
      toast(err.message, { type: 'error' })
    }
  }

  return {
    register,
    submitLogin: handleSubmit(onSubmit),
    isLoading,
    errors: formState.errors
  }
}
