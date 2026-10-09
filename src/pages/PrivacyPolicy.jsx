
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Server } from 'lucide-react';

export default function PrivacyPolicy() {
    return (
        <div className="pt-24 pb-20 px-4 md:px-6 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-violet-500/10 text-violet-400 mb-6 border border-violet-500/20">
                        <Lock size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
                </div>

                <div className="space-y-12">
                    {/* Introduction */}
                    <section className="glass-card p-8 border border-white/5">
                        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                            <Shield className="text-violet-500" size={24} />
                            1. Introduction
                        </h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Welcome to Aiplonex Technologies ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regards to your personal information, please contact us.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            This Privacy Policy applies to all information collected through our website (such as aiplonex.com), and/or any related services, sales, marketing, or events.
                        </p>
                    </section>

                    {/* Info Collection */}
                    <section className="glass-card p-8 border border-white/5">
                        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                            <Eye className="text-violet-500" size={24} />
                            2. Information We Collect
                        </h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p>We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-400">
                                <li>Personal Data: Name, email address, phone number, etc.</li>
                                <li>Derivative Data: IP address, browser type, operating system, access times, etc.</li>
                                <li>Financial Data: Data related to your payment method (e.g., valid credit card number) if you make a purchase.</li>
                            </ul>
                        </div>
                    </section>

                    {/* How We Use Info */}
                    <section className="glass-card p-8 border border-white/5">
                        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                            <FileText className="text-violet-500" size={24} />
                            3. How We Use Your Information
                        </h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-400">
                            <li>To facilitate account creation and logon process.</li>
                            <li>To send you marketing and promotional communications.</li>
                            <li>To fulfill and manage your orders.</li>
                            <li>To request feedback and contact you about your use of our website.</li>
                            <li>To protect our Services.</li>
                        </ul>
                    </section>

                    {/* Data Storage */}
                    <section className="glass-card p-8 border border-white/5">
                        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                            <Server className="text-violet-500" size={24} />
                            4. Data Storage and Security
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            We store your data on secure servers and use industry-standard encryption protocols to protect your personal information. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our website is at your own risk.
                        </p>
                    </section>

                    {/* Contact Us */}
                    <section className="glass-card p-8 border border-white/5">
                        <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            If you have questions or comments about this policy, you may email us at support@aiplonex.com or by post to:
                        </p>
                        <address className="not-italic text-gray-400">
                            Aiplonex Technologies<br />
                            Tech Park, Sector 5<br />
                            City, State 12345<br />
                            India
                        </address>
                    </section>
                </div>
            </motion.div>
        </div>
    );
}
