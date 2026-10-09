/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // We will refine these later based on the design tokens
                brand: {
                    dark: '#0A0A0B', // Dark background
                    gray: '#18181B', // Card background
                    accent: '#7C3AED', // Primary purple/violet
                    glow: '#A78BFA', // Lighter glow
                }
            },
            fontFamily: {
                sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
