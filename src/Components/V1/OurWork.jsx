import { Link } from "react-router-dom"
import { PROJECTS } from "../../Utils/data/ourWorkData"
import ourworkimageone from "../../assets/Images/Home/ourworkone.png"
import ourworkimagetwo from "../../assets/Images/Home/ourworktwo.png"
import ourworkimagethree from "../../assets/Images/Home/ourworkthree.png"
import DotComponent from "./Dot"

const OurWork = () => {

    const IMAGES = [
        ourworkimageone,
        ourworkimagetwo,
        ourworkimagethree
    ]

    return (
        <div className="container mx-auto px-4 py-12 max-w-8xl">
            <div className="mb-12">
                <h2 className="text-4xl font-bold inline-block">Work</h2>
              <DotComponent />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project, index) => (
                    <div key={project.id} className="flex flex-col h-full">
                        <div className="h-60 overflow-hidden mb-4">
                            <img
                                src={IMAGES[index]}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                        <div className="h-1 w-12 bg-cyan-400 mb-3"></div>
                        <div className="flex flex-col flex-grow">
                            <p className="mb-1">
                                {project.description} {project.poweredBy && <span className="font-medium">{project.poweredBy}</span>}
                            </p>
                            <div className="mt-auto pt-4">
                                <Link
                                    to={project.caseStudyLink}
                                    className="text-black font-medium inline-block border-b border-black hover:border-cyan-400 hover:text-cyan-600 transition-colors"
                                >
                                    Case study
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-end mt-10">
                <a href="#" className="text-cyan-500 font-medium flex items-center group hover:text-cyan-600 transition-colors">
                    View Complete Portfolio
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default OurWork
