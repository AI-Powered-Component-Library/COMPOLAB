import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllComponents, deleteComponent } from '../component.slice'
import ComponentCard from '../ui/ComponentCard'
import { useNavigate } from 'react-router-dom'

// ── Empty state ───────────────────────────────────────────────────────────────
const EmptyState = ({ onCreate }) => (
  <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/3 px-6 py-16 text-center">
    <div className="text-5xl">🧩</div>
    <h3 className="mt-4 text-lg font-semibold text-white">No components yet</h3>
    <p className="mt-2 text-sm text-slate-400">Get started by creating your first component.</p>
    <button
      onClick={onCreate}
      className="mt-6 rounded-xl bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
    >
      + Create Component
    </button>
  </div>
)

// ── Error state ───────────────────────────────────────────────────────────────
const ErrorBanner = ({ message, onRetry }) => (
  <div className="flex items-center justify-between rounded-2xl border border-red-500/30 bg-red-500/10 px-5 py-4">
    <p className="text-sm text-red-300">{message}</p>
    <button
      onClick={onRetry}
      className="ml-4 shrink-0 rounded-lg border border-red-400/30 px-3 py-1.5 text-xs font-semibold text-red-300 transition hover:bg-red-500/20"
    >
      Retry
    </button>
  </div>
)

// ── Skeleton card ─────────────────────────────────────────────────────────────
const SkeletonCard = () => (
  <div className="animate-pulse rounded-2xl border border-white/10 bg-white/5 p-5">
    <div className="h-4 w-2/3 rounded bg-white/10" />
    <div className="mt-3 flex gap-2">
      <div className="h-5 w-16 rounded-full bg-white/10" />
      <div className="h-5 w-14 rounded-full bg-white/10" />
    </div>
    <div className="mt-4 flex gap-2">
      <div className="h-7 flex-1 rounded-xl bg-white/10" />
      <div className="h-7 flex-1 rounded-xl bg-white/10" />
      <div className="h-7 w-16 rounded-xl bg-white/10" />
    </div>
  </div>
)

// ── Confirm dialog ────────────────────────────────────────────────────────────
const ConfirmDialog = ({ name, onConfirm, onCancel, loading }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
    <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl">
      <h4 className="text-base font-semibold text-white">Delete Component?</h4>
      <p className="mt-2 text-sm text-slate-400">
        Are you sure you want to delete <span className="font-semibold text-white">"{name}"</span>? This action cannot be undone.
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

// ── Main page ─────────────────────────────────────────────────────────────────
const ComponentList = () => {
  const dispatch = useDispatch()
  const { components, loading, error } = useSelector((state) => state.component)

  // which component is pending delete confirmation
  const [confirmId, setConfirmId] = useState(null)
  const [deleteLoading, setDeleteLoading] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchAllComponents())
  }, [dispatch])

  const handleDelete = async () => {
    setDeleteLoading(true)
    await dispatch(deleteComponent(confirmId))
    setDeleteLoading(false)
    setConfirmId(null)
  }

  const pendingDelete = components.find((c) => c._id === confirmId)

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100">
      <section className="mx-auto max-w-5xl">

        {/* Page header */}
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Library</p>
            <h1 className="mt-2 text-3xl font-bold text-white">My Components</h1>
            <p className="mt-1 text-sm text-slate-400">
              {loading ? 'Loading...' : `${components.length} component${components.length !== 1 ? 's' : ''}`}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/')}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-white/10"
            >
              ← Dashboard
            </button>
            <button
              onClick={() => navigate('/c/create')}
              className="rounded-xl bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
            >
              + Create
            </button>
          </div>
        </header>

        {/* Error banner */}
        {error && (
          <div className="mt-6">
            <ErrorBanner message={error} onRetry={() => dispatch(fetchAllComponents())} />
          </div>
        )}

        {/* Grid */}
        <div className="mt-8">
          {loading ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => <SkeletonCard key={i} />)}
            </div>
          ) : components.length === 0 ? (
            <EmptyState onCreate={() => navigate('/c/create')} />
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {components.map((comp) => (
                <ComponentCard
                  key={comp._id}
                  component={comp}
                  onView={(id) => navigate(`/c/${id}`)}
                  onEdit={(id) => navigate(`/c/${id}/edit`)}
                  onDelete={(id) => setConfirmId(id)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Confirm delete dialog */}
      {confirmId && (
        <ConfirmDialog
          name={pendingDelete?.componentName}
          onConfirm={handleDelete}
          onCancel={() => setConfirmId(null)}
          loading={deleteLoading}
        />
      )}
    </main>
  )
}

export default ComponentList
