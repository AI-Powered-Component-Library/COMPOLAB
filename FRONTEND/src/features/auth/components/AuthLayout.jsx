const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/40 backdrop-blur md:grid-cols-[1fr_1.1fr]">
          <div className="hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-10 md:flex md:flex-col md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-100">Auth Flow</p>
              <h1 className="mt-6 text-4xl font-bold leading-tight text-white">
                Secure frontend authentication with React
              </h1>
    
            </div>
            <div className="rounded-2xl bg-white/15 p-5 text-sm leading-6 text-white/90">
              Register, login, protected dashboard, persistent session and logout are connected with your class based backend API.
          </div>
        </div>
          <div className="p-6 sm:p-10">
            <div className="mx-auto max-w-md">
              <h2 className="text-3xl font-bold text-white">{title}</h2>
              <p className="mt-2 text-sm text-slate-400">{subtitle}</p>
              <div className="mt-8">{children}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AuthLayout
