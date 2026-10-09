import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        companyname: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setStatus('idle');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const whatsappMessage = [
            'New enquiry from the Aiplonex website',
            '',
            `Full Name: ${formData.name}`,
            `Email Address: ${formData.email}`,
            `Phone No: ${formData.phone}`,
            `Company / School Name: ${formData.companyname}`,
            `Subject: ${formData.subject}`,
            '',
            'Message:',
            formData.message
        ].join('\n');
        const whatsappUrl = `https://wa.me/919371636194?text=${encodeURIComponent(whatsappMessage)}`;
        const whatsappWindow = window.open(whatsappUrl, '_blank');

        if (whatsappWindow) {
            whatsappWindow.opener = null;
            setStatus('ready');
        } else {
            window.location.assign(whatsappUrl);
        }
    };

    return (
        <div className="pt-10 pb-20 px-4 md:px-6">
            <SEO
                title="Contact Us - Start Your AI Journey"
                description="Get in touch with Aiplonex Technologies. Schedule a free consultation for AI solutions, automation implementation, or educational workshops."
                keywords="contact aiplonex, AI consultation, chatbot development, hire AI developers"
                path="/contact"
            />
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    {/* Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Build the <span className="text-violet-500">Future</span></h1>
                        <p className="text-xl text-gray-400 mb-12">
                            Have a project in mind? We'd love to hear from you.
                            Fill out the form and our team will get back to you within 24 hours.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-violet-400">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                                    <a className="block text-gray-400 hover:text-white transition-colors" href="mailto:aiplonex0@gmail.com">aiplonex0@gmail.com</a>
                                    <a className="block text-gray-400 hover:text-white transition-colors" href="mailto:aiplonextechnolgies@gmail.com">aiplonextechnolgies@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-violet-400">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                                    <a className="block text-gray-400 hover:text-white transition-colors" href="tel:+919371636194">+91 9371636194</a>
                                    <p className="text-gray-400">Mon-Fri, 9am - 6pm & Sat, 9am - 4pm</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-violet-400">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                                    <p className="text-gray-400">Lasur Road, Gangapur</p>
                                    <p className="text-gray-400">Chh.Sambhajinagar Maharashtra, India -431109</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass-card p-8 md:p-12"
                    >
                        <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-violet-500 transition-colors"
                                    placeholder="Hari Patil"
                                />
                            </div>
                            <div>
                                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-violet-500 transition-colors"
                                    placeholder="haripatil@gmail.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-400 mb-2">Phone No</label>
                                <input
                                    id="contact-phone"
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    autoComplete="tel"
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-violet-500 transition-colors"
                                    placeholder="+91 8273747399"
                                />
                            </div>
                            <div>
                                <label htmlFor="contact-company" className="block text-sm font-medium text-gray-400 mb-2">Company Name Or School Name</label>
                                <input
                                    id="contact-company"
                                    type="text"
                                    name="companyname"
                                    required
                                    value={formData.companyname}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-violet-500 transition-colors"
                                    placeholder="company name"
                                />
                            </div>
                            <div>
                                <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                                <input
                                    id="contact-subject"
                                    type="text"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-violet-500 transition-colors"
                                    placeholder="How can we help?"
                                />
                            </div>
                            <div>
                                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full btn-primary flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50"
                            >
                                Send via WhatsApp <Send size={18} />
                            </button>

                            {status === 'ready' && (
                                <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-4 rounded-lg">
                                    <MessageCircle size={20} />
                                    <span>Your enquiry is ready in WhatsApp. Tap Send there to submit it.</span>
                                </div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
