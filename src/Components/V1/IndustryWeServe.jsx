import { useState } from "react";
import { INDUSTRY_DATA } from "../../Utils/data/industryData";
import INDUSTRY_WE_SERVE_IMAGE_ONE from "../../assets/Images/Home/IndustryWeServe/industryweserveone.png";
import INDUSTRY_WE_SERVE_IMAGE_TWO from "../../assets/Images/Home/IndustryWeServe/industryweservetwo.png";
import INDUSTRY_WE_SERVE_IMAGE_THREE from "../../assets/Images/Home/IndustryWeServe/industryweservethree.png";
import INDUSTRY_WE_SERVE_IMAGE_FOUR from "../../assets/Images/Home/IndustryWeServe/industryweservefour.png";
import INDUSTRY_WE_SERVE_IMAGE_FIVE from "../../assets/Images/Home/IndustryWeServe/industryweservefive.png";
import INDUSTRY_WE_SERVE_IMAGE_SIX from "../../assets/Images/Home/IndustryWeServe/industryweservesix.png";
import INDUSTRY_WE_SERVE_IMAGE_SEVEN from "../../assets/Images/Home/IndustryWeServe/industryweserveseven.png";
import INDUSTRY_WE_SERVE_IMAGE_EIGHT from "../../assets/Images/Home/IndustryWeServe/industryweserveeight.png";
import INDUSTRY_WE_SERVE_IMAGE_NINE from "../../assets/Images/Home/IndustryWeServe/industryweservenine.png";
const IndustryWeServe = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const IMAGES = [
        INDUSTRY_WE_SERVE_IMAGE_NINE,
        INDUSTRY_WE_SERVE_IMAGE_EIGHT,
        INDUSTRY_WE_SERVE_IMAGE_SEVEN,
        INDUSTRY_WE_SERVE_IMAGE_SIX,
        INDUSTRY_WE_SERVE_IMAGE_FIVE,
        INDUSTRY_WE_SERVE_IMAGE_FOUR,
        INDUSTRY_WE_SERVE_IMAGE_THREE,
        INDUSTRY_WE_SERVE_IMAGE_TWO,
        INDUSTRY_WE_SERVE_IMAGE_ONE,
    ];
    return (
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-8xl w-full">
            <div className="mb-12">
                <h2 className="text-4xl font-bold inline-block">Industries We Serve</h2>
                <span className="inline-block w-3 h-3 bg-teal-400 ml-2"></span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {INDUSTRY_DATA.map((industry, index) => (
                    <div
                        key={industry.id}
                        className="relative overflow-hidden rounded-lg h-64 group"
                        onMouseEnter={() => setHoveredCard(industry.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >

                        <div className="absolute inset-0 w-full h-full">
                            <img
                                src={IMAGES.reverse()[index]}
                                alt={industry.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black opacity-70"></div>
                        </div>
                        <div
                            className={`absolute inset-0 bg-white bg-opacity-90 transform transition-transform duration-500 ease-in-out ${hoveredCard === industry.id
                                ? "translate-y-0"
                                : "translate-y-full"
                                }`}
                        ></div>

                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 z-10">
                            <h3
                                className={`text-xl md:text-2xl font-bold mb-3 transition-colors duration-300 ${hoveredCard === industry.id ? "text-black" : "text-white"
                                    }`}
                            >
                                {industry.title}
                            </h3>

                            {industry.description && (
                                <p
                                    className={`text-sm md:text-base transition-opacity duration-300 ${hoveredCard === industry.id
                                        ? "opacity-100 text-gray-700"
                                        : "opacity-0"
                                        }`}
                                >
                                    {industry.description}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default IndustryWeServe;
