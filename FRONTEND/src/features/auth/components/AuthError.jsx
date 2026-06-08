const AuthError = ({ message }) => {
  if (!message) return null

  return (
    <div className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
      {message}
    </div>
  )
}

export default AuthError
