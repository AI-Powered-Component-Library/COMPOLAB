import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteComponent } from '../component.slice'
import componentService from '../service/component.service'
import { useParams, useNavigate } from "react-router-dom"
import Preview from './Preview'

const themeDisplay = { light: '☀️ Light', dark: '🌙 Dark', system: '💻 System' }

const tagColors = [
  'bg-blue-500/15 text-blue-300 border-blue-500/25',
  'bg-purple-500/15 text-purple-300 border-purple-500/25',
  'bg-emerald-500/15 text-emerald-300 border-emerald-500/25',
  'bg-amber-500/15 text-amber-300 border-amber-500/25',
  'bg-pink-500/15 text-pink-300 border-pink-500/25',
]

// ── Skeleton ──────────────────────────────────────────────────────────────────
const DetailSkeleton = () => (
  <div className="animate-pulse space-y-6">
    <div className="h-8 w-2/3 rounded-lg bg-white/10" />
    <div className="space-y-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex gap-4">
          <div className="h-4 w-24 rounded bg-white/10" />
          <div className="h-4 w-48 rounded bg-white/10" />
        </div>
      ))}
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

// ── Delete confirm dialog ─────────────────────────────────────────────────────
const ConfirmDialog = ({ name, onConfirm, onCancel, loading }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
    <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl">
      <h4 className="text-base font-semibold text-white">Delete Component?</h4>
      <p className="mt-2 text-sm text-slate-400">
        Are you sure you want to delete <span className="font-semibold text-white">"{name}"</span>?
        This action cannot be undone.
      </p>
      <div className="mt-6 flex gap-3">
        <button
          onClick={onCancel}
          disabled={loading}
          className="flex-1 rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-white/10 disabled:opacity-50"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          disabled={loading}
          className="flex-1 rounded-xl bg-red-500 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? 'Deleting...' : 'Delete'}
        </button>
      </div>
    </div>
  </div>
)

// ── Info Row ──────────────────────────────────────────────────────────────────
const InfoRow = ({ label, children }) => (
  <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
    <span className="w-32 shrink-0 text-sm font-medium text-slate-500">{label}</span>
    <span className="text-sm text-slate-200">{children}</span>
  </div>
)

// ── Main page ─────────────────────────────────────────────────────────────────




const ComponentDetail = () => {


const { cid } = useParams()
const navigate = useNavigate()

const componentId = cid



  const dispatch = useDispatch()

  const [component, setComponent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showConfirm, setShowConfirm] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)

  const fetchDetail = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await componentService.getById(componentId)
      setComponent(data)
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to load component')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDetail()
  }, [componentId])

  const handleDelete = async () => {
    setDeleteLoading(true)
    await dispatch(deleteComponent(componentId))
    setDeleteLoading(false)
    setShowConfirm(false)
    navigate('/c/list', true)
  }

  const formatDate = (iso) => {
    if (!iso) return '—'
    return new Date(iso).toLocaleDateString('en-IN', {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit',
    })
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100">
      <section className="mx-auto max-w-2xl">

        {/* Back */}
        <button
          onClick={() => navigate(`/c/list`)}
          className="mb-6 flex items-center gap-2 text-sm text-slate-400 transition hover:text-slate-200"
        >
          ← Back to Components
        </button>

        {/* Content */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl sm:p-8">

          {loading ? (
            <DetailSkeleton />
          ) : error ? (
            <ErrorState message={error} onRetry={fetchDetail} />
          ) : component ? (
            <>
              {/* Header */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Component</p>
                  <h1 className="mt-2 text-2xl font-bold text-white">{component.componentName}</h1>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => navigate(`/c/${componentId}/edit`)}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-300"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => setShowConfirm(true)}
                    className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2.5 text-sm font-semibold text-red-300 transition hover:bg-red-500/20"
                  >
                    🗑 Delete
                  </button>
                </div>
              </div>

              {/* Divider */}
              <hr className="my-6 border-white/10" />

              {/* Info grid */}
              <div className="space-y-4">
                <InfoRow label="Theme">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
                    {themeDisplay[component.theme] || component.theme}
                  </span>
                </InfoRow>

                <InfoRow label="Visibility">
                  <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${
                    component.isPublic
                      ? 'border-emerald-500/25 bg-emerald-500/10 text-emerald-300'
                      : 'border-slate-500/25 bg-slate-500/10 text-slate-400'
                  }`}>
                    {component.isPublic ? '🌐 Public' : '🔒 Private'}
                  </span>
                </InfoRow>

                <InfoRow label="Tags">
                  {component.tags?.length > 0 ? (
                    <div className="flex flex-wrap gap-1.5">
                      {component.tags.map((tag, i) => (
                        <span
                          key={tag}
                          className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${tagColors[i % tagColors.length]}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-slate-500 italic">No tags</span>
                  )}
                </InfoRow>

                <InfoRow label="Created">
                  {formatDate(component.createdAt)}
                </InfoRow>

                <InfoRow label="Updated">
                  {formatDate(component.updatedAt)}
                </InfoRow>

                <InfoRow label="ID">
                  <code className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-slate-400 select-all">
                    {component._id}
                  </code>
                </InfoRow>
              </div>
            </>
          ) : null}
        </div>
      </section>

      {component && component.code && (
        <section className="mx-auto max-w-2xl mt-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300 mb-4">Live Preview</h3>
            <Preview  />
          </div>
        </section>
      )}

      {/* Confirm dialog */}
      {showConfirm && (
        <ConfirmDialog
          name={component?.componentName}
          onConfirm={handleDelete}
          onCancel={() => setShowConfirm(false)}
          loading={deleteLoading}
        />
      )}
    </main>
  )
}

export default ComponentDetail
