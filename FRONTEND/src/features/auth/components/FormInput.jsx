const FormInput = ({ label, error, ...props }) => {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-200">{label}</span>
      <input
        className={`w-full rounded-xl border bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:ring-2 ${
          error
            ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20'
            : 'border-white/10 focus:border-blue-400 focus:ring-blue-400/20'
        }`}
        {...props}
      />
      {error ? <span className="mt-2 block text-sm text-red-300">{error}</span> : null}
    </label>
  )
}

export default FormInput
