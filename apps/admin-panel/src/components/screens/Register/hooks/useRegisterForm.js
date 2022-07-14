import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRegister } from 'auth-service-hooks'

const registerSchema = Yup.object().shape({
  firstName: Yup.string().min(3).required(),
  lastName: Yup.string().min(3).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match')
})

export default function useLoginForm() {
  const { execRegister, isLoading } = useRegister()

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(registerSchema)
  })

  const onSubmit = async (data) => {
    const { _confirmPassword, ...payload } = data
    try {
      await execRegister(payload)
      toast('Successfully registered!', { type: 'success' })
    } catch (err) {
      toast(err.message, { type: 'error' })
    }
  }

  return {
    register,
    submitRegister: handleSubmit(onSubmit),
    isLoading,
    errors: formState.errors
  }
}
