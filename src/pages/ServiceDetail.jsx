import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from './Services';
import { Check, ArrowLeft } from 'lucide-react';

export default function ServiceDetail() {
    const { slug } = useParams();
    const service = services.find(s => s.id === slug);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    return (
        <div className="pt-10 pb-20 px-4 md:px-6">
            <div className="container mx-auto max-w-5xl">
                <Link to="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={16} /> Back to Services
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-8 shadow-2xl`}>
                            <service.icon size={48} className="text-white" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">{service.title}</h1>
                        <p className="text-xl text-gray-400 leading-relaxed mb-8">
                            {service.desc} We provide top-tier expertise and cutting-edge technology to deliver results that matter.
                        </p>
                        <Link to="/contact" className="btn-primary inline-flex">Get a Quote</Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass-card flex items-center justify-center p-12 bg-white/5"
                    >
                        {/* Abstract visual */}
                        <div className={`w-full aspect-square rounded-full bg-gradient-to-br ${service.color} opacity-20 blur-3xl animate-pulse`} />
                        <div className="absolute inset-0 flex items-center justify-center font-mono text-sm text-center text-gray-500">
                            {`<${service.title.replace(/\s+/g, '')} />`}
                        </div>
                    </motion.div>
                </div>

                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8">Key Benefits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            'Seamless Integration with existing systems',
                            'Scalable architecture for future growth',
                            'Enterprise-grade security and compliance',
                            '24/7 Monitoring and Support',
                            'Custom-tailored logic and workflows',
                            'Performance optimization included'
                        ].map((benefit, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                                <div className="mt-1 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 flex-shrink-0">
                                    <Check size={12} />
                                </div>
                                <span className="text-gray-300">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
