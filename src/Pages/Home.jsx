import React from 'react'
import { Link } from 'react-router-dom'
import QualityInformation from '../Components/V1/QualityInformation'
import Procurenet from '../Components/V1/Procurenet'


function Home() {
    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <h1 className='text-red-700'>Home Page Coming Soon</h1>
            <QualityInformation />
            <Procurenet />
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default Home
