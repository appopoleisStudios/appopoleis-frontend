import React, { useEffect, useState } from 'react'
import DotComponent from './Dot'
import { Link } from 'react-router-dom'
import { MoveRight } from 'lucide-react'
import { services } from '../../Utils/data/services'

function Services() {
    const [activeTab, setActiveTab] = useState("consultancy")
    const [service, setService] = useState(services?.consultancy);

    useEffect(() => {
        if (activeTab === "consultancy") {
            setService(services?.consultancy);
        } else if (activeTab === "design") {
            setService(services?.design);
        } else if (activeTab === "development") {
            setService(services?.development);
        } else if (activeTab === "growth") {
            setService(services?.growth);
        } else {
            alert("error");
        }
    }, [activeTab]);

    return (
        <div className='container mx-auto px-4 py-12 max-w-8xl grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-20'>
            <div className='text-center lg:text-left'>
                <h2 className="section-heading text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    What We Deliver
                    <DotComponent />
                </h2>
                <p className="text-[color:var(--text-secondary)] text-lg">
                We catalyze innovation by blending deep industry knowledge, advanced technologies, elite talent, and proven digital transformation frameworks to create value tailored to your unique goals.
                </p>
            </div>
            <div className='bg-[#f3f4f5] p-8 rounded-md w-full col-span-2'>
                <div className='flex items-center justify-between overflow-x-scroll md:overflow-auto gap-6'>
                    <button
                        onClick={() => setActiveTab("consultancy")}
                        className={`cursor-pointer text-lg font-medium pb-2 border-b-4 ${activeTab === "consultancy" ? "border-[#23c1cb]" : "border-transparent"}`}
                    >
                        Consultancy
                    </button>
                    <button
                        onClick={() => setActiveTab("design")}
                        className={`cursor-pointer text-lg font-medium pb-2 border-b-4 ${activeTab === "design" ? "border-[#23c1cb]" : "border-transparent"}`}
                    >
                        Design
                    </button>
                    <button
                        onClick={() => setActiveTab("development")}
                        className={`cursor-pointer text-lg font-medium pb-2 border-b-4 ${activeTab === "development" ? "border-[#23c1cb]" : "border-transparent"}`}
                    >
                        Development
                    </button>
                    <button
                        onClick={() => setActiveTab("growth")}
                        className={`cursor-pointer text-lg font-medium pb-2 border-b-4 ${activeTab === "growth" ? "border-[#23c1cb]" : "border-transparent"}`}
                    >
                        Growth
                    </button>
                </div>
                <div className='py-8'>
                    <p className="text-[color:var(--text-secondary)]">
                        {service?.content}
                    </p>
                </div>
                <hr />
                <div className='py-6 grid grid-cols-1 md:grid-cols-2 gap-y-4'>
                    {service?.links?.map((item, index) => (
                        <div
                            className='flex items-center gap-2 text-[color:var(--text-secondary)] font-semibold transition-colors ease-in-out hover:text-[#23c1cb] duration-150 cursor-pointer'
                            key={index}
                        >
                            <Link to={item.url}>{item.name}</Link>
                            <MoveRight />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
