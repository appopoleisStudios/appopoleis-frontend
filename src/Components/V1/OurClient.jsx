import { CLIENT_LOGOS } from "../../Utils/data/clientLogos"

const OurClient = () => {
    return (
        <section className="py-8 md:py-16 px-4 md:px-8 lg:px-16 max-w-8xl w-full">
            <div className="mb-6 md:mb-12">
                <h2 className="text-3xl md:text-4xl font-bold inline-block">Our Clients</h2>
                <span className="inline-block w-3 h-3 bg-teal-400 ml-2"></span>
            </div>

            <div className="bg-gray-100 py-8 md:py-16 px-4 md:px-8 lg:px-16 rounded-lg">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16">
                    {CLIENT_LOGOS.map((client) => (
                        <div key={client.id} className="flex items-center justify-center">
                            <div className="h-8 sm:h-10 md:h-12 flex items-center justify-center">
                                <img
                                    src={client.logo || "/placeholder.svg"}
                                    alt={`${client.name} logo`}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurClient
