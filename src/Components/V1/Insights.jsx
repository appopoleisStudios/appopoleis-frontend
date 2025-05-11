"use client";

import { ArrowRight } from "lucide-react";
import { BLOG_POST_DATA, WHITE_PAPER_DATA } from "../../Utils/data/insightData";
import { Link } from "react-router-dom";

const Insights = () => {


    return (
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-8xl w-full">
            <div className="mb-12">
                <h2 className="text-4xl font-bold inline-block">Insights</h2>
                <span className="inline-block w-3 h-3 bg-teal-400 ml-2"></span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {BLOG_POST_DATA.map((post) => (
                        <div key={post.id} className="border-t-2 border-teal-400 pt-4">
                            <div className="text-teal-400 font-medium mb-3">{post.date}</div>

                            <Link href={post.link} className="block group">
                                <h3 className="text-xl font-bold mb-4 group-hover:text-teal-400 transition-colors duration-300">
                                    {post.title}
                                </h3>
                            </Link>

                            <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                            <div className="flex justify-between items-center">
                                <Link
                                    to={post.link}
                                    className="text-gray-700 hover:text-teal-400 transition-colors duration-300"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    ))}

                    <div className="md:col-span-2 mt-4">
                        <Link
                            to="#"
                            className="inline-flex items-center text-teal-400 hover:underline"
                        >
                            <span className="mr-2">Visit blog</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg">
                    <div className="text-teal-400 font-medium mb-3">Whitepaper</div>

                    <Link to={WHITE_PAPER_DATA.link} className="block group">
                        <h3 className="text-xl font-bold mb-4 group-hover:text-teal-400 transition-colors duration-300">
                            {WHITE_PAPER_DATA.title}
                        </h3>
                    </Link>

                    <p className="text-gray-600 mb-8">{WHITE_PAPER_DATA.excerpt}</p>

                    <Link
                        to={WHITE_PAPER_DATA.link}
                        className="inline-flex items-center text-teal-400 hover:underline"
                    >
                        <span className="mr-2">Get a free copy</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Insights;
