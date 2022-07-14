/* eslint-disable react/jsx-props-no-spreading */
import { Link } from 'react-router-dom'
import { Button, TextInput } from 'ui'
import useAuthRoute from '../../../hooks/useAuthRoute'
import DefaultLayout from '../../layouts/DefaultLayout'
import useLoginForm from './hooks/useLoginForm'

export default function Login() {
  const { submitLogin, register, errors } = useLoginForm()
  useAuthRoute({ isPublicOnly: true })

  return (
    <DefaultLayout>
      <div className="flex-1 flex flex-col w-full justify-center items-center">
        <form
          className="w-[28rem] mx-auto p-4 bg-white rounded-lg shadow-lg flex flex-col gap-4"
          onSubmit={submitLogin}
        >
          <h3 className="text-xl text-center font-bold text-primary-500">
            Inicia sesión
          </h3>
          <TextInput
            label="Email"
            {...register('email')}
            errorMessage={errors?.email?.message}
          />
          <TextInput
            label="Password"
            {...register('password')}
            errorMessage={errors?.password?.message}
            type="password"
          />
          <Button type="submit" fullwidth>
            Iniciar sesión
          </Button>
          <Link to="/register" className="text-center cursor-pointer text-sm text-primary-500 hover:text-primary-600 transition duration-150">
            ¿No tienes cuenta? Regístrate
          </Link>
        </form>
      </div>
    </DefaultLayout>
  )
}
