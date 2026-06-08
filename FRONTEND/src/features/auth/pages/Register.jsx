import { useEffect, useState } from 'react'
import AuthError from '../components/AuthError'
import AuthLayout from '../components/AuthLayout'
import FormInput from '../components/FormInput'
import SubmitButton from '../components/SubmitButton'
import { useAuth } from '../context/AuthContext'
import { validateRegisterForm } from '../utils/validation'

const initialForm = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const Register = ({ navigate }) => {
  const { register, authLoading, isAuthenticated, initializing } = useAuth()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [apiError, setApiError] = useState('')

  useEffect(() => {
    if (!initializing && isAuthenticated) navigate('/dashboard', true)
  }, [initializing, isAuthenticated, navigate])

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
    setApiError('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const validationErrors = validateRegisterForm(form)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) return

    try {
      await register({
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        password: form.password,
      })
      navigate('/dashboard', true)
    } catch (error) {
      setApiError(error.message || 'Registration failed')
    }
  }

  return (
    <AuthLayout title="Create account" subtitle="Register with your name, email and password.">
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <AuthError message={apiError} />

        <FormInput
          label="Name"
          name="name"
          type="text"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
          autoComplete="name"
        />

        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          autoComplete="email"
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          placeholder="Minimum 6 characters"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
          autoComplete="new-password"
        />

        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="Re-enter password"
          value={form.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          autoComplete="new-password"
        />

        <SubmitButton loading={authLoading}>Register</SubmitButton>
      </form>

      <p className="mt-6 text-center text-sm text-slate-400">
        Already have an account?{' '}
        <button className="font-semibold text-blue-300 hover:text-blue-200" onClick={() => navigate('/login')}>
          Login
        </button>
      </p>
    </AuthLayout>
  )
}

export default Register
