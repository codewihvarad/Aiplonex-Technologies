import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Star, User, ChevronDown, PenTool, Smartphone, Search, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function Home() {
    return (
        <div className="overflow-hidden">
            <SEO
                title="Enterprise AI Solutions & Automation"
                description="Aiplonex Technologies delivers enterprise-grade AI solutions, intelligent automation, and customized software development."
                keywords="AI solutions, enterprise automation, machine learning services, Aiplonex, AI development"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Aiplonex Technologies",
                    "url": "https://aiplonex.com",
                    "logo": "https://aiplonex.com/logo.png",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+91-9371636194",
                        "contactType": "customer service"
                    }
                }}
            />
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-6">
                <div className="container mx-auto text-center max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6 md:mb-8 inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-white/10 border border-white/10 mx-auto"
                    >
                        <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                        <span className="text-xs md:text-sm font-medium text-violet-200">The Future of AI is Here</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
                    >
                        Transforming Business with <br />
                        <span className="text-violet-500">Intelligence</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-base md:text-lg lg:text-2xl text-gray-400 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2"
                    >
                        Aiplonex Technologies delivers enterprise-grade AI solutions, automation, and premium software tailored for the modern era.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4"
                    >
                        <Link to="/services" className="btn-primary flex items-center gap-2 group w-full sm:w-auto justify-center">
                            Explore Services
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </Link>
                        <Link to="/contact" className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all font-medium text-center">
                            Talk to an Expert
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Stats/Trust */}
            <section className="py-8 md:py-10 border-y border-white/5 bg-white/5">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-center">
                        {[
                            { label: 'AI Models Deployed', value: '50+' },
                            { label: 'Happy Clients', value: '100+' },
                            { label: 'Efficiency Boost', value: '300%' },
                            { label: 'Global Reach', value: '25+' }
                        ].map((stat, i) => (
                            <div key={i}>
                                <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                                <p className="text-sm text-gray-400 uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trusted By */}
            <section className="py-8 md:py-10 border-b border-white/5 mx-4 md:mx-6">
                <div className="container mx-auto">
                    <p className="text-center text-gray-500 text-xs md:text-sm font-semibold tracking-widest uppercase mb-6 md:mb-8">Trusted by Industry Leaders</p>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder Logos - In a real app these would be SVGs */}
                        {['OpenAI', 'Gemini', 'DeepSeek', 'Claude'].map((brand, i) => (
                            <span key={i} className="text-xl md:text-2xl font-bold font-serif text-white">{brand}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-16 md:py-24 px-4 md:px-6">
                <div className="container mx-auto">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                    >
                        {[
                            { icon: PenTool, title: 'Web Design', desc: 'Beautiful, responsive websites designed to captivate your audience and convert visitors.' },
                            { icon: Bot, title: 'AI Agent Development', desc: 'Create intelligent autonomous agents that learn, adapt, and solve complex business problems.' },
                            { icon: Smartphone, title: 'App Development', desc: 'Native and cross-platform mobile applications built for performance and user engagement.' },
                            { icon: Search, title: 'SEO', desc: 'Boost your online visibility with comprehensive SEO strategies that drive organic traffic.' }
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="glass-card hover:-translate-y-2"
                            >
                                <div className="w-12 h-12 rounded-lg bg-indigo-900/50 flex items-center justify-center mb-6 text-indigo-400">
                                    <service.icon size={24} />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed mb-6">{service.desc}</p>
                                <Link to="/services" className="text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-2 text-sm font-medium">
                                    Learn more <ArrowRight size={16} />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* AI Automation Solutions for Business */}
            <section className="py-16 md:py-24 px-4 md:px-6">
                <div className="container mx-auto overflow-hidden rounded-3xl border border-violet-400/15 bg-gradient-to-br from-violet-950/35 via-[#080b18] to-indigo-950/20">
                    <div className="grid grid-cols-1 items-center lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="p-6 md:p-10 lg:p-12"
                        >
                            <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
                                <Bot size={15} /> Business Automation
                            </span>
                            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                                AI Automation Solutions <span className="text-violet-400">for Business</span>
                            </h2>
                            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-300 md:text-lg">
                                Bring lead capture, conversations, follow-ups, and sales into one connected workflow, from the first enquiry through onboarding.
                            </p>

                            <div className="mt-7 grid grid-cols-1 gap-x-5 gap-y-3 sm:grid-cols-2">
                                {[
                                    'Capture leads from social media and forms',
                                    'Reply and follow up through WhatsApp, SMS, and email',
                                    'Connect calls, tasks, and your CRM pipeline',
                                    'Share payment links and start onboarding'
                                ].map((feature) => (
                                    <div key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                                    Discuss your workflow <ArrowRight size={18} />
                                </Link>
                                <Link to="/services" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10">
                                    Explore services <ArrowRight size={18} />
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[440px]"
                        >
                            <img
                                src="/business-automation.png"
                                alt="AI at the center of a connected business automation workflow"
                                loading="lazy"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#080b18]/90 via-transparent to-[#080b18]/10" />
                            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-[#080b18]/75 p-4 backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-5">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300 sm:text-xs">One connected workflow</p>
                                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs font-medium text-white sm:text-sm">
                                    {['Lead', 'Conversation', 'CRM', 'Payment', 'Onboarding'].map((step, index, steps) => (
                                        <React.Fragment key={step}>
                                            <span>{step}</span>
                                            {index < steps.length - 1 && <ArrowRight size={13} className="text-violet-300" aria-hidden="true" />}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* Digital Gavkari Product */}
            <section className="py-16 md:py-24 px-4 md:px-6">
                <div className="container mx-auto overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-green-950/25 via-black to-amber-950/10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="p-6 md:p-10 lg:p-12"
                        >
                            <span className="inline-flex items-center rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-green-300">
                                Aiplonex Product · Maharashtra
                            </span>
                            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                                Digital <span className="text-amber-400">Gavkari</span>
                            </h2>
                            <p className="mt-4 max-w-xl text-base md:text-lg leading-relaxed text-gray-300">
                                A digital village initiative designed for Gram Panchayats across Maharashtra—supporting the vision of connected, empowered villages.
                            </p>
                            <div className="mt-7 flex flex-col sm:flex-row gap-3">
                                <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                                    Discuss this product <ArrowRight size={18} />
                                </Link>
                                <Link to="/portfolio" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10">
                                    View portfolio <ArrowRight size={18} />
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="relative min-h-[260px] sm:min-h-[360px] lg:min-h-[440px]"
                        >
                            <img
                                src="/digital-gavkari-village.png"
                                alt="A digitally connected village and Gram Panchayat in Maharashtra"
                                loading="lazy"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                                Our village · Digital village · Empowered village
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="py-16 md:py-24 px-4 md:px-6 bg-white/5">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">How We <span className="text-violet-500">Deliver Excellence</span></h2>
                        <p className="text-gray-400 text-base md:text-lg">
                            Our proven methodology ensures seamless execution from concept to deployment.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {[
                            { step: '01', title: 'Discovery', desc: 'We analyze your needs, data infrastructure, and business goals.' },
                            { step: '02', title: 'Strategy', desc: 'Our architects design a scalable, AI-driven roadmap tailored to you.' },
                            { step: '03', title: 'Development', desc: 'Agile sprints with regular updates and transparent code reviews.' },
                            { step: '04', title: 'Deployment', desc: 'Seamless launch, training, and ongoing optimization support.' }
                        ].map((item, i) => (
                            <div key={i} className="relative p-6 border-l border-white/10 hover:border-violet-500 transition-colors group">
                                <span className="text-4xl font-bold text-white/10 group-hover:text-violet-500/20 transition-colors absolute top-4 right-4">{item.step}</span>
                                <h3 className="text-xl font-bold mb-3 mt-4">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Highlight */}
            <section className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-900/10 to-indigo-900/10" />
                <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
                    <div className="flex-1">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Built for Scalability and <span className="text-violet-500">Performance</span>.</h2>
                        <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                            Our architecture ensures your innovative solutions grow with your business.
                            We leverage the latest in cloud computing, edge delivery, and secure API standards.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {['Enterprise-grade Security', '99.9% Uptime Guarantee', 'Real-time Analytics', '24/7 Expert Support'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                        <Cpu size={12} />
                                    </div>
                                    <span className="text-gray-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link to="/contact" className="btn-primary inline-flex">Start Building</Link>
                    </div>
                    <div className="flex-1 w-full relative">
                        <div className="relative z-10 p-6 rounded-2xl glass border border-white/10 bg-black/60 shadow-2xl">
                            {/* Mock UI Code Window */}
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="space-y-2 font-mono text-xs md:text-sm">
                                <div className="text-gray-400"><span className="text-purple-400">const</span> <span className="text-blue-400">aiSolution</span> <span className="text-white">=</span> <span className="text-purple-400">await</span> <span className="text-yellow-400">Aiplonex</span>.<span className="text-blue-400">init</span>({'{'}</div>
                                <div className="pl-4 text-gray-300">intelligence: <span className="text-green-400">'Maximize'</span>,</div>
                                <div className="pl-4 text-gray-300">efficiency: <span className="text-purple-400">100</span>,</div>
                                <div className="pl-4 text-gray-300">security: <span className="text-blue-400">true</span></div>
                                <div className="text-gray-400">{'}'});</div>
                                <div className="text-gray-500 mt-4">// Optimizing business logic...</div>
                                <div className="text-green-400 text-opacity-80"> &gt; Process Complete.</div>
                            </div>
                        </div>
                        {/* Decorative element behind */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-20 blur-xl -z-10 rounded-full" />
                    </div>
                </div>
            </section>




            {/* Testimonials */}
            <section className="py-16 md:py-24 px-4 md:px-6">
                <div className="container mx-auto">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16">Stories of <span className="text-violet-500">Success</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { name: 'Vishal Parag', role: 'Co-Founder, ECpoultry', quote: "Aiplonex transformed our legacy systems into a state-of-the-art AI powerhouse. The efficiency gains are unreal." },
                            { name: 'Jitesh Kambale', role: 'Director, RGobal', quote: "Their team isn't just skilled developers; they are strategic partners who understood our complex compliance needs." },
                            { name: 'Emily Chen', role: 'Founder, HealthAI', quote: "The most professional agency we've worked with. The dark-mode UI they designed is absolutely stunning & their team is top-notch." }
                        ].map((testimonial, i) => (
                            <div key={i} className="glass-card p-8">
                                <div className="flex gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} className="fill-yellow-500 text-yellow-500" />)}
                                </div>
                                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center">
                                        <User size={18} className="text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                                        <p className="text-xs text-gray-500 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 md:py-24 px-4 md:px-6 bg-white/5">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-3 md:space-y-4">
                        {[
                            { q: "What industries do you specialize in?", a: "We work across FinTech, Healthcare, Logistics, and Retail, bringing tailored AI solutions to each sector." },
                            { q: "How long does a typical project take?", a: "Timelines vary by complexity, but most MVP projects are delivered within 8-12 weeks." },
                            { q: "Do you offer post-launch support?", a: "Yes, we provide 24/7 maintenance, monitoring, and iterative improvements depending on your SLA." },
                            { q: "Can you integrate with our existing stack?", a: "Absolutely. Our solutions are designed to be agnostic and integrate seamlessly via APIs and webhooks." }
                        ].map((item, i) => (
                            <details key={i} className="group glass-card p-0 overflow-hidden">
                                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                    <span className="font-semibold text-lg">{item.q}</span>
                                    <ChevronDown className="transition-transform group-open:rotate-180" />
                                </summary>
                                <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                    {item.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-16 md:py-24 px-4 md:px-6 text-center">
                <div className="container mx-auto max-w-3xl glass-card relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-indigo-600/20 blur-[100px] pointer-events-none" />

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Ready to revolutionize your industry?</h2>
                    <p className="text-gray-400 mb-6 md:mb-8 text-base md:text-lg px-2">
                        Join the forward-thinking companies powered by Aiplonex. Let's build something extraordinary together.
                    </p>
                    <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                        Book a Free Consultation
                    </Link>
                </div>
            </section>
        </div >
    );
}
