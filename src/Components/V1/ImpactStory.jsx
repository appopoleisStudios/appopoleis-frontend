import { Link } from "react-router-dom";
import { IMPACT_STORY_DATA } from "../../Utils/data/impactStory";
import ImpactStoryImage from "../../assets/Images/Home/impactstory.png"

function ImpactStory() {
    const { title, heading, subtitle, features, cta, image } = IMPACT_STORY_DATA;

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                    <h3 className="text-xl font-medium text-text-primary mb-4">{title}</h3>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        {heading}
                    </h2>

                    <p className="text-lg font-medium text-text-primary mb-6">{subtitle}</p>

                    <ul className="space-y-6 mb-8">
                        {features.map((feature) => (
                            <li key={feature.id} className="flex items-start">
                                <span className="text-text-secondary mr-2">—</span>
                                <span className="text-text-secondary">
                                    {feature.text}
                                </span>
                            </li>
                        ))}
                    </ul>                    
                    <Link
                        to={cta.url}
                        className="link-primary link-with-arrow font-medium flex items-center hover:underline"
                    >
                        {cta.text}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 arrow-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </div>

                <div className="w-full md:w-1/2">
                    <img
                        src={ImpactStoryImage}
                        alt={image.alt}
                        className="w-full h-auto rounded-lg  transition duration-300 ease-in-out shadow-lg"
                    />
                </div>
            </div>
        </div>)
}

export default ImpactStory

