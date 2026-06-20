import { useSelector } from 'react-redux'
import ComponentCard from '../../code/components/ComponentCard'
import { useNavigate } from 'react-router-dom'
import useCompo from '../../code/hooks/useCompo'
import { useEffect } from 'react'


const Profile = () => {


    const components = useSelector((state) => state.component.components)
    const navigate = useNavigate()
    const { handleGetSavedComponents } = useCompo()

    useEffect(() => {
        handleGetSavedComponents()
    }, [])

    return (
        <div className='bg-black h-screen'>
            <h1 className="text-2xl  font-bold text-white">My Components</h1>
            <section className="mx-auto max-w-5xl">

                {/* Page header */}
                <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <button
                        onClick={() => navigate('/c/create')}
                        className="rounded-xl bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
                    >
                        Generate
                    </button>

                </header>


                {/* Grid */}
                <div className="mt-8">
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {components.map((comp) => (<ComponentCard key={comp._id} component={comp} onView={(id) => navigate(`/c/${id}`)} onEdit={(id) => navigate(`/c/${id}/edit`)} onDelete={(id) => setConfirmId(id)} />))}
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Profile