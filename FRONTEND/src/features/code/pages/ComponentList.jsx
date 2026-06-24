import { useSelector } from 'react-redux'
import ComponentCard from '../components/ComponentCard'
import { useNavigate } from 'react-router-dom'
import useCompo from '../hooks/useCompo'
import { useEffect } from 'react'


const ComponentList = () => {

  const components = useSelector((state) => state.component.components)
  const navigate = useNavigate()
  const { handleGetComponents } = useCompo()

  useEffect(() => { handleGetComponents() }, [])

  console.log(components)

  return (components &&
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100">
      <section className="mx-auto max-w-5xl">

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
