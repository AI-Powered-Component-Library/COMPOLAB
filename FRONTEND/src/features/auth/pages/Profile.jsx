import { useSelector } from 'react-redux'
import ComponentCard from '../../code/components/ComponentCard'
import { useNavigate } from 'react-router-dom'
import useCompo from '../../code/hooks/useCompo'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'


const Profile = () => {


    const components = useSelector((state) => state.component.components)
    const navigate = useNavigate()
    const { handleGetSavedComponents } = useCompo()

    useEffect(() => {
        handleGetSavedComponents()
    }, [])

    return (
        <div className='bg-black h-screen '>
            <Navbar />

            <div className=" h-10/13  w-10/13   mx-auto">

                <h1 className="text-xl mb-6 mt-4 font-bold text-white">Saved Components</h1>
                <div className="scrollbar-none overflow-y-scroll mx-auto h-full w-full grid gap-5  grid-cols-1">
                    {components.map((comp) => (<ComponentCard key={comp._id} component={comp} onView={(id) => navigate(`/c/${id}`)} onEdit={(id) => navigate(`/c/${id}/edit`)} onDelete={(id) => setConfirmId(id)} />))}
                </div>
            </div>
        </div>
    )
}

export default Profile