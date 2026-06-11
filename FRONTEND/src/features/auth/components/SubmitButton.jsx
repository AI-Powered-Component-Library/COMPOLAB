const SubmitButton = ({ loading, children }) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:bg-blue-500/60"
    >
      {loading ? 'Please wait...' : children}
    </button>
  )
}

export default SubmitButton
