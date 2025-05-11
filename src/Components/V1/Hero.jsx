import React from 'react'
import DotComponent from './Dot'
import hero from '../../assets/Images/Home/hero.webp'
function Hero() {
    return (
        <div className='relative w-full h-[70vh] md:h-[40vh] lg:h-screen lg:text-white '>
            <img src={hero} alt="hero-img" className='absolute w-full h-full object-cover -z-10 hidden lg:block' />

            <div className='container w-full px-6 lg:px-10 absolute lg:bottom-20'>
                <h2 className="text-left section-heading text-3xl md:text-4xl font-semibold mb-4  leading-tight">
                    Amplifying operational excellence through Agile Software Development
                    {/* <DotComponent /> */}
                </h2>
                <p className="lg:w-3xl text-xl text-text-secondary">
                    We engineer purpose-driven, customer centric outcomes for a global clientele of startups and enterprises, empowering them to grow into true-technology enabled leaders.
                </p>

                <button className='bg-[#23c1cb] text-lg px-10 py-2 font-medium mt-4 text-white'>
                    Connect With Us
                </button>
            </div>
        </div>
    )
}

export default Hero