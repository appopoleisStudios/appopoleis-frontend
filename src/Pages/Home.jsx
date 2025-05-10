import React from 'react'
import { Link } from 'react-router-dom'
import QualityInformation from '../components/V1/QualityInformation.jsx'
import Procurenet from '../components/V1/Procurenet.jsx'
import ImpactStory from '../components/V1/ImpactStory.jsx'
import OurWork from '../components/V1/OurWork.jsx'
import DeliveryProcess from '../components/V1/DeliveryProcess.jsx'



function Home() {
    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <h1 className='text-red-700'>Home Page Coming Soon</h1>
            <QualityInformation />
            <DeliveryProcess />
            <Procurenet />
            <ImpactStory />
            <OurWork />
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default Home
