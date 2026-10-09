import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { useLocation } from 'react-router-dom';

export default function Layout({ children }) {
    const location = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="min-h-screen bg-black text-white relative overflow-x-hidden font-sans selection:bg-violet-500/30">
            {/* Abstract Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-900/20 rounded-full blur-[120px]" />
                <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] bg-indigo-900/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow pt-20">
                    {children}
                </main>
                <Footer />
                <WhatsAppButton />
            </div>
        </div>
    );
}
