import type { Config } from "tailwindcss"

const config: Config = {
    darkMode: "class",
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
        './@/**/*.{ts,tsx}'
    ],
}

export default config