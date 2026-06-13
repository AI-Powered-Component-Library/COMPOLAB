import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createComponent } from '../component.slice'
import ComponentForm from '../ui/ComponentForm'
import { useNavigate } from 'react-router-dom'

const CreateComponent = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (values) => {

    console.log(values)
    // return
    setLoading(true)
    setApiError('')
    try {
      const result = await dispatch(createComponent(values))

      // createAsyncThunk rejects return a rejected action — check for it
      if (createComponent.rejected.match(result)) {
        setApiError(result.payload || 'Something went wrong')
        return
      }

      // success → go to list
      navigate('/components', true)
    } finally {
      setLoading(false)
    }
  }


  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100">
      <section className="mx-auto max-w-xl">

        {/* Page header */}
        <button
          onClick={() => navigate('/components')}
          className="mb-6 flex items-center gap-2 text-sm text-slate-400 transition hover:text-slate-200"
        >
          ← Back to Components
        </button>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl sm:p-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">New</p>
            <h1 className="mt-2 text-2xl font-bold text-white">Create Component</h1>
            <p className="mt-1 text-sm text-slate-400">
              Fill in the details below. You can always edit them later.
            </p>
          </div>

          <ComponentForm
            onSubmit={handleSubmit}
            submitLabel="Create Component"
            loading={loading}
            apiError={apiError}
            onCancel={() => navigate('/')}
          />
        </div>
      </section>
    </main>
  )
}

export default CreateComponent
