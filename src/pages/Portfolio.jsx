import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Users, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const projects = [
    { id: 8, title: 'Digital Gavkari', category: 'Digital Products', image: '/digital-gavkari.jpeg', desc: 'A digital village initiative for Gram Panchayats across Maharashtra.', logo: true },
    { id: 7, title: 'Kala Vastra', category: 'Web Ecommerce', image: '/kala-vastra.png', desc: 'An editorial fashion storefront for curated collections and easy product discovery.' },
    { id: 1, title: 'FinTech AI Analyst', category: 'AI Development', image: '/FinTech AI.png', desc: 'Predictive market analysis tool.' },
    { id: 2, title: 'HealthBot', category: 'Chatbots', image: '/Healthbot.png', desc: 'Patient triage automation system.' },
    { id: 3, title: 'SJS Hospital', category: 'Web App', image: '/Sjshospital.png', desc: 'Hospital Primuim & Modern UI Design for Hospial' },
    { id: 4, title: 'FutureX lab', category: 'Web App', image: '/future.png', desc: 'FutureX lab is a cutting-edge research and development lab focused on AI, machine learning, and data science.' },
    { id: 5, title: 'Ec Poultry Care', category: 'Web Ecommerce', image: '/ecpoultry.png', desc: 'E-commerce platform for poultry products.' },
    { id: 6, title: 'Custom AI Assistant', category: 'AI Development', image: '/automation.png', desc: 'Customized AI assistant for enterprise clients.' },
];

const categories = ['All', 'Digital Products', 'AI Development', 'Chatbots', 'Web App', 'Web Ecommerce'];

export default function Portfolio() {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="pt-10 pb-20 px-4 md:px-6">
            <SEO
                title="Our Portfolio - Case Studies & Success Stories"
                description="View Aiplonex's portfolio of AI, automation, and web development projects. See how we help diverse industries achieve their goals."
                keywords="Aiplonex portfolio, case studies, AI projects, web development showcase, automation success stories"
                path="/portfolio"
            />
            <div className="container mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">Selected <span className="text-violet-500">Works</span></h1>
                    <p className="text-sm sm:text-base md:text-lg text-gray-400">Showcasing the future we've built for our clients.</p>
                </div>

                {/* Filter */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 md:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${filter === cat
                                ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/25'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map(project => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-white/5 border border-white/5"
                            >
                                {project.logo ? (
                                    <div className="absolute inset-x-6 top-6 bottom-28 rounded-xl bg-white p-4 flex items-center justify-center">
                                        <img src={project.image} alt={`${project.title} logo`} loading="lazy" className="w-full h-full object-contain" />
                                    </div>
                                ) : (
                                    <div
                                        className="absolute inset-0 opacity-50 group-hover:opacity-30 transition-opacity duration-500 bg-cover bg-center"
                                        style={{ backgroundImage: `url('${project.image}')` }}
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                                <div className="absolute bottom-0 left-0 p-6 w-full">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <span className="text-violet-400 text-xs font-bold uppercase tracking-wider mb-2 block">{project.category}</span>
                                            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-violet-300 transition-colors">{project.title}</h3>
                                            <p className="text-gray-400 text-sm line-clamp-2">{project.desc}</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>


                {/* Impact Stats */}
                <div className="mt-32 border-t border-white/10 pt-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div>
                            <div className="w-16 h-16 mx-auto rounded-full bg-green-500/10 flex items-center justify-center text-green-400 mb-6">
                                <TrendingUp size={32} />
                            </div>
                            <h3 className="text-4xl font-bold text-white mb-2">50L+</h3>
                            <p className="text-gray-400">Revenue Generated for Clients</p>
                        </div>
                        <div>
                            <div className="w-16 h-16 mx-auto rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                                <Users size={32} />
                            </div>
                            <h3 className="text-4xl font-bold text-white mb-2">100+</h3>
                            <p className="text-gray-400">Daily Active Users Impacted</p>
                        </div>
                        <div>
                            <div className="w-16 h-16 mx-auto rounded-full bg-violet-500/10 flex items-center justify-center text-violet-400 mb-6">
                                <Clock size={32} />
                            </div>
                            <h3 className="text-4xl font-bold text-white mb-2">100k+</h3>
                            <p className="text-gray-400">Hours Saved via Automation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
