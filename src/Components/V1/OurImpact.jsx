import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { TESTIMONIAL_DATA } from "../../Utils/data/testimonialData";

const OurImpact = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState("next");

    const goToPrevious = () => {
        if (isAnimating) return;
        setDirection("prev");
        setIsAnimating(true);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? TESTIMONIAL_DATA.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        if (isAnimating) return;
        setDirection("next");
        setIsAnimating(true);
        setCurrentIndex((prevIndex) =>
            prevIndex === TESTIMONIAL_DATA.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        if (isAnimating) {
            const timer = setTimeout(() => {
                setIsAnimating(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isAnimating]);

    return (
        <section className="py-8 md:py-16 px-4 md:px-8 lg:px-16 max-w-8xl w-full">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                <div>
                    <div className="mb-4 md:mb-6">
                        <h2 className="text-3xl md:text-4xl font-bold inline-block">
                            Impact
                        </h2>
                        <span className="inline-block w-3 h-3 bg-teal-400 ml-2"></span>
                    </div>

                    <p className="text-lg md:text-xl font-medium text-gray-800 mb-6 md:mb-8">
                        Solving critical challenges for our
                        <br className="hidden md:block" />
                        clients in the changing digital
                        <br className="hidden md:block" />
                        landscape.
                    </p>

                    <div className="flex space-x-4 md:space-x-6 mb-8 md:mb-0">
                        <button
                            onClick={goToPrevious}
                            className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                        <button
                            onClick={goToNext}
                            className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
                            aria-label="Next testimonial"
                        >
                            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <div className="relative min-h-[250px] md:min-h-[300px]">
                        {TESTIMONIAL_DATA.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`absolute w-full transition-opacity duration-500 ease-in-out
                  ${currentIndex === index
                                        ? "opacity-100 z-10"
                                        : "opacity-0 z-0"
                                    }
                  ${isAnimating && currentIndex === index
                                        ? direction === "next"
                                            ? "animate-fade-in"
                                            : "animate-fade-in"
                                        : ""
                                    }
                  ${isAnimating &&
                                        currentIndex !== index &&
                                        index ===
                                        (currentIndex === 0
                                            ? TESTIMONIAL_DATA.length - 1
                                            : currentIndex - 1) &&
                                        direction === "prev"
                                        ? "animate-fade-out"
                                        : ""
                                    }
                  ${isAnimating &&
                                        currentIndex !== index &&
                                        index ===
                                        (currentIndex === TESTIMONIAL_DATA.length - 1
                                            ? 0
                                            : currentIndex + 1) &&
                                        direction === "next"
                                        ? "animate-fade-out"
                                        : ""
                                    }
                `}
                            >
                                <div className="mb-4 md:mb-8">
                                    <span className="text-4xl md:text-6xl text-teal-400">"</span>
                                </div>
                                <blockquote className="text-lg md:text-xl lg:text-2xl font-medium mb-6 md:mb-8 pr-4">
                                    {testimonial.quote}
                                </blockquote>
                                <div>
                                    <p className="text-base md:text-lg font-medium">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-gray-600">{testimonial.company}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-end mt-10">
                        <a href="#" className="text-cyan-500 font-medium flex items-center group hover:text-cyan-600 transition-colors">
                            View all testimonials
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
            </div>
        </section>
    );
};

export default OurImpact;
