import { useAuth } from '../../features/auth/context/AuthContext'

const Dashboard = ({ navigate }) => {
  const { user, logout, authLoading } = useAuth()

  const handleLogout = async () => {
    await logout()
    navigate('/login', true)
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100">
      <section className="mx-auto max-w-5xl">
        <header className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Protected Route</p>
            <h1 className="mt-3 text-3xl font-bold text-white">Dashboard</h1>
            <p className="mt-2 text-slate-400">You can see this page only after login.</p>
          </div>
          <button
            onClick={handleLogout}
            disabled={authLoading}
            className="rounded-xl bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-400 disabled:cursor-not-allowed disabled:bg-red-500/60"
          >
            {authLoading ? 'Logging out...' : 'Logout'}
          </button>
        </header>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">User Session</h2>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <p><span className="text-slate-500">Name:</span> {user?.name}</p>
              <p><span className="text-slate-500">Email:</span> {user?.email}</p>
              <p><span className="text-slate-500">Role:</span> {user?.role || 'user'}</p>
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">Implemented Flow</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>✅ Register and login API connected</li>
              <li>✅ Token stored after auth success</li>
              <li>✅ Session persists after refresh</li>
              <li>✅ Dashboard is protected</li>
              <li>✅ Logout clears token and user state</li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  )
}

export default Dashboard
