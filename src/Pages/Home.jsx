import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <div>
            <h1 className='text-red-700'>Home Page</h1>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default Home
