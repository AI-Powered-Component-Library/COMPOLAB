import React from 'react'
import ComponentList from '../../code/pages/ComponentList'

const Profile = () => {
    return (
        <div className='bg-black'>
            <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Library</p>
                <h1 className="mt-2 text-3xl font-bold text-white">My Components</h1>
            </div>
            <ComponentList />
        </div>
    )
}

export default Profile