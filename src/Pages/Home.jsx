import React from 'react'
import { Link } from 'react-router-dom'
import QualityInformation from '../components/V1/QualityInformation'
import Procurenet from '../components/V1/Procurenet'
import ImpactStory from '../components/V1/ImpactStory'
import OurWork from '../components/V1/OurWork'
import DeliveryProcess from '../components/V1/DeliveryProcess'
import AgileApproch from '../components/V1/AgileApproch'

function Home() {
    return (
       <>
        <div className='flex flex-col items-center justify-center h-full'>
            <h1 className='text-red-700'>Home Page Coming Soon</h1>
            <QualityInformation />
            <DeliveryProcess />
            <Procurenet />
            <ImpactStory />
            <OurWork />
           
            {/* <Link to="/contact">Contact</Link> */}
        </div>
        <AgileApproch />
       </>
    )
}

export default Home
