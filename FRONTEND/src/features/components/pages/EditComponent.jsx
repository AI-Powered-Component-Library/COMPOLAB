import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateComponent } from '../component.slice'
import componentService from '../service/component.service'
import ComponentForm from '../ui/ComponentForm'
import { useNavigate, useParams } from 'react-router-dom'

// ── Skeleton ──────────────────────────────────────────────────────────────────
const FormSkeleton = () => (
  <div className="animate-pulse space-y-6">
    <div className="h-5 w-32 rounded bg-white/10" />
    <div className="h-12 w-full rounded-xl bg-white/10" />
    <div className="h-5 w-20 rounded bg-white/10" />
    <div className="flex gap-3">
      {[...Array(3)].map((_, i) => <div key={i} className="h-12 flex-1 rounded-xl bg-white/10" />)}
    </div>
    <div className="h-5 w-16 rounded bg-white/10" />
    <div className="h-12 w-full rounded-xl bg-white/10" />
    <div className="h-5 w-24 rounded bg-white/10" />
    <div className="h-12 w-full rounded-xl bg-white/10" />
    <div className="flex gap-3 pt-2">
      <div className="h-12 flex-1 rounded-xl bg-white/10" />
      <div className="h-12 flex-1 rounded-xl bg-white/10" />
    </div>
  </div>
)

// ── Error state ───────────────────────────────────────────────────────────────
const ErrorState = ({ message, onRetry }) => (
  <div className="flex flex-col items-center rounded-2xl border border-red-500/30 bg-red-500/10 px-6 py-12 text-center">
    <p className="text-3xl">⚠️</p>
    <p className="mt-3 text-sm text-red-300">{message}</p>
    <button
      onClick={onRetry}
      className="mt-5 rounded-xl border border-red-400/30 px-4 py-2 text-xs font-semibold text-red-300 transition hover:bg-red-500/20"
    >
      Retry
    </button>
  </div>
)

// ── Main page ─────────────────────────────────────────────────────────────────
const EditComponent = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { cid } = useParams()
const componentId = cid

  const [initialValues, setInitialValues] = useState(null)
  const [fetchLoading, setFetchLoading] = useState(true)
  const [fetchError, setFetchError] = useState(null)
  const [submitLoading, setSubmitLoading] = useState(false)
  const [apiError, setApiError] = useState('')

  const fetchComponent = async () => {
    setFetchLoading(true)
    setFetchError(null)
    try {
      const data = await componentService.getById(componentId)
      setInitialValues({
        componentName: data.componentName || '',
        theme: data.theme || 'light',
        tags: data.tags || [],
        isPublic: data.isPublic ?? true,
          code: data.code || '',
        
      })
    } catch (err) {
      setFetchError(err.response?.data?.message || err.message || 'Failed to load component')
    } finally {
      setFetchLoading(false)
    }
  }

  useEffect(() => {
    fetchComponent()
  }, [componentId])

  const handleSubmit = async (values) => {
    setSubmitLoading(true)
    setApiError('')
    try {
      const result = await dispatch(updateComponent({ id: componentId, data: values }))

      if (updateComponent.rejected.match(result)) {
        setApiError(result.payload || 'Something went wrong')
        return
      }

      // success → go to detail page
      navigate(`/c/${componentId}`, true)
    } finally {
      setSubmitLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100">
      <section className="mx-auto max-w-xl">

        {/* Back */}
        <button
          onClick={() => navigate(`/c/${componentId}`)}
          className="mb-6 flex items-center gap-2 text-sm text-slate-400 transition hover:text-slate-200"
        >
          ← Back to Details
        </button>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl sm:p-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">Edit</p>
            <h1 className="mt-2 text-2xl font-bold text-white">Update Component</h1>
            <p className="mt-1 text-sm text-slate-400">
              Modify the fields below and save your changes.
            </p>
          </div>

          {fetchLoading ? (
            <FormSkeleton />
          ) : fetchError ? (
            <ErrorState message={fetchError} onRetry={fetchComponent} />
          ) : (
            <ComponentForm
              initialValues={initialValues}
              onSubmit={handleSubmit}
              submitLabel="Save Changes"
              loading={submitLoading}
              apiError={apiError}
              onCancel={() => navigate(`/c/${componentId}`)}
            />
          )}
        </div>
      </section>
    </main>
  )
}

export default EditComponent
