import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-red-700'>Home Page Coming Soon</h1>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default Home
