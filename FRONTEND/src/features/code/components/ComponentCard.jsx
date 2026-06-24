const tagColors = [
  'bg-blue-500/15 text-blue-300 border-blue-500/25',
  'bg-purple-500/15 text-purple-300 border-purple-500/25',
  'bg-emerald-500/15 text-emerald-300 border-emerald-500/25',
  'bg-amber-500/15 text-amber-300 border-amber-500/25',
  'bg-pink-500/15 text-pink-300 border-pink-500/25',
]

const themeIcon = { light: '☀️', dark: '🌙', system: '💻' }

const ComponentCard = ({ component, onView, onEdit, onDelete, deleting }) => {
  const { _id, name, props , isPublic } = component

  return (
    <article className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg transition-all duration-200 hover:border-blue-500/30 hover:bg-white/8 hover:shadow-blue-500/10">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold text-white">{name}</h3>
          <div className="mt-1.5 flex flex-wrap items-center gap-2">

            {/* Public / Private */}
            <span
              className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                isPublic
                  ? 'border-emerald-500/25 bg-emerald-500/10 text-emerald-300'
                  : 'border-slate-500/25 bg-slate-500/10 text-slate-400'
              }`}
            >
              {isPublic ? '🌐 Public' : '🔒 Private'}
            </span>
          </div>
        </div>
      </div>

      {/* props */}
      {props.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {props.map((tag, i) => (
            <span
              key={tag}
              className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${tagColors[i % tagColors.length]}`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="mt-auto flex gap-2 pt-1">
        <button
          onClick={() => onView(_id)}
          className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-300 transition hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-300"
        >
          View
        </button>
        <button
          onClick={() => onEdit(_id)}
          className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-300 transition hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-300"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(_id)}
          disabled={deleting}
          className="rounded-xl border border-red-500/20 bg-red-500/10 px-3 py-2 text-xs font-semibold text-red-300 transition hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {deleting ? '...' : 'Delete'}
        </button>
      </div>
    </article>
  )
}

export default ComponentCard
