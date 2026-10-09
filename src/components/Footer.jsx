import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Instagram, Facebook } from 'lucide-react';
import logo from '../assets/1.png';

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-12 px-4 md:px-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link to="/" className="text-xl md:text-2xl font-bold tracking-tighter flex items-center gap-2 mb-4">
                            <img src={logo} alt="Aiplonex Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-full" />
                        </Link>
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                            Empowering the future with advanced AI solutions and premium digital experiences.
                        </p>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h4 className="text-white text-sm md:text-base font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                            <li><Link to="/about" className="hover:text-violet-400 transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-violet-400 transition-colors">Services</Link></li>
                            <li><Link to="/portfolio" className="hover:text-violet-400 transition-colors">Portfolio</Link></li>
                            <li><Link to="/contact" className="hover:text-violet-400 transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h4 className="text-white text-sm md:text-base font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                            <li><Link to="/" className="hover:text-violet-400 transition-colors">Blog</Link></li>
                            <li><Link to="/" className="hover:text-violet-400 transition-colors">Case Studies</Link></li>
                            <li><Link to="/" className="hover:text-violet-400 transition-colors">Documentation</Link></li>
                            <li><Link to="/" className="hover:text-violet-400 transition-colors">AI Learning</Link></li>
                            <li><Link to="/" className="hover:text-violet-400 transition-colors">Help Center</Link></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-white text-sm md:text-base font-semibold mb-4">Connect</h4>
                        <div className="flex gap-3 md:gap-4">
                            <a href="https://x.com/Aiplonex" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-violet-600 hover:text-white transition-all">
                                <Twitter size={18} />
                            </a>
                            <a href="https://www.linkedin.com/company/aiplonex" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-violet-600 hover:text-white transition-all">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://www.facebook.com/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-violet-600 hover:text-white transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-violet-600 hover:text-white transition-all">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Aiplonex Technologies. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
