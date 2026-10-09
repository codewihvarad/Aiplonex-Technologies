
import React from 'react';
import { motion } from 'framer-motion';
import { Gavel, Scale, AlertCircle, FileCheck, Ban } from 'lucide-react';
import SEO from '../components/SEO';

export default function TermsOfService() {
    return (
        <div className="pt-24 pb-20 px-4 md:px-6 max-w-4xl mx-auto">
            <SEO
                title="Terms of Service"
                description="Terms and conditions for using Aiplonex Technologies services and website."
                keywords="terms, service agreement, legal, aiplonex policies"
                path="/terms-of-service"
            />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500/10 text-indigo-400 mb-6 border border-indigo-500/20">
                        <Gavel size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
                    <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
                </div>

                <div className="space-y-12">
                    {/* Agreement */}
                    <section className="glass-card p-8 border border-white/5">
                        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                            <FileCheck className="text-indigo-500" size={24} />
                            1. Agreement to Terms
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Aiplonex Technologies ("we," "us" or "our"), concerning your access to and use of the aiplonex.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                        </p>
                    </section>

                    {/* Intellectual Property */}
                    <section className="glass-card p-8 border border-white/5">
                        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                            <Scale className="text-indigo-500" size={24} />
                            2. Intellectual Property Rights
                        </h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            The Content and the Marks are provided on the Site "AS IS" for your information and personal use only.
                        </p>
                    </section>

                    {/* Prohibited Activities */}
                    <section className="glass-card p-8 border border-white/5">
                        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                            <Ban className="text-indigo-500" size={24} />
                            3. Prohibited Activities
                        </h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-400">
                            <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                            <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means.</li>
                            <li>Circumvent, disable, or otherwise interfere with security-related features of the Site.</li>
                            <li>Engage in unauthorized framing of or linking to the Site.</li>
                        </ul>
                    </section>

                    {/* Disclaimer */}
                    <section className="glass-card p-8 border border-white/5">
                        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                            <AlertCircle className="text-indigo-500" size={24} />
                            4. Disclaimer
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            The site is provided on an as-is and as-available basis. You agree that your use of the site and our services will be at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the site and your use thereof, including, without limitation, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="glass-card p-8 border border-white/5">
                        <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
                        <p className="text-gray-300 leading-relaxed">
                            To resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                        </p>
                        <br />
                        <p className="text-white font-medium">Aiplonex Technologies</p>
                        <p className="text-gray-400">support@aiplonex.com</p>
                    </section>
                </div>
            </motion.div>
        </div>
    );
}
