import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

const whatsappUrl = 'https://wa.me/919371636194?text=Hi%2C%20I%27m%20interested%20in%20Aiplonex%27s%20services.%20Please%20tell%20me%20more.';

export default function WhatsAppButton() {
    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Aiplonex on WhatsApp"
            title="Chat with Aiplonex on WhatsApp"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-green-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400"
        >
            <MessageCircle size={29} strokeWidth={2.3} />
            <Phone size={12} strokeWidth={3} className="absolute" />
            <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#25D366]" aria-hidden="true" />
        </motion.a>
    );
}
