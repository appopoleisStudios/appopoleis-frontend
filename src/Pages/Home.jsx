import QualityInformation from '../Components/V1/QualityInformation'
import Procurenet from '../Components/V1/Procurenet'
import ImpactStory from '../Components/V1/ImpactStory'
import OurClient from '../Components/V1/OurClient'
import OurWork from '../components/V1/OurWork'
import DeliveryProcess from '../components/V1/DeliveryProcess'
import AgileApproch from '../components/V1/AgileApproch'
import OurImpact from '../Components/V1/OurImpact'

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
                <OurClient />
                <OurImpact />
                {/* <Link to="/contact">Contact</Link> */}
            </div>
            <AgileApproch />
        </>
    )
}

export default Home
