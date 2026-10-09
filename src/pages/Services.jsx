import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Bot, Code, Cloud, Database, BarChart, PenTool, Smartphone, Search, Target } from 'lucide-react';
import SEO from '../components/SEO';

export const services = [
    {
        id: 'web-design',
        title: 'Web Design',
        desc: 'Beautiful, responsive websites designed to captivate your audience and convert visitors into customers.',
        icon: PenTool,
        color: 'from-pink-500 to-rose-500'
    },
    {
        id: 'ai-agent-development',
        title: 'AI Agent Development',
        desc: 'Create intelligent autonomous agents that learn, adapt, and solve complex business problems.',
        icon: Bot,
        color: 'from-violet-500 to-indigo-500'
    },
    {
        id: 'app-development',
        title: 'App Development',
        desc: 'Native and cross-platform mobile applications built for performance, scalability, and user engagement.',
        icon: Smartphone,
        color: 'from-blue-500 to-cyan-500'
    },
    {
        id: 'seo',
        title: 'SEO',
        desc: 'Boost your online visibility with comprehensive SEO strategies that drive organic traffic and rankings.',
        icon: Search,
        color: 'from-sky-500 to-blue-600'
    },
    {
        id: 'digital-marketing',
        title: 'Digital Marketing',
        desc: 'Data-driven digital marketing campaigns to increase brand awareness, engagement, and customer acquisition.',
        icon: Target,
        color: 'from-teal-500 to-emerald-500'
    }
];

export default function Services() {
    return (
        <div className="pt-10 pb-20 px-6">
            <SEO
                title="Our Services - AI, Web & Cloud Solutions"
                description="Explore Aiplonex's services: AI Development, Automation, Web & App Development, Cloud & DevOps, Data Analytics, and AI Chatbots."
                keywords="AI development services, web development, cloud solutions, automation, data analytics, chatbots"
                path="/services"
            />
            <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Our <span className="text-violet-500">Expertise</span>
                    </motion.h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400">
                        Comprehensive technology solutions designed to propel your business forward.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link to={`/services/${service.id}`} className="block h-full group">
                                <div className="glass-card h-full relative overflow-hidden">
                                    <div className={`absolute top-0 right-0 p-16 bg-gradient-to-br ${service.color} opacity-10 blur-2xl rounded-full translate-x-12 -translate-y-12 transition-all group-hover:opacity-20 group-hover:scale-110`} />

                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                                        <service.icon className="text-white" size={28} />
                                    </div>

                                    <h3 className="text-lg md:text-2xl font-bold mb-3">{service.title}</h3>
                                    <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6">{service.desc}</p>

                                    <span className="text-xs sm:text-sm font-medium text-white flex items-center gap-2">
                                        View Details <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Tech Stack */}
                <div className="mt-32">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Powered by <span className="text-violet-500">Innovation</span></h2>
                        <p className="text-sm sm:text-base text-gray-400">We leverage the most advanced frameworks and tools in the industry.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            'React', 'Next.js', 'TypeScript', 'Tailwind', 'Python', 'TensorFlow',
                            'PyTorch', 'OpenAI API', 'n8n', 'Node.js', 'Docker', 'AWS'
                        ].map((tech, i) => (
                            <div key={i} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 font-mono text-sm hover:bg-violet-600 hover:text-white hover:border-violet-500 transition-all cursor-default">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
