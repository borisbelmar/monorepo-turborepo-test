/* eslint-disable react/jsx-props-no-spreading */
import { Link } from 'react-router-dom'
import { Button, TextInput } from 'ui'
import useAuthRoute from '../../../hooks/useAuthRoute'
import DefaultLayout from '../../layouts/DefaultLayout'
import useRegisterForm from './hooks/useRegisterForm'

export default function Register() {
  const {
    register,
    submitRegister,
    errors
  } = useRegisterForm()
  useAuthRoute({ isPublicOnly: true })
  return (
    <DefaultLayout>
      <div className="flex-1 flex flex-col w-full justify-center items-center">
        <form
          className="w-[28rem] mx-auto p-4 bg-white rounded-lg shadow-lg flex flex-col gap-4"
          onSubmit={submitRegister}
        >
          <h3 className="text-xl text-center font-bold text-primary-500">
            Regístrate
          </h3>
          <TextInput
            label="Nombre"
            {...register('firstName')}
            errorMessage={errors?.firstName?.message}
          />
          <TextInput
            label="Apellido"
            {...register('lastName')}
            errorMessage={errors?.lastName?.message}
          />
          <TextInput
            label="Email"
            {...register('email')}
            errorMessage={errors?.email?.message}
          />
          <TextInput
            label="Password"
            {...register('password')}
            type="password"
            errorMessage={errors?.password?.message}
          />
          <TextInput
            label="Confirm Password"
            {...register('confirmPassword')}
            type="password"
            errorMessage={errors?.confirmPassword?.message}
          />
          <Button type="submit" fullwidth>
            Registrarme
          </Button>
          <Link to="/login" className="text-center cursor-pointer text-sm text-primary-500 hover:text-primary-600 transition duration-150">
            ¿Ya tienes cuenta? Inicia sesión
          </Link>
        </form>
      </div>
    </DefaultLayout>
  )
}
