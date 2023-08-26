import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontFamily: {
                paytone: ['var(--font-paytone)'],
            },
        },
        colors: {
            dirt: {
                100: '#eac696',
                200: '#765827',
                300: '#765827',
                400: '#65451f',
                default: '#eac696',
                light: '#eac696',
                dark: '#eac696',
            },
            bamboo: {
                100: '#eae7b1',
                200: '#a6bb8d',
                300: '#61876e',
                400: '#3c6255',
                default: '#3c6255',
                light: '#3c6255',
                dark: '#3c6255',
            },
        },
    },
    plugins: [],
}
export default config
