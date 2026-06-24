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
        <div className='bg-black h-screen'>
            <Navbar />
            <h1 className="text-2xl  font-bold text-white">My Components</h1>

            <div className="mt-8">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {components.map((comp) => (<ComponentCard key={comp._id} component={comp} onView={(id) => navigate(`/c/${id}`)} onEdit={(id) => navigate(`/c/${id}/edit`)} onDelete={(id) => setConfirmId(id)} />))}
                </div>
            </div>
        </div>
    )
}

export default Profile