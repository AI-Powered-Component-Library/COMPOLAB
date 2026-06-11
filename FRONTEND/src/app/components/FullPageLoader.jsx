const FullPageLoader = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-100">
      <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-6 text-center shadow-xl">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-blue-400" />
        <p className="mt-4 text-sm text-slate-300">Checking authentication...</p>
      </div>
    </main>
  )
}

export default FullPageLoader
