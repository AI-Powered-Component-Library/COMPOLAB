import { Editor } from '@monaco-editor/react'
import { useState, useEffect } from 'react'

// ── Tag Input ─────────────────────────────────────────────────────────────────
const TagInput = ({ tags, onChange }) => {
  const [input, setInput] = useState('')

  const addTag = (raw) => {
    const tag = raw.trim().toLowerCase()
    if (!tag || tags.includes(tag) || tags.length >= 10) return
    onChange([...tags, tag])
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault()
      addTag(input)
      setInput('')
    }
    if (e.key === 'Backspace' && !input && tags.length) {
      onChange(tags.slice(0, -1))
    }
  }

  const removeTag = (index) => onChange(tags.filter((_, i) => i !== index))

  return (
    <div>
      <div className="flex flex-wrap gap-2 rounded-xl border border-white/10 bg-slate-900/70 p-3 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-400/20 transition">
        {tags.map((tag, i) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/15 border border-blue-500/25 px-2.5 py-0.5 text-xs font-medium text-blue-300"
          >
            {tag}
            <button
              type="button"
              onClick={() => removeTag(i)}
              className="text-blue-400 hover:text-white transition leading-none"
            >
              ×
            </button>
          </span>
        ))}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={() => { if (input.trim()) { addTag(input); setInput('') } }}
          placeholder={tags.length >= 10 ? 'Max 10 tags' : 'Add tag, press Enter…'}
          disabled={tags.length >= 10}
          className="flex-1 min-w-[120px] bg-transparent text-sm text-white outline-none placeholder:text-slate-500 disabled:cursor-not-allowed"
        />
      </div>
      <p className="mt-1.5 text-xs text-slate-500">{tags.length}/10 tags · Press Enter or comma to add</p>
    </div>
  )
}

// ── Theme Selector ────────────────────────────────────────────────────────────
const themes = [
  { value: 'light', label: 'Light', icon: '☀️' },
  { value: 'dark', label: 'Dark', icon: '🌙' },
  { value: 'system', label: 'System', icon: '💻' },
]

const ThemeSelector = ({ value, onChange }) => (
  <div className="flex gap-3">
    {themes.map((t) => (
      <label
        key={t.value}
        className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border py-3 text-sm font-medium transition ${value === t.value
          ? 'border-blue-500/50 bg-blue-500/15 text-blue-300'
          : 'border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-slate-300'
          }`}
      >
        <input
          type="radio"
          name="theme"
          value={t.value}
          checked={value === t.value}
          onChange={() => onChange(t.value)}
          className="sr-only"
        />
        <span>{t.icon}</span>
        <span>{t.label}</span>
      </label>
    ))}
  </div>
)

// ── Field wrapper ─────────────────────────────────────────────────────────────
const Field = ({ label, hint, error, children }) => (
  <div>
    <label className="mb-1.5 block text-sm font-medium text-slate-200">{label}</label>
    {hint && <p className="mb-2 text-xs text-slate-500">{hint}</p>}
    {children}
    {error && <p className="mt-1.5 text-sm text-red-300">{error}</p>}
  </div>
)

// ── Main Form ─────────────────────────────────────────────────────────────────
const DEFAULT = {
  componentName: '',
  theme: 'light',
  tags: [],
  isPublic: true,
  code: ""
}

const ComponentForm = ({
  initialValues = DEFAULT,
  onSubmit,
  submitLabel = 'Save',
  loading = false,
  apiError = '',
  onCancel,
}) => {
  const [form, setForm] = useState({ ...DEFAULT, ...initialValues })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    setForm({ ...DEFAULT, ...initialValues })
  }, [initialValues])

  // ── Validation ────────────────────────────────────────────────────────────
  const validate = () => {
    const e = {}
    if (!form.componentName.trim()) e.componentName = 'Component name is required'
    else if (form.componentName.trim().length < 2) e.componentName = 'Name must be at least 2 characters'
    else if (form.componentName.trim().length > 100) e.componentName = 'Name cannot exceed 100 characters'
    return e
  }

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }


    console.log("FORM DATA:", form)


    onSubmit({
      componentName: form.componentName.trim(),
      theme: form.theme,
      tags: form.tags,
      isPublic: form.isPublic,
      code: form.code,
    })
  }

  function handleEditorChange(value, event) {
    handleChange('code', value)
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* API error */}
      {apiError && (
        <div className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {apiError}
        </div>
      )}

      <Field label="Code Editor *" error={errors.componentName}>
        <Editor
          height="50vh"
          theme='vs-dark'
          defaultLanguage="javascript"
          value={form.code}
          onChange={handleEditorChange}
        />
      </Field>

      {/* Component Name */}
      <Field label="Component Name *" error={errors.componentName}>
        <input
          type="text"
          value={form.componentName}
          onChange={(e) => handleChange('componentName', e.target.value)}
          placeholder="e.g. PricingCard"
          maxLength={100}
          className={`w-full rounded-xl border bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:ring-2 ${errors.componentName
            ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20'
            : 'border-white/10 focus:border-blue-400 focus:ring-blue-400/20'
            }`}
        />
        <p className="mt-1 text-right text-xs text-slate-500">{form.componentName.length}/100</p>
      </Field>

      {/* Theme */}
      <Field label="Theme">
        <ThemeSelector value={form.theme} onChange={(v) => handleChange('theme', v)} />
      </Field>

      {/* Tags */}
      <Field label="Tags" hint="Optional — helps you categorize and search components">
        <TagInput tags={form.tags} onChange={(t) => handleChange('tags', t)} />
      </Field>

      {/* Visibility */}
      <Field label="Visibility">
        <button
          type="button"
          onClick={() => handleChange('isPublic', !form.isPublic)}
          className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-sm transition ${form.isPublic
            ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
            : 'border-white/10 bg-white/5 text-slate-400'
            }`}
        >
          <div className="flex items-center gap-2">
            <span>{form.isPublic ? '🌐' : '🔒'}</span>
            <span className="font-medium">{form.isPublic ? 'Public' : 'Private'}</span>
            <span className="text-xs opacity-70">
              {form.isPublic ? '— visible to everyone' : '— only you can see this'}
            </span>
          </div>
          {/* Toggle pill */}
          <div className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${form.isPublic ? 'bg-emerald-500' : 'bg-slate-700'}`}>
            <div className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${form.isPublic ? 'translate-x-5' : 'translate-x-0.5'}`} />
          </div>
        </button>
      </Field>

      {/* Actions */}
      <div className="flex gap-3 pt-2">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="flex-1 rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/10 disabled:opacity-50"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          disabled={loading}
          className="flex-1 rounded-xl bg-blue-500 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:bg-blue-500/60"
        >
          {loading ? 'Please wait...' : submitLabel}
        </button>
      </div>
    </form>
  )
}

export default ComponentForm
