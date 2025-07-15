/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de colores de Alan Nico Seguros
        primary: {
          50: '#f0f2ff',
          100: '#e8ebff',
          500: '#232D58', // Azul medio principal
          600: '#1e2749',
          700: '#171932', // Azul oscuro
          900: '#0f1220',
        },
        secondary: {
          50: '#f0fbff',
          100: '#e0f7ff',
          500: '#009FDD', // Celeste principal
          600: '#0080b3',
          700: '#006699',
        },
        accent: {
          50: '#f8f8f8',
          500: '#1d1d1b', // Negro
          600: '#171717',
          900: '#0a0a0a',
        },
        background: '#FFFFFF', // Fondo blanco
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
