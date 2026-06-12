import { useEffect, useState } from 'react'
import AuthError from '../components/AuthError'
import AuthLayout from '../components/AuthLayout'
import FormInput from '../components/FormInput'
import SubmitButton from '../components/SubmitButton'
import { useAuth } from '../context/AuthContext'
import { validateLoginForm } from '../utils/validation'
import { useNavigate } from 'react-router-dom'

const initialForm = {
  email: '',
  password: '',
}

const Login = () => {
  const { login, authLoading, isAuthenticated, initializing } = useAuth()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [apiError, setApiError] = useState('')

  const navigate  = useNavigate()

  useEffect(() => {
    if (!initializing && isAuthenticated) navigate('/', true)
  }, [initializing, isAuthenticated, navigate])

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
    setApiError('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const validationErrors = validateLoginForm(form)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) return

    try {
      await login({
        email: form.email.trim().toLowerCase(),
        password: form.password,
      })
      navigate('/dashboard', true)
    } catch (error) {
      setApiError(error.message || 'Login failed')
    }
  }

  return (
    <AuthLayout title="Welcome back" subtitle="Login with your registered email and password.">
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <AuthError message={apiError} />

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
          placeholder="Enter password"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
          autoComplete="current-password"
        />

        <SubmitButton loading={authLoading}>Login</SubmitButton>
      </form>

      <p className="mt-6 text-center text-sm text-slate-400">
        New user?{' '}
        <button className="font-semibold text-blue-300 hover:text-blue-200" onClick={() => navigate('/register')}>
          Create account
        </button>
      </p>
    </AuthLayout>
  )
}

export default Login
