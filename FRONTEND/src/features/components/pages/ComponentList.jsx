import { useSelector } from 'react-redux'
import ComponentCard from '../ui/ComponentCard'
import { useNavigate } from 'react-router-dom'
import useCompo from '../hooks/useCompo'
import { useEffect } from 'react'


const ComponentList = () => {

  const components = useSelector((state) => state.compo.components)
  const navigate = useNavigate()
  const { handleGetComponents } = useCompo()

  useEffect(() => { handleGetComponents() }, [])


  return (components &&
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100">
      <section className="mx-auto max-w-5xl">

        {/* Page header */}
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Library</p>
            <h1 className="mt-2 text-3xl font-bold text-white">My Components</h1>

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


        {/* Grid */}
        <div className="mt-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {components.map((comp) => (<ComponentCard key={comp._id} component={comp} onView={(id) => navigate(`/c/${id}`)} onEdit={(id) => navigate(`/c/${id}/edit`)} onDelete={(id) => setConfirmId(id)} />))}
          </div>

        </div>
      </section>

    </main>
  )
}

export default ComponentList
