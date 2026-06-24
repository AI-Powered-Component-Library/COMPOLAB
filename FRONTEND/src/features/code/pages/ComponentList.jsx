import { useSelector } from 'react-redux'
import useCompo from '../hooks/useCompo'
import { useEffect, useState } from 'react'
import Navbar from '../../auth/components/Navbar'
import Sidebar from '../components/Sidebar'
import ComponentGuide from '../components/ComponentGuide'


const ComponentList = () => {

  const components = useSelector((state) => state.component.components)
  const { handleGetComponents } = useCompo()
  const [selected, setSelected] = useState(null)


  useEffect(() => { handleGetComponents() }, [])


  return (components &&
    <main className="h-full w-full bg-slate-950 text-slate-100">
      <Navbar />

      <div className="flex h-10/12 w-full">
        <Sidebar setSelected={setSelected} components={components} />
        <ComponentGuide component={selected || components[0]} />
      </div>
    </main>
  )
}

export default ComponentList
