import { useSelector } from 'react-redux'
import ComponentCard from '../components/ComponentCard'
import { useNavigate } from 'react-router-dom'
import useCompo from '../hooks/useCompo'
import { useEffect } from 'react'
import Navbar from '../../auth/components/Navbar'


const ComponentList = () => {

  const components = useSelector((state) => state.component.components)
  const navigate = useNavigate()
  const { handleGetComponents } = useCompo()

  useEffect(() => { handleGetComponents() }, [])

  console.log(components)

  return (components &&
    <main className="h-full bg-slate-950 text-slate-100">
      <Navbar />

      <Sidebar/>
      <div className=" scrollbar-none w-10/13 mx-auto overflow-auto h-[calc(100vh-5rem)] grid gap-5 py-4 grid-cols-1">
        {components.map((comp) => (<ComponentCard key={comp._id} component={comp} onView={(id) => navigate(`/c/${id}`)} />))}
      </div>

    </main>
  )
}

export default ComponentList
