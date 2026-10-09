import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Award } from 'lucide-react';
import SEO from '../components/SEO';

const timeline = [
    { year: '2025', title: 'Inception', desc: 'Aiplonex was founded with a unified vision: to democratize AI and empower the next generation.' },
    { year: '2026', title: 'Smart Solutions & Services', desc: 'Expanded into AI-powered services including automation, intelligent chatbots, digital platforms, and custom software solutions tailored for startups, SMEs, and enterprises.' },
    { year: '2027', title: 'Industry-Focused AI Growth', desc: 'Strengthening domain-specific AI systems for education, marketing, operations, and customer engagement, while building scalable AI agents and workflow automation frameworks.' },
    { year: '2028', title: 'Building an Intelligent Future', desc: 'Establishing Aiplonex as a full-scale AI ecosystem—connecting businesses, developers, and learners through intelligent platforms, automation tools, and next-generation AI products.' },
];

export default function About() {
    return (
        <div className="pt-10">
            <SEO
                title="About Us - Pioneering the Intelligent Era"
                description="Aiplonex is a collective of visionaries and engineers dedicated to reshaping humanity's interaction with technology through ethical AI and innovation."
                keywords="About Aiplonex, AI company, tech visionaries, ethical AI, innovation"
                path="/about"
            />
            {/* Header */}
            <section className="py-20 px-6 text-center">
                <div className="container mx-auto max-w-4xl px-4 md:px-0">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
                    >
                        Pioneering the <span className="text-violet-500">Intelligent Era</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed"
                    >
                        We are a collective of visionaries, engineers, and strategists dedicated to reshaping
                        how humanity interacts with technology. At Aiplonex, we don't just build software;
                        we build the future.
                    </motion.p>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-20 px-6 bg-white/5">
                <div className="container mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
                        <div className="w-20 h-1 bg-violet-600 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Innovation First', desc: 'We constantly challenge the status quo to find better solutions.' },
                            { title: 'Ethical AI', desc: 'We believe in responsible development that benefits humanity.' },
                            { title: 'Client Success', desc: 'Your growth is our growth. We are partners in your journey.' }
                        ].map((val, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="glass-card text-center"
                            >
                                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-violet-600 to-indigo-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                                    {i + 1}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{val.title}</h3>
                                <p className="text-gray-400">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-10 px-6">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-16">Meet the <span className="text-violet-500">Minds</span></h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4 justify-center">
                        {[
                            {
                                name: 'Mukund Jadhav',
                                role: 'Full Stack Developer',
                                bg: 'from-purple-600 to-blue-600'
                            },
                            {
                                name: 'Vishvajit Ghadge',
                                role: 'Data Analyst',
                                bg: 'from-blue-600 to-cyan-600'
                            },
                            {
                                name: 'Harsh Salve',
                                role: 'SEO Specialist',
                                bg: 'from-cyan-600 to-teal-600'
                            },
                            {
                                name: 'Siddhesh Patil',
                                role: 'Cloud Engineer',
                                bg: 'from-cyan-600 to-teal-600'
                            },
                            {
                                name: 'Harish Singh',
                                role: 'Quality Analyst',
                                bg: 'from-cyan-600 to-teal-600'
                            },
                            {
                                name: 'Varad Pandit',
                                role: 'Ai Researcher and Developer',
                                bg: 'from-cyan-600 to-teal-600'
                            },
                        ].map((member, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="group relative overflow-hidden rounded-2xl aspect-[3/4] glass-card p-0 border-0 flex flex-col items-center justify-center bg-white/5"
                            >
                                {/* Circle Avatar */}
                                <div className={`w-36 h-36 rounded-full bg-gradient-to-br ${member.bg} flex items-center justify-center mb-12 shadow-xl shadow-purple-500/20 group-hover:scale-110 transition-transform duration-500 ring-4 ring-white/10`}>
                                    <span className="text-2xl font-bold text-white tracking-wider">
                                        {member.name.split(' ')[0]}
                                    </span>
                                </div>

                                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                                    <h3 className="text-xl font-bold text-white mb-1 text-center">{member.name}</h3>
                                    <p className="text-sm text-gray-300 font-medium text-center">{member.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Presence */}
            <section className="py-20 px-6 bg-white/5 border-y border-white/10">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Innovating Across India <br /><span className="text-violet-500">Borders</span></h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        With our roots in India, Aiplonex works closely with businesses, startups, and institutions across the country, delivering smart AI and digital solutions tailored to local needs.                    </p>
            <ul className="space-y-4">
                        {['Chh.Sambhajinagar, Maharashtra, India(HQ)', 'Mumbai, India', 'Delhi, India','Hyderabad, India', 'Ahmedabad, India', 'Pune, India'].map((loc, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-300">
                                <MapPin size={18} className="text-violet-500" /> {loc}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1 relative h-[400px] w-full glass rounded-3xl overflow-hidden flex items-center justify-center bg-black/40"> 
             World Map Placeholder
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 to-transparent" />
                    <span className="text-white/20 font-bold text-4xl tracking-widest text-center uppercase">Global<br />Operations<br />Map</span>
                </div>
            </div> 
            </section>

            {/* Timeline */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold mb-16 text-center">Our Journey</h2>
                    <div className="relative border-l-2 border-violet-500/30 ml-4 md:ml-auto md:mx-auto md:w-2/3 space-y-12 pl-8 md:pl-0">
                        {timeline.map((item, i) => (
                            <div key={i} className="relative md:flex items-center justify-between group">
                                {/* Dot */}
                                <div className="absolute -left-[41px] md:left-auto md:right-1/2 md:-mr-[9px] w-5 h-5 rounded-full bg-black border-4 border-violet-500 z-10" />

                                {/* Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className={`md:w-[45%] ${i % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:pl-10'}`}
                                >
                                    <span className="text-violet-400 font-bold block mb-2">{item.year}</span>
                                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
